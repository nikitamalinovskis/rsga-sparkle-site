import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Leaf, Truck, Droplets, CheckCircle, Users, Award, Globe } from 'lucide-react';

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
    icon: Leaf,
    title: 'Альтернативное покрытие',
    description: 'Экологичные решения для ежедневного покрытия свалок'
  },
  {
    icon: Droplets,
    title: 'Гидропосев',
    description: 'Быстрое восстановление растительности'
  },
  {
    icon: Truck,
    title: 'Промышленный дезодорант',
    description: 'Контроль запахов и пыли'
  }
];

const stats = [
  { icon: Users, label: "Лет опыта", value: "10+" },
  { icon: Award, label: "Удовлетворенность", value: "95%+" },
  { icon: Globe, label: "Покрытие", value: "Латвия и Европа" },
  { icon: CheckCircle, label: "Проекты", value: "1000+" }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Hero Background Image - Subtle landscape illustration */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/2edbc74c-48d5-40db-b417-981c9566080b.png)'
          }}
        />
        
        <div className="container-3of4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/rsga_logo_footer.png" 
                alt="RSGA Logo" 
                className="h-20 mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6">
              Экологические решения для устойчивого будущего
            </h1>
            <p className="text-xl text-fg-secondary mb-8 leading-relaxed">
              Улучшаем экологическую устойчивость с помощью инновационных, проверенных на практике решений для промышленности и строительства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-strong">
                <Link to="/ru/services">
                  Наши услуги
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/ru/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-3of4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fg-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-fg-secondary">
              Комплексные экологические решения для современного бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-premium text-center p-6">
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">{service.title}</h3>
                  <p className="text-fg-secondary">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/ru/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-subtle">
        <div className="container-3of4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 card-premium">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-fg-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-fg-secondary">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-3of4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fg-primary mb-6">О компании RSGA</h2>
              <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                Мы специализируемся на предоставлении экологических решений для промышленности, 
                помогая компаниям соблюдать экологические стандарты и снижать воздействие на окружающую среду.
              </p>
              <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
                Наш опыт включает работу со свалками, строительными площадками и промышленными объектами 
                по всей Латвии и Европе.
              </p>
              <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                <Link to="/ru/about">Узнать больше</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                alt="RSGA экологические решения"
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
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

      <Footer contacts={contacts} />
    </div>
  );
};

export default Home;