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

export interface CategoriesProps {
  categories: Category[];
}
