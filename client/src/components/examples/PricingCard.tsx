import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="p-8">
      <PricingCard
        name="Premium Plan"
        price={99}
        features={[
          'Comprehensive Training',
          'Access to our training programs',
          'Dedicated Account Manager',
          '24/7 Support',
          'Customized Solutions',
        ]}
        featured={true}
      />
    </div>
  );
}
