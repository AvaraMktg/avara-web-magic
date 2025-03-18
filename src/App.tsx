
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/lovable-uploads/f345cc1a-f62e-49c5-a505-1f3675cb578f.png";
    }
    
    // Update title
    document.title = "Avara Marketing";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScrollProvider options={{ 
          lerp: 0.08, 
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 2
        }}>
          <Toaster />
          <Sonner />
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SmoothScrollProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
