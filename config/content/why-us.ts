export type WhyUsIcon = "experiencia" | "stock" | "precio" | "servicio";

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: WhyUsIcon;
}

export const whyUs = {
  title: "¿Por qué elegir Beta Electricidad?",
  description:
    "Nuestra reputación se construye sobre pilares sólidos que garantizan el éxito de cada instalación.",
  image: {
    src: "/images/why-us-electrician.jpg",
    alt: "Técnico de Beta Electricidad trabajando en un tablero eléctrico",
  },
  items: [
    { id: "experiencia", title: "Experiencia", description: "Más de 30 años de trayectoria en el mercado regional.", icon: "experiencia" },
    { id: "stock", title: "Stock Real", description: "Amplio stock disponible en materiales eléctricos, instrumental e iluminación.", icon: "stock" },
    { id: "precio", title: "Precio Directo", description: "Condiciones competitivas tanto para compras minoristas como de volumen.", icon: "precio" },
    { id: "servicio", title: "Servicio", description: "Atención personalizada y logística eficiente para cumplir con sus plazos.", icon: "servicio" },
  ] satisfies WhyUsItem[],
};