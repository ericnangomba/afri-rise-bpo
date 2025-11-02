import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  featured?: boolean;
}

export default function PricingCard({ name, price, features, featured = false }: PricingCardProps) {
  return (
    <Card
      className={`hover-elevate transition-all duration-300 ${featured ? 'scale-105 border-primary' : ''}`}
      data-testid={`card-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl" data-testid={`text-pricing-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</CardTitle>
        <CardDescription>
          <span className="text-4xl font-bold text-foreground" data-testid={`text-pricing-price-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            R{price}
          </span>
          <span className="text-muted-foreground"> / Month</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={featured ? 'default' : 'outline'}
          className="w-full"
          data-testid={`button-choose-plan-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Choose a Plan
        </Button>
      </CardContent>
    </Card>
  );
}
