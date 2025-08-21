import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Wind, Shield, Users, FileCheck } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  { icon: Wind, title: "Улучшение качества воздуха", description: "Эффективная нейтрализация запахов и подавление пыли" },
  { icon: Users, title: "Комфорт для сообщества", description: "Снижение воздействия на соседние сообщества" },
  { icon: FileCheck, title: "Соответствие нормативам", description: "Помогает соблюдать требования экологического соответствия" },
  { icon: Shield, title: "Безопасные операции", description: "Улучшенные условия труда и безопасность дорожного движения" }
];

const applications = [
  { location: "Полигоны", description: "Контроль запахов и подавление пыли в активных зонах" },
  { location: "Склады материалов", description: "Предотвращение пылевых выбросов от хранящихся материалов" },
  { location: "Подъездные дороги", description: "Контроль пыли на грунтовых дорогах и подъездных путях" },
  { location: "Строительные площадки", description: "Управление качеством воздуха во время земляных работ" },
  { location: "Перерабатывающие предприятия", description: "Контроль запахов и пыли в зонах обработки" },
  { location: "Перегрузочные станции", description: "Комплексное управление качеством воздуха" }
];

const IndustrialDeodorantDust = () => {
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
              <span className="text-fg-primary">Промышленный дезодорант и пылеподавление</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Промышленный дезодорант и пылеподавление
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Устраните запахи и подавите пыль для более безопасных и комфортных операций на полигонах и промышленных объектах.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Поговорить со специалистом
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
                  alt="Оборудование для промышленного дезодоранта и пылеподавления для полигонов и промышленных объектов"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Ключевые преимущества</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Профессиональные решения для контроля запахов и подавления пыли в промышленных средах
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{benefit.title}</h3>
                    <p className="text-fg-secondary text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Где мы применяем наши решения</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Наши дезодоранты и средства пылеподавления эффективны в различных промышленных средах
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{app.location}</h3>
                        <p className="text-fg-secondary text-sm">{app.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Information */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Технический подход</h2>
                <p className="text-lg text-fg-secondary mb-6">
                  Наши промышленные решения дезодорантов и средств пылеподавления используют передовые составы, разработанные для сложных промышленных сред.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <Wind className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Нейтрализация запахов</h4>
                      <p className="text-sm text-fg-secondary">Продвинутая химическая нейтрализация пахучих соединений</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <Shield className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Подавление пыли</h4>
                      <p className="text-sm text-fg-secondary">Долговременный контроль пыли с минимальным повторным применением</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <FileCheck className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Экологическая безопасность</h4>
                      <p className="text-sm text-fg-secondary">Биоразлагаемые составы, соответствующие экологическим стандартам</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Методы применения</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Распылительное применение</h4>
                        <p className="text-sm text-fg-secondary mb-3">Прямое применение с использованием специализированного распылительного оборудования для немедленного контроля запахов и подавления пыли.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Системы туманообразования</h4>
                        <p className="text-sm text-fg-secondary mb-3">Применение тонкого тумана для комплексного покрытия территории и контроля атмосферных запахов.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Обработка поверхности</h4>
                        <p className="text-sm text-fg-secondary">Долгосрочное связывание поверхности для дорог и открытых участков для предотвращения образования пыли.</p>
                      </div>
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
                Улучшите качество воздуха на вашем объекте
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Свяжитесь с нашими специалистами для разработки индивидуального плана контроля запахов и подавления пыли для ваших конкретных потребностей.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Поговорить со специалистом
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

export default IndustrialDeodorantDust;