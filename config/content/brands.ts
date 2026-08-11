export interface Brand {
  id: string;
  name: string;
  logoSrc: string;
}

export const brands = {
  title: "Trabajamos con las marcas líderes",
  items: [
    { id: "marca-1", name: "Marca 1", logoSrc: "/images/brands/brand-1.png" },
    { id: "marca-2", name: "Marca 2", logoSrc: "/images/brands/brand-2.png" },
    { id: "marca-3", name: "Marca 3", logoSrc: "/images/brands/brand-3.png" },
    { id: "marca-4", name: "Marca 4", logoSrc: "/images/brands/brand-4.png" },
    { id: "marca-5", name: "Marca 5", logoSrc: "/images/brands/brand-5.png" },
    { id: "marca-6", name: "Marca 6", logoSrc: "/images/brands/brand-6.png" },
  ] satisfies Brand[],
};