import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Shield, Clock, Star, Users, MapPin, Calendar, User, Globe, ArrowRight, Apple, Smartphone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import logo from "@/assets/yoldosh-logo.png";
import routeTashkentSamarkand from "@/assets/route-tashkent-samarkand.jpg";
import routeTashkentBukhara from "@/assets/route-tashkent-bukhara.jpg";
import routeSamarkandBukhara from "@/assets/route-samarkand-bukhara.jpg";
import phoneMockup from "@/assets/phone-mockup.png";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

const Landing = () => {
  const { language, setLanguage, t } = useLanguage();
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
      title: t('fastTrips'),
      description: t('fastTripsDesc')
    },
    {
      icon: Shield,
      title: t('security'),
      description: t('securityDesc')
    },
    {
      icon: Clock,
      title: t('timeSaving'),
      description: t('timeSavingDesc')
    },
    {
      icon: Star,
      title: t('highRating'),
      description: t('highRatingDesc')
    },
    {
      icon: Users,
      title: t('community'),
      description: t('communityDesc')
    },
    {
      icon: MapPin,
      title: t('available'),
      description: t('availableDesc')
    }
  ];

  const stats = [
    { value: "50K+", label: t('trips') },
    { value: "10K+", label: t('drivers') },
    { value: "4.9", label: t('rating') },
    { value: "24/7", label: t('support') }
  ];

  const getPassengerLabel = (count: string) => {
    const num = parseInt(count);
    if (language === 'en') {
      return num === 1 ? t('passengers') : t('passengers2');
    }
    if (language === 'uz') {
      return `${num} ${t('passengers')}`;
    }
    // Russian
    if (num === 1) return `${num} ${t('passengers')}`;
    if (num >= 2 && num <= 4) return `${num} ${t('passengers2')}`;
    return `${num} ${t('passengers')}`;
  };

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
              {t('features')}
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              {t('howItWorks')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t('contacts')}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-[140px] border-border">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="uz">O'zbekcha</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <Button>{t('downloadApp')}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('heroSubtitle')} <span className="text-primary font-semibold">Yo'ldosh</span>
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl mx-auto bg-background rounded-3xl md:rounded-full shadow-2xl border border-border p-2 md:p-2 animate-fade-in">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center gap-2">
              {/* From Field */}
              <div className="flex items-center gap-3 px-6 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <Input 
                    placeholder={t('searchPlaceholderFrom')}
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
                    placeholder={t('searchPlaceholderTo')}
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
                  placeholder={t('searchDate')}
                />
              </div>

              <div className="h-8 w-px bg-border"></div>

              {/* Passengers Field */}
              <div className="flex items-center gap-3 px-6 py-3 min-w-[160px] hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <User className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto text-base font-medium focus:ring-0 focus:ring-offset-0 [&>span]:text-left">
                    <SelectValue placeholder={getPassengerLabel("1")} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="1">{getPassengerLabel("1")}</SelectItem>
                    <SelectItem value="2">{getPassengerLabel("2")}</SelectItem>
                    <SelectItem value="3">{getPassengerLabel("3")}</SelectItem>
                    <SelectItem value="4">{getPassengerLabel("4")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button 
                onClick={handleSearch} 
                size="lg" 
                className="rounded-full px-12 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all h-auto"
              >
                {t('search')}
              </Button>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col p-4 gap-0">
              {/* From Field */}
              <div className="flex items-center gap-4 py-4 border-b border-border">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
                <Input 
                  placeholder={t('searchPlaceholderFrom')}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>

              {/* To Field */}
              <div className="flex items-center gap-4 py-4 border-b border-border">
                <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></div>
                </div>
                <Input 
                  placeholder={t('searchPlaceholderTo')}
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>

              {/* Date Field */}
              <div className="flex items-center gap-4 py-4 border-b border-border">
                <Calendar className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <Input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer placeholder:text-muted-foreground"
                  placeholder={t('searchDate')}
                />
              </div>

              {/* Passengers Field */}
              <div className="flex items-center gap-4 py-4 mb-4">
                <User className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto text-base font-medium focus:ring-0 focus:ring-offset-0 [&>span]:text-left">
                    <SelectValue placeholder={getPassengerLabel("1")} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="1">{getPassengerLabel("1")}</SelectItem>
                    <SelectItem value="2">{getPassengerLabel("2")}</SelectItem>
                    <SelectItem value="3">{getPassengerLabel("3")}</SelectItem>
                    <SelectItem value="4">{getPassengerLabel("4")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button 
                onClick={handleSearch} 
                size="lg" 
                className="w-full rounded-xl py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all"
              >
                {t('search')}
              </Button>
            </div>
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

      {/* How It Works Steps */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('howItWorksStepsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('howItWorksStepsSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t('stepCard1Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('stepCard1Desc')}
                </p>
                <a href="#" className="text-primary hover:underline inline-block">
                  {t('readMore')}
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t('stepCard2Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('stepCard2Desc')}
                </p>
                <a href="#" className="text-primary hover:underline inline-block">
                  {t('readMore')}
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t('stepCard3Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('stepCard3Desc')}
                </p>
                <a href="#" className="text-primary hover:underline inline-block">
                  {t('readMore')}
                </a>
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
              {t('popularRoutes')}
            </h2>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { from: "Ташкент", to: "Самарканд", price: "45 000", image: routeTashkentSamarkand },
                  { from: "Ташкент", to: "Бухара", price: "50 000", image: routeTashkentBukhara },
                  { from: "Самарканд", to: "Бухара", price: "35 000", image: routeSamarkandBukhara },
                ].map((route, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[85%]">
                    <Card className="border-border hover:border-primary transition-all hover:shadow-xl cursor-pointer overflow-hidden group">
                      <CardContent className="p-0 relative">
                        {/* Background Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={route.image} 
                            alt={`${route.from} - ${route.to}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {/* Promo Badge */}
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {t('promo')}
                          </div>
                        </div>
                        
                        {/* Route Info */}
                        <div className="p-6 bg-background">
                          <div className="space-y-3 mb-4">
                            {/* From Location */}
                            <div className="flex items-start gap-3">
                              <div className="w-3 h-3 rounded-full border-2 border-primary flex-shrink-0 mt-1.5 bg-background"></div>
                              <span className="text-base font-semibold text-foreground">{route.from}</span>
                            </div>
                            
                            {/* Connecting Line */}
                            <div className="flex items-center gap-3">
                              <div className="w-3 flex justify-center">
                                <div className="w-0.5 h-6 bg-border"></div>
                              </div>
                            </div>
                            
                            {/* To Location */}
                            <div className="flex items-start gap-3">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground flex-shrink-0 mt-1.5"></div>
                              <span className="text-base font-semibold text-foreground">{route.to}</span>
                            </div>
                          </div>
                          
                          {/* Price and Arrow */}
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div>
                              <p className="text-xs text-muted-foreground">{t('from')}</p>
                              <p className="text-2xl font-bold text-foreground">{route.price}<span className="text-sm font-normal text-muted-foreground ml-1">{t('sum')}</span></p>
                            </div>
                            <Button size="icon" className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90">
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { from: "Ташкент", to: "Самарканд", price: "45 000", image: routeTashkentSamarkand },
              { from: "Ташкент", to: "Бухара", price: "50 000", image: routeTashkentBukhara },
              { from: "Самарканд", to: "Бухара", price: "35 000", image: routeSamarkandBukhara },
            ].map((route, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-xl cursor-pointer overflow-hidden group">
                <CardContent className="p-0 relative">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={route.image} 
                      alt={`${route.from} - ${route.to}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Promo Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {t('promo')}
                    </div>
                  </div>
                  
                  {/* Route Info */}
                  <div className="p-6 bg-background">
                    <div className="space-y-3 mb-4">
                      {/* From Location */}
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full border-2 border-primary flex-shrink-0 mt-1.5 bg-background"></div>
                        <span className="text-base font-semibold text-foreground">{route.from}</span>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="flex items-center gap-3">
                        <div className="w-3 flex justify-center">
                          <div className="w-0.5 h-6 bg-border"></div>
                        </div>
                      </div>
                      
                      {/* To Location */}
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-muted-foreground flex-shrink-0 mt-1.5"></div>
                        <span className="text-base font-semibold text-foreground">{route.to}</span>
                      </div>
                    </div>
                    
                    {/* Price and Arrow */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">{t('from')}</p>
                        <p className="text-2xl font-bold text-foreground">{route.price}<span className="text-sm font-normal text-muted-foreground ml-1">{t('sum')}</span></p>
                      </div>
                      <Button size="icon" className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
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
              {t('whyChoose')} <span className="text-primary">Yo'ldosh</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('whyChooseSubtitle')}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {t('ctaTitle')} <span className="text-white/90">Yo'ldosh</span>
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {t('ctaSubtitle')}
              </p>
              <p className="text-base text-white/80 italic">
                {t('ctaDescription')}
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-black/80 transition-colors"
                >
                  <Apple className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs whitespace-nowrap">Download on the</div>
                    <div className="text-base sm:text-lg font-semibold -mt-0.5 sm:-mt-1 whitespace-nowrap">App Store</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-black/80 transition-colors"
                >
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs whitespace-nowrap">{t('downloadGooglePlay').split(' ')[0]}</div>
                    <div className="text-base sm:text-lg font-semibold -mt-0.5 sm:-mt-1 whitespace-nowrap">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={phoneMockup} 
                  alt="Yo'ldosh App" 
                  className="w-64 lg:w-80 drop-shadow-2xl"
                />
              </div>
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
                {t('footerTagline')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('product')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t('forPassengers')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('forDrivers')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('prices')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('company')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('career')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('blog')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('supportTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t('help')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('contactsFooter')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('safety')}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Yo'ldosh. {t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;