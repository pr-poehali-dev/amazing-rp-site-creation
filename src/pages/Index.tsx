import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">Amazing RP</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              {['home', 'start', 'rules', 'jobs', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'start' && 'Как начать'}
                  {section === 'rules' && 'Правила'}
                  {section === 'jobs' && 'Вакансии'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/6f2d4e35-d2b3-44ef-b18e-c29e54e221db/files/37b00901-c230-4eda-b61c-719b46ea0099.jpg" 
            alt="Amazing RP background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Amazing RP
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Погрузись в мир ролевых игр. Создай свою историю!
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('rules')}>
              <Icon name="BookOpen" size={20} className="mr-2" />
              Правила сервера
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">1000+ игроков</h3>
                <p className="text-muted-foreground">Активное коммьюнити онлайн 24/7</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Быстрый старт</h3>
                <p className="text-muted-foreground">Начни играть за 5 минут</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Лучший RP</h3>
                <p className="text-muted-foreground">Уникальные игровые механики</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="start" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Как начать играть
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Download', title: 'Скачай клиент', desc: 'Установи GTA V и клиент FiveM' },
              { icon: 'UserPlus', title: 'Регистрация', desc: 'Создай аккаунт на нашем сайте' },
              { icon: 'Settings', title: 'Настрой персонажа', desc: 'Выбери внешность и историю' },
              { icon: 'Play', title: 'Начни игру', desc: 'Заходи на сервер и играй!' }
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-8">
                  <div className="text-4xl font-heading font-bold text-primary/20 mb-4">{index + 1}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={step.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Правила сервера
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                  Общие правила
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 ml-9">
                  <li>• Запрещено использование читов и багов</li>
                  <li>• Уважительное отношение к игрокам</li>
                  <li>• Соблюдение ролевой игры (RP)</li>
                  <li>• Запрет на метагейминг</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="MessageSquare" size={24} className="text-accent" />
                  Правила общения
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 ml-9">
                  <li>• Запрещены оскорбления и мат</li>
                  <li>• Голосовой чат только для RP</li>
                  <li>• Запрет на спам в чате</li>
                  <li>• Уважение к администрации</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Car" size={24} className="text-secondary" />
                  Правила передвижения
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 ml-9">
                  <li>• Соблюдение ПДД в городе</li>
                  <li>• Реалистичное вождение</li>
                  <li>• Запрет на VDM (наезд на игроков)</li>
                  <li>• Использование поворотников</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Sword" size={24} className="text-accent" />
                  Правила конфликтов
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 ml-9">
                  <li>• Запрет на RDM (убийство без причины)</li>
                  <li>• Обязательна ролевая отыгровка</li>
                  <li>• Уважение к чужой жизни</li>
                  <li>• Соблюдение правил грабежа</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="jobs" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Вакансии
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">Руководство проекта</h3>
                    <p className="text-muted-foreground mb-4">
                      Руководи проектом, делай по своему.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">16+ лет</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">5+ часов в день</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Знать все правила</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Подать заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Crown" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">Администратор</h3>
                    <p className="text-muted-foreground mb-4">
                      Управляй сервером, принимай решения и развивай коммьюнити
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">21+ лет</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">6+ часов в день</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">Опыт админа</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                      Подать заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Palette" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">Дизайнер</h3>
                    <p className="text-muted-foreground mb-4">
                      Создавай графику для сервера, баннеры и промо-материалы
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Портфолио</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Photoshop/Figma</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Креативность</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90">
                      Подать заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Code" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">Разработчик</h3>
                    <p className="text-muted-foreground mb-4">
                      Создавай уникальные скрипты и механики для сервера
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Lua/C#</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">FiveM опыт</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Git</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Подать заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">
            Контакты
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-[#5865F2]/10 border-[#5865F2]/30 hover:border-[#5865F2] transition-all cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Discord</h3>
                <p className="text-muted-foreground">amazing-rp.com/discord</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0088cc]/10 border-[#0088cc]/30 hover:border-[#0088cc] transition-all cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#0088cc] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@amazingrp</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A66C2]/10 border-[#0A66C2]/30 hover:border-[#0A66C2] transition-all cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="AtSign" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@amazing-rp.com</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="pt-8 pb-8">
              <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Готов начать приключение?</h3>
              <p className="text-muted-foreground mb-6">
                Присоединяйся к тысячам игроков уже сегодня!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Icon name="Play" size={20} className="mr-2" />
                Играть сейчас
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-background/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Amazing RP. Все права защищены.</p>
          <p className="text-sm mt-2">Лучший ролевой сервер GTA V</p>
        </div>
      </footer>
    </div>
  );
}