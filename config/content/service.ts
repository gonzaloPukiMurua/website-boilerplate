export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const service = {
  eyebrow: "Nuestros Servicios",
  title: "Venta al Por Menor y al Por Mayor",
  description:
    "Más de 30 años proveyendo materiales eléctricos, instrumental y artículos de iluminación en La Falda y la región.",
  items: [
    { id: "menorista", title: "Venta al Por Menor", description: "Atención a particulares y profesionales que necesitan materiales eléctricos para instalaciones puntuales." },
    { id: "mayorista", title: "Venta al Por Mayor", description: "Provisión de materiales eléctricos, instrumental e iluminación para instaladores, comercios y obras de mayor escala." },
    { id: "trayectoria", title: "Atención Personalizada", description: "Más de 30 años de trayectoria en el rubro para ayudarlo a encontrar el material correcto para cada proyecto." },
  ] satisfies ServiceItem[],
};