import { describe, expect, it } from "vitest";
import { localizePath } from "./localizePath";

describe("localizePath", () => {
  it("places the locale before a fragment", () => {
    expect(localizePath("/#instruments", "zh-CN")).toBe(
      "/?lang=zh-CN#instruments",
    );
  });

  it("preserves existing query parameters and fragments", () => {
    expect(localizePath("/measurements/?group=level#rms", "ja")).toBe(
      "/measurements/?group=level&lang=ja#rms",
    );
  });

  it("replaces an existing locale", () => {
    expect(localizePath("/support/?lang=ja", "ko")).toBe(
      "/support/?lang=ko",
    );
  });

  it("removes the locale for English", () => {
    expect(localizePath("/privacy/?lang=zh-CN", "en")).toBe("/privacy/");
  });
});
