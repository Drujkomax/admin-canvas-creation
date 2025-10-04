import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check, X, Eye, Phone, Mail, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const driverApplications = [
  {
    id: 1,
    name: "Александр Николаев",
    phone: "+7 (999) 123-45-67",
    email: "alex.nikolaev@mail.ru",
    car: "Toyota Camry 2020",
    license: "AA 123456",
    status: "pending",
    date: "24 сент. 2025 г., 14:30"
  },
  {
    id: 2,
    name: "Сергей Кузнецов",
    phone: "+7 (999) 234-56-78",
    email: "sergey.k@gmail.com",
    car: "Hyundai Solaris 2021",
    license: "BB 234567",
    status: "pending",
    date: "23 сент. 2025 г., 18:45"
  },
  {
    id: 3,
    name: "Михаил Соколов",
    phone: "+7 (999) 345-67-89",
    email: "m.sokolov@mail.ru",
    car: "Kia Rio 2022",
    license: "CC 345678",
    status: "approved",
    date: "22 сент. 2025 г., 11:20"
  },
];

export default function Drivers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Заявки водителей</h1>
          <p className="text-muted-foreground">Управление заявками на регистрацию водителей</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск по имени, телефону или email..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {driverApplications.map((driver) => (
              <Card key={driver.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{driver.name}</h3>
                          <p className="text-sm text-muted-foreground">{driver.date}</p>
                        </div>
                        <Badge variant={driver.status === "pending" ? "secondary" : "default"}>
                          {driver.status === "pending" ? "На рассмотрении" : "Одобрено"}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground">{driver.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground">{driver.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Car className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground">{driver.car}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Водит. удостоверение:</span>
                          <span className="text-foreground font-medium">{driver.license}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {driver.status === "pending" && (
                        <>
                          <Button size="icon" className="bg-success hover:bg-success/90">
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="icon">
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      )}
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
