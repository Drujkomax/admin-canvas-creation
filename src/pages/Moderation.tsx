import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Trash2 } from "lucide-react";
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

const bannedWords = [
  { id: 1, word: "test word", date: "22 сент. 2025 г., 19:30" },
  { id: 2, word: "плохое слово", date: "20 сент. 2025 г., 15:20" },
  { id: 3, word: "спам", date: "18 сент. 2025 г., 10:45" },
];

export default function Moderation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Модерация чата</h1>
          <p className="text-muted-foreground">Управление списком запрещенных слов</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Добавить слово
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-popover">
            <DialogHeader>
              <DialogTitle>Добавить запрещенное слово</DialogTitle>
              <DialogDescription>
                Введите слово или фразу, которую нужно заблокировать в чате
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="word">Слово или фраза</Label>
                <Input 
                  id="word" 
                  placeholder="Введите запрещенное слово..." 
                />
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
                placeholder="Поиск слов..." 
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Слово</TableHead>
                <TableHead>Дата добавления</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bannedWords.map((item) => (
                <TableRow key={item.id} className="hover:bg-accent/50">
                  <TableCell className="font-medium">{item.word}</TableCell>
                  <TableCell className="text-muted-foreground">{item.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
