---
name: Beta Electricidad
description: Landing comercial para un comercio técnico de materiales eléctricos, mayorista y minorista.
colors:
  primary: "hsl(222 100% 21%)"
  primary-foreground: "hsl(0 0% 100%)"
  secondary: "hsl(1 61% 43%)"
  secondary-foreground: "hsl(0 0% 100%)"
  background: "hsl(0 0% 95%)"
  foreground: "hsl(232 10% 30%)"
  card: "hsl(0 0% 100%)"
  card-foreground: "hsl(232 10% 30%)"
  muted: "hsl(0 0% 90%)"
  muted-foreground: "hsl(232 8% 45%)"
  accent: "hsl(0 0% 90%)"
  accent-foreground: "hsl(232 10% 30%)"
  destructive: "hsl(0 84% 60%)"
  destructive-foreground: "hsl(0 0% 100%)"
  border: "hsl(0 0% 87%)"
  ring: "hsl(222 100% 21%)"
typography:
  display:
    fontFamily: "Epilogue, var(--font-hanken-grotesk), Arial, Helvetica, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
  h1:
    fontFamily: "Epilogue, var(--font-hanken-grotesk), Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
  h2:
    fontFamily: "Epilogue, var(--font-hanken-grotesk), Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
  body:
    fontFamily: "Hanken Grotesk, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  label:
    fontFamily: "Hanken Grotesk, Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section-sm: "2rem"
  section-md: "3rem"
  section-lg: "5rem"
  section-xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
  card-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
---

# Design System: Beta Electricidad

## Overview

**Creative North Star: "El Panel Eléctrico"**

El navy oscuro y saturado (`hsl(222 100% 21%)`) es la carcasa metálica del tablero: seria, robusta, técnica, la superficie que carga la confianza de la marca en nav, headers y texto de marca. El rojo ladrillo (`hsl(1 61% 43%)`) es el conductor vivo: aparece solo donde hay acción real (CTAs, WhatsApp, énfasis puntual), nunca como decoración de fondo. El resto del sistema —grises casi blancos, tipografía geométrica sans-serif sin serifas— es el gabinete neutro alrededor de esos dos elementos: no compite, deja que navy y rojo carguen todo el peso de identidad.

Es un sistema pensado para un público técnico (electricistas, instaladores, constructoras) además de minorista: la seriedad viene primero, la acción se señaliza con precisión, no con ruido visual.

**Key Characteristics:**
- Navy saturado como color de autoridad de marca (headers, nav, texto de marca), nunca como fondo decorativo de sección completa.
- Rojo ladrillo reservado casi exclusivamente a CTAs y acentos de acción; su escasez es lo que le da peso.
- Grises neutros casi blancos como terreno; el color se gana su lugar, no lo ocupa por default.
- Tipografía geométrica sans (Epilogue + Hanken Grotesk) en toda la jerarquía, sin serifas: registro técnico, no editorial.
- Superficies planas en reposo; la sombra es una respuesta a la interacción, no un adorno permanente.

## Colors

Paleta restringida: dos colores con rol, el resto es neutro funcional.

### Primary
- **Panel Navy** (`hsl(222 100% 21%)` / `--primary`): color de autoridad de marca. Nav, headers de sección con fondo de marca, texto de marca, focus ring (`--ring`). Domina la jerarquía visual sin necesitar apoyo de otros colores saturados.

### Secondary
- **Conductor Rojo** (`hsl(1 61% 43%)` / `--secondary`): color de acción. Reservado a CTAs, el botón `cta`, y acentos puntuales que piden atención inmediata (ej. WhatsApp). No se usa en fondos de sección ni en texto de cuerpo.

### Neutral
- **Fondo** (`hsl(0 0% 95%)` / `--background`): terreno base de página, casi blanco con un leve gris cálido.
- **Card** (`hsl(0 0% 100%)` / `--card`): blanco puro, un paso por encima del fondo para separar superficies de contenido.
- **Texto** (`hsl(232 10% 30%)` / `--foreground`): gris azulado oscuro, no negro puro — más suave que un `#000` pero con suficiente contraste para texto de cuerpo.
- **Texto muted** (`hsl(232 8% 45%)` / `--muted-foreground`): mismo eje de matiz que el texto principal, más claro, para texto secundario/soporte.
- **Borde** (`hsl(0 0% 87%)` / `--border`): gris casi imperceptible, solo para separar, nunca para enfatizar.

