import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, TrendingUp, Target, Users, BarChart, Globe, Lightbulb, Home } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const focusAreas = [
  {
    icon: Target,
    title: "Stratēģiskā plānošana",
    description: "Ilgtermiņa biznesa stratēģijas izstrāde un ieviešana"
  },
  {
    icon: Globe,
    title: "Vides atbilstība",
    description: "ES un vietējo vides regulējumu ievērošana"
  },
  {
    icon: TrendingUp,
    title: "Biznesa optimizācija",
    description: "Procesu uzlabošana un efektivitātes palielināšana"
  },
  {
    icon: Lightbulb,
    title: "Inovāciju ieviešana",
    description: "Jaunāko tehnoloģiju un metožu integrācija"
  }
];

const services = [
  {
    title: "Biznesa plānu izstrāde",
    description: "Detalizēti biznesa plāni jauniem projektiem un uzņēmumu paplašināšanai"
  },
  {
    title: "Regulējumu analīze",
    description: "Vides likumdošanas izmaiņu analīze un to ietekmes novērtējums"
  },
  {
    title: "Procesu optimizācija",
    description: "Esošo darba procesu analīze un efektivitātes uzlabošana"
  },
  {
    title: "Tirgus izpēte",
    description: "Tirgus tendenču analīze un jaunu iespēju identificēšana"
  },
  {
    title: "Finansu plānošana",
    description: "Investīciju plānošana un finansējuma avotu identificēšana"
  },
  {
    title: "Personāla attīstība",
    description: "Komandas apmācības un profesionālās izaugsmes programmas"
  }
];

const benefits = [
  "Stratēģiski pamatota biznesa attīstība",
  "Pilnīga atbilstība vides regulējumiem",
  "Palielināta darbības efektivitāte",
  "Samazinātas darbības izmaksas",
  "Uzlabota konkurētspēja tirgū",
  "Ilgtspējīgas izaugsmes nodrošināšana",
  "Risku mazināšana un pārvaldība",
  "Jaunu biznesa iespēju identificēšana"
];

const PlanningBusinessDevelopment = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Konsultācijas poligonu plānošanā un attīstībā | RSGA"
        description="Ekspertu konsultācijas poligonu plānošanā, atbilstībā un ilgtspējīgā uzņēmējdarbības attīstībā."
        canonical="https://rsga.lv/services/planning-business-development"
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
              <span className="text-fg-primary">Plānošana un attīstība</span>
            </nav>
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
                  Plānošana un biznesa attīstība
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Ekspertu konsultācijas ilgtspējīgai atkritumu apsaimniekošanas biznesa pārvaldībai, 
                  atbilstībai un izaugsmes stratēģiju izstrādei.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Saņemt konsultāciju</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
                  alt="Biznesa plānošana un attīstība"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Mūsu ekspertīzes jomas</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Specializējamies vides nozares biznesa attīstības jautājumos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                        <area.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{area.title}</h3>
                        <p className="text-fg-secondary">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Mūsu konsultāciju pakalpojumi</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Visaptveroši risinājumi jūsu biznesa attīstībai
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <BarChart className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{service.title}</h3>
                    <p className="text-fg-secondary text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Ko jūs iegūsiet</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsu konsultāciju rezultātā jūsu uzņēmums sasniegs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0" />
                  <span className="text-fg-secondary font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Konsultāciju process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Strukturēta pieeja efektīvai biznesa attīstībai
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Situācijas analīze</h3>
                  <p className="text-fg-secondary text-sm">Esošās situācijas un vajadzību novērtējums</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Stratēģijas izstrāde</h3>
                  <p className="text-fg-secondary text-sm">Individuālas attīstības stratēģijas veidošana</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Plāna ieviešana</h3>
                  <p className="text-fg-secondary text-sm">Pakāpeniska stratēģijas realizācija ar atbalstu</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-fg-primary mb-2">Uzraudzība</h3>
                  <p className="text-fg-secondary text-sm">Rezultātu monitorēšana un nepieciešamās korekcijas</p>
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
                Gatavi attīstīt savu biznesu?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar RSGA konsultantiem, lai apspriestu jūsu uzņēmuma attīstības iespējas 
                un saņemtu profesionālu atbalstu izaugsmes stratēģijas realizācijā.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                <Link to="/contacts">Sākt konsultācijas</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default PlanningBusinessDevelopment;