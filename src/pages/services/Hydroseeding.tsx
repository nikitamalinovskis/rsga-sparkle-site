import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Droplets, Clock, TrendingDown, Leaf, Mountain } from 'lucide-react';
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
    icon: Clock,
    title: "Ātra rezultātu sasniegšana",
    description: "Veģetācijas redzamība 7-14 dienu laikā"
  },
  {
    icon: TrendingDown,
    title: "Izmaksu efektivitāte",
    description: "Līdz 60% lētāk nekā tradicionālās metodes"
  },
  {
    icon: Droplets,
    title: "Efektīva erozijas kontrole",
    description: "Tūlītēja augsnes aizsardzība pret eroziju"
  },
  {
    icon: Leaf,
    title: "Videi draudzīgs",
    description: "Izmanto dabīgus materiālus un bionoārdāmus komponentus"
  }
];

const applications = [
  "Nogāžu stabilizācija un erozijas kontrole",
  "Atkritumu izgāztuvu apzaļumošana",  
  "Karjeru un būvlaukumu rekultivācija",
  "Ceļu nogāžu un dambju nostiprināšana",
  "Sporta laukumu un parku ierīkošana",
  "Industriālo teritoriju ainavu veidošana"
];

const processSteps = [
  {
    number: 1,
    title: "Teritorijas sagatavošana",
    description: "Augsnes analīze un virsmas sagatavošana"
  },
  {
    number: 2,
    title: "Maisījuma sagatavošana", 
    description: "Sēklu, mēslojuma un stabilizatoru sajaukšana"
  },
  {
    number: 3,
    title: "Hidrosēšanas process",
    description: "Vienmērīga maisījuma uzklāšana ar speciālo aprīkojumu"
  },
  {
    number: 4,
    title: "Uzraudzība un aprūpe",
    description: "Rezultātu monitorēšana un nepieciešamā aprūpe"
  }
];

const Hydroseeding = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Hidrosēšanas pakalpojumi | Nogāžu un poligonu apzaļumošana"
        description="Efektīva un ātra metode erozijas kontrolei un veģetācijas atjaunošanai uz nogāzēm, poligoniem un būvlaukumiem."
        canonical="https://rsga.lv/services/hydroseeding"
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
              <span className="text-fg-primary">Hidrosēšana</span>
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
                  Hidrosēšanas pakalpojumi
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Ātra, izmaksu efektīva erozijas kontrole un veģetācijas veidošana nogāzēm un teritorijām. 
                  Ideāli piemērots erozijas kontrolei un apzaļumošanai.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Pieprasīt aprēķinu</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
                  alt="Hidrosēšanas process"
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
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Hidrosēšanas priekšrocības</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Kāpēc hidrosēšana ir labākā izvēle jūsu projektam
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
            <h2 className="text-3xl font-bold text-fg-primary text-center mb-12">Pielietojuma jomas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0" />
                  <span className="text-fg-secondary font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Hidrosēšanas process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Profesionāla pieeja, kas nodrošina labākos rezultātus
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
                Vajadzīga hidrosēšana jūsu projektam?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar mūsu ekspertiem bezmaksas konsultācijai un individuāla risinājuma izstrādei.
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

export default Hydroseeding;