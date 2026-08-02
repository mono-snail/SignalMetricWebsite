import { createContext, useContext } from "react";

export interface RouterLocation {
  pathname: string;
  search: string;
  hash: string;
}

export interface RouterContextValue extends RouterLocation {
  navigate: (to: string) => void;
}

export const readLocation = (): RouterLocation => ({
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
});

export const RouterContext = createContext<RouterContextValue | null>(null);

export const normalizeRoutePath = (pathname: string) => {
  if (pathname === "/") {
    return pathname;
  }
  return `${pathname.replace(/\/+$/, "")}/`;
};

export const useLocation = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useLocation must be used within Router");
  }
  return context;
};
