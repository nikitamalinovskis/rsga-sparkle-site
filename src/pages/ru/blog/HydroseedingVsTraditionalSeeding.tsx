import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle2 } from "lucide-react";
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

const HydroseedingVsTraditionalSeeding = () => {
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
                  Гидропосев
                </Badge>
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    18 августа, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    10 мин чтения
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Эксперт RSGA
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
                Гидропосев против традиционного посева: Сравнение для контроля эрозии
              </h1>
              
              <p className="text-xl text-fg-secondary leading-relaxed">
                Узнайте, почему гидропосев стал ведущим выбором для рекультивации и контроля эрозии, 
                предлагая превосходные преимущества по сравнению с традиционными методами посева.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Comparison Table */}
              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-6">Сравнительная таблица</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border-default">
                        <th className="text-left p-4 text-fg-primary font-semibold">Критерий</th>
                        <th className="text-left p-4 text-brand-primary font-semibold">Гидропосев</th>
                        <th className="text-left p-4 text-fg-muted font-semibold">Традиционный посев</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Скорость установки</td>
                        <td className="p-4 text-fg-secondary">✓ Очень быстрая (1-2 дня)</td>
                        <td className="p-4 text-fg-secondary">Медленная (1-2 недели)</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Скорость прорастания</td>
                        <td className="p-4 text-fg-secondary">✓ 3-7 дней</td>
                        <td className="p-4 text-fg-secondary">10-21 день</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Защита от эрозии</td>
                        <td className="p-4 text-fg-secondary">✓ Мгновенная</td>
                        <td className="p-4 text-fg-secondary">Отсроченная</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Стоимость</td>
                        <td className="p-4 text-fg-secondary">✓ Ниже</td>
                        <td className="p-4 text-fg-secondary">Выше</td>
                      </tr>
                      <tr className="border-b border-border-subtle">
                        <td className="p-4 text-fg-primary font-medium">Трудозатраты</td>
                        <td className="p-4 text-fg-secondary">✓ Низкие</td>
                        <td className="p-4 text-fg-secondary">Высокие</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-md mb-12">
                <h2 className="text-2xl font-bold text-fg-primary mb-4">Преимущества гидропосева</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Быстрая установка</h4>
                        <p className="text-fg-secondary">Большие площади могут быть обработаны за очень короткое время</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Мгновенная защита</h4>
                        <p className="text-fg-secondary">Мульча обеспечивает немедленный контроль эрозии</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Экономически эффективный</h4>
                        <p className="text-fg-secondary">Более низкие общие затраты по сравнению с традиционными методами</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Равномерное распределение семян</h4>
                        <p className="text-fg-secondary">Оптимальная плотность распределения семян по всей площади</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Труднодоступные места</h4>
                        <p className="text-fg-secondary">Возможность обработки крутых склонов и недоступных зон</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-fg-primary">Экологичность</h4>
                        <p className="text-fg-secondary">Меньшее воздействие на окружающую среду и потребление природных ресурсов</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Области применения</h3>
                <ul className="space-y-2 text-fg-secondary mb-6">
                  <li>• Стабилизация откосов дорог</li>
                  <li>• Рекультивация полигонов отходов</li>
                  <li>• Контроль эрозии на строительных площадках</li>
                  <li>• Восстановление ландшафтов промышленных объектов</li>
                  <li>• Защита железнодорожной инфраструктуры</li>
                  <li>• Рекультивация гравийных карьеров</li>
                </ul>

                <h3 className="text-xl font-semibold text-fg-primary mb-4">Процесс гидропосева RSGA</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Анализ территории</h4>
                      <p className="text-fg-secondary">Оценка почвенных условий и климатических факторов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Подготовка смеси</h4>
                      <p className="text-fg-secondary">Создание смеси специально отобранных семян, удобрений и мульчи</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Профессиональная установка</h4>
                      <p className="text-fg-secondary">Точное нанесение смеси специализированным оборудованием</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-fg-primary">Мониторинг результатов</h4>
                      <p className="text-fg-secondary">Регулярный контроль и корректировки при необходимости</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-cta text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Выберите эффективный контроль эрозии
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Свяжитесь с RSGA для получения профессиональной консультации по возможностям гидропосева для вашего проекта.
                </p>
                <Link to="/ru/contacts">
                  <Button variant="secondary" size="lg" className="bg-white text-brand-primary hover:bg-bg-subtle">
                    Узнать больше о гидропосеве
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

export default HydroseedingVsTraditionalSeeding;