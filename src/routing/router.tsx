import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  normalizeRoutePath,
  readLocation,
  RouterContext,
  useLocation,
} from "@/routing/routerContext";

export function Router({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const locationChanged = () => setLocation(readLocation());
    window.addEventListener("popstate", locationChanged);
    window.addEventListener("hashchange", locationChanged);
    return () => {
      window.removeEventListener("popstate", locationChanged);
      window.removeEventListener("hashchange", locationChanged);
    };
  }, []);

  const navigate = (to: string) => {
    const url = new URL(to, window.location.href);
    if (url.origin !== window.location.origin) {
      window.location.assign(url.href);
      return;
    }

    window.history.pushState({}, "", url);
    setLocation(readLocation());
  };

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

export function Link({ to, onClick, ...props }: LinkProps) {
  const { navigate } = useLocation();

  const linkClicked = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (props.target !== undefined && props.target !== "_self") ||
      props.download !== undefined
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return <a {...props} href={to} onClick={linkClicked} />;
}

export function NavLink({ to, className, ...props }: LinkProps) {
  const { pathname } = useLocation();
  const targetPath = new URL(to, window.location.href).pathname;
  const active =
    normalizeRoutePath(pathname) === normalizeRoutePath(targetPath);
  const mergedClassName = [className, active ? "active" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      {...props}
      to={to}
      className={mergedClassName || undefined}
      aria-current={active ? "page" : undefined}
    />
  );
}
