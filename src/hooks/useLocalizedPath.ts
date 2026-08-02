import { localizePath } from "@/hooks/localizePath";
import { useLocaleStore } from "@/i18n/store";

export const useLocalizedPath = () => {
  const locale = useLocaleStore((state) => state.locale);

  return (path: string) => localizePath(path, locale);
};
