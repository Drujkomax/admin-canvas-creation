import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, Copy, Ticket, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const promoCodes = [
  {
    id: 1,
    code: "SUMMER2025",
    discount: "20%",
    uses: 234,
    maxUses: 1000,
    validUntil: "31 авг. 2025 г.",
    status: "active",
  },
  {
    id: 2,
    code: "NEWUSER",
    discount: "50%",
    uses: 1542,
    maxUses: null,
    validUntil: "31 дек. 2025 г.",
    status: "active",
  },
  {
    id: 3,
    code: "WEEKEND30",
    discount: "30%",
    uses: 445,
    maxUses: 500,
    validUntil: "30 сент. 2025 г.",
    status: "active",
  },
  {
    id: 4,
    code: "SPRING2025",
    discount: "15%",
    uses: 823,
    maxUses: 1000,
    validUntil: "31 мая 2025 г.",
    status: "expired",
  },
];

export default function PromoCodes() {
  const [personalUserId, setPersonalUserId] = useState("");
  const [personalDiscount, setPersonalDiscount] = useState("");
  const [personalValidUntil, setPersonalValidUntil] = useState("");
  
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Промокод скопирован!");
  };

  const generatePersonalCode = () => {
    if (!personalUserId) {
      toast.error("Введите ID или номер телефона пользователя");
      return;
    }
    if (!personalDiscount) {
      toast.error("Введите скидку");
      return;
    }
    
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    const userPrefix = personalUserId.replace(/[^a-zA-Z0-9]/g, '').substring(0, 4).toUpperCase();
    const generatedCode = `${userPrefix}-${randomPart}`;
    
    toast.success(`Персональный промокод создан: ${generatedCode}`);
    
    // Сброс формы
    setPersonalUserId("");
    setPersonalDiscount("");
    setPersonalValidUntil("");
    
    return generatedCode;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Промокоды</h1>
          <p className="text-muted-foreground">Управление промокодами и скидками</p>
        </div>
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary/50">
                <UserPlus className="w-4 h-4 mr-2" />
                Персональный промокод
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-popover">
              <DialogHeader>
                <DialogTitle>Создать персональный промокод</DialogTitle>
                <DialogDescription>
                  Создайте уникальный промокод для конкретного пользователя
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="personalUserId">ID пользователя или номер телефона</Label>
                  <Input 
                    id="personalUserId" 
                    placeholder="user123 или +79991234567"
                    value={personalUserId}
                    onChange={(e) => setPersonalUserId(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personalDiscount">Скидка</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="personalDiscount" 
                      placeholder="20" 
                      type="number"
                      value={personalDiscount}
                      onChange={(e) => setPersonalDiscount(e.target.value)}
                    />
                    <Select defaultValue="percent">
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="%" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="percent">%</SelectItem>
                        <SelectItem value="fixed">₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personalValidUntil">Действителен до</Label>
                  <Input 
                    id="personalValidUntil" 
                    type="date"
                    value={personalValidUntil}
                    onChange={(e) => setPersonalValidUntil(e.target.value)}
                  />
                </div>
                <div className="p-3 bg-accent/50 rounded-md border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    💡 Промокод будет автоматически сгенерирован на основе ID или номера телефона
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Отмена</Button>
                <Button className="bg-gradient-primary" onClick={generatePersonalCode}>
                  Создать промокод
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Создать промокод
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-popover">
            <DialogHeader>
              <DialogTitle>Создать промокод</DialogTitle>
              <DialogDescription>
                Создайте новый промокод для пользователей
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="code">Код</Label>
                <Input id="code" placeholder="Например: SUMMER2025" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount">Скидка</Label>
                <div className="flex gap-2">
                  <Input id="discount" placeholder="20" type="number" />
                  <Select>
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="%" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="percent">%</SelectItem>
                      <SelectItem value="fixed">₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxUses">Максимум использований</Label>
                <Input id="maxUses" placeholder="1000" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="validUntil">Действителен до</Label>
                <Input id="validUntil" type="date" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Отмена</Button>
              <Button className="bg-gradient-primary">Создать</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск промокодов..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {promoCodes.map((promo) => (
              <Card key={promo.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Ticket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground font-mono">{promo.code}</h3>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6"
                            onClick={() => copyCode(promo.code)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <Badge variant={promo.status === "active" ? "default" : "secondary"}>
                          {promo.status === "active" ? "Активен" : "Истёк"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Скидка:</span>
                      <span className="font-bold text-primary text-lg">{promo.discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Использовано:</span>
                      <span className="font-medium text-foreground">
                        {promo.uses} {promo.maxUses ? `/ ${promo.maxUses}` : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Действителен до:</span>
                      <span className="font-medium text-foreground">{promo.validUntil}</span>
                    </div>
                  </div>

                  {promo.maxUses && (
                    <div className="mb-4">
                      <div className="h-2 bg-accent rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all"
                          style={{ width: `${(promo.uses / promo.maxUses) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Изменить
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
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
