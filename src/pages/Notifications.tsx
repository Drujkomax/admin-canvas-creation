import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Bell } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const sentNotifications = [
  {
    id: 1,
    title: "Акция на поездки!",
    message: "Скидка 20% на все поездки в выходные",
    target: "Все пользователи",
    date: "23 сент. 2025 г., 10:00",
    recipients: 15420,
  },
  {
    id: 2,
    title: "Обновление приложения",
    message: "Доступна новая версия приложения с улучшениями",
    target: "Все пользователи",
    date: "20 сент. 2025 г., 14:30",
    recipients: 15380,
  },
  {
    id: 3,
    title: "Новые водители",
    message: "В вашем районе появились новые водители",
    target: "Активные пассажиры",
    date: "18 сент. 2025 г., 09:15",
    recipients: 8234,
  },
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Уведомления</h1>
        <p className="text-muted-foreground">Отправка push-уведомлений пользователям</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Создать уведомление</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Заголовок</Label>
                <Input 
                  id="title"
                  placeholder="Введите заголовок уведомления..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea 
                  id="message"
                  placeholder="Введите текст уведомления..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="target">Целевая аудитория</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите аудиторию" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">Все пользователи</SelectItem>
                    <SelectItem value="drivers">Только водители</SelectItem>
                    <SelectItem value="passengers">Только пассажиры</SelectItem>
                    <SelectItem value="active">Активные пользователи</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gradient-primary shadow-glow">
                <Send className="w-4 h-4 mr-2" />
                Отправить уведомление
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">История отправленных</h2>
            
            <div className="space-y-4">
              {sentNotifications.map((notification) => (
                <Card key={notification.id} className="border-2">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-bold text-foreground">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {notification.target}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {notification.recipients.toLocaleString()} получателей
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
