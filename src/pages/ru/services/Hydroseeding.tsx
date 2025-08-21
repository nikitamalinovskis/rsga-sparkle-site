import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Leaf, Clock, DollarSign, Shield } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  { icon: Clock, title: "Быстрое прорастание", description: "Быстрое формирование растительного покрова" },
  { icon: DollarSign, title: "Экономически выгодно", description: "Более выгодно, чем установка традиционного газона" },
  { icon: Shield, title: "Стабилизирует склоны", description: "Эффективная борьба с эрозией и стабилизация почвы" },
  { icon: Leaf, title: "Улучшает эстетику", description: "Превращает нарушенные территории в зеленые ландшафты" }
];

const applications = [
  "Склоны и покрытия полигонов",
  "Участки рекультивации карьеров",
  "Дорожные насыпи и выемки",
  "Стабилизация строительных площадок",
  "Трубопроводные коридоры",
  "Нарушенные природные территории"
];

const processSteps = [
  {
    step: 1,
    title: "Разработка смеси семян и мульчи",
    description: "Индивидуальная формула на основе почвенных условий, климата и назначения"
  },
  {
    step: 2,
    title: "Применение",
    description: "Профессиональное нанесение с использованием специализированного оборудования для гидропосева"
  },
  {
    step: 3,
    title: "Мониторинг и корректировки",
    description: "Регулярный мониторинг и дополнительные применения по мере необходимости для оптимальных результатов"
  }
];

const Hydroseeding = () => {
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
              <span className="text-fg-primary">Гидропосев</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Гидропосев
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Проверенный метод борьбы с эрозией и быстрого формирования растительности на нарушенных территориях.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Запросить выезд на объект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
                  alt="Услуги гидропосева - Профессиональное нанесение смеси семян и мульчи на склоны"
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
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Почему выбрать гидропосев?</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Гидропосев обеспечивает превосходные результаты по сравнению с традиционными методами посева
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Применение</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Гидропосев эффективен в широком спектре сред и типов проектов:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Технические преимущества</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Leaf className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Равномерное покрытие</h4>
                          <p className="text-sm text-fg-secondary">Обеспечивает равномерное распределение семян и мульчи по рельефу</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Shield className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Устойчивость к погоде</h4>
                          <p className="text-sm text-fg-secondary">Мульчирующая матрица защищает семена от ветровой и дождевой эрозии</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Clock className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Быстрое нанесение</h4>
                          <p className="text-sm text-fg-secondary">Большие территории могут быть покрыты быстро и эффективно</p>
                        </div>
                      </div>
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
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наш процесс гидропосева</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Мы следуем проверенной методологии для обеспечения успешного формирования растительности
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
                Преобразуйте ваши склоны с профессиональным гидропосевом
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Позвольте нашим экспертам оценить ваш объект и предоставить индивидуальное решение для гидропосева для оптимальной борьбы с эрозией и формирования растительности.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Запросить выезд на объект
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

export default Hydroseeding;