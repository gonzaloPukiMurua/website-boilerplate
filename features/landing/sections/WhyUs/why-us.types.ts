export type WhyUsIcon = "experiencia" | "stock" | "precio" | "servicio";

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: WhyUsIcon;
}

export interface WhyUsImage {
  src: string;
  alt: string;
}

export interface WhyUsProps {
  title: string;
  description: string;
  image: WhyUsImage;
  items: WhyUsItem[];
}
