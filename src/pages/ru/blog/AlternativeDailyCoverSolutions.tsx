import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contacts = {
  company: "ООО RSGA",
  registration_no: "Регистрационный №: 40003811272",
  address: "ул. Даугавпилс 31-52, Рига, LV-1003",
  phone: "+371 26 515 776",
  email: "info@rsga.lv",
  fax: "Факс: +371 65 407 700"
};

const AlternativeDailyCoverSolutions = () => {
  return (
    <div className="min-h-screen bg-bg-default">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container-3of4">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/ru/blog" className="inline-flex items-center gap-2 text-fg-muted hover:text-brand-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Вернуться к блогу
              </Link>
            </div>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-brand-tint text-brand-primary">
                  Управление отходами
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    21 августа, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    8 мин чтения
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Эксперт RSGA
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Альтернативные ежедневные покрытия: Современные решения для управления полигонами
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Откройте для себя, как инновационные альтернативные покрытия RSGA революционизируют ежедневную 
                работу полигонов отходов, обеспечивая более эффективное, экономичное и экологичное решение.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">Что такое альтернативные ежедневные покрытия?</h2>
                <p className="text-fg-secondary mb-6">
                  Традиционные ежедневные покрытия на полигонах отходов часто используют грунт или песок. 
                  Однако эти материалы создают несколько проблем: высокий расход, экологическое воздействие, 
                  транспортные расходы и ограниченная эффективность.
                </p>
                
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Вызовы традиционных решений:</h3>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Высокий расход природных ресурсов</li>
                  <li>• Большие транспортные и материальные затраты</li>
                  <li>• Недостаточный контроль запахов и пыли</li>
                  <li>• Слабый эффект отпугивания птиц и грызунов</li>
                  <li>• Неполное соответствие экологическим стандартам ЕС</li>
                </ul>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Преимущества альтернативных решений RSGA</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Снижение затрат до 40%</h4>
                    <p className="text-fg-secondary">
                      Наши альтернативные покрытия позволяют значительно снизить операционные расходы, 
                      оптимизируя потребление материалов и транспортные потребности.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Защита окружающей среды</h4>
                    <p className="text-fg-secondary">
                      Экологически чистые материалы, снижающие воздействие на окружающую среду и 
                      соответствующие строжайшим экологическим стандартам ЕС.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Улучшенная эффективность</h4>
                    <p className="text-fg-secondary">
                      Лучший контроль запахов, снижение пыли и более эффективное отпугивание вредителей 
                      по сравнению с традиционными решениями.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <h4 className="font-semibold text-fg-primary mb-2">Соответствие стандартам ЕС</h4>
                    <p className="text-fg-secondary">
                      Полное соответствие директивам Европейского Союза по управлению отходами 
                      и защите окружающей среды.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Процесс внедрения</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Оценка объекта</h4>
                      <p className="text-fg-secondary">Детальный анализ полигона и выявление потребностей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Разработка решения</h4>
                      <p className="text-fg-secondary">Индивидуальный план альтернативного покрытия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Профессиональное внедрение</h4>
                      <p className="text-fg-secondary">Качественное внедрение командой экспертов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Мониторинг и поддержка</h4>
                      <p className="text-fg-secondary">Постоянная поддержка и оптимизация решения</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Готовы повысить эффективность вашего полигона?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Свяжитесь с экспертами RSGA для бесплатной консультации и разработки индивидуального решения.
                </p>
                <Link to="/ru/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Связаться с экспертами
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default AlternativeDailyCoverSolutions;