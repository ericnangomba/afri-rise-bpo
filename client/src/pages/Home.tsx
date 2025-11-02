import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import ProjectCard from '@/components/ProjectCard';
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

import heroImage from '@assets/stock_images/diverse_team_collabo_c50d481e.jpg';
import communityImage from '@assets/stock_images/community_empowermen_c25c8a35.jpg';
import projectImage1 from '@assets/stock_images/customer_support_cal_0a497586.jpg';
import projectImage2 from '@assets/stock_images/healthcare_professio_68e3a05f.jpg';
import projectImage3 from '@assets/stock_images/technology_integrati_a8dfeb62.jpg';
import projectImage4 from '@assets/stock_images/inclusive_workplace__c8c8031d.jpg';
import avatar1 from '@assets/stock_images/professional_busines_d65b26cf.jpg';
import avatar2 from '@assets/stock_images/professional_busines_bd49e62c.jpg';
import avatar3 from '@assets/stock_images/professional_busines_209a3f44.jpg';

export default function Home() {
  const coreServices = [
    {
      icon: Headphones,
      title: 'Customer Support Solutions',
      description:
        'We provide top-notch customer support solutions to ensure exceptional interactions with your clientele, enhancing their overall experience.',
    },
    {
      icon: Heart,
      title: 'Healthcare Recruitment',
      description:
        'We specialize in healthcare staffing solutions, connecting qualified professionals with institutions to enhance service delivery across the medical sector.',
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description:
        'Our comprehensive training programs equip individuals with the necessary skills in various business functions to ensure high performance.',
    },
  ];

  const allServices = [
    {
      icon: Users,
      title: 'Ethical Staffing Solutions',
      description:
        'We focus on ethical global staffing solutions, targeting employment opportunities for the unemployed youth and individuals with disabilities.',
    },
    {
      icon: Cpu,
      title: 'Technology Integration',
      description:
        'Leveraging state-of-the-art technology, we improve operational efficiency and ensure your BPO services are fully optimized.',
    },
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
    {
      icon: BarChart3,
      title: 'Performance Management',
      description:
        'Implementing metrics and strategies to continually enhance service delivery and operational effectiveness.',
    },
  ];

  const projects = [
    {
      title: 'Retail Customer Support',
      description:
        'Tailored customer support strategy for a retail chain, increasing customer satisfaction scores.',
      image: projectImage1,
    },
    {
      title: 'Healthcare Staffing Excellence',
      description:
        'Connected qualified healthcare professionals with leading institutions across Southern Africa.',
      image: projectImage2,
    },
    {
      title: 'Multilingual Support System',
      description:
        'Developed a multilingual support system for a technology firm, enhancing user experience globally.',
      image: projectImage3,
    },
    {
      title: 'Empowerment Through Training',
      description:
        'Empowered disabled individuals through training workshops, leading to successful job placements.',
      image: projectImage4,
    },
  ];

  const testimonials = [
    {
      quote:
        "Afri-Rise BPO has transformed our approach to outsourcing. Their commitment to community upliftment is unparalleled.",
      author: 'James Deo',
      role: 'CEO',
      company: 'Local Startup',
      avatarUrl: avatar1,
    },
    {
      quote:
        'The training and support provided to our staff have genuinely made a difference in their lives, enhancing our service delivery significantly.',
      author: 'Jon Smith',
      role: 'HR Manager',
      company: 'Healthcare Provider',
      avatarUrl: avatar2,
    },
    {
      quote:
        "Working with Afri-Rise BPO has been a game-changer for us. Their professional and dedicated team understands our unique needs.",
      author: 'Mary Charoline',
      role: 'Operations Director',
      company: 'Retail Chain',
      avatarUrl: avatar3,
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: 79,
      features: [
        'Comprehensive Training',
        'Access to our training programs',
        'Dedicated Account Manager',
        '24/7 Support',
        'Customized Solutions',
      ],
    },
    {
      name: 'Premium Plan',
      price: 99,
      features: [
        'Comprehensive Training',
        'Access to our training programs',
        'Dedicated Account Manager',
        '24/7 Support',
        'Customized Solutions',
      ],
      featured: true,
    },
    {
      name: 'Elite Plan',
      price: 120,
      features: [
        'Comprehensive Training',
        'Access to our training programs',
        'Dedicated Account Manager',
        '24/7 Support',
        'Customized Solutions',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What services does Afri-Rise BPO offer?',
      answer:
        'We offer comprehensive BPO services including customer support solutions, healthcare recruitment, training & development, ethical staffing solutions, technology integration, and performance management.',
    },
    {
      question: 'How can I get involved with Afri-Rise BPO?',
      answer:
        'You can get involved by contacting us through our website, applying for open positions, or partnering with us for your BPO needs. We welcome individuals and organizations who share our vision of community upliftment.',
    },
    {
      question: 'What is the focus of your training programs?',
      answer:
        'Our training programs focus on equipping individuals with essential soft skills and technical competencies necessary for success in the business world, with special emphasis on supporting unemployed youth and individuals with disabilities.',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Transforming Lives with Exceptional BPO Services"
        subtitle="At Afri-Rise BPO, we focus on providing innovative business process outsourcing solutions that uplift communities and foster economic growth. Our services are specially designed for individuals living with disabilities and unemployed youth, ensuring they receive the training and support needed to thrive in the workforce."
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={communityImage}
                alt="Community Upliftment"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-who-we-are">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Afri-Rise BPO is dedicated to providing ethical and innovative business process
                outsourcing solutions, focusing on social responsibility and community upliftment in
                Southern Africa.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Community Upliftment
                  </h3>
                  <p className="text-muted-foreground">
                    We prioritize creating opportunities for the unemployed and those living with
                    disabilities, driving community growth and development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Skill Development Programs
                  </h3>
                  <p className="text-muted-foreground">
                    Our training initiatives focus on equipping individuals with essential soft skills
                    necessary for success in the business world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-our-services">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-projects">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Common inquiries regarding our services and mission, answered concisely for your
            convenience.
          </p>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-pricing-heading">
            Affordable Pricing Plans
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the plan that best fits your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-heading">
            What Our Clients Say
          </h2>
          <p className="text-center text-muted-foreground mb-12">Client Testimonials</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today to learn how Afri-Rise BPO can help your organization thrive
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => (window.location.href = '/contact')}
            data-testid="button-cta-contact"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
