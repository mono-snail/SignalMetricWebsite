import { describe, expect, it } from "vitest";
import {
  validateFeedback,
  type FeedbackDraft,
} from "./supportApi";

const validDraft: FeedbackDraft = {
  type: "improvement",
  title: "Improve spectrum cursor",
  description: "Please make the selected frequency easier to compare.",
  email: "user@example.com",
};

describe("validateFeedback", () => {
  it("accepts a valid draft", () => {
    expect(validateFeedback(validDraft)).toEqual({});
  });

  it("trims fields before checking minimum lengths", () => {
    expect(
      validateFeedback({
        ...validDraft,
        title: "  ab  ",
        description: "  too short  ",
      }),
    ).toEqual({ title: true, description: true });
  });

  it("rejects values beyond API maximums", () => {
    expect(
      validateFeedback({
        ...validDraft,
        title: "a".repeat(161),
        description: "b".repeat(5_001),
        email: `${"c".repeat(245)}@example.com`,
      }),
    ).toEqual({ title: true, description: true, email: true });
  });

  it("rejects malformed email addresses", () => {
    expect(
      validateFeedback({ ...validDraft, email: "not-an-email" }),
    ).toEqual({ email: true });
  });
});