### Named Rules
**The Scarce Red Rule.** El rojo ladrillo (`--secondary`) aparece solo en elementos de acción directa (CTA, WhatsApp, enlaces de conversión). No se usa en fondos de sección, iconografía decorativa ni texto de cuerpo — su rareza es lo que lo hace leerse como "actuá acá".

**The Navy Authority Rule.** El navy es el único color con permiso de cargar identidad de marca a gran escala (nav, headers). Nunca compite con el rojo por el mismo rol: donde hay navy, no hay rojo, y viceversa.

## Typography

**Display/Heading Font:** Epilogue (con fallback a Hanken Grotesk, Arial, Helvetica, sans-serif)
**Body Font:** Hanken Grotesk (con fallback a Arial, Helvetica, sans-serif)
**Mono Font:** Geist Mono (uso técnico/código, no presente en la landing actual)

**Character:** Dos sans geométricas emparejadas, sin serifas en ningún punto de la jerarquía — registro técnico y directo, no editorial ni artesanal. Epilogue aporta un poco más de carácter geométrico en titulares; Hanken Grotesk es el caballo de trabajo neutro para todo el cuerpo de texto.

### Hierarchy
- **Display** (700, `text-5xl` → `text-7xl` / 48px–72px, Epilogue): hero principal, una sola vez por página.
- **H1** (700, `text-4xl` → `text-5xl` / 36px–48px, Epilogue): título de sección principal.
- **H2** (700, `text-3xl` → `text-4xl` / 30px–36px, Epilogue): subtítulos de sección.
- **H3** (700, `text-2xl` → `text-3xl` / 24px–30px, Epilogue): títulos de card/bloque.
- **H4** (700, `text-xl` → `text-2xl` / 20px–24px, Epilogue): títulos menores.
- **Body** (400, `text-base` / 16px, Hanken Grotesk): texto de cuerpo estándar, 65–75ch recomendado.
- **Body Large** (400, `text-lg` / 18px, Hanken Grotesk): lead paragraphs, texto destacado.
- **Body Small** (400, `text-sm` / 14px, Hanken Grotesk): texto de soporte, metadata.
- **Caption** (400, `text-xs` / 12px, Hanken Grotesk): labels, disclaimers.

### Named Rules
**The No-Serif Rule.** Ninguna variante tipográfica del sistema usa una fuente serif, en ningún tamaño ni contexto. El registro es técnico, no editorial — evitar la fuente serif de acento es una decisión de identidad, no un olvido.

## Layout

Contenedor con topes de ancho por breakpoint (`sm`: 768px / `md`: 1024px / `lg`: 1152px / `xl`: 1280px), sin grid CSS explícito documentado a nivel de página — las secciones usan `Stack`/`Grid` de forma puntual por composición.

Ritmo vertical de sección en cuatro pasos: `sm` (32px), `md` (48px), `lg` (80px, el default), `xl` (128px, para secciones que necesitan más aire, típicamente Hero). El espaciado entre elementos dentro de una sección (gap) usa una escala más fina: `xs` (8px) a `xl` (48px).

Breakpoints responsive: `base`, `sm`, `md`, `lg`, `xl`, `2xl` (convención Tailwind estándar).

### Named Rules
**The Two-Scale Rule.** El ritmo vertical entre secciones (`layout.section.*`, 32–128px) y el espaciado interno entre elementos (`spacing.*` / gap, 8–48px) son escalas distintas con propósitos distintos: la primera separa bloques de contenido, la segunda organiza elementos dentro de un bloque. No mezclar una por otra.

## Elevation & Depth

El sistema es plano en reposo. Ningún componente lleva sombra por defecto salvo el card (`shadow-sm`, una separación mínima del fondo). La sombra fuerte (`shadow-lg`) aparece únicamente como respuesta directa a una interacción — hover en un card `interactive`, que además se eleva con `-translate-y-1` — nunca como capa decorativa permanente. Los botones no llevan sombra en ningún estado.

### Shadow Vocabulary
- **Card en reposo** (`shadow-sm`): separación mínima entre card y fondo, casi imperceptible.
- **Card interactivo, hover** (`shadow-lg` + `-translate-y-1`): respuesta física a la interacción, comunica "esto se puede accionar".
- **Card elevado** (`shadow-lg`, variante `elevated`): reservado a contenido que necesita jerarquía visual permanente por encima del resto (uso puntual, no default).

