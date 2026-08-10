import {
  Cable,
  CircuitBoard,
  Gauge,
  Lightbulb,
  Plug,
  Shield,
  SlidersHorizontal,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { CategoryIcon as CategoryIconName } from "@/config/content/categories";

const categoryIcons: Record<CategoryIconName, LucideIcon> = {
  cables: Cable,
  canalizaciones: SlidersHorizontal,
  tableros: CircuitBoard,
  llaves: Plug,
  iluminacion: Lightbulb,
  instrumental: Gauge,
  protecciones: Shield,
  potencia: Zap,
};

interface CategoryIconProps {
  name: CategoryIconName;
  size?: number;
  strokeWidth?: number;
}

export function CategoryIcon({
  name,
  size = 24,
  strokeWidth = 2,
}: CategoryIconProps) {
  const Icon = categoryIcons[name];

  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}