import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Leaf, Scale, FileCheck, AlertTriangle, CheckCircle, BookOpen, Globe } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const SustainableWasteManagementEuCompliance = () => {
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
                <Badge className="bg-brand-primary text-white">Environmental Technology</Badge>
                <div className="flex items-center text-fg-muted space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RSGA Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 25, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6 leading-tight">
                Sustainable Waste Management: EU Compliance and Best Practices
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Navigate EU environmental regulations and implement sustainable waste management practices that benefit both your business and the environment.
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
                  src="/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
                  alt="Sustainable Waste Management EU Compliance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-brand-tint rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Leaf className="h-6 w-6 text-brand-primary" />
                    <h2 className="text-2xl font-semibold text-fg-primary mb-0">The EU Green Deal and Circular Economy</h2>
                  </div>
                  <p className="text-fg-secondary mb-0">
                    The European Union's commitment to achieving climate neutrality by 2050 has fundamentally transformed waste management requirements. The EU Green Deal and Circular Economy Action Plan set ambitious targets that require businesses to rethink their approach to waste management and environmental responsibility.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Key EU Waste Management Directives</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Understanding and complying with EU environmental legislation is crucial for sustainable operations. Here are the essential directives that shape modern waste management:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileCheck className="h-6 w-6 text-brand-primary" />
                      <h3 className="text-lg font-semibold text-fg-primary">Waste Framework Directive</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed mb-3">
                      Establishes the waste hierarchy: prevention, reuse, recycling, recovery, and disposal as last resort.
                    </p>
                    <div className="text-xs text-fg-muted">Directive 2008/98/EC (amended 2018)</div>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Scale className="h-6 w-6 text-brand-primary" />
                      <h3 className="text-lg font-semibold text-fg-primary">Landfill Directive</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed mb-3">
                      Reduces landfill disposal, sets methane emission limits, and requires proper landfill management.
                    </p>
                    <div className="text-xs text-fg-muted">Directive 1999/31/EC (amended 2018)</div>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Globe className="h-6 w-6 text-brand-primary" />
                      <h3 className="text-lg font-semibold text-fg-primary">Industrial Emissions Directive</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed mb-3">
                      Controls emissions from industrial installations, including waste treatment facilities.
                    </p>
                    <div className="text-xs text-fg-muted">Directive 2010/75/EU</div>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <BookOpen className="h-6 w-6 text-brand-primary" />
                      <h3 className="text-lg font-semibold text-fg-primary">Environmental Liability Directive</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed mb-3">
                      Establishes liability for environmental damage and requires preventive and remedial actions.
                    </p>
                    <div className="text-xs text-fg-muted">Directive 2004/35/CE</div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Compliance Challenges and Solutions</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Common Compliance Challenges</h3>
                        <ul className="space-y-2 text-red-700 text-sm">
                          <li>• Complex and evolving regulatory requirements</li>
                          <li>• High costs of traditional waste treatment methods</li>
                          <li>• Limited landfill capacity and increasing restrictions</li>
                          <li>• Emissions monitoring and reporting requirements</li>
                          <li>• Liability risks and environmental damage costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">RSGA's Compliance Solutions</h3>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Alternative daily cover systems reduce landfill impact</li>
                          <li>• Hydroseeding for effective erosion control and remediation</li>
                          <li>• Industrial deodorants for odor and emission control</li>
                          <li>• Comprehensive planning and business development support</li>
                          <li>• Ongoing monitoring and regulatory compliance assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Sustainable Best Practices</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Implementing sustainable waste management practices not only ensures compliance but also provides significant economic and environmental benefits:
                </p>

                <div className="space-y-4 mb-12">
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Waste Prevention and Minimization</h4>
                      <p className="text-fg-secondary text-sm">Implement source reduction strategies to minimize waste generation at every stage of operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Circular Economy Integration</h4>
                      <p className="text-fg-secondary text-sm">Transform waste streams into valuable resources through innovative recycling and recovery processes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Environmental Impact Reduction</h4>
                      <p className="text-fg-secondary text-sm">Use alternative technologies and materials to minimize environmental footprint and emissions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Continuous Monitoring and Improvement</h4>
                      <p className="text-fg-secondary text-sm">Implement robust monitoring systems and regularly review performance against environmental targets.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Economic Benefits of Sustainable Practices</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Sustainable waste management is not just an environmental imperative—it's also a smart business strategy:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand-primary/10">
                    <div className="text-3xl font-bold text-brand-primary mb-2">40-60%</div>
                    <div className="text-sm text-fg-secondary">Cost reduction through alternative daily cover systems</div>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand-primary/10">
                    <div className="text-3xl font-bold text-brand-primary mb-2">25-35%</div>
                    <div className="text-sm text-fg-secondary">Extended landfill lifespan with proper management</div>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand-primary/10">
                    <div className="text-3xl font-bold text-brand-primary mb-2">€1M+</div>
                    <div className="text-sm text-fg-secondary">Potential liability cost avoidance through compliance</div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Future-Proofing Your Operations</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  The regulatory landscape continues to evolve, with stricter requirements and higher standards expected. Key trends to prepare for include:
                </p>
                
                <ul className="space-y-3 mb-8 text-fg-secondary">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Carbon neutrality targets</strong> - Net-zero emissions requirements by 2050</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Extended producer responsibility</strong> - Increased liability for waste generators</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Digital monitoring</strong> - Real-time emissions and waste tracking requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Stricter landfill restrictions</strong> - Further limitations on landfill disposal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Higher environmental standards</strong> - Elevated requirements for environmental protection</span>
                  </li>
                </ul>

                <div className="bg-gradient-cta rounded-xl p-8 text-center text-white mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Ready to Achieve EU Compliance?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Let RSGA help you navigate regulatory requirements and implement sustainable waste management solutions.
                  </p>
                  <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90">
                    <Link to="/en/contacts" className="flex items-center">
                      Get Compliance Assessment
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

export default SustainableWasteManagementEuCompliance;