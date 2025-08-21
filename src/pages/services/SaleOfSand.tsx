import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Truck, Shield, Clock, Award, Building, Pickaxe, Home } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const specifications = [
  { label: "Frakcija", value: "0-4mm, 0-8mm, 0-16mm" },
  { label: "Mitrums", value: "< 5%" },
  { label: "Kvalitāte", value: "Augsta, atbilst LVS standartiem" },
  { label: "Piegāde", value: "Visā Latvijā" }
];

const features = [
  {
    icon: Shield,
    title: "Garantēta kvalitāte",
    description: "Visa smilts tiek testēta un atbilst būvniecības standartiem"
  },
  {
    icon: Truck,
    title: "Ātri piegādes termiņi",
    description: "Piegāde 24-48 stundu laikā visā Latvijā"
  },
  {
    icon: Clock,
    title: "Elastīgs grafiks",
    description: "Piegādes grafiks pielāgots jūsu projekta vajadzībām"
  },
  {
    icon: Award,
    title: "Konkurētspējīgas cenas",
    description: "Labākās cenas tirgū ar augstu servisa kvalitāti"
  }
];

const applications = [
  "Betona un java ražošana",
  "Būvniecības pamatne un izlīdzināšana",
  "Ceļu būvniecība un rekonstrukcija",
  "Ainavu arhitektūra un labiekārtošana",
  "Drenāžas sistēmu ierīkošana",
  "Sporta laukumu segumu veidošana"
];

const SaleOfSand = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Smilšu piegāde un tirdzniecība | Kvalitatīva smilts būvniecībai"
        description="Uzticama augstas kvalitātes smilts piegāde celtniecībai un rūpniecībai ar elastīgām piegādēm."
        canonical="https://rsga.lv/services/sale-of-sand"
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
              <span className="text-fg-primary">Smilšu tirdzniecība</span>
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
                  Smilšu pārdošana un piegāde
                </h1>
                <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
                  Uzticams augstas kvalitātes smilts piegādes avots būvniecības un rūpniecības vajadzībām 
                  ar elastīgām piegādes iespējām.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/contacts">Pieprasīt cenu</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
                  alt="Augstas kvalitātes smilts"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Mūsu priekšrocības</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Kāpēc izvēlēties RSGA smilts piegādi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-tint rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{feature.title}</h3>
                        <p className="text-fg-secondary">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Produkta specifikācijas</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Mūsu smilts atbilst visiem būvniecības standartiem un ir piemērota 
                  dažādiem pielietojumiem.
                </p>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <span className="font-medium text-fg-primary">{spec.label}:</span>
                      <span className="text-fg-secondary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-tint/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-fg-primary mb-4">Pieejamie daudzumi</h3>
                <ul className="space-y-3 text-fg-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Mazi daudzumi - no 1 tonnas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Vidēji daudzumi - 10-50 tonnas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Lielie daudzumi - 100+ tonnas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    Regulāras piegādes līgumi
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-fg-muted">
                    <strong>Piegādes laiks:</strong> 24-48 stundas<br />
                    <strong>Piegādes zona:</strong> Visa Latvija<br />
                    <strong>Minimālais pasūtījums:</strong> 1 tonna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Pielietojuma jomas</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Mūsu smilts ir piemērota plašam pielietojumu spektram
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                  <Building className="h-6 w-6 text-brand-primary flex-shrink-0" />
                  <span className="text-fg-secondary font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Vajadzīga kvalitatīva smilts jūsu projektam?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Sazinieties ar mums cenu piedāvājumam un piegādes nosacījumu noskaidrošanai. 
                Mēs piedāvājam konkurētspējīgas cenas un ātru piegādi.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                <Link to="/contacts">Pieprasīt cenu piedāvājumu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default SaleOfSand;