import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, TrendingUp, Target, Lightbulb, ArrowRight } from 'lucide-react';

import heroImage from '@assets/stock_images/diverse_team_collabo_c50d481e.jpg';
import communityImage from '@assets/stock_images/community_empowermen_c25c8a35.jpg';
import inclusiveImage from '@assets/stock_images/inclusive_workplace__c8c8031d.jpg';
import successImage from '@assets/stock_images/successful_team_proj_e42a500a.jpg';

export default function About() {
  const stats = [
    { number: '500+', label: 'Lives Impacted' },
    { number: '50+', label: 'Partner Organizations' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description:
        'We prioritize the wellbeing and development of our community members, ensuring every initiative creates lasting positive impact.',
    },
    {
      icon: Users,
      title: 'Inclusive Excellence',
      description:
        'We believe in creating opportunities for all, especially those who have been traditionally marginalized in the workforce.',
    },
    {
      icon: Award,
      title: 'Quality & Integrity',
      description:
        'We maintain the highest standards of service delivery while upholding ethical practices in all our operations.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description:
        'We invest in ongoing training and development to ensure our team members and clients achieve continuous improvement.',
    },
    {
      icon: Target,
      title: 'Client Success',
      description:
        'We measure our success by the success of our clients and the positive outcomes we deliver together.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace new technologies and methodologies to provide cutting-edge BPO solutions that drive results.',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Afri-Rise BPO"
        subtitle="Empowering communities through ethical business process outsourcing solutions in Southern Africa"
        backgroundImage={heroImage}
        height="medium"
      />

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-our-mission">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Afri-Rise BPO is dedicated to providing ethical and innovative business process
                outsourcing solutions, focusing on social responsibility and community upliftment in
                Southern Africa.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that business success and social impact go hand in hand. Our mission is to
                create sustainable employment opportunities for unemployed youth and individuals with
                disabilities while delivering exceptional BPO services to our clients.
              </p>
              <p className="text-lg text-muted-foreground">
                Through comprehensive training programs and supportive work environments, we empower
                individuals to build successful careers and contribute meaningfully to their
                communities.
              </p>
            </div>
            <div>
              <img
                src={communityImage}
                alt="Our Mission"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-our-impact">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-8 pb-8">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-our-values">
            Our Values
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="hover-elevate transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={inclusiveImage}
                alt="Inclusive Workplace"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-community-upliftment">
                Community Upliftment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At the heart of Afri-Rise BPO is our commitment to community upliftment. We
                prioritize creating opportunities for the unemployed and those living with
                disabilities, driving community growth and development.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our training initiatives focus on equipping individuals with essential soft skills
                necessary for success in the business world. We provide comprehensive support from
                initial training through job placement and career advancement.
              </p>
              <p className="text-lg text-muted-foreground">
                By partnering with us, clients not only receive exceptional BPO services but also
                contribute to meaningful social change in Southern Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-choose-us">
                Why Choose Afri-Rise BPO?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                When you partner with Afri-Rise BPO, you're choosing more than just a service
                provider. You're joining a movement dedicated to creating positive change while
                achieving business excellence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ethical Practices</h3>
                    <p className="text-muted-foreground">
                      We maintain the highest ethical standards in all our operations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Skilled Workforce</h3>
                    <p className="text-muted-foreground">
                      Our team receives comprehensive training and ongoing support
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Impact</h3>
                    <p className="text-muted-foreground">
                      Every partnership creates meaningful employment opportunities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of excellence in service delivery and client satisfaction
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={successImage}
                alt="Success Stories"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Partner with Afri-Rise BPO and be part of a transformative approach to business process
            outsourcing
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => (window.location.href = '/contact')}
            data-testid="button-about-cta"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
