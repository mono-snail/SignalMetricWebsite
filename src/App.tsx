import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppFrame from "@/components/AppFrame";
import HomePage from "@/pages/HomePage";
import MeasurementsPage from "@/pages/MeasurementsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPage from "@/pages/PrivacyPage";
import SupportPage from "@/pages/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <AppFrame>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/measurements/" element={<MeasurementsPage />} />
          <Route path="/support/" element={<SupportPage />} />
          <Route path="/privacy/" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppFrame>
    </BrowserRouter>
  );
}

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.querySelector<HTMLElement>("#main-content")?.focus({
        preventScroll: true,
      });
    }
  }, [location.hash, location.pathname]);

  return null;
}
