import { useEffect, useState, type ReactNode } from "react";
import { Activity, ArrowUpRight, Menu, X } from "lucide-react";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { copy as allCopy } from "@/i18n/copy";
import { useCopy, useLocaleStore } from "@/i18n/store";
import { locales, type Locale } from "@/i18n/types";
import { Link, NavLink } from "@/routing/router";
import { useLocation } from "@/routing/routerContext";
import { appStoreUrl } from "@/content/site";

interface AppFrameProps {
  children: ReactNode;
}

export default function AppFrame({ children }: AppFrameProps) {
  const { copy, locale } = useCopy();
  const setLocale = useLocaleStore((state) => state.setLocale);
  const localizedPath = useLocalizedPath();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const navItems = [
    { label: copy.nav.instruments, to: "/#instruments", section: true },
    { label: copy.nav.measurements, to: "/measurements/" },
    { label: copy.nav.privacy, to: "/privacy/" },
    { label: copy.nav.support, to: "/support/" },
  ];

  const languageChanged = (nextLocale: Locale) => {
    setLocale(nextLocale);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {copy.common.skipContent}
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <Link
            className="brand-lockup"
            to={localizedPath("/")}
            aria-label="SignalMetric home"
          >
            <span className="brand-mark" aria-hidden="true">
              <Activity size={20} strokeWidth={2.4} />
            </span>
            <span>
              <strong>SIGNAL / METRIC</strong>
              <small>Audio, measured.</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.section ? (
                <a key={item.to} href={localizedPath(item.to)}>
                  {item.label}
                </a>
              ) : (
                <NavLink key={item.to} to={localizedPath(item.to)}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="nav-actions">
            <label className="language-control">
              <span className="sr-only">{copy.common.language}</span>
              <select
                value={locale}
                onChange={(event) =>
                  languageChanged(event.target.value as Locale)
                }
                aria-label={copy.common.language}
              >
                {locales.map((option) => (
                  <option key={option} value={option}>
                    {allCopy[option].languageName}
                  </option>
                ))}
              </select>
            </label>

            <a className="nav-cta" href={appStoreUrl}>
              {copy.common.appStore}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? copy.nav.close : copy.nav.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.section ? (
                <a key={item.to} href={localizedPath(item.to)}>
                  {item.label}
                </a>
              ) : (
                <NavLink key={item.to} to={localizedPath(item.to)}>
                  {item.label}
                </NavLink>
              ),
            )}
            <div
              className="mobile-languages"
              aria-label={copy.common.language}
            >
              {locales.map((option) => (
                <button
                  type="button"
                  className={locale === option ? "active" : ""}
                  onClick={() => languageChanged(option)}
                  key={option}
                >
                  {allCopy[option].languageName}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" tabIndex={-1}>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-wordmark">SIGNAL / METRIC</div>
            <p>{copy.footer.statement}</p>
          </div>
          <div className="footer-links">
            <a href={appStoreUrl}>{copy.common.appStore}</a>
            <Link to={localizedPath("/measurements/")}>
              {copy.nav.measurements}
            </Link>
            <Link to={localizedPath("/support/")}>{copy.nav.support}</Link>
            <Link to={localizedPath("/privacy/")}>{copy.nav.privacy}</Link>
          </div>
          <div className="footer-legal">
            <p>{copy.footer.boundary}</p>
            <a href="mailto:privacy@monoware.app">
              {copy.footer.contact}: privacy@monoware.app
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {copy.footer.rights}</span>
          <span>ON-DEVICE · NO TRACKING · ONE INSTRUMENT</span>
        </div>
      </footer>
    </div>
  );
}
