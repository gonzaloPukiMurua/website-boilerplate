import { Hero } from "@/features/landing/sections/Hero";
import { hero } from "@/config/content/hero";
import { Categories } from "@/features/landing/sections/Categories";
import { WhyUs } from "@/features/landing/sections/WhyUs";
import { Brands } from "@/features/landing/sections/Brands";
import { Services } from "@/features/landing/sections/Services";
import { Contact } from "@/features/landing/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero
        {...hero}
      />
      <Categories/>
      <WhyUs/>
      <Brands/>
      <Services/>
      <Contact/>
    </main>
  );
}