import HeroSection from '../HeroSection';
import heroImage from '@assets/stock_images/diverse_team_collabo_c50d481e.jpg';

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Transforming Lives with Exceptional BPO Services"
      subtitle="At Afri-Rise BPO, we focus on providing innovative business process outsourcing solutions that uplift communities and foster economic growth."
      ctaText="Get Started"
      ctaLink="/contact"
      backgroundImage={heroImage}
    />
  );
}
