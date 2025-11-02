import TestimonialCard from '../TestimonialCard';
import avatar from '@assets/stock_images/professional_busines_d65b26cf.jpg';

export default function TestimonialCardExample() {
  return (
    <div className="p-8">
      <TestimonialCard
        quote="Afri-Rise BPO has transformed our approach to outsourcing. Their commitment to community upliftment is unparalleled."
        author="James Deo"
        role="CEO"
        company="Local Startup"
        avatarUrl={avatar}
      />
    </div>
  );
}
