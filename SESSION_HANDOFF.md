# Handoff — retomar en Fase 5 (vaul, evaluar antes de instalar)

Generado 2026-08-18, actualizado 2026-08-19 al cerrar Fase 2.5, Fase 3 y
Fase 4 (confirmadas por el usuario) y pausar la sesión. Si al volver Claude
Code no tiene memoria de esta conversación, pegale este archivo (o decile
"leé SESSION_HANDOFF.md") para retomar sin perder contexto.

## Estado del repo

- Rama `main`. Commit de Fase 2.5 + Fase 3: `d172094` ("Document visual
  identity (DESIGN.md) and add motion base to primitives"). Commit de
  Fase 4 (sonner) hecho al pausar esta sesión (2026-08-19) — ver
  `git log` para el hash exacto, no pusheado salvo que se pida aparte.
  Commit previo a Fase 2.5/3: `c867a75` ("Add Playwright baseline +
  Impeccable design fixes, Footer section").
- Working tree limpio al momento de pausar.
- `.claude/` y `.impeccable/` están en `.gitignore` (no versionados) —
  `.claude/` es el paquete de skills de Impeccable, reinstalable con
  `npx impeccable install` si no está. Verificar que siga en disco antes
  de asumir que hay que reinstalar. `.impeccable/design.json` (sidecar de
  `DESIGN.md`, Fase 2.5) tampoco está versionado por la misma regla —
  vive solo en este disco; si se clona el repo en otro lado hay que
  regenerarlo con `/impeccable document`.

## Plan general (5 fases, del usuario)

Integrar Playwright, Impeccable y librerías de Emil Kowalski (sonner, vaul)
en 5 fases, sin saltar de fase sin confirmación, sin re-auditar lo que no
cambió. Reglas fijas:
- `design-system/` nunca conoce el negocio; copy en `config/content`;
  datos de sitio/contacto en `config/site`.
- Un componente o sección por vez, nunca "pulir todo el sitio" junto.
- Antes de cualquier comando de Impeccable con LLM (`polish`/`audit`/
  `critique`), correr primero `npx impeccable detect <path>`
  (determinístico) y arrancar solo por lo que marcó.
- Valor de motion/spacing/color que se repite → un token o primitivo de
  design-system UNA vez, no valores sueltos por sección.
- Fin de cada fase: type-check + Playwright + resumen corto, y parar.

## Fases 0-2: COMPLETAS

- **Fase 0** — Playwright instalado (`@playwright/test` +
  `@axe-core/playwright`), config en `playwright.config.ts` con proyectos
  `mobile` (360×800) / `tablet` (768×1024) / `desktop` (1280×900).
  Spec en `tests/landing-baseline.spec.ts`, snapshots baseline en
  `tests/landing-baseline.spec.ts-snapshots/`.
- **Fase 1** — Impeccable instalado (`npx impeccable install`, `.claude/`).
  `PRODUCT.md` escrito (contexto: comercio demo "Beta Electricidad",
  modo Persuade/marketing — el boilerplate en sí, no el demo, sería otra
  cosa; ver el archivo). `detect` corrido sobre todo el proyecto: 15
  hallazgos iniciales.
- **Fase 2** — Recorridas todas las secciones, orden: Hero → Footer
  (nuevo) → Testimonials → Services → resto (Categories, WhyUs, Brands +
  dos fixes a nivel primitivo). Detect bajó de 15 a **0**. Accesibilidad
  (axe) en 0 violaciones en Hero/Categories/WhyUs/Brands/Services/
  Testimonials/Contact/Footer, los 3 viewports. Detalle completo de qué
  se tocó en cada sección: ver el mensaje de commit `c867a75` y el
  historial de esta conversación si está disponible.

  Cambios notables a nivel design-system (no de una sección puntual):
  - `design-system/tokens/typography.ts`: `color.destructive` de
    `text-red-600` a `text-red-700` (contraste AA).
  - `design-system/components/ui/Button/button.variants.ts`: tamaños
    `sm`/`md`/`lg` ahora declaran `py-*` explícito (antes dependían
    solo de altura fija + flex centering).

  **Caveat conocido, no bloqueante:** el test `full page visual
  snapshot` / `full page accessibility` es inherentemente flaky (swing
  de ±24px en altura entre corridas, probablemente carga de fuentes en
  `fullPage: true`). Ya estaba así desde el baseline de Fase 0. No se
  arregló — quedó documentado, no es parte del alcance de ninguna fase.

  **Ojo con procesos huérfanos:** durante Fase 2 hubo más de un
  incidente de `next dev`/`playwright test` quedando corriendo en
  background entre pasos (uno llegó a 875MB-1GB de memoria), causando
  corridas de Playwright lentísimas con fallos falsos. Antes de correr
  la suite completa, verificar `netstat -ano | grep ":3000"` y
  `tasklist //FI "IMAGENAME eq node.exe"`, matar lo que sobre, y arrancar
  limpio.

## Fase 2.5 — Dirección visual: COMPLETA (2026-08-19)

Se usó `/impeccable document` (scan mode, no new-work/shape) — el sistema ya
tenía tokens de color/tipografía coherentes en código (navy `--primary` +
rojo ladrillo `--secondary`), así que correspondía documentar la identidad
existente en vez de inventar una nueva (regla de `new-work.md`: "Established
world: inherit it").

- Extraídos los tokens de `design-system/tokens/*.ts` y `app/globals.css`.
- 3 preguntas cualitativas al usuario (North Star, filosofía de elevación,
  asertividad del color) — las 3 respondidas con la opción recomendada.
- Escrito `DESIGN.md` (raíz del repo, spec oficial DESIGN.md: frontmatter +
  8 secciones canónicas) y `.impeccable/design.json` (sidecar).
- North Star: **"El Panel Eléctrico"** — navy = carcasa/autoridad de marca,
  rojo ladrillo = conductor vivo, reservado casi exclusivamente a CTAs
  ("The Scarce Red Rule"). Tipografía sin serifas (Epilogue + Hanken
  Grotesk) documentada como decisión de registro técnico, no accidente
  ("The No-Serif Rule").
- No se tocó código de `design-system/` ni de ninguna sección — es un
  documento, no un redesign. `npx tsc --noEmit` limpio. Playwright no se
  corrió (no hay cambio de UI que pueda romper snapshots).
- Confirmada por el usuario 2026-08-19. Fase cerrada, se pasa a Fase 3.

## Fase 3 — Motion base: COMPLETA (2026-08-19)

Instalado `motion` (^13.1.0, paquete sucesor de framer-motion) como única
dependencia nueva. Tokens en `design-system/tokens/motion.ts`
(`motionTokens`: `duration`, `easing`, dos presets `spring` — `snappy` para
press/tap, `gentle` para hover/underline), exportado desde
`design-system/tokens/index.ts` (reemplazó el `//export * from "./animation"`
comentado que ya estaba ahí, apuntando a un archivo que nunca existió).

Micro-interacciones SOLO en los 3 primitivos acordados, nada tocado en
secciones:
- **Button** (`design-system/components/ui/Button/Button.tsx`): `"use
  client"`, ahora `motion.button` / `motion.create(Link)`. `whileTap`
  (scale 0.97, spring `snappy`) en ambas variantes, deshabilitado si
  `disabled`/`loading`.
- **Card** (`.../Cards/Card.tsx`): `"use client"`, `motion.div`.
  `whileHover` (y: -4) + `whileTap` (scale 0.98, spring `gentle`) SOLO en
  variant `interactive` — las demás variantes no animan. Se sacó
  `hover:-translate-y-1` de `card.variants.ts` (quedaba compitiendo con
  Motion por la misma propiedad transform); `hover:shadow-lg` se dejó en
  CSS.
- **NavItem** (`.../navigation/NavItem/NavItem.tsx`): `"use client"`,
  reemplazado el `border-b-2` estático por un `motion.span` absoluto que
  anima `scaleX` (spring `gentle`) entre 0/1 según hover o `active` — el
  subrayado clásico de Kowalski, contenido en el propio primitivo, sin
  coordinación entre items.

**Fricción de tipos resuelta:** `HTMLAttributes`/`ButtonHTMLAttributes`/
`AnchorHTMLAttributes` de React chocan con los tipos de Motion en
`onDrag*`/`onAnimationStart*` (motion les da una firma distinta). Se
agregó un `Omit<..., MotionConflictingHandlers>` en `button.types.ts` y
`card.types.ts` — es friction conocida de la librería, no un error de
diseño.

**Verificación:**
- `npx tsc --noEmit` limpio.
- Accesibilidad (axe): 27/27 tests pasan, 0 violaciones, los 3 viewports.
- Visual snapshots: siguen fallando de forma no determinística (distintas
  secciones cada corrida), pero se confirmó con `git stash` que la MISMA
  flakiness ya existe corriendo la suite sobre el código sin tocar de
  Fase 3 — causada por las imágenes rotas (`_next/image` devolviendo 400,
  ver `PRODUCT.md` "Evidence on Hand") que hacen fluctuar el badge de
  "Issues" del dev overlay de Next y, en el caso de "full page", un swing
  de altura de cientos de px ya documentado como flaky desde Fase 0. No
  se tocaron baselines — decisión de si vale la pena arreglar esa
  infraestructura de test queda para el usuario, fuera del alcance de
  esta fase.
- Confirmada por el usuario 2026-08-19. Fase cerrada, se pasa a Fase 4.

## Fase 4 (sonner) — COMPLETA (2026-08-19)

Instalado `sonner@2.0.8` (única dependencia nueva). Las 4 vulnerabilidades
que reporta `npm audit` son preexistentes de `next`/`postcss`/`sharp`
(verificado con `npm ls nanoid` y diff de `package-lock.json`), no las
trae sonner.

- Nuevo primitivo `design-system/components/ui/Toaster/` (misma
  convención de carpeta que `Button`: `Toaster.tsx` + `index.ts`),
  exportado desde `design-system/index.ts`. Themeado reutilizando los
  tokens CSS que ya existían (`--card`, `--card-foreground`, `--border`,
  `--radius` vía `style` con custom properties `--normal-bg`/
  `--normal-text`/`--normal-border`/`--border-radius`) más `richColors`
  de sonner para success/error — no se inventó ningún color nuevo. Se
  detectó (no se tocó) que `typography.color.success`/`.warning` en
  `design-system/tokens/typography.ts` usan clases Tailwind sueltas
  (`text-green-600`, `text-yellow-600`) sin CSS var asociada, a
  diferencia de `primary`/`secondary`/`destructive` que sí tienen su par
  HSL en `app/globals.css` — gap preexistente, fuera de alcance de esta
  fase.
- `<Toaster />` montado en `app/layout.tsx`, junto a `Header`/`Footer`.
- `ContactForm.tsx`: el mensaje de estado global del envío (éxito/error)
  pasó de un bloque `<Text>` estático a `toast.success`/`toast.error`
  vía `useEffect` sobre `state` completo (no solo `state.status`, para
  que dispare de nuevo ante dos envíos fallidos seguidos con el mismo
  status). Los errores por campo (`name`/`email`/`message`) se dejaron
  **inline sin tocar** — por accesibilidad, tienen que quedar pegados al
  input, no son responsabilidad del toast.

**Verificación:**
- `npx tsc --noEmit` limpio.
- Playwright: 46/46 passed, 0 violaciones de accesibilidad (igual que
  Fase 3). 8 fallos, todos "visual snapshot" — la misma flakiness
  preexistente de imágenes rotas en `_next/image` + swing de altura en
  full-page, documentada desde Fase 0/2/3. No se tocaron baselines.
- **No verificado visualmente en navegador** — la extensión Claude in
  Chrome no estaba conectada en esta sesión. Si se retoma y hace falta,
  probar el toast a mano: enviar el form de contacto con datos válidos
  (toast success) y forzar un error del server action (toast error) y
  chequear que los campos inválidos sigan mostrando el error inline sin
  disparar un toast.
- Confirmada por el usuario 2026-08-19. Fase cerrada, se pasa a Fase 5.

## Fase 5 (vaul) — SIGUIENTE PASO (no empezada)

Evaluar ANTES de instalar (el plan original lo marca como decisión
pendiente, no automática): ¿hay algún caso de uso real en este boilerplate
para un drawer (vaul)? Si no hay un target concreto, no instalar la
dependencia solo por completar la lista de librerías de Kowalski.

## Cómo retomar

1. Confirmar que el working tree sigue limpio (`git status`) y que no
   quedaron procesos de Node corriendo de la sesión anterior
   (`tasklist //FI "IMAGENAME eq node.exe"`, matar lo que sobre).
2. Si esto se lee en una sesión nueva de Claude, decirle que lea este
   archivo y el `CLAUDE.md`/`AGENTS.md`/`CONTEXTO_LANDING_BOILERPLATE.md`
   del repo antes de tocar nada.
3. Evaluar Fase 5 (vaul) con el mismo criterio de fases anteriores: no
   instalar nada sin un caso de uso concreto identificado primero.
4. Si se decide instalar vaul, mismo patrón: un cambio por vez, mostrar
   diff, type-check + Playwright, esperar confirmación, y actualizar este
   archivo al cerrar.
