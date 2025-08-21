import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building, FileText, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontakti | RSGA pakalpojumi Latvijā un Eiropā"
        description="Sazinieties ar RSGA par atkritumu apsaimniekošanas pakalpojumiem un konsultācijām."
        canonical="https://rsga.lv/contacts"
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
              <span className="text-fg-secondary">Kontakti</span>
            </nav>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Kontakti
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Sazinējieties ar mums, lai uzzinātu vairāk par mūsu vides risinājumiem un pakalpojumiem.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-fg-primary mb-6">Saziņas informācija</h2>
                  <p className="text-lg text-fg-secondary mb-8">
                    Mēs esam gatavi palīdzēt jums ar jebkādiem jautājumiem par mūsu pakalpojumiem un risinājumiem.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-tint rounded-lg">
                        <Building className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg-primary mb-1">Uzņēmums</h3>
                        <p className="text-fg-secondary">{contacts.company}</p>
                        <p className="text-sm text-fg-muted">Reģ. Nr. {contacts.registration_no}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-tint rounded-lg">
                        <MapPin className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg-primary mb-1">Adrese</h3>
                        <p className="text-fg-secondary">{contacts.address}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-tint rounded-lg">
                        <Phone className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg-primary mb-1">Tālrunis</h3>
                        <p className="text-fg-secondary">{contacts.phone}</p>
                        <p className="text-sm text-fg-muted">Fakss: {contacts.fax}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-tint rounded-lg">
                        <Mail className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg-primary mb-1">E-pasts</h3>
                        <p className="text-fg-secondary">{contacts.email}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-tint rounded-lg">
                        <Clock className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg-primary mb-1">Darba laiks</h3>
                        <p className="text-fg-secondary">Pirmdiena - Piektdiena: 8:00 - 17:00</p>
                        <p className="text-sm text-fg-muted">Sestdiena - Svētdiena: Slēgts</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl text-fg-primary">Sūtīt ziņojumu</CardTitle>
                    <p className="text-fg-secondary">Aizpildiet formu, un mēs ar jums sazināsimies tuvākajā laikā.</p>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-fg-primary mb-2">
                            Vārds *
                          </label>
                          <Input 
                            id="name" 
                            placeholder="Jūsu vārds" 
                            required 
                            className="focus-ring"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-fg-primary mb-2">
                            Uzņēmums
                          </label>
                          <Input 
                            id="company" 
                            placeholder="Uzņēmuma nosaukums" 
                            className="focus-ring"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-fg-primary mb-2">
                            E-pasts *
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="jūsu@epasts.lv" 
                            required 
                            className="focus-ring"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-fg-primary mb-2">
                            Tālrunis
                          </label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+371 ..." 
                            className="focus-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-fg-primary mb-2">
                          Interesējošais pakalpojums
                        </label>
                        <select 
                          id="service" 
                          className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white text-fg-primary"
                        >
                          <option value="">Izvēlieties pakalpojumu</option>
                          <option value="alternative-cover">Alternatīvs segums</option>
                          <option value="hydroseeding">Hidrosēkla</option>
                          <option value="industrial-deodorant">Rūpnieciskais dezodorants</option>
                          <option value="sale-of-sand">Smilts pārdošana</option>
                          <option value="earthworks">Zemes darbi</option>
                          <option value="planning">Plānošana un attīstība</option>
                          <option value="other">Cits</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-fg-primary mb-2">
                          Ziņojums *
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Aprakstiet savu projektu vai jautājumu..." 
                          rows={5}
                          required 
                          className="focus-ring"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-brand-primary hover:bg-brand-primary-strong text-white"
                      >
                        Sūtīt ziņojumu
                      </Button>

                      <p className="text-sm text-fg-muted text-center">
                        * Obligātie lauki. Jūsu dati tiks izmantoti tikai saziņai ar jums.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Contacts;