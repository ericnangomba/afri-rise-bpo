import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-2" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <p className="text-sm text-muted-foreground" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>{description}</p>
      </CardContent>
    </Card>
  );
}
