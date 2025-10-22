import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Shield, Clock, Star, Users, MapPin } from "lucide-react";
import logo from "@/assets/yoldosh-logo.png";

const Landing = () => {
  const features = [
    {
      icon: Car,
      title: "Быстрые поездки",
      description: "Найдите водителя за считанные минуты в любой точке города"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Все водители проходят тщательную проверку и верификацию"
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Оптимальные маршруты и минимальное время ожидания"
    },
    {
      icon: Star,
      title: "Высокий рейтинг",
      description: "Система оценок гарантирует качество обслуживания"
    },
    {
      icon: Users,
      title: "Сообщество",
      description: "Тысячи довольных пассажиров и водителей"
    },
    {
      icon: MapPin,
      title: "Везде доступно",
      description: "Работаем во всех районах города 24/7"
    }
  ];

  const stats = [
    { value: "50K+", label: "Поездок" },
    { value: "10K+", label: "Водителей" },
    { value: "4.9", label: "Рейтинг" },
    { value: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Yo'ldosh" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Как это работает
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Войти</Button>
            <Button>Скачать приложение</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🚀 Ваш надежный спутник в пути
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Поездки с{" "}
                <span className="text-primary">Yo'ldosh</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Быстро, безопасно и комфортно. Найдите водителя за минуту или станьте водителем и начните зарабатывать уже сегодня.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Скачать для пассажиров
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Стать водителем
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border">
                <img 
                  src={logo} 
                  alt="Yo'ldosh App" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Почему выбирают <span className="text-primary">Yo'ldosh</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали сервис, который делает поездки простыми и приятными
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-muted-foreground">
              Всего три простых шага
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Скачайте приложение", desc: "Установите Yo'ldosh на свой смартфон" },
              { step: "02", title: "Выберите маршрут", desc: "Укажите откуда и куда нужно поехать" },
              { step: "03", title: "Наслаждайтесь поездкой", desc: "Водитель приедет за несколько минут" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Готовы начать путешествие с <span className="text-primary">Yo'ldosh</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам пользователей, которые уже оценили удобство нашего сервиса
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Скачать приложение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={logo} alt="Yo'ldosh" className="h-8 w-auto" />
              <p className="text-muted-foreground">
                Ваш надежный спутник в пути
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Продукт</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Для пассажиров</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для водителей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Yo'ldosh. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;