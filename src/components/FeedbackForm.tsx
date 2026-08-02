import { useState, type FormEvent } from "react";
import {
  Bug,
  CheckCircle2,
  Lightbulb,
  LockKeyhole,
  MessageSquareMore,
  Send,
  SlidersHorizontal,
} from "lucide-react";
import { useCopy } from "@/i18n/store";
import {
  submitFeedback,
  SupportApiError,
  validateFeedback,
  type FeedbackDraft,
  type FeedbackErrors,
  type FeedbackReceipt,
  type FeedbackType,
} from "@/services/supportApi";

const initialDraft: FeedbackDraft = {
  type: "improvement",
  title: "",
  description: "",
  email: "",
};

const types: FeedbackType[] = [
  "feature_request",
  "bug",
  "improvement",
  "other",
];

const typeIcons = {
  feature_request: Lightbulb,
  bug: Bug,
  improvement: SlidersHorizontal,
  other: MessageSquareMore,
};

export default function FeedbackForm() {
  const { copy, locale } = useCopy();
  const [draft, setDraft] = useState(initialDraft);
  const [errors, setErrors] = useState<FeedbackErrors>({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<FeedbackReceipt | null>(null);

  const update = (
    field: keyof FeedbackDraft,
    value: FeedbackDraft[keyof FeedbackDraft],
  ) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setServerError("");
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateFeedback(draft);
    setErrors(nextErrors);
    setServerError("");
    if (Object.keys(nextErrors).length) {
      return;
    }

    setSubmitting(true);
    try {
      setReceipt(await submitFeedback(draft, locale));
    } catch (error) {
      if (error instanceof SupportApiError) {
        if (error.status === 413) {
          setServerError(copy.support.errors.tooLarge);
        } else if (error.status === 503) {
          setServerError(copy.support.errors.unavailable);
        } else {
          setServerError(error.message || copy.support.errors.generic);
        }
      } else {
        setServerError(copy.support.errors.generic);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setDraft(initialDraft);
    setErrors({});
    setServerError("");
    setReceipt(null);
  };

  if (receipt) {
    return (
      <div className="feedback-success" role="status">
        <CheckCircle2 size={42} aria-hidden="true" />
        <p className="eyebrow">{copy.support.formEyebrow}</p>
        <h2>{copy.support.successTitle}</h2>
        <p>{copy.support.successBody}</p>
        <div className="receipt">
          <span>{copy.support.reference}</span>
          <strong>{receipt.id}</strong>
          <time dateTime={receipt.createdAt}>
            {new Intl.DateTimeFormat(locale, {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(receipt.createdAt))}
          </time>
        </div>
        <button className="button button-secondary" type="button" onClick={reset}>
          {copy.support.another}
        </button>
      </div>
    );
  }

  return (
    <form className="feedback-form" onSubmit={submit} noValidate>
      <header>
        <p className="eyebrow">{copy.support.formEyebrow}</p>
        <h2>{copy.support.formTitle}</h2>
        <p>{copy.support.formLead}</p>
      </header>

      <fieldset className="feedback-types">
        <legend>{copy.support.typeLabel}</legend>
        <div>
          {types.map((type) => {
            const Icon = typeIcons[type];
            return (
              <label key={type} className={draft.type === type ? "active" : ""}>
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={draft.type === type}
                  onChange={() => update("type", type)}
                />
                <Icon size={17} aria-hidden="true" />
                <span>{copy.support.types[type]}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="form-field">
        <span>
          {copy.support.titleLabel}
          <small>{draft.title.length} / 160</small>
        </span>
        <input
          type="text"
          value={draft.title}
          onChange={(event) => update("title", event.target.value)}
          placeholder={copy.support.titlePlaceholder}
          maxLength={180}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "title-error" : undefined}
        />
        {errors.title && (
          <em id="title-error">{copy.support.errors.title}</em>
        )}
      </label>

      <label className="form-field">
        <span>
          {copy.support.descriptionLabel}
          <small>{draft.description.length} / 5,000</small>
        </span>
        <textarea
          value={draft.description}
          onChange={(event) => update("description", event.target.value)}
          placeholder={copy.support.descriptionPlaceholder}
          rows={8}
          maxLength={5_200}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description && (
          <em id="description-error">{copy.support.errors.description}</em>
        )}
      </label>

      <label className="form-field">
        <span>{copy.support.emailLabel}</span>
        <input
          type="email"
          value={draft.email}
          onChange={(event) => update("email", event.target.value)}
          placeholder={copy.support.emailPlaceholder}
          autoComplete="email"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <em id="email-error">{copy.support.errors.email}</em>
        )}
      </label>

      <div className="privacy-warning">
        <LockKeyhole size={19} aria-hidden="true" />
        <p>{copy.support.privacyWarning}</p>
      </div>

      {serverError && (
        <p className="form-server-error" role="alert">
          {serverError}
        </p>
      )}

      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={submitting}
      >
        <Send size={17} aria-hidden="true" />
        {submitting ? copy.support.sending : copy.support.send}
      </button>
    </form>
  );
}
