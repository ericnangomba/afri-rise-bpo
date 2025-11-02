import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Customer Support Solutions',
    'Healthcare Recruitment',
    'Training & Development',
    'Ethical Staffing Solutions',
    'Technology Integration',
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4" data-testid="text-footer-logo">
              Afri-Rise BPO
            </h3>
            <p className="text-muted-foreground mb-4">
              Discover our mission to empower youth and individuals with disabilities through
              innovative BPO solutions, based in Cape Town, South Africa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-services-heading">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <a className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-quick-links-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-reach-out-heading">Reach Out</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-address">
                  8 Devon Rd, Oostersee 7500<br />Cape Town, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@domain.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  contact@domain.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0820447004"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  0820447004
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Afri-Rise BPO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
