import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const pageData = {
  about: {
    text: "RSGA darbojas atkritumu apsaimniekošanas un eko-pakalpojumu jomā. Misija: uzlabot vides ilgtspējību ar inovatīvām tehnoloģijām. Darbības sfēra: Latvija un Eiropa."
  }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About text={pageData.about.text} />
      </main>
      <Footer contacts={contacts} />
    </div>
  );
};

export default AboutPage;