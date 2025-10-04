import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const complaints = [
  {
    id: 1,
    from: "Мария Петрова",
    against: "Иван Иванов (Водитель)",
    reason: "Грубое поведение",
    description: "Водитель был груб и невежлив во время поездки",
    status: "pending",
    date: "24 сент. 2025 г., 16:20",
  },
  {
    id: 2,
    from: "Алексей Смирнов",
    against: "Петр Сидоров (Водитель)",
    reason: "Превышение скорости",
    description: "Водитель ехал слишком быстро, не соблюдал ПДД",
    status: "pending",
    date: "23 сент. 2025 г., 12:15",
  },
  {
    id: 3,
    from: "Ольга Морозова",
    against: "Дмитрий Попов (Водитель)",
    reason: "Грязный автомобиль",
    description: "Автомобиль был в очень грязном состоянии",
    status: "resolved",
    date: "22 сент. 2025 г., 09:30",
  },
];

export default function Complaints() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Жалобы</h1>
        <p className="text-muted-foreground">Управление жалобами пользователей</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск жалоб..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-foreground">#{complaint.id}</span>
                        <Badge variant={complaint.status === "pending" ? "secondary" : "default"}>
                          {complaint.status === "pending" ? "Ожидает" : "Решена"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{complaint.date}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-sm text-muted-foreground">От:</span>
                            <p className="font-medium text-foreground">{complaint.from}</p>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">На:</span>
                            <p className="font-medium text-foreground">{complaint.against}</p>
                          </div>
                        </div>

                        <div>
                          <span className="text-sm text-muted-foreground">Причина:</span>
                          <p className="font-medium text-foreground">{complaint.reason}</p>
                        </div>

                        <div>
                          <span className="text-sm text-muted-foreground">Описание:</span>
                          <p className="text-foreground">{complaint.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {complaint.status === "pending" && (
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
