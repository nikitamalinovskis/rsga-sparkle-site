import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, UserCheck, Database, Lock, FileText, Calendar } from 'lucide-react';

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
    icon: <Eye className="h-6 w-6" />,
    title: "Kādus datus mēs apkopojam",
    content: "Mēs apkopojam informāciju, ko jūs sniedzat mums tieši, piemēram, kad sazināties ar mums, izmantojot mūsu vietnes formas, e-pastu vai tālruni. Tas var ietvert jūsu vārdu, e-pasta adresi, tālruņa numuru, uzņēmuma informāciju un jebkādus ziņojumus, ko jūs mums sūtāt."
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Kā mēs izmantojam jūsu datus",
    content: "Mēs izmantojam jūsu personas datus, lai atbildētu uz jūsu jautājumiem, sniegtu informāciju par mūsu pakalpojumiem, apstrādātu jūsu pieprasījumus un uzturētu saziņu par mūsu vides risinājumiem. Mēs arī varam izmantot jūsu datus, lai uzlabotu mūsu pakalpojumus un vietnes funkcionalitāti."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Datu glabāšana un drošība",
    content: "Jūsu personas dati tiek glabāti drošos serveros Eiropas Savienībā. Mēs pieņemam piemērotus tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu datus pret neautorizētu piekļuvi, izmaiņām, izpaušanu vai iznīcināšanu. Dati tiek glabāti tikai tik ilgi, cik nepieciešams mūsu saziņas mērķiem."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Juridiskais pamats apstrādei",
    content: "Mēs apstrādājam jūsu personas datus, pamatojoties uz jūsu piekrišanu, kad sazināties ar mums, mūsu likumīgajām interesēm sniegt vides pakalpojumus un atbildēt uz jautājumiem, kā arī pildīt juridiskās saistības saskaņā ar ES un Latvijas datu aizsardzības likumiem."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Jūsu tiesības",
    content: "Saskaņā ar GDPR jums ir tiesības piekļūt saviem datiem, tos labot, dzēst, ierobežot to apstrādi vai iebilst pret to apstrādi. Jums ir arī tiesības uz datu pārnesamību un tiesības atsaukt piekrišanu jebkurā laikā. Lai izmantotu šīs tiesības, lūdzu, sazinieties ar mums."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Sīkdatņu izmantošana",
    content: "Mūsu vietne izmanto sīkdatnes, lai uzlabotu jūsu pārlūkošanas pieredzi un analizētu vietnes apmeklētību. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti jūsu ierīcē. Jūs varat kontrolēt sīkdatņu izmantošanu, mainot sava pārlūka iestatījumus."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Politikas izmaiņas",
    content: "Mēs varam periodiski atjaunināt šo privātuma politiku, lai atspoguļotu izmaiņas mūsu praksē vai juridiskajās prasībās. Jebkādas izmaiņas tiks publicētas šajā lapā ar jaunu spēkā stāšanās datumu. Iesakām regulāri pārskatīt šo politiku."
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Saziņa par privātuma jautājumiem",
    content: `Ja jums ir kādi jautājumi par šo privātuma politiku vai vēlaties izmantot savas tiesības, lūdzu, sazinieties ar mums pa e-pastu ${contacts.email} vai rakstiet mums uz adresi ${contacts.address}. Mēs atbildēsim uz jūsu pieprasījumu 30 dienu laikā, kā to paredz spēkā esošie likumi.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Privātuma politika
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Mēs respektējam jūsu privātumu un esam apņēmušies aizsargāt jūsu personas datus saskaņā ar GDPR un Latvijas likumiem.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-fg-muted">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Pēdējā atjaunošana: 2024. gada 15. janvāris</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-brand-tint rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-semibold text-fg-primary mb-4">Par šo politiku</h2>
                <p className="text-fg-secondary leading-relaxed">
                  SIA RSGA ("mēs", "mūsu" vai "uzņēmums") ir apņēmusies aizsargāt un respektēt jūsu privātumu. 
                  Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam un aizsargājam jūsu personas informāciju, 
                  kad apmeklējat mūsu vietni vai izmantojat mūsu pakalpojumus.
                </p>
              </div>

              {/* Policy Sections */}
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

              {/* Contact Information */}
              <div className="mt-16">
                <Card className="p-8 bg-gradient-cta text-white">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Jautājumi par privātumu?</h2>
                    <p className="text-lg mb-6 opacity-90">
                      Ja jums ir kādi jautājumi par šo privātuma politiku vai mūsu datu apstrādes praksi, 
                      nevilcinieties sazināties ar mums.
                    </p>
                    <div className="space-y-2 text-sm opacity-80">
                      <p><strong>E-pasts:</strong> {contacts.email}</p>
                      <p><strong>Tālrunis:</strong> {contacts.phone}</p>
                      <p><strong>Adrese:</strong> {contacts.address}</p>
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

export default PrivacyPolicy;