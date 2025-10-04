import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, Car } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const carModels = [
  { id: 1, brand: "Toyota", model: "Camry", year: "2020-2023", category: "Комфорт" },
  { id: 2, brand: "Hyundai", model: "Solaris", year: "2019-2023", category: "Эконом" },
  { id: 3, brand: "Kia", model: "Rio", year: "2020-2023", category: "Эконом" },
  { id: 4, brand: "Mercedes-Benz", model: "E-Class", year: "2021-2023", category: "Бизнес" },
  { id: 5, brand: "BMW", model: "5 Series", year: "2020-2023", category: "Бизнес" },
  { id: 6, brand: "Volkswagen", model: "Polo", year: "2019-2023", category: "Эконом" },
];

export default function CarModels() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Модели машин</h1>
          <p className="text-muted-foreground">Справочник доступных моделей автомобилей</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Добавить модель
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-popover">
            <DialogHeader>
              <DialogTitle>Добавить модель автомобиля</DialogTitle>
              <DialogDescription>
                Добавьте новую модель автомобиля в справочник
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Бренд</Label>
                <Input id="brand" placeholder="Например: Toyota" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Модель</Label>
                <Input id="model" placeholder="Например: Camry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Годы выпуска</Label>
                <Input id="year" placeholder="Например: 2020-2023" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Категория</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="economy">Эконом</SelectItem>
                    <SelectItem value="comfort">Комфорт</SelectItem>
                    <SelectItem value="business">Бизнес</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Отмена</Button>
              <Button className="bg-gradient-primary">Добавить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск моделей..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Бренд</TableHead>
                  <TableHead>Модель</TableHead>
                  <TableHead>Годы выпуска</TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {carModels.map((car) => (
                  <TableRow key={car.id} className="hover:bg-accent/50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                          <Car className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{car.brand}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{car.model}</TableCell>
                    <TableCell className="text-muted-foreground">{car.year}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        car.category === "Эконом" 
                          ? "bg-info/10 text-info"
                          : car.category === "Комфорт"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {car.category}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
