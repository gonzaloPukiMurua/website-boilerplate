import { Hero } from "@/features/landing/sections/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="Stock permanente"
        title="Materiales eléctricos en La Falda"
        description="Stock disponible para electricistas, instaladores y constructoras."
        ctaLabel="Consultar por WhatsApp"
        ctaHref="https://wa.me/549XXXXXXXXXX"
      />
    </main>
  );
}