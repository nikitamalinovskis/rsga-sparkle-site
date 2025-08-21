import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Условия использования | RSGA"
        description="Правила пользования сайтом и услугами RSGA."
        canonical="https://rsga.lv/ru/terms-of-service"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Условия предоставления услуг
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Последнее обновление: Март 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium">
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">1. Общие положения</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Настоящие условия предоставления услуг ("Условия") регулируют использование услуг, предоставляемых SIA RSGA ("Компания", "мы", "нас", "наш"). Используя наши услуги, вы соглашаетесь с настоящими Условиями.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">2. Описание услуг</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        Компания предоставляет следующие услуги:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Альтернативное покрытие для свалок</li>
                        <li>Гидропосев и восстановление растительности</li>
                        <li>Промышленные дезодоранты и контроль пыли</li>
                        <li>Продажа песка и строительных материалов</li>
                        <li>Земляные работы</li>
                        <li>Планирование и развитие бизнеса</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">3. Использование услуг</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        При использовании наших услуг вы соглашаетесь:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Предоставлять точную и полную информацию</li>
                        <li>Соблюдать все применимые законы и нормативы</li>
                        <li>Не использовать услуги для незаконных целей</li>
                        <li>Своевременно оплачивать предоставленные услуги</li>
                        <li>Соблюдать требования безопасности на объектах</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">4. Договоры и оплата</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Все услуги предоставляются на основании письменных договоров. Оплата производится в соответствии с условиями договора. В случае просрочки платежа Компания оставляет за собой право приостановить предоставление услуг и взыскать штрафные санкции.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">5. Качество услуг</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Компания обязуется предоставлять услуги в соответствии с профессиональными стандартами и применимыми нормативными требованиями. Все работы выполняются квалифицированным персоналом с использованием современного оборудования.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">6. Ответственность и гарантии</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        Компания гарантирует качество предоставляемых услуг в рамках, установленных договором. Ответственность Компании ограничивается:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Стоимостью предоставленных услуг</li>
                        <li>Прямыми убытками, возникшими в результате нарушения договора</li>
                        <li>Случаями, предусмотренными действующим законодательством</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">7. Форс-мажор</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Компания не несет ответственности за невыполнение или ненадлежащее выполнение обязательств, если это вызвано обстоятельствами непреодолимой силы, включая стихийные бедствия, военные действия, изменения в законодательстве или другие события, находящиеся вне контроля Компании.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">8. Конфиденциальность</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Компания обязуется сохранять конфиденциальность всей информации, полученной в ходе предоставления услуг, за исключением случаев, предусмотренных законом или с письменного согласия клиента.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">9. Интеллектуальная собственность</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Все права интеллектуальной собственности на методы, технологии и разработки, используемые Компанией, остаются собственностью Компании. Клиент получает право использования результатов работ в рамках, установленных договором.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">10. Разрешение споров</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Все споры, возникающие в связи с предоставлением услуг, разрешаются путем переговоров. В случае невозможности достижения соглашения споры рассматриваются в судах Латвийской Республики в соответствии с действующим законодательством.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">11. Изменения условий</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Компания оставляет за собой право изменять настоящие Условия. Об изменениях клиенты уведомляются заблаговременно. Продолжение использования услуг после внесения изменений означает согласие с новыми условиями.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">12. Контактная информация</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        По всем вопросам, связанным с настоящими Условиями, обращайтесь:
                      </p>
                      <div className="bg-bg-subtle p-4 rounded-lg">
                        <p className="text-fg-secondary"><strong>SIA RSGA</strong></p>
                        <p className="text-fg-secondary"><strong>Рег. номер:</strong> {contacts.registration_no}</p>
                        <p className="text-fg-secondary"><strong>Адрес:</strong> {contacts.address}</p>
                        <p className="text-fg-secondary"><strong>Телефон:</strong> {contacts.phone}</p>
                        <p className="text-fg-secondary"><strong>Email:</strong> {contacts.email}</p>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default TermsOfService;