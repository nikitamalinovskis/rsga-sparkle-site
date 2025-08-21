import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Truck, Droplets, Wrench, Building, Users } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const services = [
  {
    id: 'alternative-cover',
    icon: Leaf,
    title: 'Альтернативное покрытие',
    description: 'Экологичные решения для ежедневного покрытия свалок, соответствующие требованиям ЕС.',
    image: '/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png',
    link: '/ru/services/alternative-cover'
  },
  {
    id: 'hydroseeding',
    icon: Droplets,
    title: 'Гидропосев',
    description: 'Быстрое и эффективное восстановление растительности на крупных территориях.',
    image: '/lovable-uploads/d81a5f15-b1e3-4677-93eb-a1dcc3d6e0f3.png',
    link: '/ru/services/hydroseeding'
  },
  {
    id: 'deodorant-dust',
    icon: Truck,
    title: 'Промышленный дезодорант от пыли',
    description: 'Специализированные средства контроля запахов и пыли для промышленных объектов.',
    image: '/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png',
    link: '/ru/services/industrial-deodorant-dust'
  },
  {
    id: 'sand-sale',
    icon: Building,
    title: 'Продажа песка',
    description: 'Высококачественный песок для строительных и инженерных проектов.',
    image: '/lovable-uploads/249cb742-4a2b-469e-b6b0-e0da82093c55.png',
    link: '/ru/services/sale-of-sand'
  },
  {
    id: 'earthworks',
    icon: Wrench,
    title: 'Земляные работы',
    description: 'Комплексные услуги по земляным работам для строительных и экологических проектов.',
    image: '/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png',
    link: '/ru/services/earthworks'
  },
  {
    id: 'planning',
    icon: Users,
    title: 'Планирование и развитие бизнеса',
    description: 'Стратегическое планирование и консультации по развитию экологического бизнеса.',
    image: '/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png',
    link: '/ru/services/planning-business-development'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Комплексные экологические решения для промышленности и строительства
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="group cursor-pointer card-premium hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="h-6 w-6 text-brand-primary" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-fg-secondary mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors"
                    >
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-fg-primary mb-6">
                Готовы начать ваш проект?
              </h2>
              <p className="text-lg text-fg-secondary mb-8">
                Свяжитесь с нами для консультации по вашим экологическим потребностям
              </p>
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                <Link to="/ru/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default Services;