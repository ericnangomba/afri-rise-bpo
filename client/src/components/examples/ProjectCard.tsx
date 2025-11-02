import ProjectCard from '../ProjectCard';
import projectImage from '@assets/stock_images/customer_support_cal_0a497586.jpg';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        title="Customer Support Excellence"
        description="Tailored customer support strategy for a retail chain, increasing customer satisfaction scores."
        image={projectImage}
      />
    </div>
  );
}
