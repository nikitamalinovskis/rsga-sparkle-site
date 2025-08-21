import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  "На 30-60% меньше манипуляций с материалом по сравнению с почвенным покрытием",
  "Более быстрые ежедневные операции, улучшенное планирование объекта",
  "Сокращение ветрового мусора и улучшение гигиены объекта",
  "Практики, соответствующие стандартам ЕС"
];

const useCases = [
  "Муниципальные полигоны",
  "Перегрузочные станции",
  "Применение промежуточного покрытия"
];

const processSteps = [
  {
    step: 1,
    title: "Оценка объекта",
    description: "Комплексная оценка вашего полигона и операционных требований"
  },
  {
    step: 2,
    title: "План применения",
    description: "Индивидуальный план внедрения альтернативного покрытия"
  },
  {
    step: 3,
    title: "Постоянная оптимизация и отчетность",
    description: "Непрерывный мониторинг и оптимизация с регулярными отчетами о производительности"
  }
];

const AlternativeCover = () => {
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
              <span className="text-fg-primary">Альтернативное покрытие</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Альтернативное ежедневное и долгосрочное покрытие
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Замените традиционное почвенное покрытие более безопасным, быстрым и экономически выгодным решением. Сократите транспортные расходы и расходы на хранение, снизите операционные риски и обеспечьте соответствие стандартам ЕС.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Получить расценки
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="Услуги альтернативного покрытия - Промышленный дезодорант и пылеподавляющее оборудование"
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
                Наши решения альтернативного покрытия обеспечивают измеримые улучшения эффективности и экономии затрат
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <p className="text-fg-secondary">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Применение</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Наши решения альтернативного покрытия идеально подходят для различных объектов управления отходами:
                </p>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Почему выбрать альтернативное покрытие?</h3>
                    <p className="text-fg-secondary mb-6">
                      Традиционное почвенное покрытие требует значительных транспортных расходов, места для хранения и времени на обработку. Наши альтернативные решения обеспечивают превосходную производительность при снижении операционной сложности.
                    </p>
                    <div className="bg-brand-tint p-4 rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Примечание о соответствии:</strong> Все наши решения альтернативного покрытия соответствуют экологическим стандартам ЕС и местным нормативным требованиям.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наш процесс</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Мы следуем систематическому подходу для обеспечения оптимальных результатов для вашего объекта
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center p-8 card-premium">
                  <CardContent className="pt-6">
                    <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">{step.title}</h3>
                    <p className="text-fg-secondary">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Готовы оптимизировать работу вашего полигона?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Свяжитесь с нашими экспертами, чтобы узнать, как решения альтернативного покрытия могут снизить ваши расходы и повысить эффективность.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Получить расценки сегодня
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

export default AlternativeCover;