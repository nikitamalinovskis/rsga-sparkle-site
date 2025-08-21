import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Shield, CheckCircle, TrendingDown, Leaf } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const AlternativeDailyCoverSolutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              <Link to="/en/blog" className="inline-flex items-center text-brand-primary hover:text-brand-primary-strong transition-colors mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-brand-primary text-white">Landfill Management</Badge>
                <div className="flex items-center text-fg-muted space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RSGA Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6 leading-tight">
                Alternative Daily Cover: Modern Solutions for Landfill Management
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Discover how alternative daily cover systems are revolutionizing landfill operations by reducing costs, improving efficiency, and ensuring EU compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="Alternative Daily Cover Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-brand-tint rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-brand-primary" />
                    <h2 className="text-2xl font-semibold text-fg-primary mb-0">What is Alternative Daily Cover?</h2>
                  </div>
                  <p className="text-fg-secondary mb-0">
                    Alternative Daily Cover (ADC) is a modern solution that replaces traditional soil cover on landfills. Instead of using valuable soil resources, ADC systems use innovative materials and technologies to meet regulatory requirements while providing superior environmental and economic benefits.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">The Traditional Challenge</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Traditional landfill operations require daily covering of waste with soil to control odors, prevent litter, and deter pests. This approach presents several challenges:
                </p>
                
                <ul className="space-y-3 mb-8 text-fg-secondary">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>High material costs for importing clean soil</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Reduced landfill capacity due to soil volume</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Environmental impact from soil extraction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Weather-dependent operations</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">RSГА's Alternative Solutions</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Our alternative daily cover systems provide innovative solutions that address these challenges while maintaining full EU compliance and environmental standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingDown className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Cost Reduction</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Eliminate soil purchase and transportation costs. Reduce equipment wear and operational expenses by up to 40%.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Leaf className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Environmental Benefits</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Preserve natural soil resources. Reduce carbon footprint from transportation and extend landfill lifespan.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">EU Compliance</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Meet all European waste management directives. Approved materials and methods for regulatory compliance.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Superior Performance</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Better odor control, pest prevention, and weather resistance compared to traditional soil cover.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Implementation Process</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  RSGA provides complete implementation support, from regulatory approval to ongoing operations:
                </p>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Assessment & Planning</h4>
                      <p className="text-fg-secondary text-sm">Site evaluation and customized solution design based on your specific requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Regulatory Approval</h4>
                      <p className="text-fg-secondary text-sm">Complete documentation and permit assistance for EU compliance approval.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Installation & Training</h4>
                      <p className="text-fg-secondary text-sm">Professional installation and comprehensive staff training for optimal operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Ongoing Support</h4>
                      <p className="text-fg-secondary text-sm">Continuous monitoring, maintenance, and technical support to ensure optimal performance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-cta rounded-xl p-8 text-center text-white mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Ready to Modernize Your Landfill Operations?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Contact RSGA today to learn how alternative daily cover can reduce your costs and environmental impact.
                  </p>
                  <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90">
                    <Link to="/en/contacts" className="flex items-center">
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default AlternativeDailyCoverSolutions;