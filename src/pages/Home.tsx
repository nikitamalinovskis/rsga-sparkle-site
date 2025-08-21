import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import VideoBlock from '@/components/sections/VideoBlock';
import About from '@/components/sections/About';
import Endorsements from '@/components/sections/Endorsements';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';

// CMS Data - This would typically come from a CMS or API
const pageData = {
  hero: {
    title: "Inovatīvi vides risinājumi atkritumu apsaimniekošanai",
    subtitle: "Ilgtspējīgi, efektīvi un atbilstoši ES standartiem.",
    cta: [
      { label: "Apskatīt pakalpojumus", action: "/services" },
      { label: "Sazināties ar mums", action: "/contacts" }
    ]
  },
  services: [
    {
      id: "cover",
      title: "Alternatīvā pārklāšana",
      description: "Videi draudzīgs ikdienas augsnes pārklājuma aizstājējs, kas taupa resursus un izmaksas.",
      category: "Core",
      image: "/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
    },
    {
      id: "hydroseeding",
      title: "Hidrosēja",
      description: "Izdevīga metode erozijas kontrolei un veģetācijas atjaunošanai.",
      category: "Core",
      image: "/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
    },
    {
      id: "deodorant-dust",
      title: "Industriālais dezodorants",
      description: "Smaku kontrole un putekļu samazināšana poligonos un industriālajās teritorijās.",
      category: "Core",
      image: "/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
    },
    {
      id: "sand",
      title: "Smilšu tirdzniecība",
      description: "Kvalitatīvas smilts piegāde būvniecībai un rūpniecībai.",
      category: "Additional",
      image: "/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
    },
    {
      id: "earthworks",
      title: "Zemes darbi",
      description: "Pilna cikla izrakumi un teritoriju sagatavošanas darbi.",
      category: "Additional",
      image: "/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
    },
    {
      id: "planning",
      title: "Plānošana un attīstība",
      description: "Stratēģiskās konsultācijas poligonu plānošanā un ilgtspējīgai izaugsmei.",
      category: "Additional",
      image: "/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
    }
  ],
  about: {
    text: "RSGA nodrošina inovatīvus vides risinājumus atkritumu apsaimniekošanai. Mūsu misija: uzlabot vides ilgtspējību ar mūsdienīgām tehnoloģijām. Darbības sfēra: Latvija un Eiropa."
  },
  video_block: {
    title: "Skatieties, kā mēs īstenojam ilgtspējīgus vides risinājumus darbībā",
    url: "https://youtu.be/Dp79pLCIACo?si=eXO1q-5fS3UgyoSX",
    description: "Šis video demonstrē RSGA pieeju ilgtspējīgai poligonu apsaimniekošanai, izceļot alternatīvos pārklājuma risinājumus, hidrosēšanas tehnoloģijas un industriālo dezodorantu pielietojumu."
  },
  endorsements: [
    {
      company: "Getliņi EKO",
      logo: "getlini-logo.svg",
      person: "Imants Stirāns",
      role: "Valdes priekšsēdētājs",
      testimonial: "Vairāk nekā 10 gadus mūsu uzņēmums no SIA RSGA iegādājas pakalpojumu – alternatīvo dienas pārklājumu poligonā Getliņi EKO. Šajā laikā ir izveidojusies sekmīga sadarbība, nodrošinot ilgtspējīgu un izmaksu efektīvu poligona darbību.",
      link: "#"
    },
    {
      company: "Vidusdaugavas SPAAO",
      logo: "spao-logo.svg",
      person: "Jānis Bisnieks",
      role: "Valdes priekšsēdētājs",
      testimonial: "Pateicoties RSGA inovatīvajiem dezodorantu risinājumiem, mēs esam spējuši uzlabot vides komfortu un minimizēt smaku ietekmi uz tuvākajām kopienām.",
      link: "#"
    },
    {
      company: "Liepājas RAS",
      logo: "liepajasras-logo.svg",
      person: "Normunds Niedols",
      role: "Valdes priekšsēdētājs",
      testimonial: "Ar RSGA alternatīvo pārklājumu risinājumiem mēs esam samazinājuši izmaksas, vienlaikus saglabājot vides drošības standartus Ķivīšu poligonā.",
      link: "#"
    }
  ],
  cta_block: {
    text: "Gatavi uzlabot savu atkritumu apsaimniekošanas stratēģiju?",
    button: { label: "Sazināties ar mums", action: "/contacts" }
  },
  contacts: {
    company: "SIA RSGA",
    registration_no: "40003811272",
    address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
    phone: "+371 67 32 56 73",
    email: "info@rsga.lv",
    fax: "+371 67 32 56 24"
  }
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="RSGA | Ilgtspējīgi atkritumu apsaimniekošanas risinājumi Latvijā un Eiropā"
        description="RSGA nodrošina inovatīvus, videi draudzīgus un izdevīgus atkritumu apsaimniekošanas pakalpojumus, poligonu pārklājumus, hidrosēšanu, zemes darbus un konsultācijas."
        canonical="https://rsga.lv"
      />
      <Header />
      
      <main>
        <Hero 
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          cta={pageData.hero.cta}
        />
        
        <Services services={pageData.services} />
        
        <VideoBlock 
          title={pageData.video_block.title}
          description={pageData.video_block.description}
          url={pageData.video_block.url}
        />
        
        <About text={pageData.about.text} />
        
        <Endorsements endorsements={pageData.endorsements} />
        
        <CTA 
          text={pageData.cta_block.text}
          button={pageData.cta_block.button}
        />
      </main>
      
      <Footer contacts={pageData.contacts} />
    </div>
  );
};

export default Home;