"use client";

import { useActionState, useEffect, useRef } from "react";

import { Input, Label, Select, Textarea, Button, Text } from "@/design-system";
import { contact } from "@/config/content/contact";
import {
  submitContactForm,
  initialContactFormState,
} from "@/features/landing/actions/submit-contact-form";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const { fields, projectTypes, submitLabel, successMessage } = contact.form;

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{fields.name.label}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            error={state.fieldErrors?.name}
          />
          {state.fieldErrors?.name && (
            <Text size="caption" variant="destructive" className="mt-1">
              {state.fieldErrors.name}
            </Text>
          )}
        </div>

        <div>
          <Label htmlFor="email">{fields.email.label}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            error={state.fieldErrors?.email}
          />
          {state.fieldErrors?.email && (
            <Text size="caption" variant="destructive" className="mt-1">
              {state.fieldErrors.email}
            </Text>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="projectType">{fields.projectType.label}</Label>
        <Select
          id="projectType"
          name="projectType"
          defaultValue={projectTypes[0].value}
          options={[...projectTypes]}
          error={state.fieldErrors?.projectType}
        />
      </div>

      <div>
        <Label htmlFor="message">{fields.message.label}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          error={state.fieldErrors?.message}
        />
        {state.fieldErrors?.message && (
          <Text size="caption" variant="destructive" className="mt-1">
            {state.fieldErrors.message}
          </Text>
        )}
      </div>

      {state.status === "success" && (
        <Text size="bodySm" variant="success">
          {state.message ?? successMessage}
        </Text>
      )}

      {state.status === "error" && state.message && !state.fieldErrors && (
        <Text size="bodySm" variant="destructive">
          {state.message}
        </Text>
      )}

      <Button type="submit" fullWidth loading={isPending}>
        {submitLabel}
      </Button>
    </form>
  );
}
