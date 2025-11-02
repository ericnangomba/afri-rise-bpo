import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
  height?: 'full' | 'large' | 'medium';
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  height = 'full',
}: HeroSectionProps) {
  const heightClass = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]',
  }[height];

  return (
    <div className={`relative ${heightClass} flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        {ctaText && (
          <Button
            size="lg"
            variant="default"
            className="backdrop-blur-md"
            onClick={() => ctaLink && (window.location.href = ctaLink)}
            data-testid="button-hero-cta"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
