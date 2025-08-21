import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const stats = [
  { icon: Users, label: "Лет опыта", value: "10+", description: "на крупных объектах" },
  { icon: Award, label: "Удовлетворенность клиентов", value: "95%+", description: "уровень удовлетворенности" },
  { icon: Globe, label: "Покрытие", value: "Латвия и Европа", description: "область деятельности" },
  { icon: CheckCircle, label: "Проекты", value: "1000+", description: "тонн обработано" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="О компании RSGA | Эксперты по управлению отходами"
        description="Миссия RSGA, география работы и профессиональная команда."
        canonical="https://rsga.lv/ru/about"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                О компании RSGA
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Улучшаем экологическую устойчивость с помощью инновационных, проверенных на практике решений.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Наша миссия</h2>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  Улучшаем экологическую устойчивость с помощью инновационных, проверенных на практике решений.
                </p>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  <strong>Что мы делаем:</strong> Услуги в сфере отходов для свалок и строительных площадок по всей Латвии и Европе.
                </p>
                <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
                  <strong>Почему RSGA:</strong> Операционный опыт, измеримая экономия, подход, ориентированный на соответствие требованиям.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/ru/services">Наши услуги</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="Экологические решения RSGA"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наше влияние</h2>
              <p className="text-lg text-fg-secondary">
                Нам доверяют ведущие организации по всей Латвии и Европе
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-fg-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-fg-secondary mb-1">{stat.label}</div>
                    <div className="text-xs text-fg-muted">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Наши ценности</h2>
              <p className="text-lg text-fg-secondary">
                Принципы, которыми мы руководствуемся в нашей работе
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-premium p-6">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">Экологическая ответственность</h3>
                  <p className="text-fg-secondary">
                    Мы стремимся к защите окружающей среды во всех наших проектах
                  </p>
                </CardContent>
              </Card>
              <Card className="card-premium p-6">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">Качество</h3>
                  <p className="text-fg-secondary">
                    Высочайшие стандарты качества в каждом выполненном проекте
                  </p>
                </CardContent>
              </Card>
              <Card className="card-premium p-6">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-fg-primary mb-3">Партнерство</h3>
                  <p className="text-fg-secondary">
                    Долгосрочные отношения с клиентами, основанные на доверии
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-fg-primary mb-6">
                Готовы работать с нами?
              </h2>
              <p className="text-lg text-fg-secondary mb-8">
                Свяжитесь с нами сегодня для обсуждения ваших экологических потребностей
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

export default About;