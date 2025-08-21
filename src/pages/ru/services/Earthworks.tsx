import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Construction, Shield, Users, Award } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const services = [
  { title: "Выемка грунта", description: "Выемка участка для фундаментов, коммуналок и развития инфраструктуры" },
  { title: "Планировка/Выравнивание", description: "Точная планировка и выравнивание для строительных и ландшафтных проектов" },
  { title: "Рытье траншей", description: "Рытье траншей для коммуналок и поддержка установки трубопроводов" },
  { title: "Вывоз материала", description: "Услуги удаления и утилизации материала" },
  { title: "Уплотнение", description: "Уплотнение и стабилизация почвы для подготовки фундамента" },
  { title: "Подготовка участка", description: "Комплексная подготовка участка для строительных проектов" }
];

const features = [
  { icon: Users, title: "Сертифицированные операторы", description: "Опытные и сертифицированные операторы тяжелой техники" },
  { icon: Construction, title: "Современный автопарк", description: "Хорошо обслуживаемая современная экскавационная и землеройная техника" },
  { icon: Shield, title: "Контроль HSE", description: "Комплексный контроль здоровья, безопасности и окружающей среды" },
  { icon: Award, title: "Гарантия качества", description: "Стабильное качество и профессиональное управление проектами" }
];

const projectTypes = [
  "Развитие инфраструктуры",
  "Коммерческое строительство",
  "Жилые проекты",
  "Промышленные объекты",
  "Дорожное строительство",
  "Установка коммуналок",
  "Ландшафтные проекты",
  "Экологическая реабилитация"
];

const Earthworks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-bg-subtle border-b border-border-subtle">
          <div className="container-3of4">
            <nav className="flex items-center space-x-2 text-sm text-fg-muted">
              <Link to="/ru" className="hover:text-brand-primary transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Главная
              </Link>
              <span>→</span>
              <Link to="/ru/services" className="hover:text-brand-primary transition-colors">
                Услуги
              </Link>
              <span>→</span>
              <span className="text-fg-primary">Земляные работы</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Земляные работы
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Полный цикл услуг по земляным работам для инфраструктуры и строительства.
                </p>
                <p className="text-lg text-fg-secondary mb-8">
                  <strong>Сфера деятельности:</strong> Выемка грунта, планировка/выравнивание, рытье траншей, вывоз материала, уплотнение.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Спланировать ваш проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
                  alt="Профессиональные услуги земляных работ с экскаваторами и самосвалами для строительных проектов"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наши услуги земляных работ</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Комплексные решения по земляным работам для всех типов строительных и инфраструктурных проектов
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{service.title}</h3>
                        <p className="text-fg-secondary text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Safety Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Качество и безопасность</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Профессиональные стандарты во всех аспектах наших операций земляных работ
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{feature.title}</h3>
                    <p className="text-fg-secondary text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Типы проектов</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Мы предоставляем услуги земляных работ для широкого спектра строительных и девелоперских проектов:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Управление проектами</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Construction className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Предпроектное планирование</h4>
                          <p className="text-sm text-fg-secondary">Оценка участка и детальное планирование для оптимальной эффективности</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Shield className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Управление безопасностью</h4>
                          <p className="text-sm text-fg-secondary">Комплексные протоколы безопасности и управление рисками</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Award className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Контроль качества</h4>
                          <p className="text-sm text-fg-secondary">Регулярные проверки качества и соблюдение спецификаций</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Оборудование:</strong> Современный автопарк, включая экскаваторы, бульдозеры, уплотнители и самосвалы, обслуживаемые по высочайшим стандартам.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Начните ваш проект земляных работ
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Свяжитесь с нашей опытной командой, чтобы обсудить ваши требования к земляным работам и получить детальный план проекта.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Спланировать ваш проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Earthworks;