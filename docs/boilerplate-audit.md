# Auditoría técnica — Boilerplate de Landing

Snapshot del estado del repositorio a 2026-08-20. Este documento describe la arquitectura
tal como existe hoy, no un plan a futuro.

---

## 1. STACK

- **Framework:** Next.js 16.2.12 (App Router). El `AGENTS.md` del repo advierte explícitamente
  que esta versión tiene APIs/convenciones que difieren de lo habitual — revisar
  `node_modules/next/dist/docs/` antes de asumir comportamiento estándar.
- **Gestor de paquetes:** npm (hay `package-lock.json`).
- **Lenguaje:** TypeScript 5, strict por convención de Next.
- **React:** 19.2.4 / React DOM 19.2.4.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`), con tokens semánticos vía CSS custom
  properties en `app/globals.css` (`@theme inline`). `class-variance-authority` (cva) para
  variantes de componentes, `tailwind-merge` + `clsx` para composición de clases (`cn()`).
- **Animación:** `motion` (Framer Motion v13-style API).
- **Iconos:** `lucide-react`.
- **Forms:** sin librería de forms (no react-hook-form). Usa `useActionState` de React 19 +
  Server Actions + validación con `zod`.
- **Email:** `resend` para el envío del formulario de contacto.
- **Datos/CMS:** `@supabase/supabase-js` está en dependencias pero **no se usa en ningún
  lugar** — es un adapter vacío, ver sección 6.
- **Imágenes:** `next/image` (sin configuración de `remotePatterns`/`domains` en
  `next.config.ts`, que está vacío).
- **Testing:** `@playwright/test` + `@axe-core/playwright` para accesibilidad automatizada.
- **Analytics:** no hay ninguna dependencia ni integración de analytics (GA, Plausible, etc.).
  Inexistente, no oculto.

---

## 2. ESTRUCTURA DE CARPETAS

```
app/                      — App Router: layout raíz, page única, error/not-found
  layout.tsx                — punto de entrada: fonts (next/font/google), metadata API, JSON-LD, Header/Footer
  page.tsx                  — composición de la landing (una sola página, orden fijo de secciones)
  globals.css                — tokens de color (CSS vars), @theme inline de Tailwind, fonts

design-system/            — capa de UI reutilizable, sin conocimiento del dominio "Beta Electricidad"
  components/
    core/                    — layout primitives: Container, Grid, Section, Stack, Page, Heading, Text
    ui/                      — controles: Button, Input, Select, Textarea, Label, Card, Badge, Icon, Marquee
    navigation/              — Navbar, Navigation, NavItem, Logo, mobile menu/toggle
    seo/                     — LocalBusinessJsonLd (único helper de SEO estructurado)
  tokens/                    — spacing, typography, colors, radius, shadows, motion, grid, flex, layout (todo TS, exportado desde tokens/index.ts)
  constants/                 — breakpoints.ts (lista de breakpoints Tailwind estándar)
  types/                     — tipos compartidos + polymorphic.types.ts (soporte de prop `as`)
  utils/cn.ts                 — helper clsx + tailwind-merge

features/                 — lógica y composición específica de la landing
  content/                   — capa de adapters para fuentes de contenido (CMS/Supabase/config) — **stub vacío**, ver sección 6
  landing/
    actions/                   — submit-contact-form.ts (Server Action con zod + Resend)
    components/                 — piezas de sección: CategoryCard, ContactForm, ContactInfoItem, ContactMap, ServiceItem, TestimonialCard, WhyUsCard
    lib/                        — mapas de íconos por id (category-icon-map, contact-icon-map, why-us-icon-map)
    sections/                   — Hero, Categories, WhyUs, Brands, Services, Testimonials, Contact (una carpeta por sección de la home)
  layout/
    Header/                     — navbar sticky + navegación
    Footer/                     — footer con navegación, contacto, copyright

config/
  site/                      — identidad "de proyecto": branding, contact (vacío por defecto), navigation, seo, site — **placeholders genéricos**
  content/                   — copy y datos de la landing actual: hero, categories, why-us, service, brands, testimonials, contact, cta (vacío), faqs (vacío) — **contenido específico del negocio, en español**

tests/
  landing-baseline.spec.ts    — snapshots visuales + a11y por sección (mobile/tablet/desktop)
  landing-baseline.spec.ts-snapshots/ — baseline de imágenes PNG por breakpoint

