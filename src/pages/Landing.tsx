import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Shield, Clock, Star, Users, MapPin, Search, Calendar, ArrowRight, User } from "lucide-react";
import logo from "@/assets/yoldosh-logo.png";
import { useState } from "react";

const Landing = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = () => {
    console.log({ from, to, date, passengers });
    // Здесь будет логика поиска
  };

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Yo'ldosh" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-foreground">Yo'ldosh</span>
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
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Поездки на ваш выбор по низким ценам
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Найдите попутчиков или станьте водителем с <span className="text-primary font-semibold">Yo'ldosh</span>
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl mx-auto bg-background rounded-full shadow-2xl border border-border p-2 flex items-center gap-2 animate-fade-in">
            {/* From Field */}
            <div className="flex items-center gap-3 px-6 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 min-w-0">
                <Input 
                  placeholder="Откуда" 
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="h-8 w-px bg-border"></div>

            {/* To Field */}
            <div className="flex items-center gap-3 px-6 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              </div>
              <div className="flex-1 min-w-0">
                <Input 
                  placeholder="Куда" 
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="h-8 w-px bg-border"></div>

            {/* Date Field */}
            <div className="flex items-center gap-3 px-6 py-3 min-w-[140px] hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
                placeholder="Сегодня"
              />
            </div>

            <div className="h-8 w-px bg-border"></div>

            {/* Passengers Field */}
            <div className="flex items-center gap-3 px-6 py-3 min-w-[160px] hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <User className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto text-base font-medium focus:ring-0 focus:ring-offset-0 [&>span]:text-left">
                  <SelectValue placeholder="1 пассажир" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 пассажир</SelectItem>
                  <SelectItem value="2">2 пассажира</SelectItem>
                  <SelectItem value="3">3 пассажира</SelectItem>
                  <SelectItem value="4">4 пассажира</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button 
              onClick={handleSearch} 
              size="lg" 
              className="rounded-full px-12 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all h-auto"
            >
              Поиск
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-12 mt-12 flex-wrap">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Что вы выберете для поездки сегодня?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Машина с попутчиками
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>✓ Разделите расходы на поездку до вашего места назначения</p>
                  <p>✓ Доверяйте своим попутчикам</p>
                  <p>✓ Мы стараемся узнать ваших будущих попутчиков как можно лучше</p>
                  <p>✓ В нашем приложении легко разобраться</p>
                </div>
                <Button className="w-full mt-4" size="lg">
                  Найти поездку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Стать водителем
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>✓ Экономьте на бензине, беря попутчиков</p>
                  <p>✓ Зарегистрируйте профиль водителя</p>
                  <p>✓ Опубликовать поездку можно за пару минут</p>
                  <p>✓ Путешествуйте и зарабатывайте одновременно</p>
                </div>
                <Button variant="outline" className="w-full mt-4" size="lg">
                  Опубликовать поездку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Популярные маршруты
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { from: "Ташкент", to: "Самарканд", price: "45 000" },
              { from: "Ташкент", to: "Бухара", price: "50 000" },
              { from: "Самарканд", to: "Бухара", price: "35 000" },
            ].map((route, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">{route.from}</span>
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{route.to}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">От</p>
                    <p className="text-2xl font-bold text-primary">{route.price} сум</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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