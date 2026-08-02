import type { Locale } from "@/i18n/types";

export type FeedbackType =
  | "feature_request"
  | "bug"
  | "improvement"
  | "other";

export interface FeedbackDraft {
  type: FeedbackType;
  title: string;
  description: string;
  email: string;
}

export interface FeedbackErrors {
  title?: true;
  description?: true;
  email?: true;
}

export interface FeedbackReceipt {
  id: string;
  createdAt: string;
}

export class SupportApiError extends Error {
  status: number;

  constructor(message: string, status = 0) {
    super(message);
    this.name = "SupportApiError";
    this.status = status;
  }
}

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const validateFeedback = (draft: FeedbackDraft): FeedbackErrors => {
  const errors: FeedbackErrors = {};
  const title = draft.title.trim();
  const description = draft.description.trim();
  const email = draft.email.trim();

  if (title.length < 3 || title.length > 160) {
    errors.title = true;
  }
  if (description.length < 10 || description.length > 5_000) {
    errors.description = true;
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = true;
  }
  return errors;
};

export const submitFeedback = async (
  draft: FeedbackDraft,
  locale: Locale,
): Promise<FeedbackReceipt> => {
  const payload = {
    product: "signalmetric",
    type: draft.type,
    title: draft.title.trim(),
    description: draft.description.trim(),
    email: draft.email.trim(),
    extension: {
      source: "signalmetric-website",
      locale,
      page: "/support/",
    },
  };

  const body = JSON.stringify(payload);
  if (new TextEncoder().encode(body).byteLength > 24_576) {
    throw new SupportApiError("Feedback payload is too large.", 413);
  }

  let response: Response;
  try {
    response = await fetch(
      "https://support.monoware.app/api/v1/feedback",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      },
    );
  } catch {
    throw new SupportApiError("Network request failed.");
  }

  const result = (await response.json().catch(() => null)) as
    | FeedbackReceipt
    | { error?: string }
    | null;

  if (!response.ok) {
    const message =
      result && "error" in result && result.error
        ? result.error
        : "Feedback could not be saved.";
    throw new SupportApiError(message, response.status);
  }

  if (
    !result ||
    !("id" in result) ||
    typeof result.id !== "string" ||
    !("createdAt" in result) ||
    typeof result.createdAt !== "string"
  ) {
    throw new SupportApiError("The support service returned an unreadable response.");
  }

  return { id: result.id, createdAt: result.createdAt };
};
