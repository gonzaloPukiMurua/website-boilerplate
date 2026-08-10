import { Hero } from "@/features/landing/sections/Hero";
import { hero } from "@/config/content/hero";
export default function HomePage() {
  return (
    <main>
      <Hero
        {...hero}
      />
    </main>
  );
}