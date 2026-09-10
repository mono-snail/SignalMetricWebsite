import { describe, expect, it } from "vitest";
import { localizePath } from "./localizePath";

describe("localizePath", () => {
  it("places the locale before a fragment", () => {
    expect(localizePath("/#instruments", "zh-CN")).toBe(
      "/zh-CN/#instruments",
    );
  });

  it("preserves existing query parameters and fragments", () => {
    expect(localizePath("/measurements/?group=level#rms", "ja")).toBe(
      "/ja/measurements/?group=level#rms",
    );
  });

  it("replaces an existing locale", () => {
    expect(localizePath("/ja/support/?lang=ja", "ko")).toBe(
      "/ko/support/",
    );
  });

  it("uses the traditional Chinese locale route", () => {
    expect(localizePath("/zh-CN/measurements/", "zh-Hant")).toBe(
      "/zh-Hant/measurements/",
    );
  });

  it("removes the locale for English", () => {
    expect(localizePath("/zh-CN/privacy/?lang=zh-CN", "en")).toBe("/privacy/");
  });

  it("does not mistake a content slug for a locale", () => {
    expect(localizePath("/japan/", "ja")).toBe("/ja/japan/");
  });
});
