import {
  LayoutGrid, SlidersHorizontal, Menu, ToggleLeft,
  Lightbulb, Gauge, Shield, Zap,
  type LucideIcon,
} from "lucide-react";
import type { CategoryIcon } from "@/config/content/categories";

export const categoryIconMap: Record<CategoryIcon, LucideIcon> = {
  cables: SlidersHorizontal,
  canalizaciones: Menu,
  tableros: LayoutGrid,
  llaves: ToggleLeft,
  iluminacion: Lightbulb,
  instrumental: Gauge,
  protecciones: Shield,
  potencia: Zap,
};