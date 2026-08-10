export type CategoryIcon =
  | "cables"
  | "canalizaciones"
  | "tableros"
  | "llaves"
  | "iluminacion"
  | "instrumental"
  | "protecciones"
  | "potencia";

export interface Category {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: CategoryIcon;
}

export const categories: Category[] = [
  {
    id: "cables",
    name: "Cables",
    description:
      "Conductores de baja, media y alta tensión con certificaciones internacionales.",
    href: "#cables",
    icon: "cables",
  },
  {
    id: "canalizaciones",
    name: "Canalizaciones",
    description:
      "Bandejas portacables, caños rígidos y accesorios para instalaciones seguras.",
    href: "#canalizaciones",
    icon: "canalizaciones",
  },
  {
    id: "tableros",
    name: "Tableros",
    description:
      "Cajas, envolventes y gabinetes para distribución y automatización.",
    href: "#tableros",
    icon: "tableros",
  },
  {
    id: "llaves",
    name: "Llaves",
    description:
      "Sistemas de interrupción y comando para uso doméstico e industrial.",
    href: "#llaves",
    icon: "llaves",
  },
  {
    id: "iluminacion",
    name: "Iluminación",
    description:
      "Tecnología LED de alta eficiencia para ambientes interiores y exteriores.",
    href: "#iluminacion",
    icon: "iluminacion",
  },
  {
    id: "instrumental",
    name: "Instrumental",
    description:
      "Equipos de medición de precisión para diagnósticos eléctricos.",
    href: "#instrumental",
    icon: "instrumental",
  },
  {
    id: "protecciones",
    name: "Protecciones",
    description:
      "Interruptores diferenciales, térmicos y protectores de sobretensión.",
    href: "#protecciones",
    icon: "protecciones",
  },
  {
    id: "potencia",
    name: "Potencia",
    description:
      "Contactores, relés térmicos y variadores para control industrial.",
    href: "#potencia",
    icon: "potencia",
  },
];