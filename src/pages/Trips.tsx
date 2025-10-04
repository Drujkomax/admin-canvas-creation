import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trips = [
  {
    id: "#12543",
    driver: "Иван Иванов",
    passenger: "Мария Петрова",
    from: "ул. Ленина, 45",
    to: "пр. Победы, 120",
    distance: "12.5 км",
    duration: "25 мин",
    amount: "₽450",
    status: "completed",
    date: "24 сент. 2025 г., 14:30",
  },
  {
    id: "#12542",
    driver: "Петр Сидоров",
    passenger: "Алексей Смирнов",
    from: "ул. Мира, 78",
    to: "ул. Советская, 34",
    distance: "8.2 км",
    duration: "18 мин",
    amount: "₽620",
    status: "completed",
    date: "24 сент. 2025 г., 13:15",
  },
  {
    id: "#12541",
    driver: "Анна Козлова",
    passenger: "Елена Волкова",
    from: "пл. Революции, 1",
    to: "ул. Гагарина, 56",
    distance: "15.8 км",
    duration: "32 мин",
    amount: "₽380",
    status: "active",
    date: "24 сент. 2025 г., 15:45",
  },
  {
    id: "#12540",
    driver: "Дмитрий Попов",
    passenger: "Ольга Морозова",
    from: "ул. Чехова, 12",
    to: "Аэропорт",
    distance: "22.3 км",
    duration: "45 мин",
    amount: "₽710",
    status: "completed",
    date: "24 сент. 2025 г., 11:20",
  },
];

export default function Trips() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Поездки</h1>
        <p className="text-muted-foreground">Мониторинг всех поездок в системе</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск по ID, водителю или пассажиру..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {trips.map((trip) => (
              <Card key={trip.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-foreground">{trip.id}</h3>
                        <Badge 
                          variant={trip.status === "active" ? "default" : "secondary"}
                          className={trip.status === "active" ? "bg-info" : ""}
                        >
                          {trip.status === "active" ? "Активна" : "Завершена"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{trip.date}</span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Водитель:</span>
                          <p className="font-medium text-foreground">{trip.driver}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Пассажир:</span>
                          <p className="font-medium text-foreground">{trip.passenger}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-sm text-muted-foreground">Откуда:</span>
                            <p className="text-foreground">{trip.from}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-sm text-muted-foreground">Куда:</span>
                            <p className="text-foreground">{trip.to}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Расстояние: <span className="text-foreground font-medium">{trip.distance}</span>
                        </span>
                        <span className="text-muted-foreground">
                          Время: <span className="text-foreground font-medium">{trip.duration}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 ml-4">
                      <div className="text-2xl font-bold text-foreground">{trip.amount}</div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Детали
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
