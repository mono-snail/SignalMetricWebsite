import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  localizeMetric,
  metricGroupNames,
  metrics,
  type MetricGroup,
} from "@/content/metrics";
import { useCopy } from "@/i18n/store";

const groups: MetricGroup[] = [
  "level",
  "loudness",
  "dynamics",
  "spectrum",
  "musical",
  "integrity",
];

export default function MetricGlossary() {
  const { copy, locale } = useCopy();
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<MetricGroup | "all">(
    "all",
  );

  const visibleMetrics = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    return metrics
      .map((metric) => localizeMetric(metric, locale))
      .filter((metric) => {
        const groupMatches =
          selectedGroup === "all" || metric.group === selectedGroup;
        const searchMatches =
          !normalized ||
          [
            metric.label,
            metric.unit ?? "",
            metric.groupName,
            metric.window,
            metric.reading,
            metric.limit,
          ]
            .join(" ")
            .toLocaleLowerCase(locale)
            .includes(normalized);
        return groupMatches && searchMatches;
      });
  }, [locale, query, selectedGroup]);

  return (
    <div className="glossary">
      <div className="glossary-toolbar">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">{copy.measurements.searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.measurements.searchPlaceholder}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={copy.common.clearSearch}
            >
              <X size={16} />
            </button>
          )}
        </label>

        <div className="filter-rail" role="group" aria-label="Metric groups">
          <button
            type="button"
            className={selectedGroup === "all" ? "active" : ""}
            onClick={() => setSelectedGroup("all")}
          >
            {copy.measurements.allGroups}
          </button>
          {groups.map((group) => (
            <button
              type="button"
              className={selectedGroup === group ? "active" : ""}
              onClick={() => setSelectedGroup(group)}
              key={group}
            >
              {metricGroupNames[group][locale]}
            </button>
          ))}
        </div>
      </div>

      {visibleMetrics.length ? (
        <div className="metric-definition-grid">
          {visibleMetrics.map((metric) => (
            <article className="metric-definition" key={metric.id}>
              <header>
                <span>{metric.groupName}</span>
                <h2>
                  {metric.label}
                  {metric.unit && <small>{metric.unit}</small>}
                </h2>
              </header>
              <dl>
                <div>
                  <dt>{copy.measurements.window}</dt>
                  <dd>{metric.window}</dd>
                </div>
                <div>
                  <dt>{copy.measurements.howToRead}</dt>
                  <dd>{metric.reading}</dd>
                </div>
                <div>
                  <dt>{copy.measurements.limit}</dt>
                  <dd>{metric.limit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={24} aria-hidden="true" />
          <p>{copy.measurements.noResults}</p>
        </div>
      )}
    </div>
  );
}
