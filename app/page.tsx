import { Hero } from "@/features/landing/sections/Hero";
import { hero } from "@/config/content/hero";
import { Categories } from "@/features/landing/sections/Categories";
import { WhyUs } from "@/features/landing/sections/WhyUs";
import { Brands } from "@/features/landing/sections/Brands";
export default function HomePage() {
  return (
    <main>
      <Hero
        {...hero}
      />
      <Categories/>
      <WhyUs/>
      <Brands/>
    </main>
  );
}