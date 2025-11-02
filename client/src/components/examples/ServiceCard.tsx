import ServiceCard from '../ServiceCard';
import { Headphones } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        icon={Headphones}
        title="Customer Support Solutions"
        description="We provide top-notch customer support solutions to ensure exceptional interactions with your clientele."
      />
    </div>
  );
}
