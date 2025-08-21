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
    title: "Innovative environmental solutions for waste management",
    subtitle: "RSGA provides sustainable and cost-efficient services for landfills and construction sites.",
    cta: [
      { label: "Learn more", action: "/about" },
      { label: "Contact us", action: "/contact" }
    ]
  },
  services: [
    {
      id: "cover",
      title: "Alternative daily and long-term cover services",
      description: "Modern replacement for traditional soil cover on landfills. Cost savings in material transport and storage. Eco-friendly, EU compliant.",
      category: "Core",
      image: "/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
    },
    {
      id: "hydroseeding",
      title: "Hydroseeding",
      description: "Effective method for soil erosion control and vegetation restoration. Fast results, low costs. Applied on slopes, landfills, quarries, construction sites.",
      category: "Core",
      image: "/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
    },
    {
      id: "deodorant-dust",
      title: "Industrial deodorant and anti-dust treatment",
      description: "Reduces odor on landfills and industrial facilities. Dust suppression on roads and construction sites. Improves environmental safety and comfort.",
      category: "Core",
      image: "/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
    },
    {
      id: "sand",
      title: "Sale of sand",
      description: "Supply of high-quality sand for construction and industrial use. Flexible delivery options.",
      category: "Additional",
      image: "/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
    },
    {
      id: "earthworks",
      title: "Earthworks",
      description: "Full-cycle earthmoving services for construction and infrastructure projects. Excavation, leveling, and site preparation.",
      category: "Additional",
      image: "/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
    },
    {
      id: "planning",
      title: "Planning and business development services",
      description: "Consultancy in landfill management and sustainable waste solutions. Support for planning, compliance, and growth strategies.",
      category: "Additional",
      image: "/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
    }
  ],
  about: {
    text: "RSGA works in waste management and eco-services. Mission: improve environmental sustainability with innovative technologies. Scope: Latvia & Europe."
  },
  video_block: {
    title: "Learn more about our innovative solutions",
    url: "https://youtu.be/Dp79pLCIACo?si=eXO1q-5fS3UgyoSX",
    description: "This video showcases RSGA's approach to sustainable landfill management, highlighting alternative cover solutions, hydroseeding technology, and industrial deodorant applications."
  },
  endorsements: [
    {
      company: "Getliņi EKO",
      logo: "getlini-logo.svg",
      person: "Imants Stirāns",
      role: "Chair of the Board",
      testimonial: "For more than 10 years, our company has been buying from SIA RSGA the service – Alternative Daily Coverage at the landfill Getliņi EKO. During this period, a successful cooperation has developed, ensuring sustainable and cost-efficient landfill operations.",
      link: "#"
    },
    {
      company: "Vidusdaugavas SPAAO",
      logo: "spao-logo.svg",
      person: "Jānis Bisnieks",
      role: "Chair of the Board",
      testimonial: "Thanks to RSGA's innovative deodorant solutions, we have been able to improve environmental comfort and minimize odor impact for nearby communities.",
      link: "#"
    },
    {
      company: "Liepājas RAS",
      logo: "liepajasras-logo.svg",
      person: "Normunds Niedols",
      role: "Chair of the Board",
      testimonial: "With RSGA's alternative cover solutions, we have reduced costs while maintaining environmental safety standards at the Kivites landfill.",
      link: "#"
    }
  ],
  cta_block: {
    text: "Let's make waste management more sustainable together.",
    button: { label: "Get in touch", action: "/contact" }
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