import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Truck, Clock, Award, Settings } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const specifications = [
  { title: "Варианты фракций", description: "Различные размеры зерен для соответствия конкретным строительным требованиям" },
  { title: "Диапазон влажности", description: "Контролируемое содержание влаги для оптимальной обработки и применения" },
  { title: "Стандарты качества", description: "Вся продукция соответствует спецификациям качества строительной отрасли" },
  { title: "Планирование доставки", description: "Гибкие варианты доставки в соответствии с графиком проекта" },
  { title: "Варианты объема", description: "От небольших количеств до поставок для крупномасштабных проектов" },
  { title: "Документация", description: "Полные сертификаты качества и документация на доставку" }
];

const features = [
  { icon: Award, title: "Высокое качество", description: "Стабильное качество песка, соответствующее отраслевым стандартам" },
  { icon: Truck, title: "Надежные поставки", description: "Надежные графики доставки и количества" },
  { icon: Clock, title: "Гибкая доставка", description: "Планирование, которое работает с вашим графиком проекта" },
  { icon: Settings, title: "Индивидуальные спецификации", description: "Различные фракции и спецификации доступны" }
];

const applications = [
  "Производство бетона",
  "Строительство и здания",
  "Дорожное строительство и обслуживание",
  "Ландшафтные проекты",
  "Промышленные применения",
  "Развитие инфраструктуры"
];

const SaleOfSand = () => {
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
              <span className="text-fg-primary">Продажа песка</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Продажа песка
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Стабильный, высококачественный песок для строительных и промышленных целей с гибкой доставкой.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/contacts">
                    Узнать цены
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
                  alt="Поставка высококачественного песка для строительных и промышленных применений"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Почему выбрать наши поставки песка</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Надежное качество и доставка для ваших строительных и промышленных потребностей
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

        {/* Specifications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Спецификации продукта</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Комплексный ассортимент песчаных продуктов для удовлетворения ваших конкретных требований
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specifications.map((spec, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{spec.title}</h3>
                        <p className="text-fg-secondary text-sm">{spec.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Применение</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Наши песчаные продукты подходят для широкого спектра строительных и промышленных применений:
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
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Доставка и логистика</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Truck className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Собственный автопарк</h4>
                          <p className="text-sm text-fg-secondary">Собственный автопарк доставки обеспечивает надежные и своевременные доставки</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Clock className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Гибкое планирование</h4>
                          <p className="text-sm text-fg-secondary">Графики доставки, адаптированные к временным рамкам вашего проекта</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Settings className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Индивидуальные заказы</h4>
                          <p className="text-sm text-fg-secondary">Конкретные фракции и количества для соответствия точным требованиям</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Примечание:</strong> Вся песчаная продукция поставляется с сертификатами качества и соответствует стандартам строительной отрасли.
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
                Готовы заказать качественный песок?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Свяжитесь с нами для получения цен и вариантов доставки, адаптированных к требованиям вашего проекта.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ru/contacts">
                  Узнать цены
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

export default SaleOfSand;