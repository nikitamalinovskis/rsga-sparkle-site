import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ArrowRight } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Insights & Updates
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Practical notes on landfill management, erosion control, and sustainable operations.
              </p>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <Card className="p-12">
                <CardContent className="pt-6">
                  <FileText className="h-16 w-16 text-brand-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-semibold text-fg-primary mb-4">
                    Posts Coming Soon
                  </h2>
                  <p className="text-lg text-fg-secondary mb-8">
                    We're preparing valuable insights about environmental solutions, waste management best practices, and industry updates. Stay tuned for expert knowledge from our team.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                      <Link to="/en/contacts">
                        Get notified when we publish
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="text-sm text-fg-muted">
                      Or{' '}
                      <Link to="/en/services" className="text-brand-primary hover:underline">
                        explore our services
                      </Link>{' '}
                      in the meantime
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Topics Preview */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-fg-secondary">
                Topics we'll be covering in our upcoming blog posts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">
                    Landfill Management
                  </h3>
                  <p className="text-fg-secondary">
                    Best practices for sustainable landfill operations and compliance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">
                    Erosion Control
                  </h3>
                  <p className="text-fg-secondary">
                    Hydroseeding techniques and slope stabilization methods
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">
                    Environmental Technology
                  </h3>
                  <p className="text-fg-secondary">
                    Latest innovations in waste management and environmental protection
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Blog;