lib/                       — carpeta vacía (sin archivos)
```

Puntos de entrada clave: `app/layout.tsx` (fonts, metadata, JSON-LD global, shell Header/Footer),
`app/page.tsx` (orden de secciones de la home), `app/globals.css` (única fuente de verdad de
color a runtime), `design-system/index.ts` (barrel público del design system).

---

## 3. DESIGN SYSTEM / TOKENS

Los tokens existen y están tipados en TypeScript (`design-system/tokens/*.ts`), pero **no son
configurables por proyecto**: son mapas fijos de nombre semántico → clase Tailwind
(`typography.h1 = "text-4xl lg:text-5xl"`, `spacing.md = "gap-6"`, `radius.lg = "rounded-lg"`).
No hay una capa de theming (no hay `theme.json`, no hay provider de tema, no hay swapping de
paleta en runtime más allá de light/dark vía `prefers-color-scheme`).

El **color real** vive en `app/globals.css` como variables CSS HSL (`--primary: 222 100% 21%`,
`--secondary: 1 61% 43%`, etc.), mapeadas a utilities de Tailwind vía `@theme inline`. Estos
valores **no son neutros**: son la paleta específica de "Beta Electricidad" (navy + rojo
ladrillo), documentada explícitamente en `DESIGN.md` como decisión de marca ("El Panel
Eléctrico"). Cambiar de proyecto requiere editar `globals.css` a mano; no hay indirección.

Tipografía: dos Google Fonts cargadas por nombre en `app/layout.tsx` (`Hanken_Grotesk`,
`Epilogue`, más `Geist_Mono` sin uso visible en la landing) — también una elección de marca, no
un default neutro.

Breakpoints (`design-system/constants/breakpoints.ts`) sí son genéricos: la escala estándar de
Tailwind (`base, sm, md, lg, xl, 2xl`), sin valores custom.

**Conclusión:** el diseño visual (color + tipografía) está mezclado con las primitivas del
design system, no separado en una capa de theming intercambiable. Los tokens dan una API
consistente (`typography.h2`, `colors.background.primary`) pero los *valores* detrás de esa API
son específicos de un solo proyecto.

---

## 4. UI PRIMITIVES

Componentes en `design-system/components/ui/` y `core/`:

- **Button** — variantes `primary/secondary/outline/ghost/destructive/link/cta` (cva). Sin
  skin propio explícito, pero el variant `cta` fue creado específicamente para el patrón de
  "acción roja" del proyecto actual (ver DESIGN.md, "The Scarce Red Rule").
- **Input / Textarea / Select / Label** — controles de formulario con soporte de `error` prop,
  estilo neutro (borde, focus ring). Reutilizables sin cambios.
- **Card** (+ CardHeader/CardTitle/CardDescription/CardContent/CardFooter) — variantes
  `default/outlined/elevated/interactive`, genérico.
- **Badge, Icon, Marquee** — genéricos, sin acoplamiento de contenido.
- **Container, Grid, Stack, Section, Page, Heading, Text** — primitivas de layout, todas con
  soporte de prop polimórfica `as` (`polymorphic.types.ts`). Genéricas y reutilizables.
- **Navigation** (Navbar, Navigation, NavItem, NavbarActions, Logo, NavigationMobileMenu,
  NavigationToggle) — esqueleto de navegación sin contenido hardcodeado, recibe `items` e
  `href`s por props.

En general: **la capa de primitivas en sí es "sin skin"** (variant-driven, no hay texto ni
datos de negocio embebidos). Lo que la ata al proyecto actual son los *valores* de los tokens
que consume (color, radios, fuentes) — no la lógica de los componentes.

---

## 5. REUSABLE PATTERNS Y SECTIONS

**Patrones de interacción (`features/landing/components/`):**
- `ContactForm` — patrón reutilizable de formulario controlado por Server Action
  (`useActionState` + zod + estado de error por campo). El *esqueleto* (validación,
  loading state, mensajes success/error) es genérico; los *campos* (`projectType` con enum
  residencial/comercial/industrial/otro) son específicos del negocio.
- `ContactMap` — embed de Google Maps por query string, genérico y reutilizable tal cual.
- `CategoryCard`, `ServiceItem`, `TestimonialCard`, `WhyUsCard` — presentacionales, reciben
  props tipadas; el shape de datos que esperan (categorías de materiales eléctricos, ratings de
  testimonios) refleja el dominio actual pero el componente en sí no tiene textos hardcodeados.

**Secciones de página (`features/landing/sections/`):** Hero, Categories, WhyUs, Brands,
Services, Testimonials, Contact — cada una es un componente sin props (o con props mínimas)
que importa su contenido directamente desde `config/content/*`. Esto significa que la
**estructura de layout es reutilizable** (Grid/Stack/Container con spacing consistente) pero
cada sección está **acoplada por import directo** a su archivo de contenido correspondiente —
no reciben el contenido como prop, lo resuelven ellas mismas. Duplicar el boilerplate para otro
proyecto implica editar el contenido importado, no solo pasar otras props.

`Header` y `Footer` (`features/layout/`) son esqueleto de layout genérico (leen `branding` y
`navigation` desde `config/site`, que sí son placeholders neutros).

---

## 6. BUSINESS LOGIC

Específico de "Beta Electricidad" (comercio de materiales eléctricos, La Falda) y que **no
debería generalizarse tal cual**:

- **`submit-contact-form.ts`**: el `from` del email está hardcodeado a
  `"Beta Electricidad <onboarding@resend.dev>"` (con un TODO explícito de reemplazar el
  remitente antes de producción). El enum `projectType` (`residencial/comercial/industrial/otro`)
  y todos los mensajes de validación de zod están en español y redactados para este negocio
  puntual.
- **`config/content/*.ts`** (categories, hero, why-us, service, brands, testimonials): copy y
  datos 100% específicos del rubro — nombres de categorías de productos eléctricos, "34 años en
  el mercado", testimonios con nombres/roles de personas ficticias/reales del proyecto.
- **`DESIGN.md`**: documenta la identidad visual como decisión de marca de este proyecto
  puntual ("El Panel Eléctrico"), no como sistema neutro.
- **Capa `features/content/`**: existe una intención arquitectónica de desacoplar el origen del
  contenido (`adapters/cms.adapter.ts`, `adapters/supabase.adapter.ts`,
  `adapters/config.adapter.ts`, `services/content.services.ts`, `types/content.types.ts`) pero
  **todos estos archivos están vacíos**. La dependencia `@supabase/supabase-js` está instalada
  pero no conectada a nada. Hoy el contenido se consume por import directo de `config/content/*`
  en cada sección, sin pasar por esta capa de adapters — es deuda/trabajo a medio camino, no una
  abstracción funcionando.

---

## 7. SEO

**Resuelto a nivel infraestructura:**
- Metadata API de Next (`app/layout.tsx`): `title` (con template), `description`, `keywords`,
  `openGraph` básico, `metadataBase` derivado de `config/site/site.ts`.
- `LocalBusinessJsonLd` (`design-system/components/seo/`): helper genérico de JSON-LD
  `schema.org/LocalBusiness`, recibe `site`/`contact`/`branding` como props tipadas y arma el
  objeto condicionalmente (solo incluye `address`/`telephone`/`email` si están definidos). Es
  reutilizable sin cambios.

**No resuelto / ausente:**
- No hay `app/sitemap.ts` ni `app/robots.ts`.
- No hay helpers de JSON-LD más allá de `LocalBusiness` (sin `Product`, `BreadcrumbList`, `FAQPage`
  pese a que existe un `config/content/faqs.ts` — vacío, sin usar).
- `seo.ogImage` está tipado pero `undefined` por defecto — no hay imagen OG configurada.
- `config/site/seo.ts` y `site.ts` están en placeholder genérico ("Website Name",
  `https://example.com`), a diferencia del resto del contenido que sí está hardcodeado al
  negocio — inconsistencia entre capas (ver sección 11).

---

## 8. PERFORMANCE

- **Fuentes:** cargadas con `next/font/google` (self-hosted automático, sin layout shift por
  diseño de la API) — correctamente configurado.
- **Imágenes:** se usa `next/image` en los pocos lugares con imágenes reales (`Brands.tsx`,
  `TestimonialCard.tsx`), lo cual habilita optimización automática, pero
  **`next.config.ts` está vacío** — no hay `remotePatterns` configurado, así que cualquier
  imagen externa (no local en `/public`) fallaría en build/runtime. No se ha verificado con
  imágenes reales de producción.
- **Lazy loading:** el único caso explícito es el iframe de `ContactMap`
  (`loading="lazy"`). No hay lazy-loading de secciones (todas las secciones de la home se
  renderizan server-side sin `dynamic()` ni streaming granular).
- **Bundle analysis:** no hay ningún análisis de bundle hecho ni configurado (`next.config.ts`
  no tiene `@next/bundle-analyzer` ni script asociado en `package.json`). Decilo explícito:
  **no hay nada configurado en este eje**, más allá de lo que Next 16 hace por defecto.

---

## 9. TESTING

Único framework: Playwright (`tests/landing-baseline.spec.ts`).

- **Cobertura:** snapshot visual full-page + snapshot por sección (hero, categories, why-us,
  brands, services, testimonials, contact, footer), cada uno en 3 viewports (mobile 360px,
  tablet 768px, desktop 1280px) vía 3 "projects" de Playwright.
- **Accesibilidad:** `@axe-core/playwright` corre sobre la página completa y sobre cada sección
  individualmente, excluyendo `iframe` (para no evaluar el embed de Google Maps, fuera de
  control del proyecto). Falla el test si hay cualquier violación de axe.
- Es una suite de **baseline/regresión visual**, no tests unitarios ni de integración de lógica
  (no hay tests para `submit-contact-form.ts`, validación de zod, ni de componentes aislados).
  No hay Jest/Vitest ni Testing Library en el proyecto.

---

## 10. CONTENT / BRANDING

Todo el contenido está **hardcodeado en archivos TypeScript** (`config/content/*.ts`), no hay
CMS conectado (ver stub vacío en sección 6) ni fetch a una fuente externa en runtime. El patrón
es: cada sección importa su archivo de contenido directamente por path fijo
(`import { hero } from "@/config/content/hero"`), no hay una capa intermedia que centralice el
acceso o permita swap de fuente.

Existe una separación de carpetas entre `config/site/` (identidad de proyecto: nombre, SEO,
navegación, contacto) y `config/content/` (copy de la landing), pero en la práctica **están en
estados de acoplamiento distintos**: `config/site/*` quedó en placeholders neutros
("Website Name", contacto todo `undefined`), mientras que `config/content/*` tiene el copy real
del negocio en español. Esto genera una landing que hoy mismo tiene una inconsistencia visible
(branding.name = "Landing Boilerplate" en el footer/header, pero el copy de las secciones habla
de "Beta Electricidad").

No hay sistema de i18n — todo el copy está en español sin capa de traducción.

---

## 11. DEUDA TÉCNICA / RIESGOS

1. **Color y tipografía viven en `globals.css`, no en una capa de theming.** Reusar este
   boilerplate para un proyecto visualmente distinto obliga a editar CSS custom properties a
   mano y releer `DESIGN.md` para entender qué reglas de marca ("Scarce Red Rule", etc.) hay
   que descartar — no hay un mecanismo de "cambiar tema" aislado del resto.
2. **La capa de adapters de contenido (`features/content/`) está vacía.** Da la falsa
   impresión de que el contenido es swappable (CMS/Supabase/config), pero cada sección importa
   `config/content/*` directamente. Si se reutiliza el boilerplate asumiendo que existe esa
   indirección, se descubre tarde que no hay tal cosa.
3. **`config/site/*` (genérico) y `config/content/*` (específico del negocio) están en
   estados de completitud distintos.** Un nuevo proyecto puede terminar mezclando placeholders
   sin completar con copy real, como pasa hoy (branding dice "Landing Boilerplate", el resto
   dice "Beta Electricidad").
4. **Lógica de negocio embebida en `submit-contact-form.ts`** (remitente de email hardcodeado,
   enum de tipos de proyecto, copy de validación en español) mezclada con el esqueleto genérico
   de Server Action + zod + Resend — hay que extraer/generalizar antes de reusar el patrón.
5. **Dependencias y SEO a medio configurar:** `@supabase/supabase-js` instalado sin uso real,
   `next.config.ts` sin `remotePatterns` (bloquea imágenes externas), sin `sitemap.ts`/`robots.ts`,
   y `faqs.ts`/`cta.ts` declarados pero vacíos — quedan como huecos que un proyecto nuevo puede
   pisar sin darse cuenta de que están sin terminar.
