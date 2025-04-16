
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlanTrip from "./pages/PlanTrip";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<Signup />}/>

          {/* Routes to be added as we build more pages */}
          <Route path="/destinations" element={<NotFound />} />
          <Route path="/flights" element={<NotFound />} />
          <Route path="/hotels" element={<NotFound />} />
          <Route path="/itineraries" element={<NotFound />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
