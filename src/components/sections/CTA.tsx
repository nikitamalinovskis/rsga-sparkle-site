import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  text: string;
  button: {
    label: string;
    action: string;
  };
}

const CTA: React.FC<CTAProps> = ({ text, button }) => {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-fg-primary mb-8 leading-tight">
            {text}
          </h2>
          
          <Button 
            size="lg" 
            className="hover-lift focus-ring px-8 py-4 text-lg"
          >
            {button.label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;