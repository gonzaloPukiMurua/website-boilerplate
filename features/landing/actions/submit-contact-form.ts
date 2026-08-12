"use server";

import { z } from "zod";
import { Resend } from "resend";

import { contact as siteContact } from "@/config/site/contact";
import { contact as contactContent } from "@/config/content/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre completo."),
  email: z.string().trim().email("Ingresá un email válido."),
  projectType: z.enum(["residencial", "comercial", "industrial", "otro"], {
    error: "Seleccioná un tipo de proyecto.",
  }),
  message: z.string().trim().min(10, "Contanos un poco más sobre tu proyecto."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
}

export const initialContactFormState: ContactFormState = { status: "idle" };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues;
      fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors, message: "Revisá los campos marcados." };
  }

  if (!siteContact.email) {
    console.error("submitContactForm: config/site/contact.ts no tiene un email de destino configurado.");
    return { status: "error", message: contactContent.form.errorMessage };
  }

  const { name, email, projectType, message } = parsed.data;

  try {
    await resend.emails.send({
      // TODO: reemplazar por un remitente de dominio verificado en Resend antes de producción.
      from: "Beta Electricidad <onboarding@resend.dev>",
      to: siteContact.email,
      replyTo: email,
      subject: `Nueva consulta de proyecto — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Tipo de proyecto: ${projectType}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    return { status: "success", message: contactContent.form.successMessage };
  } catch (error) {
    console.error("submitContactForm:", error);
    return { status: "error", message: contactContent.form.errorMessage };
  }
}
