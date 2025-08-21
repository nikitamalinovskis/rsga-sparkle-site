import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
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

// Russian routes
import RuHome from "./pages/ru/Home";
import RuServices from "./pages/ru/Services";
import RuAbout from "./pages/ru/About";
import RuContacts from "./pages/ru/Contacts";
import RuBlog from "./pages/ru/Blog";
import RuPrivacyPolicy from "./pages/ru/PrivacyPolicy";
import RuTermsOfService from "./pages/ru/TermsOfService";
import RuAlternativeCover from "./pages/ru/services/AlternativeCover";
import RuHydroseeding from "./pages/ru/services/Hydroseeding";
import RuIndustrialDeodorantDust from "./pages/ru/services/IndustrialDeodorantDust";
import RuSaleOfSand from "./pages/ru/services/SaleOfSand";
import RuEarthworks from "./pages/ru/services/Earthworks";
import RuPlanningBusinessDevelopment from "./pages/ru/services/PlanningBusinessDevelopment";

// Latvian service pages
import LvAlternativeCover from "./pages/services/AlternativeCover";
import LvHydroseeding from "./pages/services/Hydroseeding";
import LvIndustrialDeodorantDust from "./pages/services/IndustrialDeodorantDust";
import LvSaleOfSand from "./pages/services/SaleOfSand";
import LvEarthworks from "./pages/services/Earthworks";
import LvPlanningBusinessDevelopment from "./pages/services/PlanningBusinessDevelopment";

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

// Latvian blog pages
import LvAlternativeDailyCoverSolutions from "./pages/blog/AlternativeDailyCoverSolutions";
import LvHydroseedingVsTraditionalSeeding from "./pages/blog/HydroseedingVsTraditionalSeeding";
import LvSustainableWasteManagementEuCompliance from "./pages/blog/SustainableWasteManagementEuCompliance";

// Russian blog pages
import RuAlternativeDailyCoverSolutions from "./pages/ru/blog/AlternativeDailyCoverSolutions";
import RuHydroseedingVsTraditionalSeeding from "./pages/ru/blog/HydroseedingVsTraditionalSeeding";
import RuSustainableWasteManagementEuCompliance from "./pages/ru/blog/SustainableWasteManagementEuCompliance";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
          
          {/* Russian routes */}
          <Route path="/ru" element={<RuHome />} />
          <Route path="/ru/services" element={<RuServices />} />
          <Route path="/ru/about" element={<RuAbout />} />
          <Route path="/ru/contacts" element={<RuContacts />} />
          <Route path="/ru/blog" element={<RuBlog />} />
          <Route path="/ru/privacy-policy" element={<RuPrivacyPolicy />} />
          <Route path="/ru/terms-of-service" element={<RuTermsOfService />} />
          
          {/* English routes */}
          <Route path="/en" element={<EnHome />} />
          <Route path="/en/services" element={<EnServices />} />
          <Route path="/en/about" element={<EnAbout />} />
          <Route path="/en/contacts" element={<EnContacts />} />
          <Route path="/en/blog" element={<EnBlog />} />
          <Route path="/en/privacy-policy" element={<EnPrivacyPolicy />} />
          <Route path="/en/terms-of-service" element={<EnTermsOfService />} />
          
          {/* Russian service detail pages */}
          <Route path="/ru/services/alternative-cover" element={<RuAlternativeCover />} />
          <Route path="/ru/services/hydroseeding" element={<RuHydroseeding />} />
          <Route path="/ru/services/industrial-deodorant-dust" element={<RuIndustrialDeodorantDust />} />
          <Route path="/ru/services/sale-of-sand" element={<RuSaleOfSand />} />
          <Route path="/ru/services/earthworks" element={<RuEarthworks />} />
          <Route path="/ru/services/planning-business-development" element={<RuPlanningBusinessDevelopment />} />
          
          {/* English service detail pages */}
          <Route path="/en/services/alternative-cover" element={<EnAlternativeCover />} />
          <Route path="/en/services/hydroseeding" element={<EnHydroseeding />} />
          <Route path="/en/services/industrial-deodorant-dust" element={<EnIndustrialDeodorantDust />} />
          <Route path="/en/services/sale-of-sand" element={<EnSaleOfSand />} />
          <Route path="/en/services/earthworks" element={<EnEarthworks />} />
          <Route path="/en/services/planning-business-development" element={<EnPlanningBusinessDevelopment />} />
          
          {/* Latvian service detail pages */}
          <Route path="/services/alternative-cover" element={<LvAlternativeCover />} />
          <Route path="/services/hydroseeding" element={<LvHydroseeding />} />
          <Route path="/services/industrial-deodorant-dust" element={<LvIndustrialDeodorantDust />} />
          <Route path="/services/sale-of-sand" element={<LvSaleOfSand />} />
          <Route path="/services/earthworks" element={<LvEarthworks />} />
          <Route path="/services/planning-business-development" element={<LvPlanningBusinessDevelopment />} />
          
          {/* English blog articles */}
          <Route path="/en/blog/alternative-daily-cover-solutions" element={<EnAlternativeDailyCoverSolutions />} />
          <Route path="/en/blog/hydroseeding-vs-traditional-seeding" element={<EnHydroseedingVsTraditionalSeeding />} />
          <Route path="/en/blog/sustainable-waste-management-eu-compliance" element={<EnSustainableWasteManagementEuCompliance />} />
          
          {/* Latvian blog articles */}
          <Route path="/blog/alternative-daily-cover-solutions" element={<LvAlternativeDailyCoverSolutions />} />
          <Route path="/blog/hydroseeding-vs-traditional-seeding" element={<LvHydroseedingVsTraditionalSeeding />} />
          <Route path="/blog/sustainable-waste-management-eu-compliance" element={<LvSustainableWasteManagementEuCompliance />} />
          
          {/* Russian blog articles */}
          <Route path="/ru/blog/alternative-daily-cover-solutions" element={<RuAlternativeDailyCoverSolutions />} />
          <Route path="/ru/blog/hydroseeding-vs-traditional-seeding" element={<RuHydroseedingVsTraditionalSeeding />} />
          <Route path="/ru/blog/sustainable-waste-management-eu-compliance" element={<RuSustainableWasteManagementEuCompliance />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
