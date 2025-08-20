import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  text: string;
  button: {
    label: string;
    action: string;
  };
}

const CTA: React.FC<CTAProps> = ({ text, button }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textEl = entry.target.querySelector('.cta-text');
            const buttonEl = entry.target.querySelector('.cta-button');
            
            setTimeout(() => {
              textEl?.classList.add('animate-slide-up');
            }, 200);
            
            setTimeout(() => {
              buttonEl?.classList.add('animate-scale-in');
            }, 600);
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

  const FloatingParticle = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
    <div 
      className={`absolute ${position} ${size} bg-white/20 rounded-full blur-sm floating opacity-30`}
      style={{ animationDelay: `${delay}s` }}
    />
  );

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-cta relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Parallax gradients */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-primary-strong/20"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        
        {/* Floating particles */}
        <FloatingParticle delay={0} size="w-3 h-3" position="top-20 left-20" />
        <FloatingParticle delay={2} size="w-2 h-2" position="top-32 right-32" />
        <FloatingParticle delay={4} size="w-4 h-4" position="bottom-24 left-1/4" />
        <FloatingParticle delay={1} size="w-2 h-2" position="bottom-32 right-20" />
        <FloatingParticle delay={3} size="w-3 h-3" position="top-40 left-1/2" />
        
        {/* Large background orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-3of4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main text */}
          <h2 className="cta-text opacity-0 text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
            {text}
          </h2>

          {/* CTA Button */}
          <div className="cta-button opacity-0">
            <Button 
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 hover:text-brand-primary-strong transition-all duration-300 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg font-semibold hover:scale-105 group"
            >
              {button.label}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Secondary text */}
          <p className="mt-6 text-white/80 text-lg animate-fade-in" style={{ animationDelay: '1000ms' }}>
            Ready to transform your waste management approach?
          </p>
        </div>
      </div>

      {/* Simple divider line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/30"></div>
    </section>
  );
};

export default CTA;