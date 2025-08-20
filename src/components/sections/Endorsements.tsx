import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight } from 'lucide-react';

interface Endorsement {
  company: string;
  logo: string;
  person: string;
  role: string;
  testimonial: string;
  link: string;
}

interface EndorsementsProps {
  endorsements: Endorsement[];
}

const Endorsements: React.FC<EndorsementsProps> = ({ endorsements }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.endorsement-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-stagger');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-bg-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-fg-primary mb-4">
            Endorsements from our clients ✅
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
            Trusted by leading waste management companies across Latvia and Europe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {endorsements.map((endorsement, index) => (
            <Card 
              key={index}
              className="endorsement-card hover-lift bg-card border-border-subtle relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-brand-tint">
                <Quote className="h-8 w-8" fill="currentColor" />
              </div>
              
              <CardContent className="p-6">
                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 bg-bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-brand-primary font-semibold text-sm">
                    {endorsement.company.split(' ').map(word => word[0]).join('').substring(0, 2)}
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-fg-secondary mb-6 leading-relaxed">
                  "{endorsement.testimonial}"
                </blockquote>

                {/* Author */}
                <div className="mb-4">
                  <div className="font-semibold text-fg-primary">
                    {endorsement.person}
                  </div>
                  <div className="text-sm text-fg-muted">
                    {endorsement.role}
                  </div>
                  <div className="text-sm text-brand-primary font-medium mt-1">
                    {endorsement.company}
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hover-lift focus-ring w-full"
                >
                  Read more
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endorsements;