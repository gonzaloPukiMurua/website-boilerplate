import { Hero } from "@/features/landing/sections/Hero";
import { hero } from "@/config/content/hero";
import { Categories } from "@/features/landing/sections/Categories";
import { categories } from "@/config/content/categories";
import { WhyUs } from "@/features/landing/sections/WhyUs";
import { whyUs } from "@/config/content/why-us";
import { Brands } from "@/features/landing/sections/Brands";
import { brands } from "@/config/content/brands";
import { Services } from "@/features/landing/sections/Services";
import { service } from "@/config/content/service";
import { Contact } from "@/features/landing/sections/Contact";
import { contact } from "@/config/content/contact";

export default function HomePage() {
  return (
    <main>
      <Hero
        {...hero}
      />
      <Categories categories={categories} />
      <WhyUs {...whyUs} />
      <Brands {...brands} />
      <Services {...service} />
      <Contact
        formTitle={contact.form.title}
        infoTitle={contact.info.title}
        infoItems={contact.info.items}
        whatsappCta={contact.whatsappCta}
      />
    </main>
  );
}