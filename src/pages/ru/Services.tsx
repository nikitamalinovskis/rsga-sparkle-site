import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import SEO from '@/components/SEO';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const servicesData = [
  {
    id: "alternative-cover",
    title: "Альтернативное покрытие",
    description: "Современная замена почвенного покрытия, снижающая затраты и логистику, соответствующая требованиям ЕС.",
    category: "Core",
    link: "/ru/services/alternative-cover",
    image: "/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
  },
  {
    id: "hydroseeding",
    title: "Гидропосев",
    description: "Быстрый и экономичный контроль эрозии и создание растительности на склонах и участках.",
    category: "Core",
    link: "/ru/services/hydroseeding",
    image: "/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
  },
  {
    id: "industrial-deodorant-dust",
    title: "Промышленный дезодорант",
    description: "Устранение запахов и подавление пыли для полигонов, дорог и промышленных зон.",
    category: "Core",
    link: "/ru/services/industrial-deodorant-dust",
    image: "/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
  },
  {
    id: "sale-of-sand",
    title: "Торговля песком",
    description: "Надежные поставки для строительных и промышленных нужд.",
    category: "Additional",
    link: "/ru/services/sale-of-sand",
    image: "/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
  },
  {
    id: "earthworks",
    title: "Земляные работы",
    description: "Выемка грунта, планировка, подготовка участков для инфраструктуры и строительства.",
    category: "Additional",
    link: "/ru/services/earthworks",
    image: "/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
  },
  {
    id: "planning-business-development",
    title: "Планирование и развитие",
    description: "Консультации по устойчивому управлению полигонами, соответствию требованиям и развитию.",
    category: "Additional",
    link: "/ru/services/planning-business-development",
    image: "/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
  }
];

const RuServices = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Услуги RSGA | Современные экологические решения для управления отходами"
        description="Полный спектр услуг RSGA: альтернативные покрытия полигонов, гидропосев, промышленные дезодоранты, земляные работы и консультационные услуги."
        canonical="https://rsga.lv/ru/services"
      />
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-6 bg-bg-subtle">
          <div className="container-3of4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/ru">🏠</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Услуги</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>
        
        <Services services={servicesData} />
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default RuServices;