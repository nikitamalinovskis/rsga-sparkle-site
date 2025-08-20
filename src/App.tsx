import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// English pages
import EnHome from "./pages/en/Home";
import EnServices from "./pages/en/Services";
import EnAbout from "./pages/en/About";
import EnContacts from "./pages/en/Contacts";
import EnBlog from "./pages/en/Blog";
import EnPrivacyPolicy from "./pages/en/PrivacyPolicy";
import EnTermsOfService from "./pages/en/TermsOfService";

// English service pages
import AlternativeCover from "./pages/en/services/AlternativeCover";
import Hydroseeding from "./pages/en/services/Hydroseeding";
import IndustrialDeodorantDust from "./pages/en/services/IndustrialDeodorantDust";
import SaleOfSand from "./pages/en/services/SaleOfSand";
import Earthworks from "./pages/en/services/Earthworks";
import PlanningBusinessDevelopment from "./pages/en/services/PlanningBusinessDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default route - Latvian home */}
          <Route path="/" element={<Index />} />
          
          {/* English routes */}
          <Route path="/en" element={<EnHome />} />
          <Route path="/en/services" element={<EnServices />} />
          <Route path="/en/about" element={<EnAbout />} />
          <Route path="/en/contacts" element={<EnContacts />} />
          <Route path="/en/blog" element={<EnBlog />} />
          <Route path="/en/privacy-policy" element={<EnPrivacyPolicy />} />
          <Route path="/en/terms-of-service" element={<EnTermsOfService />} />
          
          {/* English service detail pages */}
          <Route path="/en/services/alternative-cover" element={<AlternativeCover />} />
          <Route path="/en/services/hydroseeding" element={<Hydroseeding />} />
          <Route path="/en/services/industrial-deodorant-dust" element={<IndustrialDeodorantDust />} />
          <Route path="/en/services/sale-of-sand" element={<SaleOfSand />} />
          <Route path="/en/services/earthworks" element={<Earthworks />} />
          <Route path="/en/services/planning-business-development" element={<PlanningBusinessDevelopment />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
