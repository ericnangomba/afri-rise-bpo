import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
}: TestimonialCardProps) {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-quote-${author.toLowerCase().replace(/\s+/g, '-')}`}>"{quote}"</p>
        <div className="flex items-center gap-4">
          <Avatar>
            {avatarUrl && <AvatarImage src={avatarUrl} alt={author} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold" data-testid={`text-testimonial-author-${author.toLowerCase().replace(/\s+/g, '-')}`}>{author}</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${author.toLowerCase().replace(/\s+/g, '-')}`}>
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
