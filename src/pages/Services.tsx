import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Droplets, Wind, Truck, Pickaxe, TrendingUp } from 'lucide-react';
import SEO from '@/components/SEO';

const servicesData = [
  {
    id: "alternative-cover",
    title: "Alternatīvs ikdienas un ilgtermiņa segums",
    description: "Mūsdienīga augsnes seguma aizstāšana, kas samazina izmaksas un loģistiku, atbilst ES prasībām.",
    image: "/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png",
    link: "/services/alternative-cover"
  },
  {
    id: "hydroseeding",
    title: "Hidrosēkla",
    description: "Ātra, izmaksu efektīva erozijas kontrole un veģetācijas veidošana nogāzēm un platībām.",
    image: "/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png",
    link: "/services/hydroseeding"
  },
  {
    id: "industrial-deodorant-dust",
    title: "Rūpnieciskais dezodorants un putekļu apkarošana",
    description: "Smakņu mazināšana un putekļu nomākšana atkritumu izgāztuvēs, ceļos un rūpniecības teritorijās.",
    image: "/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png",
    link: "/services/industrial-deodorant-dust"
  },
  {
    id: "sale-of-sand",
    title: "Smilts pārdošana",
    description: "Uzticams piegādes avots būvniecības un rūpniecības vajadzībām.",
    image: "/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png",
    link: "/services/sale-of-sand"
  },
  {
    id: "earthworks",
    title: "Zemes darbi",
    description: "Izrakšana, izlīdzināšana, vietas sagatavošana infrastruktūrai un būvniecībai.",
    image: "/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png",
    link: "/services/earthworks"
  },
  {
    id: "planning-business-development",
    title: "Plānošana un biznesa attīstība",
    description: "Konsultācijas ilgtspējīgai atkritumu izgāztuves pārvaldībai, atbilstībai un izaugsmei.",
    image: "/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png",
    link: "/services/planning-business-development"
  }
];

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const getServiceIcon = (id: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'alternative-cover': <Shield className="h-6 w-6 text-brand-primary" />,
    'hydroseeding': <Droplets className="h-6 w-6 text-brand-primary" />,
    'industrial-deodorant-dust': <Wind className="h-6 w-6 text-brand-primary" />,
    'sale-of-sand': <Truck className="h-6 w-6 text-brand-primary" />,
    'earthworks': <Pickaxe className="h-6 w-6 text-brand-primary" />,
    'planning-business-development': <TrendingUp className="h-6 w-6 text-brand-primary" />
  };
  return iconMap[id] || <Shield className="h-6 w-6 text-brand-primary" />;
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Atkritumu apsaimniekošanas pakalpojumi | Poligoni, Hidrosēšana, Konsultācijas"
        description="Pilns RSGA pakalpojumu klāsts: poligonu pārklājumi, industriālie dezodoranti, hidrosēšana, smilts piegāde, zemes darbi un uzņēmējdarbības konsultācijas."
        canonical="https://rsga.lv/services"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Pakalpojumi
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Visaptveroši vides risinājumi ilgtspējīgai atkritumu apsaimniekošanai.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Card key={service.id} className="card-premium group cursor-pointer">
                  <Link to={service.link}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="p-3 bg-brand-tint rounded-xl group-hover:scale-110 transition-transform duration-300">
                          {getServiceIcon(service.id)}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-fg-primary group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-fg-secondary mb-4">
                        {service.description}
                      </CardDescription>
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-brand-primary hover:text-brand-primary-strong group">
                        Uzzināt vairāk
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

export default Services;