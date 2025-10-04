import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Car, MessageSquareWarning, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Всего поездок",
    value: "12,543",
    change: "+12.5%",
    trend: "up",
    icon: Car,
  },
  {
    title: "Активные водители",
    value: "847",
    change: "+4.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Новые жалобы",
    value: "23",
    change: "-8.1%",
    trend: "down",
    icon: MessageSquareWarning,
  },
  {
    title: "Выручка",
    value: "₽2.4M",
    change: "+18.3%",
    trend: "up",
    icon: DollarSign,
  },
];

const recentTrips = [
  { id: "#12543", driver: "Иван Иванов", passenger: "Мария Петрова", amount: "₽450", status: "completed" },
  { id: "#12542", driver: "Петр Сидоров", passenger: "Алексей Смирнов", amount: "₽620", status: "completed" },
  { id: "#12541", driver: "Анна Козлова", passenger: "Елена Волкова", amount: "₽380", status: "active" },
  { id: "#12540", driver: "Дмитрий Попов", passenger: "Ольга Морозова", amount: "₽710", status: "completed" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Главная</h1>
        <p className="text-muted-foreground">Обзор основных показателей</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-success" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-success" />
                )}
                <span className="text-xs text-success font-medium">{stat.change}</span>
                <span className="text-xs text-muted-foreground">за месяц</span>
              </div>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-20 rounded-full -mr-16 -mt-16" />
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Последние поездки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{trip.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        trip.status === "completed" 
                          ? "bg-success/10 text-success" 
                          : "bg-info/10 text-info"
                      }`}>
                        {trip.status === "completed" ? "Завершена" : "Активна"}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {trip.driver} → {trip.passenger}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-foreground">{trip.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Статистика по часам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 85, 45, 92, 78, 88, 95, 72, 68, 85, 90, 75].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-primary rounded-t-md transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{i + 1}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
