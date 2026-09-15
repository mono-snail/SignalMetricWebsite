import { describe, expect, it } from "vitest";
import { homeV2 } from "@/content/homeV2";
import { metrics } from "@/content/metrics";
import { copy } from "./copy";
import { locales } from "./types";

function leafPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((entry, index) =>
      leafPaths(entry, `${prefix}[${index}]`),
    );
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, entry]) =>
      leafPaths(entry, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

function textLeaves(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(textLeaves);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(textLeaves);
  }
  return typeof value === "string" ? [value] : [];
}

describe("localized content", () => {
  it("provides every supported locale", () => {
    expect(Object.keys(copy).sort()).toEqual([...locales].sort());
  });

  it("keeps core page collections complete in every locale", () => {
    const expectedPaths = leafPaths(copy.en).sort();
    for (const locale of locales) {
      expect(leafPaths(copy[locale]).sort()).toEqual(expectedPaths);
      expect(textLeaves(copy[locale]).every((value) => value.trim().length > 0))
        .toBe(true);
      expect(copy[locale].home.instruments).toHaveLength(4);
      expect(copy[locale].home.metricGroups).toHaveLength(6);
      expect(copy[locale].support.faqs).toHaveLength(8);
      expect(copy[locale].privacy.sections).toHaveLength(7);
    }
  });

  it("keeps the concise home page complete in every locale", () => {
    const workflowIDs = ["publish", "noise", "prepare"];
    const expectedPaths = leafPaths(homeV2.en).sort();
    for (const locale of locales) {
      const page = homeV2[locale];
      expect(leafPaths(page).sort()).toEqual(expectedPaths);
      expect(page.proof).toHaveLength(4);
      expect(page.workflows.map((workflow) => workflow.id)).toEqual(workflowIDs);
      expect(page.instrumentPoints).toHaveLength(2);
      for (const workflow of page.workflows) {
        expect(workflow.evidence).toHaveLength(2);
      }

      const visibleText = [
        page.heroLead,
        page.heroNote,
        page.appStore,
        page.appStoreStatus,
        page.android,
        page.androidStatus,
        page.guide,
        page.workflowsTitle,
        page.instrumentsTitle,
        page.instrumentsLead,
        page.themesTitle,
        page.privacyTitle,
        page.privacyLead,
        page.availabilityTitle,
        ...page.proof.flatMap((item) => [item.value, item.label]),
        ...page.instrumentPoints,
        ...page.workflows.flatMap((workflow) => [
          workflow.title,
          workflow.description,
          workflow.alt,
          ...workflow.evidence,
        ]),
      ];
      expect(visibleText.every((value) => value.trim().length > 0)).toBe(true);
      if (locale !== "en") {
        expect(page.heroLead).not.toBe(homeV2.en.heroLead);
        expect(page.workflowsTitle).not.toBe(homeV2.en.workflowsTitle);
      }
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
