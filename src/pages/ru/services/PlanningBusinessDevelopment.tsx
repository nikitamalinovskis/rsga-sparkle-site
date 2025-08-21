import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Target, BarChart, FileCheck, Users } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const focusAreas = [
  { icon: FileCheck, title: "Соответствие нормативам", description: "Обеспечение соответствия европейским и местным экологическим нормативам" },
  { icon: Target, title: "Дорожная карта технологий", description: "Стратегическое планирование для внедрения и модернизации технологий" },
  { icon: BarChart, title: "Бизнес-кейсы", description: "Финансовый анализ и разработка бизнес-кейсов для инвестиций" },
  { icon: Users, title: "Настройка KPI и отчетности", description: "Системы измерения производительности и нормативная отчетность" }
];

const services = [
  { title: "Операционная оценка", description: "Комплексный обзор текущих операций полигона и анализ эффективности" },
  { title: "Планирование соответствия", description: "Стратегия соблюдения нормативных требований и планирование внедрения" },
  { title: "Оптимизация затрат", description: "Анализ CAPEX/OPEX и стратегии снижения затрат" },
  { title: "Интеграция технологий", description: "Оценка и внедрение новых экологических технологий" },
  { title: "Мониторинг производительности", description: "Разработка KPI и системы мониторинга для операционного совершенства" },
  { title: "Стратегическое планирование", description: "Долгосрочное планирование роста и устойчивости" }
];

const benefits = [
  "Улучшенная операционная эффективность и контроль затрат",
  "Повышенное соблюдение нормативных требований и управление рисками",
  "Стратегическое внедрение технологий и модернизация",
  "Принятие решений на основе данных и отслеживание производительности",
  "Устойчивый рост и конкурентное преимущество",
  "Доверие заинтересованных сторон и прозрачность"
];

const PlanningBusinessDevelopment = () => {
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
              <span className="text-fg-primary">Планирование и развитие бизнеса</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Планирование и развитие бизнеса
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Практические консультации для устойчивых операций полигонов, эффективности CAPEX/OPEX и соответствия требованиям.
                </p>
                <p className="text-lg text-fg-secondary mb-8">
                  <strong>Фокус:</strong> Соответствие нормативам, дорожная карта технологий, бизнес-кейсы, настройка KPI и отчетности.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Забронировать консультацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
                  alt="Бизнес-консультации и планирование для устойчивого управления полигонами и соответствия требованиям"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наши области фокуса</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Стратегические консультационные услуги, разработанные для улучшения ваших операций полигонов и бизнес-показателей
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.map((area, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <area.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{area.title}</h3>
                    <p className="text-fg-secondary text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Консультационные услуги</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Комплексные услуги по развитию бизнеса и операционной оптимизации
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

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Ожидаемые результаты</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Наши услуги планирования и развития бизнеса обеспечивают измеримые улучшения в операционной производительности и стратегическом позиционировании:
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Наш подход</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Target className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Этап оценки</h4>
                          <p className="text-sm text-fg-secondary">Комплексная оценка текущих операций и рыночного положения</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <BarChart className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Стратегическое планирование</h4>
                          <p className="text-sm text-fg-secondary">Разработка действенных стратегий и дорожных карт внедрения</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <FileCheck className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Поддержка внедрения</h4>
                          <p className="text-sm text-fg-secondary">Постоянная поддержка и мониторинг во время выполнения стратегии</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Опыт:</strong> Наша команда сочетает техническую экспертизу с бизнесовой проницательностью для предоставления практических решений.
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
                Оптимизируйте работу вашего полигона
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Запланируйте консультацию, чтобы обсудить, как наши услуги планирования и развития бизнеса могут улучшить ваши операции и стратегическое положение.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Забронировать консультацию
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

export default PlanningBusinessDevelopment;