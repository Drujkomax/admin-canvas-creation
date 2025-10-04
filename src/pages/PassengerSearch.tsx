import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, MapPin, CreditCard, MessageSquare, Clock, Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Пример данных пассажира
const passengerData = {
  id: "USER001",
  name: "Алексей Смирнов",
  phone: "+7 999 123 4567",
  email: "alexey@example.com",
  registrationDate: "15 янв. 2025 г.",
  status: "active",
  totalTrips: 47,
  totalSpent: "45,230 ₽",
  rating: 4.8,
  trips: [
    {
      id: "T001",
      date: "24 сент. 2025 г., 14:30",
      from: "ул. Ленина, 45",
      to: "пр. Победы, 123",
      driver: "Иван Иванов",
      cost: "450 ₽",
      status: "completed",
    },
    {
      id: "T002",
      date: "22 сент. 2025 г., 09:15",
      from: "Аэропорт",
      to: "ул. Ленина, 45",
      driver: "Петр Сидоров",
      cost: "890 ₽",
      status: "completed",
    },
    {
      id: "T003",
      date: "20 сент. 2025 г., 18:45",
      from: "ТЦ Мега",
      to: "ул. Ленина, 45",
      driver: "Дмитрий Попов",
      cost: "320 ₽",
      status: "cancelled",
    },
  ],
  payments: [
    {
      id: "P001",
      date: "24 сент. 2025 г.",
      amount: "450 ₽",
      method: "Карта ****1234",
      status: "success",
    },
    {
      id: "P002",
      date: "22 сент. 2025 г.",
      amount: "890 ₽",
      method: "Карта ****1234",
      status: "success",
    },
    {
      id: "P003",
      date: "20 сент. 2025 г.",
      amount: "320 ₽",
      method: "Наличные",
      status: "refunded",
    },
  ],
  complaints: [
    {
      id: "C001",
      date: "18 сент. 2025 г.",
      against: "Иван Петров (Водитель)",
      reason: "Грубое поведение",
      status: "resolved",
    },
  ],
};

export default function PassengerSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [passenger, setPassenger] = useState<typeof passengerData | null>(null);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Введите ID, телефон или email пассажира");
      return;
    }

    // Имитация поиска
    setTimeout(() => {
      setPassenger(passengerData);
      toast.success("Пассажир найден");
    }, 500);
  };

  const handleBlock = () => {
    toast.success("Пассажир заблокирован");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Поиск пассажира</h1>
        <p className="text-muted-foreground">Найдите пассажира и просмотрите всю информацию о нем</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Введите ID, номер телефона или email пассажира..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button className="bg-gradient-primary" onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Найти
            </Button>
          </div>
        </CardContent>
      </Card>

      {passenger && (
        <div className="space-y-6">
          {/* Информация о пассажире */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{passenger.name}</CardTitle>
                    <p className="text-muted-foreground">ID: {passenger.id}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={passenger.status === "active" ? "default" : "secondary"}>
                        {passenger.status === "active" ? "Активен" : "Заблокирован"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Регистрация: {passenger.registrationDate}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="destructive" onClick={handleBlock}>
                  <Ban className="w-4 h-4 mr-2" />
                  Заблокировать
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium">{passenger.phone}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{passenger.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Всего поездок</p>
                  <p className="font-bold text-xl text-primary">{passenger.totalTrips}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Всего потрачено</p>
                  <p className="font-bold text-xl text-success">{passenger.totalSpent}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Детальная информация во вкладках */}
          <Tabs defaultValue="trips">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trips">
                <MapPin className="w-4 h-4 mr-2" />
                Поездки
              </TabsTrigger>
              <TabsTrigger value="payments">
                <CreditCard className="w-4 h-4 mr-2" />
                Платежи
              </TabsTrigger>
              <TabsTrigger value="complaints">
                <MessageSquare className="w-4 h-4 mr-2" />
                Жалобы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trips" className="space-y-4">
              {passenger.trips.map((trip) => (
                <Card key={trip.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">#{trip.id}</span>
                          <Badge variant={trip.status === "completed" ? "default" : "secondary"}>
                            {trip.status === "completed" ? "Завершена" : "Отменена"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {trip.date}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Откуда</p>
                            <p className="font-medium">{trip.from}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Куда</p>
                            <p className="font-medium">{trip.to}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Водитель</p>
                            <p className="font-medium">{trip.driver}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Стоимость</p>
                            <p className="font-bold text-primary text-lg">{trip.cost}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="payments" className="space-y-4">
              {passenger.payments.map((payment) => (
                <Card key={payment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{payment.amount}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{payment.method}</p>
                        <Badge 
                          variant={payment.status === "success" ? "default" : "secondary"}
                        >
                          {payment.status === "success" ? "Успешно" : "Возврат"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="complaints" className="space-y-4">
              {passenger.complaints.length > 0 ? (
                passenger.complaints.map((complaint) => (
                  <Card key={complaint.id}>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">#{complaint.id}</span>
                          <Badge variant={complaint.status === "resolved" ? "default" : "secondary"}>
                            {complaint.status === "resolved" ? "Решена" : "В обработке"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{complaint.date}</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">На кого</p>
                            <p className="font-medium">{complaint.against}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Причина</p>
                            <p className="font-medium">{complaint.reason}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    Жалоб не найдено
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
