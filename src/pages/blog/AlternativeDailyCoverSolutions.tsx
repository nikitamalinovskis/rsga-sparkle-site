import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contacts = {
  company: "SIA RSGA",
  registration_no: "Reģistrācijas Nr.: 40003811272",
  address: "Daugavpils iela 31-52, Rīga, LV-1003",
  phone: "+371 26 515 776",
  email: "info@rsga.lv",
  fax: "Fakss: +371 65 407 700"
};

const AlternativeDailyCoverSolutions = () => {
  return (
    <div className="min-h-screen bg-bg-default">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container-3of4">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-fg-muted hover:text-brand-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Atpakaļ uz blogu
              </Link>
            </div>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-brand-tint text-brand-primary">
                  Atkritumu apsaimniekošana
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    21. augusts, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    8 min lasīšana
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    RSGA Eksperts
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Alternatīvie dienas pārklājumi: Moderni risinājumi poligonu apsaimniekošanai
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Atklājiet, kā RSGA inovatīvie alternatīvie pārklājumi revolucionē atkritumu poligonu ikdienas darbību, 
                nodrošinot efektīvāku, ekonomiskāku un videi draudzīgāku risinājumu.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">Kas ir alternatīvie dienas pārklājumi?</h2>
                <p className="text-fg-secondary mb-6">
                  Tradicionālie dienas pārklājumi atkritumu poligonos bieži izmanto augsni vai smiltis. 
                  Tomēr šie materiāli rada vairākas problēmas: augsts patēriņš, vides ietekme, 
                  transporta izmaksas un ierobežota efektivitāte.
                </p>
                
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Tradicionālo risinājumu izaicinājumi:</h3>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Augsts dabas resursu patēriņš</li>
                  <li>• Lielas transporta un materiālu izmaksas</li>
                  <li>• Nepietiekama smakas un putekļu kontrole</li>
                  <li>• Vājš putnu un grauzēju atbaidīšanas efekts</li>
                  <li>• Nepilnīga atbilstība ES vides standartiem</li>
                </ul>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">RSGA alternatīvo risinājumu priekšrocības</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Izmaksu samazināšana līdz 40%</h4>
                    <p className="text-fg-secondary">
                      Mūsu alternatīvie pārklājumi ļauj ievērojami samazināt operacionālās izmaksas, 
                      optimizējot materiālu patēriņu un transporta vajadzības.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Vides aizsardzība</h4>
                    <p className="text-fg-secondary">
                      Ekoloģiski draudzīgi materiāli, kas samazina vides ietekmi un atbilst 
                      stingrākajiem ES vides aizsardzības standartiem.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Uzlabota efektivitāte</h4>
                    <p className="text-fg-secondary">
                      Labāka smakas kontrole, putekļu samazināšana un efektīvāka kaitēkļu atbaidīšana 
                      salīdzinājumā ar tradicionālajiem risinājumiem.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">ES atbilstība</h4>
                    <p className="text-fg-secondary">
                      Pilna atbilstība Eiropas Savienības direktīvām atkritumu apsaimniekošanā 
                      un vides aizsardzībā.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Ieviešanas process</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Objekta novērtējums</h4>
                      <p className="text-fg-secondary">Detalizēta poligona analīze un vajadzību identificēšana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Risinājuma izstrāde</h4>
                      <p className="text-fg-secondary">Pielāgots alternatīvā pārklājuma plāns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Profesionāla ieviešana</h4>
                      <p className="text-fg-secondary">Ekspertu komandas nodrošināta kvalitātes ieviešana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Uzraudzība un atbalsts</h4>
                      <p className="text-fg-secondary">Nepārtraukts atbalsts un risinājuma optimizācija</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Gatavs uzlabot sava poligona efektivitāti?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Sazinieties ar RSGA ekspertiem bezmaksas konsultācijai un individuāla risinājuma izstrādei.
                </p>
                <Link to="/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Sazināties ar ekspertiem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default AlternativeDailyCoverSolutions;