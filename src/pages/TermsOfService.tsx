import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Calendar, Phone } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const sections = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Pakalpojumu apraksts",
    content: "SIA RSGA sniedz specializētus vides pakalpojumus, ieskaitot alternatīvo ikdienas segumu, hidrosēklu, rūpniecisko dezodorantu un putekļu apkarošanu, smilts pārdošanu, zemes darbus un plānošanas konsultācijas. Mūsu pakalpojumi tiek sniegti Latvijā un Eiropā saskaņā ar ES vides standartiem."
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Lietošanas noteikumi",
    content: "Izmantojot mūsu vietni un pakalpojumus, jūs piekrītat ievērot šos lietošanas noteikumus. Jūs esat atbildīgs par visu informāciju, ko sniedzat, un par to, ka tā ir precīza un pilnīga. Jebkāda mūsu pakalpojumu ļaunprātīga izmantošana ir aizliegta."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Intelektuālā īpašuma tiesības",
    content: "Visa vietnes saturs, ieskaitot tekstus, attēlus, logotipus un dizainu, ir SIA RSGA īpašums vai tiek izmantots ar atļauju. Jums ir aizliegts reproducēt, izplatīt vai izmantot šo saturu bez mūsu rakstiskas atļaujas."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Pakalpojumu kvalitāte un garantijas",
    content: "Mēs apņemamies sniegt augstas kvalitātes pakalpojumus saskaņā ar nozares standartiem. Tomēr mēs nesniegdām nekādas garantijas rezultātu sasniegšanai, ja tie ir atkarīgi no faktiem ārpus mūsu kontroles, piemēram, laika apstākļiem vai augsnes apstākļiem."
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Atbildības ierobežojumi",
    content: "SIA RSGA atbildība ir ierobežota līdz faktiski samaksātajai summai par konkrēto pakalpojumu. Mēs neuzņemamies atbildību par netiešiem, gadījuma vai sekojošiem zaudējumiem. Klienta pienākums ir nodrošināt atbilstošus drošības pasākumus savās telpās."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Klienta saistības",
    content: "Klients apņemas sniegt precīzu informāciju par projektu, nodrošināt drošu darba vidi, ievērot visas vietējās regulās un likumus, kā arī savlaicīgi veikt maksājumus saskaņā ar noslēgto līgumu. Klients ir atbildīgs par visu nepieciešamo atļauju iegūšanu."
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Maksājumu noteikumi",
    content: "Maksājumi jāveic saskaņā ar līgumā norādītajiem noteikumiem. Nokavētie maksājumi var izraisīt papildu maksu un pakalpojumu pārtraukšanu. Visas cenas ir norādītas EUR un neietver PVN, ja nav norādīts citādi. Mēs paturām tiesības mainīt cenas ar 30 dienu iepriekšējo brīdinājumu."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Līguma izbeigšana",
    content: "Jebkura puse var izbeigt līgumu, ievērojot līgumā norādīto uzteikuma termiņu. Neparedzētu apstākļu gadījumā (force majeure) līgums var tikt pārtraukts bez soda naudas. Pēc līguma izbeigšanas abas puses saglabā saistības attiecībā uz konfidencialitāti."
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Piemērojamie likumi",
    content: "Šie noteikumi tiek regulēti ar Latvijas Republikas likumiem. Jebkādi strīdi tiks risināti Latvijas tiesās. Ja kāds no šo noteikumu punktiem tiek atzīts par spēkā neesošu, pārējie punkti paliek spēkā. ES direktīvas un regulas tiek piemērotas attiecīgajā sfērā."
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Kontaktinformācija",
    content: `Jautājumos par šiem noteikumiem vai mūsu pakalpojumiem sazinieties ar mums pa e-pastu ${contacts.email}, zvaniet ${contacts.phone} vai rakstiet uz adresi ${contacts.address}. Mēs cenšamies atbildēt uz visiem jautājumiem 2 darba dienu laikā.`
  }
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lietošanas noteikumi | RSGA"
        description="Iepazīstieties ar mājaslapas un pakalpojumu lietošanas nosacījumiem."
        canonical="https://rsga.lv/terms-of-service"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Lietošanas noteikumi
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Šie noteikumi reglamentē mūsu pakalpojumu izmantošanu un sadarbības nosacījumus starp SIA RSGA un mūsu klientiem.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-fg-muted">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Spēkā no: 2024. gada 1. janvāris</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-brand-tint rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-semibold text-fg-primary mb-4">Svarīga informācija</h2>
                <p className="text-fg-secondary leading-relaxed mb-4">
                  Lūdzu, rūpīgi izlasiet šos lietošanas noteikumus pirms mūsu pakalpojumu izmantošanas. 
                  Izmantojot SIA RSGA pakalpojumus vai vietni, jūs piekrītat šiem noteikumiem.
                </p>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-fg-secondary">
                    Ja nepiekrītat kādam no šiem noteikumiem, lūdzu, neizmantojiet mūsu pakalpojumus 
                    un sazinieties ar mums, lai apspriestu alternatīvus risinājumus.
                  </p>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card key={index} className="p-8 shadow-lg border border-brand-primary/10">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="flex items-center space-x-3 text-xl text-fg-primary">
                        <div className="p-3 bg-brand-tint rounded-lg text-brand-primary">
                          {section.icon}
                        </div>
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <p className="text-fg-secondary leading-relaxed">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Legal Notice */}
              <div className="mt-16">
                <Card className="p-8 bg-fg-primary text-white">
                  <div className="text-center">
                    <Scale className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <h2 className="text-2xl font-semibold mb-4">Juridiskā informācija</h2>
                    <div className="space-y-2 text-sm opacity-90 max-w-2xl mx-auto">
                      <p><strong>Uzņēmums:</strong> {contacts.company}</p>
                      <p><strong>Reģistrācijas numurs:</strong> {contacts.registration_no}</p>
                      <p><strong>Juridiskā adrese:</strong> {contacts.address}</p>
                      <p><strong>Tālrunis:</strong> {contacts.phone}</p>
                      <p><strong>E-pasts:</strong> {contacts.email}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-xs opacity-70">
                        Šie noteikumi tiek regulēti ar Latvijas Republikas likumiem un ES direktīvām vides aizsardzības jomā.
                      </p>
                    </div>
                  </div>
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

export default TermsOfService;