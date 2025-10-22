import { 
  Home, 
  UserCheck, 
  MessageSquareWarning, 
  Car, 
  Bell, 
  CarFront, 
  Ticket, 
  Shield,
  LogOut,
  Search
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuItems = [
  { title: "Главное", url: "/admin", icon: Home },
  { title: "Заявки водителей", url: "/admin/drivers", icon: UserCheck },
  { title: "Жалобы", url: "/admin/complaints", icon: MessageSquareWarning },
  { title: "Поездки", url: "/admin/trips", icon: Car },
  { title: "Уведомления", url: "/admin/notifications", icon: Bell },
  { title: "Модели машин", url: "/admin/car-models", icon: CarFront },
  { title: "Промокоды", url: "/admin/promo-codes", icon: Ticket },
  { title: "Модерация", url: "/admin/moderation", icon: Shield },
];

export function AdminSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Car className="w-5 h-5 text-white" />
          </div>
          {open && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">Yoldosh</h2>
              <p className="text-xs text-sidebar-foreground/70">Admin</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        {open && (
          <div className="p-4 border-b border-sidebar-border">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate("/admin/passenger-search")}
            >
              <Search className="w-4 h-4 mr-2" />
              Поиск пользователя
            </Button>
          </div>
        )}
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url}
                      end={item.url === "/admin"}
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          {open && <span>Завершить сессию</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
