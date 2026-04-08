# Review — Me Gusta Spanish Website
**Sesiones:** 6 de abril – 8 de abril de 2026  
**Repositorio:** https://github.com/Megustasucre/me-gusta-spanish

---

## Resumen del proyecto

Sitio web de **Me Gusta Spanish**, escuela de español en Sucre, Bolivia. Completamente estático (HTML + CSS + JS vanilla). Multiidioma EN / ES / FR vía `js/translations.js`.

---

## Páginas creadas

| Archivo | Estado |
|---|---|
| `index.html` | ✅ Completo |
| `clases.html` | ✅ Completo (mejorado esta sesión) |
| `faq.html` | ✅ Nuevo esta sesión |
| `metodologia.html` | ⚠️ Pendiente — rediseño completo |
| `profesores.html` | Sin revisar |
| `sobre-nosotros.html` | Sin revisar |
| `contacto.html` | Sin revisar |
| `inscripcion.html` | Sin revisar |

---

## Lo que se hizo en esta sesión (8 de abril)

### `clases.html` — mejorado
- **Panel Online:** 3 tarjetas de precio (Trial $15, Starter Pack $60/5h, Immersion Pack $100/10h)
- **Estimados:** tabla de presupuesto (4 programas × 1/2/4 semanas en USD)
- **Cómo funciona la reserva:** sección de 4 pasos con línea conectora degradado teal→crimson
- **`data-i18n`:** wired en tabs, títulos de secciones, badges, notas de precio
- **FAQ banner:** reemplaza la sección FAQ inline — enlaza a `faq.html`

### `faq.html` — nuevo
- 5 categorías: Getting Started, Courses & Schedule, Payment & Booking, Online Classes, Accommodation
- 17 preguntas con acordeón `<details>/<summary>` + flecha animada
- Hero oscuro, footer y navbar consistentes con el resto del sitio
- Bloque "Still have questions?" con CTA a WhatsApp y contacto

### `js/translations.js` — actualizado
- ~60 claves nuevas para `courses` (pricing online, estimados, how-to-book, levels) en EN/ES/FR
- Sección `faq` completa (17 Q&As + categorías) en EN/ES/FR
- `nav.faq` añadido en los 3 idiomas
- Sección `methodology` añadida en EN/ES/FR (lista para usar — pendiente el HTML)

---

## Próxima tarea: `metodologia.html` — rediseño completo

### Problema actual
La página usa un sistema de diseño completamente distinto al resto del sitio:
- Fuente: Montserrat (debería ser Cormorant Garamond + Inter)
- Navbar: blanca sólida (debería ser dark glass)
- Cards: `bg-gray-50` planas (deberían ser `card-organic`)
- Iconos: emojis (el usuario pidió **sin emojis — usar SVG**)
- Footer: básico (debería ser el footer oscuro estándar)

### Estructura propuesta para el rediseño

1. **Hero** — dark navy, blobs, igual que `clases.html`
2. **Core Philosophy** — cita grande en Cormorant + párrafo
3. **6 Pilares** — grid 3×2 de `card-organic` con SVG + título + descripción
4. **Un día típico** — 4 momentos de una clase de 60 min (misma estructura visual que "How Booking Works" en clases)
5. **8 Tipos de clase** — grid 4×2 con `card-organic`, SVG, título y descripción breve
6. **CTA** — gradiente rojo estándar

### Traducciones YA listas en `translations.js`
Todas las claves `methodology.*` están en EN/ES/FR. Solo falta el HTML.

### Claves de traducción a usar

```
methodology.eyebrow / .title / .titleAccent / .subtitle
methodology.philEyebrow / .philQuote / .philBody
methodology.pillarsEyebrow / .pillarsTitle / .pillarsTitleAccent
methodology.p1Title–p6Title / .p1Desc–p6Desc
methodology.dayEyebrow / .dayTitle / .dayTitleAccent
methodology.day1Title–day4Title / .day1Time–day4Time / .day1Desc–day4Desc
methodology.typesEyebrow / .typesTitle / .typesTitleAccent / .typesSubtitle
methodology.t1Title–t8Title / .t1Desc–t8Desc
```

### SVGs a usar (sin emojis)

| Pilar | SVG path sugerido |
|---|---|
| Conversation First | chat bubble: `M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6...` |
| Student-Centered | user + target: person icon |
| Cultural Immersion | globe: `M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9...` |
| Fun & Friendly | heart: `M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364...` |
| Measurable Progress | trending up: `M13 7h8m0 0v8m0-8l-8 8-4-4-6 6` |
| Practical Spanish | map pin: `M17.657 16.657L13.414 20.9...` |

---

## Pendiente general (más allá de metodología)

- [ ] `metodologia.html` — rediseño completo (próxima tarea)
- [ ] `profesores.html` — revisar diseño y coherencia
- [ ] `sobre-nosotros.html` — revisar diseño y coherencia
- [ ] `contacto.html` — revisar, posiblemente conectar a Formspree/EmailJS
- [ ] `inscripcion.html` — revisar formulario
- [ ] GitHub Pages — configurar para publicar el sitio en línea
- [ ] SEO — meta tags, og:image, sitemap
- [ ] Número de WhatsApp — verificar que `5917342572` sea el correcto en todos los archivos

---

## Instrucciones permanentes para Claude

- **Auto-push a GitHub después de cada cambio.** Siempre `git add . && git commit && git push` sin esperar.
- **Sin emojis** — usar SVG en todas las páginas.
- **Design system:** Cormorant Garamond (títulos), Lora (cuerpo), Inter (UI), Caveat (acentos manuscritos). Colores: `#ff2850` (rojo), `#00c0c1` (teal), `#1a1a1a` (oscuro), `#fafaf8` (fondo).
- **Navbar:** dark glass (`rgba(26,26,26,0.85)` + `backdrop-filter:blur(12px)`).
- **Cards:** `card-organic` — nunca `bg-gray-50` planas.
- **Traducciones:** todo texto visible debe tener `data-i18n`. Las claves van en `js/translations.js` en EN/ES/FR.
