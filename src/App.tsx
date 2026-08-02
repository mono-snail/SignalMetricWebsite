import { useEffect } from "react";
import AppFrame from "@/components/AppFrame";
import HomePage from "@/pages/HomePage";
import MeasurementsPage from "@/pages/MeasurementsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPage from "@/pages/PrivacyPage";
import SupportPage from "@/pages/SupportPage";
import { Router } from "@/routing/router";
import {
  normalizeRoutePath,
  useLocation,
} from "@/routing/routerContext";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const path = normalizeRoutePath(location.pathname);
  let page = <NotFoundPage />;

  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/measurements/") {
    page = <MeasurementsPage />;
  } else if (path === "/support/") {
    page = <SupportPage />;
  } else if (path === "/privacy/") {
    page = <PrivacyPage />;
  }

  return (
    <>
      <RouteEffects />
      <AppFrame>{page}</AppFrame>
    </>
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
