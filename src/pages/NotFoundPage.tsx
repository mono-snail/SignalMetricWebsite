import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { useCopy } from "@/i18n/store";

export default function NotFoundPage() {
  const { copy } = useCopy();
  const localizedPath = useLocalizedPath();

  return (
    <section className="not-found section-shell">
      <div className="not-found-signal" aria-hidden="true">
        <span />
      </div>
      <p className="eyebrow">{copy.notFound.eyebrow}</p>
      <h1>{copy.notFound.title}</h1>
      <p>{copy.notFound.body}</p>
      <Link className="button button-secondary" to={localizedPath("/")}>
        <ArrowLeft size={17} aria-hidden="true" />
        {copy.common.backHome}
      </Link>
    </section>
  );
}
