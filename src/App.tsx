import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AdminLayout } from "./components/Layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Complaints from "./pages/Complaints";
import Trips from "./pages/Trips";
import Notifications from "./pages/Notifications";
import CarModels from "./pages/CarModels";
import PromoCodes from "./pages/PromoCodes";
import Moderation from "./pages/Moderation";
import PassengerSearch from "./pages/PassengerSearch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/drivers" element={<AdminLayout><Drivers /></AdminLayout>} />
          <Route path="/complaints" element={<AdminLayout><Complaints /></AdminLayout>} />
          <Route path="/trips" element={<AdminLayout><Trips /></AdminLayout>} />
          <Route path="/notifications" element={<AdminLayout><Notifications /></AdminLayout>} />
          <Route path="/car-models" element={<AdminLayout><CarModels /></AdminLayout>} />
          <Route path="/promo-codes" element={<AdminLayout><PromoCodes /></AdminLayout>} />
          <Route path="/moderation" element={<AdminLayout><Moderation /></AdminLayout>} />
          <Route path="/passenger-search" element={<AdminLayout><PassengerSearch /></AdminLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
