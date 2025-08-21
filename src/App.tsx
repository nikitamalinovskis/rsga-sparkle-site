import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Latvian pages (default)
import LvHome from "./pages/Home";
import LvServices from "./pages/Services";
import LvAbout from "./pages/About";
import LvContacts from "./pages/Contacts";
import LvBlog from "./pages/Blog";
import LvPrivacyPolicy from "./pages/PrivacyPolicy";
import LvTermsOfService from "./pages/TermsOfService";

// English pages
import EnHome from "./pages/en/Home";
import EnServices from "./pages/en/Services";
import EnAbout from "./pages/en/About";
import EnContacts from "./pages/en/Contacts";
import EnBlog from "./pages/en/Blog";
import EnPrivacyPolicy from "./pages/en/PrivacyPolicy";
import EnTermsOfService from "./pages/en/TermsOfService";

// English service pages
import EnAlternativeCover from "./pages/en/services/AlternativeCover";
import EnHydroseeding from "./pages/en/services/Hydroseeding";
import EnIndustrialDeodorantDust from "./pages/en/services/IndustrialDeodorantDust";
import EnSaleOfSand from "./pages/en/services/SaleOfSand";
import EnEarthworks from "./pages/en/services/Earthworks";
import EnPlanningBusinessDevelopment from "./pages/en/services/PlanningBusinessDevelopment";

// English blog pages
import EnAlternativeDailyCoverSolutions from "./pages/en/blog/AlternativeDailyCoverSolutions";
import EnHydroseedingVsTraditionalSeeding from "./pages/en/blog/HydroseedingVsTraditionalSeeding";
import EnSustainableWasteManagementEuCompliance from "./pages/en/blog/SustainableWasteManagementEuCompliance";

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
          
          {/* Latvian routes */}
          <Route path="/home" element={<LvHome />} />
          <Route path="/services" element={<LvServices />} />
          <Route path="/about" element={<LvAbout />} />
          <Route path="/contacts" element={<LvContacts />} />
          <Route path="/blog" element={<LvBlog />} />
          <Route path="/privacy-policy" element={<LvPrivacyPolicy />} />
          <Route path="/terms-of-service" element={<LvTermsOfService />} />
          
          {/* English routes */}
          <Route path="/en" element={<EnHome />} />
          <Route path="/en/services" element={<EnServices />} />
          <Route path="/en/about" element={<EnAbout />} />
          <Route path="/en/contacts" element={<EnContacts />} />
          <Route path="/en/blog" element={<EnBlog />} />
          <Route path="/en/privacy-policy" element={<EnPrivacyPolicy />} />
          <Route path="/en/terms-of-service" element={<EnTermsOfService />} />
          
          {/* English service detail pages */}
          <Route path="/en/services/alternative-cover" element={<EnAlternativeCover />} />
          <Route path="/en/services/hydroseeding" element={<EnHydroseeding />} />
          <Route path="/en/services/industrial-deodorant-dust" element={<EnIndustrialDeodorantDust />} />
          <Route path="/en/services/sale-of-sand" element={<EnSaleOfSand />} />
          <Route path="/en/services/earthworks" element={<EnEarthworks />} />
          <Route path="/en/services/planning-business-development" element={<EnPlanningBusinessDevelopment />} />
          
          {/* English blog articles */}
          <Route path="/en/blog/alternative-daily-cover-solutions" element={<EnAlternativeDailyCoverSolutions />} />
          <Route path="/en/blog/hydroseeding-vs-traditional-seeding" element={<EnHydroseedingVsTraditionalSeeding />} />
          <Route path="/en/blog/sustainable-waste-management-eu-compliance" element={<EnSustainableWasteManagementEuCompliance />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
