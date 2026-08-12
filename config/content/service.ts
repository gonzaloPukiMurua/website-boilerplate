export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const service = {
  eyebrow: "Nuestros Servicios",
  title: "Apoyo Profesional en Cada Etapa",
  description:
    "No solo vendemos materiales, proporcionamos el conocimiento necesario para que su inversión sea eficiente y segura.",
  items: [
    { id: "asesoramiento", title: "Asesoramiento Técnico", description: "Contamos con ingenieros y técnicos capacitados para resolver dudas sobre normativas, especificaciones y alternativas de producto." },
    { id: "cotizaciones", title: "Cotizaciones Rápidas", description: "Entregamos presupuestos detallados en menos de 24 horas para que sus proyectos no se detengan." },
    { id: "venta", title: "Venta por Mayor y Menor", description: "Atendemos tanto a instaladores y constructoras como a usuarios finales con la misma dedicación." },
    { id: "logistica", title: "Logística de Entrega", description: "Flota propia para asegurar que el material llegue a obra en tiempo y forma en toda la región." },
  ] satisfies ServiceItem[],
};