### Named Rules
**The Response-Not-Decoration Rule.** Una sombra que no está respondiendo a un estado de interacción (hover, focus) no debería existir. El sistema no usa sombra para separar secciones ni para dar "profundidad" ambiental constante.

## Shapes

Dos radios conviven con roles distintos: `rounded-md` (6px, escala Tailwind estándar) para elementos de entrada de datos y acción directa — botones, inputs — y `rounded-xl` (12px, mapeado a `--radius: 0.75rem`) para superficies de contenido — cards. El radio mayor en las superficies de contenido las distingue visualmente de los controles interactivos sin necesitar color ni sombra adicional.

### Named Rules
**The Control-vs-Surface Rule.** Los controles (botón, input) usan el radio menor (`md`); las superficies de contenido (card) usan el radio mayor (`xl`). Un componente nuevo hereda el radio del rol que cumple, no un valor arbitrario.

## Components

### Buttons
- **Shape:** `rounded-md` (6px).
- **Primary:** fondo navy (`--primary`), texto blanco, hover atenúa a 90% de opacidad. Rol: acción principal no urgente (navegación, submit de formularios secundarios).
- **CTA:** fondo rojo ladrillo (`--secondary`), texto blanco. Rol: la única acción que el sistema marca como "esto es lo que tenés que hacer" (ej. WhatsApp, contacto). Visualmente idéntico en forma al primary — solo el color cambia el peso semántico.
- **Secondary / Outline / Ghost:** fondo secundario, borde neutro, o transparente respectivamente — para acciones de menor jerarquía. Nunca usan rojo.
- **Destructive:** fondo rojo puro (`--destructive`, distinto del rojo ladrillo de marca) para acciones irreversibles; texto en `text-red-700` sobre fondo claro cuando aparece como texto suelto (ajuste de contraste AA, Fase 2).
- **Hover / Focus:** transición de color de 200ms; focus visible con `ring-2` en el color de marca (`--ring`, igual a `--primary`).

### Cards
- **Corner Style:** `rounded-xl` (12px).
- **Background:** `--card` (blanco puro) sobre `--card-foreground`.
- **Shadow Strategy:** ver Elevation & Depth — plano en reposo, responde en hover si es `interactive`.
- **Border:** borde sutil (`--border`) en todas las variantes salvo `elevated`.
- **Internal Padding:** compuesto por `CardHeader`/`CardContent`/`CardFooter`, sin padding fijo a nivel de `Card` raíz.

### Inputs / Fields
- **Style:** borde neutro (`--border`), fondo `--background`, `rounded-md`, texto `text-sm`.
- **Focus:** `ring-2` en `--ring`, mismo tratamiento que los botones — consistencia entre control interactivo y control de entrada.
- **Error:** borde y ring en `--destructive` (rojo puro, no el rojo ladrillo de marca).

### Navigation
- **Style:** fondo por defecto del sistema (no navy sólido documentado como fondo de nav en este corte), enlaces en `NavItem` con estado activo/hover propio. Tratamiento mobile vía `NavigationMobileMenu` + `NavigationToggle` independiente del desktop.

## Do's and Don'ts

### Do:
- **Do** reservar el rojo ladrillo (`--secondary`) para CTAs y acentos de acción real — su escasez es la señal.
- **Do** usar `rounded-xl` en superficies de contenido y `rounded-md` en controles, consistentemente.
- **Do** dejar las superficies planas en reposo y usar sombra solo como respuesta a hover/focus.
- **Do** mantener toda la jerarquía tipográfica en Epilogue (headings) + Hanken Grotesk (body), sin introducir una tercera familia.

### Don't:
- **Don't** usar el rojo ladrillo (`--secondary`) como fondo de sección completa ni como color decorativo — rompe la regla de escasez que le da peso.
- **Don't** introducir una fuente serif en ningún punto del sistema — el registro es técnico, no editorial.
- **Don't** agregar sombra permanente/ambiental a componentes que no están respondiendo a una interacción.
- **Don't** confundir `--destructive` (rojo puro, acciones irreversibles) con `--secondary` (rojo ladrillo, CTA de marca) — son dos rojos con roles distintos y no son intercambiables.
