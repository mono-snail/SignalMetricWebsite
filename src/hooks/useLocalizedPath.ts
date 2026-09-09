import { localizePath } from "@/hooks/localizePath";
import { useCopy } from "@/i18n/store";

export const useLocalizedPath = () => {
  const { locale } = useCopy();

  return (path: string) => localizePath(path, locale);
};
