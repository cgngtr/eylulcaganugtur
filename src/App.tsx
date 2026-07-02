import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Old Portfolio Pages
import OldIndex from "./pages/old/Index";
import OldProjectDetail from "./pages/old/ProjectDetail";
import OldProjects from "./pages/old/Projects";
import OldServices from "./pages/old/Services";

// Terminal Portfolio Pages
import TerminalHome from "./pages/terminal/TerminalHome";
import ProjectDetail from "./pages/terminal/ProjectDetail";
import ClientForm from "./pages/terminal/ClientForm";

// Shared Pages
import NotFound from "./pages/NotFound";
import SpotifyTokenHelper from "./pages/SpotifyTokenHelper";
import LanguageSwitcher from "./components/LanguageSwitcher";

const queryClient = new QueryClient();

// Component to conditionally render LanguageSwitcher only on /old routes
const ConditionalLanguageSwitcher = () => {
  const location = useLocation();
  const isOldPortfolio = location.pathname.startsWith('/old');

  if (!isOldPortfolio) return null;

  return (
    <div className="absolute top-4 right-4 z-50">
      <LanguageSwitcher />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          {/* Language Switcher - only on old portfolio */}
          <ConditionalLanguageSwitcher />

          <Routes>
            {/* New Terminal Portfolio */}
            <Route path="/" element={<TerminalHome />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/client-form" element={<ClientForm />} />

            {/* Old Portfolio Routes */}
            <Route path="/old" element={<OldIndex />} />
            <Route path="/old/project/:id" element={<OldProjectDetail />} />
            <Route path="/old/projects" element={<OldProjects />} />
            <Route path="/old/services" element={<OldServices />} />

            {/* Utility Routes */}
            <Route path="/spotify-helper" element={<SpotifyTokenHelper />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
