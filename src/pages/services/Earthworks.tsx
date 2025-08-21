import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Pickaxe, Shield, Users, Truck, Building, Home } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const services = [
  {
    title: "Augsnes izrakšana",
    description: "Profesionāla augsnes izrakšana dažādām vajadzībām ar mūsdienīgu tehniku"
  },
  {
    title: "Tranšeju rakšana", 
    description: "Precīza tranšeju rakšana komunikācijām un inženiertinkliem"
  },
  {
    title: "Teritorijas līdzināšana",
    description: "Rūpīga teritorijas sagatavošana būvniecības un ainavu projektiem"
  },
  {
    title: "Grunts pārvietošana",
    description: "Efektīva grunts transportēšana un izvietošana objektos"
  }
];

const features = [
  {
    icon: Users,
    title: "Sertificēti operatori",
    description: "Pieredzējuši un sertificēti tehnikas operatori"
  }, 
  {
    icon: Truck,
    title: "Mūsdienīgs autoparkss",
    description: "Jaunākās paaudzes ekskavatori un cita tehnika"
  },
  {
    icon: Shield,
    title: "Drošības garantija",
    description: "Stingri drošības protokoli un apdrošināšana"
  },
  {
    icon: CheckCircle,
    title: "Kvalitātes kontrole",
    description: "Pastāvīga darbu kvalitātes uzraudzība"
  }
];

const projectTypes = [
  "Infrastruktūras attīstība",
  "Dzīvojamie projekti",
  "Rūpniecības objekti",
  "Ceļu būvniecība",
  "Ainavu arhitektūra",
  "Vides rekultivācija",
  "Sporta objekti",
  "Publiskās ūdens sistēmas"
];

const Earthworks = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Zemes darbi un izrakumi | Celtniecības sagatavošana"
        description="Pilna cikla izrakumi, līdzināšana un zemes pārvietošanas pakalpojumi infrastruktūras un būvniecības projektiem."
        canonical="https://rsga.lv/services/earthworks"
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
              <span className="text-fg-primary">Zemes darbi</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-brand-tint text-brand-primary mb-4">
                  Papildu pakalpojums
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6 leading-tight">
                  Zemes darbi un izrakumi
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Profesionāli zemes darbi infrastruktūras un būvniecības projektiem. 
                  Izrakšana, līdzināšana, teritorijas sagatavošana ar mūsdienīgu tehniku.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Pieprasīt aprēķinu</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
                  alt="Zemes darbi un izrakumi"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Mūsu zemes darbu pakalpojumi</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Pilns spektrs zemes darbu pakalpojumu jūsu projekta vajadzībām
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                        <Pickaxe className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{service.title}</h3>
                        <p className="text-fg-secondary">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Kvalitāte un drošība</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsu galvenās stiprās puses, kas nodrošina izcilus rezultātus
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-brand-tint rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{feature.title}</h3>
                    <p className="text-fg-secondary text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Projektu veidi</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsu zemes darbu pakalpojumi ir piemēroti dažādiem projektu veidiem
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectTypes.map((projectType, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md text-center">
                  <div className="w-full">
                    <Building className="h-6 w-6 text-brand-primary mx-auto mb-2" />
                    <span className="text-fg-secondary font-medium text-sm">{projectType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Darbu process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Strukturēta pieeja, kas nodrošina kvalitatīvus rezultātus
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Objekta apsekošana</h3>
                  <p className="text-fg-secondary text-sm">Teritorijas analīze un darbu plānošana</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Tehniskā sagatavošana</h3>
                  <p className="text-fg-secondary text-sm">Nepieciešamās tehnikas un resursu organizēšana</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Darbu izpilde</h3>
                  <p className="text-fg-secondary text-sm">Profesionāla darbu veikšana ar kvalitātes kontroli</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Noslēgums</h3>
                  <p className="text-fg-secondary text-sm">Objekta nodošana un dokumentācijas sagatavošana</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Vajadzīgi profesionāli zemes darbi?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar mūsu ekspertiem, lai apspriestu jūsu projekta vajadzības un 
                saņemtu individuālu piedāvājumu zemes darbu pakalpojumiem.
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

export default Earthworks;