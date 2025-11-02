import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import {
  Headphones,
  Heart,
  GraduationCap,
  Users,
  Cpu,
  Shield,
  Languages,
  Settings,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

import heroImage from '@assets/stock_images/business_training_wo_aa61d381.jpg';
import customerSupportImage from '@assets/stock_images/customer_support_cal_0a497586.jpg';
import healthcareImage from '@assets/stock_images/healthcare_professio_68e3a05f.jpg';
import trainingImage from '@assets/stock_images/community_empowermen_c25c8a35.jpg';
import technologyImage from '@assets/stock_images/technology_integrati_a8dfeb62.jpg';
import inclusiveImage from '@assets/stock_images/inclusive_workplace__c8c8031d.jpg';

export default function Services() {
  const detailedServices = [
    {
      icon: Headphones,
      title: 'Customer Support Solutions',
      description:
        'We provide top-notch customer support solutions to ensure exceptional interactions with your clientele, enhancing their overall experience.',
      image: customerSupportImage,
      benefits: [
        '24/7 customer support availability',
        'Multi-channel support (phone, email, chat)',
        'Trained and empathetic support staff',
        'Performance metrics and reporting',
      ],
    },
    {
      icon: Heart,
      title: 'Healthcare Recruitment',
      description:
        'We specialize in healthcare staffing solutions, connecting qualified professionals with institutions to enhance service delivery across the medical sector.',
      image: healthcareImage,
      benefits: [
        'Extensive network of healthcare professionals',
        'Rigorous vetting and credentialing process',
        'Specialized in various medical fields',
        'Quick placement and onboarding',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description:
        'Our comprehensive training programs equip individuals with the necessary skills in various business functions to ensure high performance.',
      image: trainingImage,
      benefits: [
        'Customized training curricula',
        'Soft skills and technical training',
        'Focus on employability and career growth',
        'Ongoing support and mentorship',
      ],
    },
    {
      icon: Users,
      title: 'Ethical Staffing Solutions',
      description:
        'We focus on ethical global staffing solutions, targeting employment opportunities for the unemployed youth and individuals with disabilities.',
      image: inclusiveImage,
      benefits: [
        'Inclusive hiring practices',
        'Focus on diversity and accessibility',
        'Comprehensive candidate support',
        'Long-term employment partnerships',
      ],
    },
    {
      icon: Cpu,
      title: 'Technology Integration',
      description:
        'Leveraging state-of-the-art technology, we improve operational efficiency and ensure your BPO services are fully optimized.',
      image: technologyImage,
      benefits: [
        'Modern CRM and automation tools',
        'Cloud-based infrastructure',
        'Data security and compliance',
        'Scalable technology solutions',
      ],
    },
    {
      icon: BarChart3,
      title: 'Performance Management',
      description:
        'Implementing metrics and strategies to continually enhance service delivery and operational effectiveness.',
      image: trainingImage,
      benefits: [
        'Real-time performance dashboards',
        'KPI tracking and analysis',
        'Continuous improvement initiatives',
        'Quality assurance programs',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Positive Work Environment',
      description:
        'We strive to create an inclusive and supportive atmosphere that fosters personal and professional growth.',
    },
    {
      icon: Languages,
      title: 'Multilingual Services',
      description:
        'Our team offers services in English and local languages, facilitating effective communication with diverse customer bases.',
    },
    {
      icon: Settings,
      title: 'Tailored Solutions',
      description:
        'We work closely with clients to develop bespoke BPO solutions that align with their unique business objectives.',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive BPO solutions designed to empower communities and drive business excellence"
        backgroundImage={heroImage}
        height="medium"
      />

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-core-services">
              Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of BPO services tailored to meet your business needs
              while making a positive impact on our community.
            </p>
          </div>

          <div className="space-y-20">
            {detailedServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid={`text-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-additional-services">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let us help you build a better business while making a positive impact on the community
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => (window.location.href = '/contact')}
            data-testid="button-services-cta"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
