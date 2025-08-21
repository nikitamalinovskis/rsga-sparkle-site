import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Leaf, TrendingDown, Shield, Zap, Globe, Home } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  "Samazināta materiālu apstrāde un transportēšana",
  "Ātrākas darbības un uzlabota efektivitāte", 
  "Atbilstība ES standartiem un regulām",
  "Izmaksu samazināšana līdz 40%",
  "Uzlabota vides drošība un ilgtspējība"
];

const useCases = [
  "Pašvaldību atkritumu izgāztuves",
  "Rūpniecības atkritumu objekti",
  "Pārkraušanas stacijas",
  "Būvniecības atkritumu vietas"
];

const processSteps = [
  {
    number: 1,
    title: "Objekta novērtējums",
    description: "Detalizēta teritorijas un vajadzību analīze"
  },
  {
    number: 2, 
    title: "Risinājuma izstrāde",
    description: "Pielāgots alternatīvā seguma plāns"
  },
  {
    number: 3,
    title: "Profesionāla ieviešana", 
    description: "Kvalitātīva ieviešana ar ekspertu komandu"
  },
  {
    number: 4,
    title: "Uzraudzība un atbalsts",
    description: "Pastāvīgs atbalsts un risinājuma optimizācija"
  }
];

const AlternativeCover = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Dienas un ilgtermiņa poligonu pārklājumi | Videi draudzīgs risinājums"
        description="Aizstājiet tradicionālo augsnes pārklājumu ar RSGA risinājumu. Samaziniet izmaksas, taupiet resursus, nodrošiniet ilgtspējību."
        canonical="https://rsga.lv/services/alternative-cover"
      />
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-6 bg-bg-subtle">
          <div className="container-3of4">
            <nav className="flex items-center space-x-2 text-sm text-fg-muted">
              <Link to="/" className="hover:text-brand-primary transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Sākumlapa
              </Link>
              <span>→</span>
              <Link to="/services" className="hover:text-brand-primary transition-colors">
                Pakalpojumi
              </Link>
              <span>→</span>
              <span className="text-fg-primary">Alternatīvā pārklāšana</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-brand-tint text-brand-primary mb-4">
                  Pamata pakalpojums
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6 leading-tight">
                  Alternatīvs ikdienas un ilgtermiņa segums
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Mūsdienu augsnes seguma aizstāšana, kas samazina izmaksas un loģistiku, 
                  atbilst ES prasībām un uzlabo vides ilgtspējību.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Saņemt piedāvājumu</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="Alternatīvs segums atkritumu izgāztuvē"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Galvenās priekšrocības</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Kāpēc izvēlēties RSGA alternatīvā seguma risinājumus
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center card-premium">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <p className="text-fg-secondary font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Pielietojuma jomas</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Ideāli piemērots dažādiem atkritumu apsaimniekošanas objektiem
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-brand-primary" />
                  </div>
                  <span className="text-lg font-medium text-fg-primary">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Ieviešanas process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Sistemātiska pieeja alternatīvā seguma ieviešanai
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{step.title}</h3>
                    <p className="text-fg-secondary text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Gatavi uzlabot sava objekta efektivitāti?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar RSGA ekspertiem bezmaksas konsultācijai un individuāla risinājuma izstrādei.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                <Link to="/contacts">Sazināties ar ekspertiem</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default AlternativeCover;