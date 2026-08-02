import { describe, expect, it } from "vitest";
import { metrics } from "@/content/metrics";
import { copy } from "./copy";
import { locales } from "./types";

describe("localized content", () => {
  it("provides every supported locale", () => {
    expect(Object.keys(copy).sort()).toEqual([...locales].sort());
  });

  it("keeps core page collections complete in every locale", () => {
    for (const locale of locales) {
      expect(copy[locale].home.instruments).toHaveLength(4);
      expect(copy[locale].home.metricGroups).toHaveLength(6);
      expect(copy[locale].support.faqs).toHaveLength(8);
      expect(copy[locale].privacy.sections).toHaveLength(7);
    }
  });

  it("localizes every metric field", () => {
    expect(metrics).toHaveLength(31);
    for (const metric of metrics) {
      for (const locale of locales) {
        expect(metric.window[locale].trim().length).toBeGreaterThan(4);
        expect(metric.reading[locale].trim().length).toBeGreaterThan(4);
        expect(metric.limit[locale].trim().length).toBeGreaterThan(4);
      }
    }
  });
});
