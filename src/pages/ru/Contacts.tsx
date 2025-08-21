import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, FileText, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Контакты RSGA | Управление отходами в Латвии и Европе"
        description="Свяжитесь с RSGA для консультаций и услуг в сфере управления отходами."
        canonical="https://rsga.lv/ru/contacts"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Контакты
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Свяжитесь с нами для консультации по экологическим решениям
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-8">Свяжитесь с нами</h2>
                <div className="space-y-6">
                  <Card className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Адрес</h3>
                          <p className="text-fg-secondary">{contacts.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Телефон</h3>
                          <p className="text-fg-secondary">{contacts.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Email</h3>
                          <p className="text-fg-secondary">{contacts.email}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <FileText className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Факс</h3>
                          <p className="text-fg-secondary">{contacts.fax}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Время работы</h3>
                          <p className="text-fg-secondary">Пн-Пт: 8:00 - 17:00</p>
                          <p className="text-fg-secondary">Сб-Вс: По договоренности</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-fg-primary mb-2">
                            Имя *
                          </label>
                          <Input 
                            id="firstName" 
                            placeholder="Ваше имя"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-fg-primary mb-2">
                            Фамилия *
                          </label>
                          <Input 
                            id="lastName" 
                            placeholder="Ваша фамилия"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-fg-primary mb-2">
                          Email *
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="ваш@email.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-fg-primary mb-2">
                          Телефон
                        </label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+371 XX XXX XXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-fg-primary mb-2">
                          Тема *
                        </label>
                        <Input 
                          id="subject" 
                          placeholder="Тема вашего сообщения"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-fg-primary mb-2">
                          Сообщение *
                        </label>
                        <Textarea 
                          id="message" 
                          rows={5}
                          placeholder="Расскажите нам о ваших потребностях..."
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-primary hover:bg-brand-primary-strong"
                        size="lg"
                      >
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-fg-primary mb-6">Информация о компании</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-lg text-fg-secondary mb-2">
                    <strong>Компания:</strong> {contacts.company}
                  </p>
                  <p className="text-lg text-fg-secondary">
                    <strong>Регистрационный номер:</strong> {contacts.registration_no}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-fg-secondary mb-2">
                    <strong>НДС номер:</strong> LV40003811272
                  </p>
                  <p className="text-lg text-fg-secondary">
                    <strong>Банк:</strong> Swedbank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  );
};

export default Contacts;