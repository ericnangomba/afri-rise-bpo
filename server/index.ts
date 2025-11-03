import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import serverlessHttp from "serverless-http";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// registerRoutes returns an http.Server which we use to start the app in
// development mode. In production the app is exposed as a serverless
// handler and serving static files from the build output.
// We'll start the HTTP server only in non-production environments.

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
});

// If we're running in production, serve the built client from disk.
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// Start a local HTTP server in development so Vite's middleware can attach
// to it and HMR works. We still export the serverless handler for
// deployment environments (e.g. Netlify).
(async () => {
  try {
    const httpServer = await registerRoutes(app);

    if (process.env.NODE_ENV !== "production") {
      // attach Vite middleware and start listening
      await setupVite(app, httpServer as unknown as import("http").Server);
      const port = Number(process.env.PORT ?? 3000);
      httpServer.listen(port, () => {
        log(`Listening on http://localhost:${port}`);
      });
    }
  } catch (e) {
    console.error("Failed to start server:", e);
    process.exit(1);
  }
})();

export const handler = serverlessHttp(app);
