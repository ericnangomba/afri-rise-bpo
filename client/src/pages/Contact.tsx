import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import heroImage from '@assets/stock_images/cape_town_south_afri_1dc0a7ba.jpg';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team to learn how we can help transform your business"
        backgroundImage={heroImage}
        height="medium"
      />

      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-send-message">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info">Contact Information</h3>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground text-sm" data-testid="text-contact-address">
                          8 Devon Rd, Oostersee 7500<br />
                          Cape Town, South Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a
                          href="tel:0820447004"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          data-testid="link-contact-phone"
                        >
                          0820447004
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:contact@domain.com"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          data-testid="link-contact-email"
                        >
                          contact@domain.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-visit-us">Visit Our Office</h2>
            <p className="text-muted-foreground mb-8">
              We're located in Cape Town, South Africa. Schedule a visit to learn more about our
              services and meet our team.
            </p>
            <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - 8 Devon Rd, Oostersee 7500, Cape Town</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
