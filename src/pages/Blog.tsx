import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Shield, Droplets, Leaf, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const blogPosts = [
  {
    id: 'alternative-daily-cover-solutions',
    title: 'Alternatīvs ikdienas segums: mūsdienu risinājumi atkritumu izgāztuves pārvaldībai',
    excerpt: 'Uzziniet, kā alternatīvie ikdienas seguma sistēmas revolucionē atkritumu izgāztuves darbību, samazinot izmaksas, uzlabojot efektivitāti un nodrošinot ES atbilstību.',
    author: 'RSGA komanda',
    date: '2024-01-15',
    category: 'Atkritumu apsaimniekošana',
    readTime: '5 min lasīšana',
    image: '/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png',
    icon: <Shield className="h-5 w-5" />,
    slug: '/blog/alternative-daily-cover-solutions'
  },
  {
    id: 'hydroseeding-vs-traditional-seeding',
    title: 'Hidrosēkla pret tradicionālo sēklu: izmaksu efektīva erozijas kontrole',
    excerpt: 'Salīdziniet hidrosēklas paņēmienus ar tradicionālajām sēklas metodēm nogāžu stabilizācijai un erozijas kontrolei būvniecības un vides projektos.',
    author: 'RSGA komanda',
    date: '2024-01-20',
    category: 'Erozijas kontrole',
    readTime: '4 min lasīšana',
    image: '/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png',
    icon: <Droplets className="h-5 w-5" />,
    slug: '/blog/hydroseeding-vs-traditional-seeding'
  },
  {
    id: 'sustainable-waste-management-compliance',
    title: 'Ilgtspējīga atkritumu apsaimniekošana: ES atbilstība un labākās prakses',
    excerpt: 'Navigējiet ES vides regulējumos un ieviešiet ilgtspējīgas atkritumu apsaimniekošanas prakses, kas nāk par labu gan jūsu biznesam, gan videi.',
    author: 'RSGA komanda',  
    date: '2024-01-25',
    category: 'Vides tehnoloģijas',
    readTime: '6 min lasīšana',
    image: '/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png',
    icon: <Leaf className="h-5 w-5" />,
    slug: '/blog/sustainable-waste-management-compliance'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="RSGA Blogs | Atkritumu apsaimniekošanas raksti un tendences"
        description="Raksti par ilgtspējību, inovācijām un atkritumu apsaimniekošanas nozares aktualitātēm."
        canonical="https://rsga.lv/blog"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-fg-muted mb-8">
              <Link to="/" className="hover:text-brand-primary transition-colors">
                🏠
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-fg-secondary">Blogs</span>
            </nav>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Ieskati un jaunumi
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Praktiski padomi par atkritumu izgāztuves pārvaldību, erozijas kontroli un ilgtspējīgu darbību.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="card-premium group cursor-pointer">
                  <Link to={post.slug}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-brand-tint text-brand-primary">
                          {post.category}
                        </Badge>
                        <div className="text-brand-primary">
                          {post.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-fg-primary group-hover:text-brand-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-fg-secondary mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-fg-muted mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('lv-LV', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                        </div>
                        <span className="text-brand-primary font-medium">{post.readTime}</span>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-brand-primary hover:text-brand-primary-strong group w-full justify-start">
                        Lasīt rakstu
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Blog;