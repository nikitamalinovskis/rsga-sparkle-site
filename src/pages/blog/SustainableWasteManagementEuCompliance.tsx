import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Leaf, Shield, Target, TrendingUp } from "lucide-react";
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

const SustainableWasteManagementEuCompliance = () => {
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
                  ES atbilstība
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    15. augusts, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    12 min lasīšana
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    RSGA Eksperts
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Ilgtspējīga atkritumu apsaimniekošana un ES atbilstība
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Izpētiet, kā RSGA palīdz uzņēmumiem sasniegt Eiropas Savienības vides standartus, 
                nodrošinot ilgtspējīgu un atbildīgu atkritumu apsaimniekošanu nākotnei.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">ES Zaļais kurss un atkritumu apsaimniekošana</h2>
                <p className="text-fg-secondary mb-6">
                  Eiropas Zaļais kurss nosaka ambiciozu mērķi – līdz 2050. gadam Eiropa kļūs par 
                  klimatneitrālu kontinentu. Šis mērķis būtiski ietekmē atkritumu apsaimniekošanas 
                  nozari, prasot fundamentālas izmaiņas tradicionālajās pieejās.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Leaf className="h-8 w-8 text-green-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Vides aizsardzība</h4>
                    <p className="text-fg-secondary">
                      Stingri noteikumi siltumnīcefekta gāzu emisiju samazināšanai un dabas resursu aizsardzībai.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Regulatīvā atbilstība</h4>
                    <p className="text-fg-secondary">
                      Nepieciešamība ievērot arvien stingrākus ES atkritumu apsaimniekošanas standartus.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Target className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Aprites ekonomika</h4>
                    <p className="text-fg-secondary">
                      Pāreja uz aprites ekonomikas modeli, maksimāli samazinot atkritumu rašanos.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Inovāciju veicināšana</h4>
                    <p className="text-fg-secondary">
                      Atbalsts jaunām tehnoloģijām un metodēm ilgtspējīgai atkritumu apsaimniekošanai.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Galvenās ES direktīvas</h3>
                <ul className="space-y-3 text-fg-secondary mb-8">
                  <li>• <strong>Atkritumu direktīva (2008/98/EK):</strong> Atkritumu hierarhija un pārstrādes mērķi</li>
                  <li>• <strong>Poligonu direktīva (1999/31/EK):</strong> Stingri atkritumu poligonu darbības noteikumi</li>
                  <li>• <strong>Industriālo emisiju direktīva (2010/75/ES):</strong> Piesārņojuma kontrole un samazināšana</li>
                  <li>• <strong>REACH regula:</strong> Ķīmisko vielu drošības novērtējums un kontrole</li>
                </ul>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Atbilstības izaicinājumi un risinājumi</h2>
                
                <h3 className="text-xl font-semibold text-fg-primary mb-4">Galvenie izaicinājumi:</h3>
                <div className="bg-bg-subtle p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-fg-secondary">
                    <li>• Sarežģīta regulatīvā vide un biežas izmaiņas</li>
                    <li>• Augstās tehnoloģisko risinājumu ieviešanas izmaksas</li>
                    <li>• Nepieciešamība pēc specializētām zināšanām un ekspertīzes</li>
                    <li>• Darbinieku apmācības un sertificēšanas prasības</li>
                    <li>• Nepārtraukta monitoringa un ziņošanas prasības</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">RSGA risinājumi:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Regulatīvā konsultēšana</h4>
                      <p className="text-fg-secondary">Pilnīga informētība par aktuālajām ES prasībām un to ieviešanu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Tehnoloģiski risinājumi</h4>
                      <p className="text-fg-secondary">Modernas, ES standartiem atbilstošas tehnoloģijas ieviešana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Monitorings un ziņošana</h4>
                      <p className="text-fg-secondary">Automatizēti sistēmas datu vākšanai un atbilstības pārskatiem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Darbinieku apmācība</h4>
                      <p className="text-fg-secondary">Regulāra personāla apmācība ES standartu ievērošanā</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Ekonomiskās priekšrocības</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Izmaksu samazināšana</h4>
                    <p className="text-green-700">
                      Efektīvāka resursu izmantošana un atkritumu samazināšana līdz 30%
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">ES fondu pieejamība</h4>
                    <p className="text-blue-700">
                      Iespēja piesaistīt ES finansējumu vides projektu īstenošanai
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Konkurētspējas uzlabošana</h4>
                    <p className="text-purple-700">
                      Augstāka uzņēmuma reputācija un jaunu tirgu pieejamība
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Riska mazināšana</h4>
                    <p className="text-orange-700">
                      Sodu un tiesvedību risku samazināšana līdz minimumam
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Nākotnes tendences</h2>
                <p className="text-fg-secondary mb-4">
                  ES atkritumu apsaimniekošanas joma turpina attīstīties, un uzņēmumiem ir jābūt gataviem 
                  nākamajām izmaiņām:
                </p>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Digitalizācija un IoT tehnoloģiju ieviešana monitoringā</li>
                  <li>• Mākslīgā intelekta izmantošana atkritumu šķirošanā</li>
                  <li>• Blockchain tehnoloģijas atkritumu izsekošanai</li>
                  <li>• Bioloģisko atkritumu pārstrādes tehnoloģiju attīstība</li>
                  <li>• Oglekļa neitralitātes prasību pastiprināšana</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Gatavs ES atbilstības ceļojumam?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Sazinieties ar RSGA ekspertiem, lai izveidotu personalizētu plānu ES standartu ieviešanai jūsu uzņēmumā.
                </p>
                <Link to="/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Sākt ES atbilstības procesu
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

export default SustainableWasteManagementEuCompliance;