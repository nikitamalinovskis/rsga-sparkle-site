import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Globe, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const stats = [
  { icon: Users, label: "Pieredzes gadi", value: "10+", description: "lielos objektos" },
  { icon: Award, label: "Klientu apmierinātība", value: "95%+", description: "apmierinātības līmenis" },
  { icon: Globe, label: "Pārklājums", value: "Latvija un Eiropa", description: "darbības zona" },
  { icon: CheckCircle, label: "Projekti", value: "1000+", description: "tonnu apstrādāts" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Par RSGA | Atkritumu apsaimniekošanas eksperti"
        description="Uzziniet vairāk par RSGA misiju, darbības teritorijām un profesionālo komandu."
        canonical="https://rsga.lv/about"
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
              <span className="text-fg-secondary">Par mums</span>
            </nav>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Par RSGA
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Uzlabojam vides ilgtspējību ar inovatīviem, praksē pārbaudītiem risinājumiem.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Mūsu misija</h2>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  Uzlabojam vides ilgtspējību ar inovatīviem, praksē pārbaudītiem risinājumiem.
                </p>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  <strong>Ko mēs darām:</strong> Atkritumu nozares pakalpojumi izgāztuvēm un būvlaukumiem visā Latvijā un Eiropā.
                </p>
                <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
                  <strong>Kāpēc RSGA:</strong> Darbības pieredze, izmērāmi ietaupījumi, atbilstības fokusēta pieeja.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/services">Mūsu pakalpojumi</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="RSGA vides risinājumi"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Mūsu ietekme</h2>
              <p className="text-lg text-fg-secondary">
                Mums uzticas vadošās organizācijas visā Latvijā un Eiropā
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-fg-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-fg-secondary mb-1">{stat.label}</div>
                    <div className="text-xs text-fg-muted">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Kāpēc izvēlēties RSGA</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsu apņemšanās inovāciju, ilgtspējības un izcilības jomā mūs atšķir vides risinājumu industrijā.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Pierādīta pieredze</h3>
                <p className="text-fg-secondary">
                  Vairāk nekā 10 gadu darbības pieredze lielos izgāztuves un būvlaukumu objektos.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Izmērāmi rezultāti</h3>
                <p className="text-fg-secondary">
                  Nodrošinām izmaksu ietaupījumus un vides uzlabojumus ar kvantificējamiem rezultātiem.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">ES atbilstība</h3>
                <p className="text-fg-secondary">
                  Visi risinājumi ir izstrādāti ar atbilstības fokusētu pieeju un ES standartu saskaņošanu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default About;