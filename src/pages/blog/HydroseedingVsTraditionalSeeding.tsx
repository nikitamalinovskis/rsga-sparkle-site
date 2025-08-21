import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle2 } from "lucide-react";
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

const HydroseedingVsTraditionalSeeding = () => {
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
                  Hidrosēšana
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    18. augusts, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    10 min lasīšana
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    RSGA Eksperts
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Hidrosēšana pret tradicionālo sēšanu: Salīdzinājums erozijas kontrolei
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Uzziniet, kāpēc hidrosēšana ir kļuvusi par vadošo izvēli rekultivācijai un erozijas kontrolei, 
                piedāvājot pārākas priekšrocības salīdzinājumā ar tradicionālajām sēšanas metodēm.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Comparison Table */}
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-6">Salīdzinošā tabula</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border-default">
                        <th className="text-left p-4 text-fg-primary font-semibold">Kritērijs</th>
                        <th className="text-left p-4 text-brand-primary font-semibold">Hidrosēšana</th>
                        <th className="text-left p-4 text-fg-muted font-semibold">Tradicionālā sēšana</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Uzstādīšanas ātrums</td>
                        <td className="p-4 text-fg-secondary">✓ Ļoti ātrs (1-2 dienas)</td>
                        <td className="p-4 text-fg-secondary">Lēns (1-2 nedēļas)</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Dīgšanas temps</td>
                        <td className="p-4 text-fg-secondary">✓ 3-7 dienas</td>
                        <td className="p-4 text-fg-secondary">10-21 dienas</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Erozijas aizsardzība</td>
                        <td className="p-4 text-fg-secondary">✓ Tūlītēja</td>
                        <td className="p-4 text-fg-secondary">Kavēta</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Izmaksas</td>
                        <td className="p-4 text-fg-secondary">✓ Zemākas</td>
                        <td className="p-4 text-fg-secondary">Augstākas</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Darba intensitāte</td>
                        <td className="p-4 text-fg-secondary">✓ Zema</td>
                        <td className="p-4 text-fg-secondary">Augsta</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">Hidrosēšanas priekšrocības</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Ātra uzstādīšana</h4>
                        <p className="text-fg-secondary">Lielas platības var tikt apstrādātas ļoti īsā laikā</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Tūlītēja aizsardzība</h4>
                        <p className="text-fg-secondary">Mulčs nodrošina nekavējošu erozijas kontroli</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Ekonomiski efektīva</h4>
                        <p className="text-fg-secondary">Zemākas kopējās izmaksas nekā tradicionālajām metodēm</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Vienveidīga sēklu izplatīšana</h4>
                        <p className="text-fg-secondary">Optimāla sēklu sadalījuma blīvums visā platībā</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Grūti pieejamās vietas</h4>
                        <p className="text-fg-secondary">Iespēja apstrādāt stāvus nogāzes un nepieejamas zonas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Vides draudzīgums</h4>
                        <p className="text-fg-secondary">Mazāka vides ietekme un dabas resursu patēriņš</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Pielietojuma jomas</h3>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Ceļu nogāžu stabilizācija</li>
                  <li>• Atkritumu poligonu rekultivācija</li>
                  <li>• Būvlaukumu erozijas kontrole</li>
                  <li>• Industriālo objektu ainavu atjaunošana</li>
                  <li>• Dzelzceļa infrastruktūras aizsardzība</li>
                  <li>• Grants karjeru rekultivācija</li>
                </ul>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">RSGA hidrosēšanas process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Teritorijas analīze</h4>
                      <p className="text-fg-secondary">Augsnes apstākļu un klimatisko faktoru novērtējums</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Maisījuma sagatavošana</h4>
                      <p className="text-fg-secondary">Speciāli atlasītu sēklu, mēslu un mulča maisījuma izveide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Profesionāla uzstādīšana</h4>
                      <p className="text-fg-secondary">Precīza maisījuma uzklāšana ar specializēto aprīkojumu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Rezultātu uzraudzība</h4>
                      <p className="text-fg-secondary">Regulāra kontrole un nepieciešamības gadījumā korekcijas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Izvēlieties efektīvu erozijas kontroli
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Sazinieties ar RSGA, lai saņemtu profesionālu konsultāciju par hidrosēšanas iespējām jūsu projektam.
                </p>
                <Link to="/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Uzzināt vairāk par hidrosēšanu
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

export default HydroseedingVsTraditionalSeeding;