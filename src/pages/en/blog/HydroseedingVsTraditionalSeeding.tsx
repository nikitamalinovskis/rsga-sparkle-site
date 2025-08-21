import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Droplets, Sprout, DollarSign, Timer, CheckCircle, X } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const HydroseedingVsTraditionalSeeding = () => {
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
                <Badge className="bg-brand-primary text-white">Erosion Control</Badge>
                <div className="flex items-center text-fg-muted space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RSGA Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 20, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6 leading-tight">
                Hydroseeding vs Traditional Seeding: Cost-Effective Erosion Control
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Compare hydroseeding techniques with traditional seeding methods for slope stabilization and erosion control in construction and environmental projects.
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
                  src="/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
                  alt="Hydroseeding vs Traditional Seeding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-brand-tint rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Droplets className="h-6 w-6 text-brand-primary" />
                    <h2 className="text-2xl font-semibold text-fg-primary mb-0">Understanding Hydroseeding</h2>
                  </div>
                  <p className="text-fg-secondary mb-0">
                    Hydroseeding is a planting process that uses a slurry of seed, mulch, fertilizer, and water to establish vegetation quickly and effectively. This method has become increasingly popular for erosion control and revegetation projects due to its efficiency and cost-effectiveness.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">The Comparison: Hydroseeding vs Traditional Seeding</h2>
                
                {/* Comparison Table */}
                <div className="overflow-x-auto mb-12">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-brand-primary text-white">
                        <th className="p-4 text-left font-semibold">Factor</th>
                        <th className="p-4 text-center font-semibold">Hydroseeding</th>
                        <th className="p-4 text-center font-semibold">Traditional Seeding</th>
                      </tr>
                    </thead>
                    <tbody className="text-fg-secondary">
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 font-medium">Installation Speed</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Fast (1-2 days)</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Timer className="h-4 w-4 text-orange-500" />
                            <span>Slow (3-7 days)</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-border-subtle bg-bg-subtle">
                        <td className="p-4 font-medium">Cost per m²</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span>€2-4</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <DollarSign className="h-4 w-4 text-red-500" />
                            <span>€5-8</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 font-medium">Steep Slopes</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Excellent</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Difficult</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-border-subtle bg-bg-subtle">
                        <td className="p-4 font-medium">Germination Rate</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Sprout className="h-4 w-4 text-green-600" />
                            <span>85-95%</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Sprout className="h-4 w-4 text-orange-500" />
                            <span>60-80%</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 font-medium">Weather Dependency</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Low</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span>High</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Erosion Control</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Immediate</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Timer className="h-4 w-4 text-orange-500" />
                            <span>Delayed</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Key Advantages of Hydroseeding</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Timer className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Rapid Results</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Visible germination within 5-7 days, full coverage in 3-4 weeks. Perfect for projects with tight deadlines.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Cost Effective</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Lower material and labor costs compared to traditional methods. Reduced need for reseeding.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Droplets className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Superior Coverage</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Even distribution of seeds, fertilizer, and mulch ensures uniform growth and better erosion control.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-brand-primary/10 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-fg-primary">Versatile Application</h3>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      Suitable for slopes up to 1:1 ratio, difficult terrain, and areas with poor soil conditions.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">Best Applications for Hydroseeding</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Hydroseeding is particularly effective for these project types:
                </p>
                
                <ul className="space-y-3 mb-8 text-fg-secondary">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Landfill slopes and caps</strong> - Steep angles and large areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Road embankments</strong> - Highway and railway erosion control</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Construction sites</strong> - Temporary and permanent stabilization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Mining rehabilitation</strong> - Quarry restoration and reclamation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Coastal protection</strong> - Dune stabilization and shoreline protection</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-fg-primary mb-6 mt-12">RSGA's Hydroseeding Process</h2>
                <p className="text-fg-secondary mb-6 leading-relaxed">
                  Our professional hydroseeding service includes complete site preparation, custom seed mixture selection, and ongoing monitoring to ensure optimal results.
                </p>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Site Analysis</h4>
                      <p className="text-fg-secondary text-sm">Soil testing, slope assessment, and environmental condition evaluation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Custom Mix Design</h4>
                      <p className="text-fg-secondary text-sm">Seed selection, fertilizer formulation, and mulch specification for your specific conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Professional Application</h4>
                      <p className="text-fg-secondary text-sm">Expert application using specialized equipment for uniform coverage and optimal results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-bg-subtle rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary mb-1">Follow-up Support</h4>
                      <p className="text-fg-secondary text-sm">Monitoring, maintenance recommendations, and additional treatments if needed.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-cta rounded-xl p-8 text-center text-white mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Need Effective Erosion Control?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Let RSGA's hydroseeding experts help you achieve fast, cost-effective vegetation establishment.
                  </p>
                  <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90">
                    <Link to="/en/contacts" className="flex items-center">
                      Schedule Site Assessment
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

export default HydroseedingVsTraditionalSeeding;