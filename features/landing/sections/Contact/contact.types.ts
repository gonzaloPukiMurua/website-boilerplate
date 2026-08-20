export type ContactIcon = "address" | "phone" | "email";

export interface ContactInfoItemContent {
  id: string;
  label: string;
  icon: ContactIcon;
}

export interface ContactWhatsappCta {
  eyebrow: string;
  title: string;
}

export interface ContactProps {
  formTitle: string;
  infoTitle: string;
  infoItems: readonly ContactInfoItemContent[];
  whatsappCta: ContactWhatsappCta;
}
