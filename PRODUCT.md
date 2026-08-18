# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Electricistas matriculados, instaladores y constructoras que compran materiales eléctricos de forma recurrente o por obra, más clientes minoristas/comercios que compran al detalle. Ubicación implícita: La Falda (Córdoba, Argentina), con alcance regional para logística de entrega.

*(Nota de alcance: este PRODUCT.md describe el negocio demo — "Beta Electricidad" — que hoy está cargado como contenido de ejemplo en el boilerplate, no el boilerplate como producto en sí. Confirmado por el usuario en la sesión de init.)*

## Product Purpose

Landing comercial (modo **Persuade**, confirmado por el usuario) para un comercio de materiales eléctricos. El objetivo es que el visitante decida y actúe: contactar por WhatsApp para consultar stock/precio. Evolución prevista fuera de esta landing (no implementar ahora): `/catalogo` con datos reales vía Supabase/PostgreSQL.

## Positioning

Diferenciadores tal como están planteados en el copy actual: stock permanente/disponibilidad inmediata, atención tanto mayorista como minorista, asesoramiento técnico incluido (no solo venta), logística propia de entrega. Ninguno de estos está validado con evidencia real — ver "Evidence on Hand".

## Operating Context

Venta mayorista y minorista de materiales eléctricos (cables, canalizaciones, tableros, llaves, iluminación, instrumental, protecciones, potencia). Atención a instaladores/constructoras (compra técnica, por obra) y a clientes finales/comercios (compra puntual). Contacto primario vía WhatsApp; sin e-commerce ni catálogo online todavía.

## Capabilities and Constraints

- Este proyecto es un **boilerplate reutilizable**: `design-system/` no debe conocer datos de negocio; el copy vive en `config/content/`; los datos de sitio/contacto en `config/site/`. Cualquier trabajo de diseño debe respetar esa separación (ver `AGENTS.md`/`CONTEXTO_LANDING_BOILERPLATE.md`).
- Inconsistencia detectada: `config/site/branding.ts` dice `"Landing Boilerplate"` pero el copy de contenido (`why-us.ts`) usa la marca demo `"Beta Electricidad"`. No armonizar sin pedir — puede ser intencional (branding = boilerplate, contenido = demo de negocio).
- `config/site/contact.ts` tiene todos los campos (`phone`, `whatsapp`, `email`, `address`, etc.) en `undefined`; el CTA del Hero usa un número de WhatsApp placeholder (`549XXXXXXXXXX`).
- `config/site/site.ts` tiene valores placeholder sin reemplazar (`"Website Name"`, `"example.com"`).

## Brand Commitments

Nombre de marca demo: "Beta Electricidad" (solo en contenido, no en `branding.ts`). Tono técnico y directo, dirigido a un público profesional (electricistas/instaladores) además de minorista. Sin paleta, tipografía o referencias visuales confirmadas como vinculantes todavía — no inventar dirección visual en este documento.

## Evidence on Hand

Ninguna evidencia real. Todo el contenido actual es demo fabricado para ejercitar el boilerplate:

- Testimonios (`config/content/testimonials.ts`): 3 personas y citas ficticias.
- Cifras ("34 años", "+10.000 artículos en depósito"): sin respaldo, no tratarlas como hechos verificables.
- Imágenes referenciadas (`/images/why-us-electrician.jpg`, avatares de testimonios) **no existen** en `public/` — actualmente rotas. Solo están los SVG placeholder por defecto de Next.js.
- Datos de contacto/ubicación: todos `undefined`.

Trabajo futuro no debe expandir estas afirmaciones (agregar más cifras, clientes, casos) sin que el usuario las provea como reales.

## Product Principles

- Simplicidad, reutilización y mantenibilidad por sobre features nuevas (boilerplate, no producto final).
- Design System puro y presentacional; Features componen datos + Design System, nunca al revés.
- Server Components por defecto; Client Components solo cuando sea necesario.
- Un componente/sección a la vez; sin refactors o "pulidas" globales en un solo paso.
- Evitar sobreingeniería: no anticipar CMS, multiidioma, auth, etc. hasta que se pidan.

## Accessibility & Inclusion

Estándar objetivo: WCAG 2.1 AA. Baseline de Playwright + axe-core (Fase 0, 2026-08-18) ya detectó violaciones reales de contraste (`color-contrast`, serious) en Categories, WhyUs y Services — ver reporte de esa fase. Corregir estas es parte del trabajo previsto en Fase 2, no de este documento.
