import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Leaf, Shield, Target, TrendingUp } from "lucide-react";
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

const SustainableWasteManagementEuCompliance = () => {
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
                  Соответствие ЕС
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    15 августа, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    12 мин чтения
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Эксперт RSGA
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Устойчивое управление отходами и соответствие стандартам ЕС
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Изучите, как RSGA помогает предприятиям достичь экологических стандартов Европейского Союза, 
                обеспечивая устойчивое и ответственное управление отходами для будущего.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">Европейский зеленый курс и управление отходами</h2>
                <p className="text-fg-secondary mb-6">
                  Европейский зеленый курс ставит амбициозную цель – к 2050 году Европа станет 
                  климатически нейтральным континентом. Эта цель существенно влияет на отрасль 
                  управления отходами, требуя фундаментальных изменений в традиционных подходах.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Leaf className="h-8 w-8 text-green-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Защита окружающей среды</h4>
                    <p className="text-fg-secondary">
                      Строгие правила по сокращению выбросов парниковых газов и защите природных ресурсов.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Регулятивное соответствие</h4>
                    <p className="text-fg-secondary">
                      Необходимость соблюдения все более строгих стандартов ЕС по управлению отходами.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <Target className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Циркулярная экономика</h4>
                    <p className="text-fg-secondary">
                      Переход к модели циркулярной экономики, максимально сокращающей образование отходов.
                    </p>
                  </div>
                  
                  <div className="bg-bg-subtle p-6 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-3" />
                    <h4 className="font-semibold text-fg-primary mb-2">Стимулирование инноваций</h4>
                    <p className="text-fg-secondary">
                      Поддержка новых технологий и методов устойчивого управления отходами.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Основные директивы ЕС</h3>
                <ul className="space-y-3 text-fg-secondary mb-8">
                  <li>• <strong>Директива по отходам (2008/98/ЕК):</strong> Иерархия отходов и цели по переработке</li>
                  <li>• <strong>Директива по полигонам (1999/31/ЕК):</strong> Строгие правила эксплуатации полигонов отходов</li>
                  <li>• <strong>Директива по промышленным выбросам (2010/75/ЕС):</strong> Контроль и сокращение загрязнения</li>
                  <li>• <strong>Регулирование REACH:</strong> Оценка безопасности химических веществ и их контроль</li>
                </ul>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Вызовы соответствия и решения</h2>
                
                <h3 className="text-xl font-semibold text-fg-primary mb-4">Основные вызовы:</h3>
                <div className="bg-bg-subtle p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-fg-secondary">
                    <li>• Сложная регулятивная среда и частые изменения</li>
                    <li>• Высокие затраты на внедрение технологических решений</li>
                    <li>• Необходимость в специализированных знаниях и экспертизе</li>
                    <li>• Требования к обучению и сертификации персонала</li>
                    <li>• Постоянные требования мониторинга и отчетности</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Решения RSGA:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Регулятивное консультирование</h4>
                      <p className="text-fg-secondary">Полная информированность о актуальных требованиях ЕС и их внедрении</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Технологические решения</h4>
                      <p className="text-fg-secondary">Внедрение современных технологий, соответствующих стандартам ЕС</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Мониторинг и отчетность</h4>
                      <p className="text-fg-secondary">Автоматизированные системы сбора данных и отчетов о соответствии</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Обучение персонала</h4>
                      <p className="text-fg-secondary">Регулярное обучение персонала соблюдению стандартов ЕС</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Экономические преимущества</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Снижение затрат</h4>
                    <p className="text-green-700">
                      Более эффективное использование ресурсов и сокращение отходов до 30%
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Доступность фондов ЕС</h4>
                    <p className="text-blue-700">
                      Возможность привлечения финансирования ЕС для реализации экологических проектов
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Повышение конкурентоспособности</h4>
                    <p className="text-purple-700">
                      Более высокая репутация компании и доступ к новым рынкам
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Снижение рисков</h4>
                    <p className="text-orange-700">
                      Минимизация рисков штрафов и судебных разбирательств
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-fg-primary mb-4">Будущие тенденции</h2>
                <p className="text-fg-secondary mb-4">
                  Сфера управления отходами ЕС продолжает развиваться, и предприятиям необходимо быть готовыми 
                  к предстоящим изменениям:
                </p>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Цифровизация и внедрение IoT технологий в мониторинге</li>
                  <li>• Использование искусственного интеллекта в сортировке отходов</li>
                  <li>• Технологии блокчейн для отслеживания отходов</li>
                  <li>• Развитие технологий переработки биологических отходов</li>
                  <li>• Усиление требований к углеродной нейтральности</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Готовы к пути соответствия ЕС?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Свяжитесь с экспертами RSGA для создания персонализированного плана внедрения стандартов ЕС в вашей компании.
                </p>
                <Link to="/ru/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Начать процесс соответствия ЕС
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

export default SustainableWasteManagementEuCompliance;