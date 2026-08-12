export type ProjectType = "residencial" | "comercial" | "industrial" | "otro";

export interface ProjectTypeOption {
  label: string;
  value: ProjectType;
}

export const contact = {
  form: {
    title: "Inicie su Proyecto",
    fields: {
      name: { label: "Nombre y Apellido", placeholder: "" },
      email: { label: "Email", placeholder: "" },
      projectType: { label: "Tipo de Proyecto" },
      message: { label: "Mensaje / Lista de Materiales", placeholder: "" },
    },
    projectTypes: [
      { label: "Residencial", value: "residencial" },
      { label: "Comercial", value: "comercial" },
      { label: "Industrial", value: "industrial" },
      { label: "Otro", value: "otro" },
    ] satisfies ProjectTypeOption[],
    submitLabel: "Enviar Solicitud",
    successMessage: "¡Gracias! Recibimos tu solicitud y te vamos a contactar a la brevedad.",
    errorMessage: "No pudimos enviar tu solicitud. Intentá nuevamente o escribinos por WhatsApp.",
  },
  info: {
    title: "Vías de Contacto",
    items: [
      { id: "address", label: "Casa Central", icon: "address" },
      { id: "phone", label: "Teléfonos", icon: "phone" },
      { id: "email", label: "Consultas Directas", icon: "email" },
    ],
  },
  whatsappCta: {
    eyebrow: "Atención Inmediata",
    title: "Chatea por WhatsApp",
  },
} as const;

export type ContactIcon = (typeof contact.info.items)[number]["icon"];
