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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Политика конфиденциальности | RSGA"
        description="Узнайте, как RSGA обрабатывает и защищает ваши персональные данные."
        canonical="https://rsga.lv/ru/privacy-policy"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Последнее обновление: Март 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium">
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">1. Общие положения</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        SIA RSGA (далее - "Компания", "мы", "нас", "наш") уважает вашу конфиденциальность и стремится защитить ваши персональные данные. Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего веб-сайта.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">2. Сбор информации</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        Мы можем собирать следующие типы информации:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Контактная информация (имя, адрес электронной почты, номер телефона)</li>
                        <li>Информация о компании (название компании, должность)</li>
                        <li>Техническая информация (IP-адрес, тип браузера, операционная система)</li>
                        <li>Информация об использовании сайта (посещенные страницы, время на сайте)</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">3. Использование информации</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        Мы используем собранную информацию для:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Предоставления наших услуг и поддержки клиентов</li>
                        <li>Обработки запросов и коммуникации с вами</li>
                        <li>Улучшения нашего веб-сайта и услуг</li>
                        <li>Отправки маркетинговых материалов (с вашего согласия)</li>
                        <li>Соблюдения юридических обязательств</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">4. Защита данных</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Мы принимаем соответствующие технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Все данные хранятся на защищенных серверах с ограниченным доступом.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">5. Файлы cookie</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Наш веб-сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете настроить свой браузер для отклонения файлов cookie, но это может повлиять на функциональность сайта.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">6. Передача данных третьим лицам</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом или для предоставления запрашиваемых услуг.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">7. Ваши права</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        В соответствии с GDPR, у вас есть следующие права:
                      </p>
                      <ul className="list-disc pl-6 text-fg-secondary space-y-2">
                        <li>Право на доступ к вашим персональным данным</li>
                        <li>Право на исправление неточных данных</li>
                        <li>Право на удаление ваших данных</li>
                        <li>Право на ограничение обработки</li>
                        <li>Право на переносимость данных</li>
                        <li>Право на возражение против обработки</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">8. Хранение данных</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Мы храним ваши персональные данные только в течение времени, необходимого для достижения целей, для которых они были собраны, или в соответствии с требованиями законодательства.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">9. Изменения в политике</h2>
                      <p className="text-fg-secondary leading-relaxed">
                        Мы можем обновлять настоящую политику конфиденциальности время от времени. Любые изменения будут опубликованы на этой странице с указанием даты последнего обновления.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-fg-primary mb-4">10. Контактная информация</h2>
                      <p className="text-fg-secondary leading-relaxed mb-4">
                        Если у вас есть вопросы о настоящей политике конфиденциальности или обработке ваших персональных данных, свяжитесь с нами:
                      </p>
                      <div className="bg-bg-subtle p-4 rounded-lg">
                        <p className="text-fg-secondary"><strong>Email:</strong> {contacts.email}</p>
                        <p className="text-fg-secondary"><strong>Телефон:</strong> {contacts.phone}</p>
                        <p className="text-fg-secondary"><strong>Адрес:</strong> {contacts.address}</p>
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

export default PrivacyPolicy;