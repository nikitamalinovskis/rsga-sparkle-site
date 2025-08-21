import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const blogPosts = [
  {
    id: 'alternative-daily-cover-solutions',
    title: 'Решения для альтернативного ежедневного покрытия свалок',
    excerpt: 'Изучите экологически чистые альтернативы традиционному почвенному покрытию для современных свалок.',
    date: '2024-03-15',
    author: 'RSGA Team',
    category: 'Экологические решения',
    image: '/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png',
    link: '/ru/blog/alternative-daily-cover-solutions'
  },
  {
    id: 'hydroseeding-vs-traditional-seeding',
    title: 'Гидропосев против традиционного посева',
    excerpt: 'Сравнительный анализ методов восстановления растительности для крупномасштабных проектов.',
    date: '2024-03-10',
    author: 'RSGA Team',
    category: 'Технологии',
    image: '/lovable-uploads/d81a5f15-b1e3-4677-93eb-a1dcc3d6e0f3.png',
    link: '/ru/blog/hydroseeding-vs-traditional-seeding'
  },
  {
    id: 'sustainable-waste-management-eu-compliance',
    title: 'Устойчивое управление отходами и соответствие требованиям ЕС',
    excerpt: 'Руководство по соблюдению европейских норм в области управления отходами.',
    date: '2024-03-05',
    author: 'RSGA Team',
    category: 'Регулирование',
    image: '/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png',
    link: '/ru/blog/sustainable-waste-management-eu-compliance'
  }
];

const categories = ['Все', 'Экологические решения', 'Технологии', 'Регулирование'];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Блог RSGA | Современные тренды в управлении отходами"
        description="Статьи об инновациях, экологии и устойчивом управлении отходами."
        canonical="https://rsga.lv/ru/blog"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Блог
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Инсайты, новости и экспертные мнения в области экологических решений
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container-3of4">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  className={category === 'Все' ? 'bg-brand-primary hover:bg-brand-primary-strong' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group cursor-pointer card-premium hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-fg-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('ru-RU')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-fg-secondary mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors"
                    >
                      <Link to={post.link} className="flex items-center justify-center gap-2">
                        Читать далее
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-fg-primary mb-6">
                Подпишитесь на обновления
              </h2>
              <p className="text-lg text-fg-secondary mb-8">
                Получайте последние новости и инсайты в области экологических решений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <Button className="bg-brand-primary hover:bg-brand-primary-strong">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default Blog;