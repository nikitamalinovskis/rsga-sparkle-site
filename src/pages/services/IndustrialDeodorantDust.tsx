import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Wind, Shield, Factory, MapPin, Zap, Leaf } from 'lucide-react';
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
  {
    icon: Wind,
    title: "Efektīva smaku kontrole",
    description: "Ievērojama smaku samazināšana rūpniecības objektos"
  },
  {
    icon: Shield,
    title: "Putekļu nomākšana",
    description: "Efektīva putekļu kontrole ceļos un būvlaukumos"
  },
  {
    icon: Leaf,
    title: "Videi draudzīgs",
    description: "Bionoārdāmi un drošie komponenti"
  },
  {
    icon: Zap,
    title: "Ātrdarbīgs",
    description: "Tūlītējs efekts pēc pielietošanas"
  }
];

const applications = [
  {
    icon: Factory,
    location: "Atkritumu izgāztuves",
    description: "Smaku kontrole un putekļu samazināšana"
  },
  {
    icon: MapPin,
    location: "Ceļi un automaģistrāles", 
    description: "Putekļu nomākšana sausajos periodos"
  },
  {
    icon: Factory,
    location: "Rūpniecības objekti",
    description: "Vides kvalitātes uzlabošana"
  },
  {
    icon: Shield,
    location: "Būvlaukumi",
    description: "Darba vides drošības nodrošināšana"
  }
];

const IndustrialDeodorantDust = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Industriālie dezodoranti un putekļu kontrole | Poligoni un ceļi"
        description="Risinājumi smaku samazināšanai un putekļu kontrolei poligonos, ceļos un industriālajās teritorijās."
        canonical="https://rsga.lv/services/industrial-deodorant-dust"
      />
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-6 bg-bg-subtle">
          <div className="container-3of4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-fg-muted hover:text-brand-primary transition-colors">Sākumlapa</Link>
              <span className="text-fg-muted">/</span>
              <Link to="/services" className="text-fg-muted hover:text-brand-primary transition-colors">Pakalpojumi</Link>
              <span className="text-fg-muted">/</span>
              <span className="text-fg-primary">Rūpnieciskais dezodorants</span>
            </div>
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
                  Rūpnieciskais dezodorants un putekļu apkarošana
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Specializēti risinājumi smaku samazināšanai un putekļu kontrolei atkritumu izgāztuvēs, 
                  ceļos un rūpniecības teritorijās.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Iegūt cenu piedāvājumu</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
                  alt="Rūpnieciskais dezodorants"
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
                Efektīvi risinājumi vides kvalitātes uzlabošanai
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{benefit.title}</h3>
                        <p className="text-fg-secondary">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Pielietojuma jomas</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Dažādi rūpniecības objekti, kuros mūsu risinājumi ir efektīvi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((application, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                        <application.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{application.location}</h3>
                        <p className="text-fg-secondary">{application.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Approach Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Tehniskā pieeja</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsdienīgas tehnoloģijas optimāliem rezultātiem
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-fg-primary mb-6">Zinātniski pamatota formula</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-fg-primary">Bioloģiska neitralizācija</h4>
                      <p className="text-fg-secondary">Smaku molekulu bioķīmiska sadalīšana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-fg-primary">Putekļu saistīšana</h4>
                      <p className="text-fg-secondary">Efektīva putekļu daļiņu saistīšana un nosēdināšana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-fg-primary">Ilgstošs efekts</h4>
                      <p className="text-fg-secondary">Produkta efekts saglabājas ilgākā laika periodā</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-tint/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-fg-primary mb-4">Pielietošanas metodes</h3>
                <ul className="space-y-3 text-fg-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Izsmidzināšana ar specializēto aprīkojumu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Manuāla uzklāšana lokālās teritorijās
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Automātiskās sistēmas nepārtrauktai kontrolei
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Mobilie risinājumi lielām teritorijām
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Vajadzīga smaku un putekļu kontrole?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar RSGA ekspertiem individuāla risinājuma izstrādei un efektīvai vides kvalitātes uzlabošanai.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                <Link to="/contacts">Saņemt konsultāciju</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default IndustrialDeodorantDust;