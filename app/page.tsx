import { Hero } from "@/features/landing/sections/Hero";
import { hero } from "@/config/content/hero";
import { Categories } from "@/features/landing/sections/Categories";
export default function HomePage() {
  return (
    <main>
      <Hero
        {...hero}
      />
      <Categories/>
    </main>
  );
}