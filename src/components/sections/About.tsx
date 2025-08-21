import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Leaf, Globe, Award } from 'lucide-react';

interface AboutProps {
  text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElements = entry.target.querySelectorAll('.animate-left');
            const rightElements = entry.target.querySelectorAll('.animate-right');
            
            leftElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-in-left');
              }, index * 200);
            });
            
            rightElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-in-right');
              }, index * 200 + 300);
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

  const features = [
    { icon: <Leaf className="h-5 w-5" />, text: "Eco-friendly solutions" },
    { icon: <Globe className="h-5 w-5" />, text: "Latvia & Europe coverage" },
    { icon: <Award className="h-5 w-5" />, text: "EU compliant technologies" },
    { icon: <Check className="h-5 w-5" />, text: "Cost-efficient services" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-bg-default relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-tint rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-3of4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="animate-left opacity-0">
            <div className="relative">
              {/* Main image placeholder with environmental theme */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-tint via-white to-brand-tint/50 p-8 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl flex items-center justify-center relative overflow-hidden" style={{backgroundImage: 'url(/lovable-uploads/d81a5f15-b1e3-4677-93eb-a1dcc3d6e0f3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                  {/* Environmental icons floating */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center floating">
                      <Leaf className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-brand-primary/15 rounded-full flex items-center justify-center floating-delayed">
                      <Globe className="h-8 w-8 text-brand-primary" />
                    </div>
                    <div className="absolute bottom-6 left-8 w-10 h-10 bg-brand-primary/25 rounded-full flex items-center justify-center floating">
                      <Award className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-brand-primary/10">
                <div className="text-2xl font-bold text-brand-primary">10+</div>
                <div className="text-sm text-fg-muted">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-right opacity-0">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-fg-primary mb-6 leading-tight">
                About RSGA
              </h2>
              
              <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
                {text}
              </p>

              {/* Feature checklist */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-right opacity-0"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="w-8 h-8 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-brand-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-fg-secondary font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group animate-right opacity-0"
                style={{ animationDelay: '1000ms' }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-slide-in-left {
            animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .animate-slide-in-right {
            animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `
      }} />
    </section>
  );
};

export default About;