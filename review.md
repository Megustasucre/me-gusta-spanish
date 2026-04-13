# Me Gusta Spanish — Project Review

> Read and update this file at the start and end of every session.

---

## Links

| Resource | URL |
|---|---|
| Real site | https://megustaspanish.com |
| Real site services | https://megustaspanish.com/our-services/ |
| Project location | `C:/pagina-web/me-gusta-spanish/` |

---

## Project Overview

**Me Gusta Spanish** is a Spanish school in Sucre, Bolivia. HTML/CSS frontend redesign using Tailwind CDN + custom `css/style.css`. Multi-page site with EN/ES/FR language switching.

- **Stack:** Pure HTML + Tailwind CSS (CDN) + Vanilla JS
- **Fonts:** Cormorant Garamond, Lora, Caveat, Inter (Google Fonts)
- **Colors:** Red `#ff2850` / Teal `#00c0c1` / Dark `#1a1a1a` / Bg `#fafaf8`
- **JS:** `js/main.js` (navbar, animations, carousel) + `js/translations.js` (i18n)
- **Contact:** +591 734 25725 · info@megustaspanish.com · Audiencia #97, Sucre
- **WhatsApp (captaciones — Ely):** `wa.me/59173225725` ← use this number on ALL wa.me links

---

## Design System (`css/style.css`)

- **Navbar:** transparent on hero, turns white/blurred on scroll (`.scrolled`)
- **Hero pattern:** `background:#0f1620` + photo at opacity 0.35 + gradient `rgba(10,16,24,0.60)→rgba(10,16,24,0.92)` top-to-bottom + blobs at opacity 0.12/0.10
- **Cards:** `.card-organic` (white, rounded, shadow, hover lift)
- **Buttons:** `.btn-red`, `.btn-teal`, `.btn-outline-white`, `.btn-outline-dark`
- **Lists:** `.check-list` (red checkmarks), `.check-list-teal`
- **Animations:** `.fade-up` + IntersectionObserver in main.js
- **NO emojis** — always SVG icons

---

## Pages Status

| Page | File | Status |
|---|---|---|
| Home | `index.html` | ✅ Complete |
| Classes | `clases.html` | ✅ Complete |
| Methodology | `metodologia.html` | ✅ HTML complete + data-i18n wired |
| Teachers | `profesores.html` | ✅ HTML complete + data-i18n wired |
| Contact | `contacto.html` | ✅ HTML complete + data-i18n wired |
| Register | `inscripcion.html` | ✅ HTML complete + data-i18n wired |
| FAQ | `faq.html` | ✅ Complete |
| About Us | `sobre-nosotros.html` | ✅ Complete |

---

## i18n System

- **How it works:** `data-i18n="section.key"` on elements → `applyTranslations()` splits on `.` and resolves nested keys in `translations.js`
- **Languages:** EN / ES / FR stored in `localStorage('mgs_lang')`
- **File:** `js/translations.js` — structure: `const translations = { en: {...}, es: {...}, fr: {...} }`

### Translation Status

| Section | EN | ES | FR |
|---|---|---|---|
| nav, hero, stats, why, courses, testimonials, about, cta, footer, faq | ✅ | ✅ | ✅ |
| `methodology.*` (new keys: heroTitle, methEyebrow, reqEyebrow×4, classEyebrow, sciEyebrow×3, ctaHandwritten etc.) | ✅ | ✅ | ✅ |
| `teachers.*` (new keys: heroTitle, stat1-3 Labels, foundersHandwritten, foundersTitle, elyEyebrow/Role/P1/P2, fernEyebrow/Role/P1/P2, teamHandwritten/Title/Desc) | ✅ | ✅ | ✅ |
| `contact.*` (entire section: eyebrow, heroTitle, form labels/placeholders/options) | ✅ | ✅ | ✅ |
| `reg.*` (entire section: personal info, course details, levels, schedules, source) | ✅ | ✅ | ✅ |

---

## ✅ COMPLETED — ES + FR translations fully added

All sections are now complete in EN, ES, and FR. The `translations.js` file has been verified — all 14 sections exist in all 3 languages.

### IMPORTANT: How to edit translations.js

**The file stores characters as literal JS unicode escapes** (e.g. `\u00e9` for `é`, `\u00f3` for `ó`). The Edit tool CANNOT match these — it converts escape sequences before comparing. The Write tool will also corrupt the file if you rewrite it entirely.

**Correct approach: use Node.js via Bash** (Node v24.14.1 is installed):

```bash
node -e "
const fs = require('fs');
const file = 'C:/pagina-web/me-gusta-spanish/js/translations.js';
let c = fs.readFileSync(file, 'utf8');
c = c.replace(
  'EXACT_OLD_STRING',
  'NEW_STRING'
);
fs.writeFileSync(file, c, 'utf8');
console.log('done');
"
```

Use the EXACT string as it appears in the file (with `\u00e9` etc.). Confirm with `grep` after each replacement.

---

## What to Add to ES (Spanish)

### 1. In `es.methodology` — append after `t8Desc` line (before closing `},`)

Find:
```
      t8Desc: "En el m\u00e9dico, en el restaurante, por tel\u00e9fono. Simulaciones que te preparan para situaciones reales."
    },
    teachers: {
```

Replace the `t8Desc` line's trailing `"` with `",` and insert before `    },`:

```js
      heroTitle: "Disfruta Cada Clase.",
      heroTitleAccent: "Habla con Confianza.",
      heroSubtitle: "Dise\u00f1amos una metodolog\u00eda efectiva \u2014 probada con m\u00e1s de 756 alumnos de todo el mundo.",
      methEyebrow: "Nuestro M\u00e9todo",
      methP1: "Aprender un idioma, como aprender un instrumento musical, requiere tiempo, constancia y el enfoque correcto. En Me Gusta Spanish, hemos desarrollado un m\u00e9todo que funciona \u2014 porque lo hemos visto funcionar una y otra vez.",
      methQuote: "\"Todos pueden aprender a hablar espa\u00f1ol \u2014 sin importar nada.\"",
      methP2: "Nuestra metodolog\u00eda ha sido probada y perfeccionada con m\u00e1s de 756 alumnos de m\u00e1s de 50 pa\u00edses. Combinamos ciencia del aprendizaje, inmersi\u00f3n cultural y ense\u00f1anza personalizada para que cada clase sea efectiva y disfrutable.",
      reqEyebrow: "Lo que necesita cada alumno",
      req1Title: "Motivaci\u00f3n",
      req1Desc: "Una raz\u00f3n clara para aprender. Quiz\u00e1s un viaje, una relaci\u00f3n, trabajo o simple amor por la cultura. La motivaci\u00f3n es el combustible.",
      req2Title: "Compromiso",
      req2Desc: "Asistir, practicar a diario, hacer las tareas. El compromiso marca la diferencia entre avanzar r\u00e1pido o quedarse estancado.",
      req3Title: "Disciplina",
      req3Desc: "Incluso 20 minutos al d\u00eda marcan una enorme diferencia. La consistencia supera a la intensidad \u2014 siempre.",
      req4Title: "Olvida la gram\u00e1tica \u2014 simplemente habla",
      req4Desc: "Los beb\u00e9s no estudian gram\u00e1tica antes de hablar. T\u00fa tampoco necesitas hacerlo. Habla primero, perfecciona despu\u00e9s.",
      classEyebrow: "Dentro del Aula",
      classTitlePre: "C\u00f3mo Funciona",
      classTitleAccent: "Cada Clase",
      classSubtitle: "Cada clase est\u00e1 previamente planificada y adaptada a tus necesidades. Nada es improvisado \u2014 cada minuto tiene un prop\u00f3sito.",
      theorTitle: "Te\u00f3rico",
      theorDesc: "Explicamos y practicamos gram\u00e1tica, vocabulario y pronunciaci\u00f3n \u2014 siempre en contexto real.",
      practTitle: "Pr\u00e1ctico",
      practDesc: "Lectura, canciones, juegos, conversaci\u00f3n \u2014 para que el aprendizaje sea activo y memorable.",
      sciEyebrow: "La Ciencia Detr\u00e1s",
      sciTitlePre: "\u00bfC\u00f3mo Aprendemos un",
      sciTitleAccent: "Nuevo Idioma?",
      sciP1: "Existen innumerables teor\u00edas sobre c\u00f3mo aprenden los seres humanos. Hemos estudiado las m\u00e1s importantes y las hemos integrado en nuestra metodolog\u00eda.",
      sciP2: "Los ni\u00f1os no estudian reglas gramaticales \u2014 aprenden hablando, escuchando y repitiendo en contextos reales. Nosotros llevamos ese mismo principio al aula.",
      sci1Title: "El Enfoque del Cerebro Beb\u00e9",
      sci1Desc: "Los beb\u00e9s aprenden por interacci\u00f3n \u2014 escuchando, repitiendo, siendo corregidos con gentileza. Replicamos esa experiencia para adultos.",
      sci2Title: "Asociaciones Mentales",
      sci2Desc: "Vincula palabras nuevas a im\u00e1genes, emociones y experiencias. El cerebro retiene mejor lo que est\u00e1 conectado a algo real.",
      sci3Title: "Tarjetas de Memoria",
      sci3Desc: "Palabra en un lado, significado en el otro. La repetici\u00f3n espaciada es una de las t\u00e9cnicas de memorizaci\u00f3n m\u00e1s efectivas que existen.",
      ctaHandwritten: "Sum\u00e9rgete en la cultura",
      ctaTitle: "Disfruta Cada Clase. Si\u00e9ntete en Casa.",
      ctaDesc: "\u00danete a 756+ alumnos de 50+ pa\u00edses que eligieron Me Gusta Spanish.",
      ctaContact: "Cont\u00e1ctanos"
```

### 2. In `es.teachers` — append after `viewAll` line (before closing `},`)

Find:
```
      viewAll: "Conocer Todos los Profesores"
    },
    testimonials: {
```

Add a comma after `viewAll` value and insert before `    },`:

```js
      heroTitle: "Aprende con Personas que",
      heroTitleAccent: "Genuinamente Aman Ense\u00f1ar.",
      heroSubtitle: "Profesores nativos bolivianos \u2014 certificados, amigables y apasionados por su trabajo.",
      stat1Label: "A\u00f1os de experiencia combinada",
      stat2Label: "Alumnos ense\u00f1ados en todo el mundo",
      stat3Label: "Pa\u00edses representados",
      foundersHandwritten: "Los fundadores",
      foundersTitle: "Donde Todo Comenz\u00f3",
      foundersDesc: "Elizabeth y Fernando comenzaron a desarrollar el M\u00e9todo Me Gusta en 2005, mucho antes de abrir la escuela. Su visi\u00f3n: crear una experiencia de aprendizaje que fuera efectiva, personal y profundamente conectada con la cultura boliviana.",
      elyEyebrow: "Co-Fundadora \u00b7 Est. 2005",
      elyRole: "Experta en Metodolog\u00eda y Profesora Principal",
      elyP1: "Elizabeth co-fund\u00f3 Me Gusta Spanish con la misi\u00f3n de crear un espacio donde aprender espa\u00f1ol se sintiera natural, c\u00e1lido y efectivo.",
      elyP2: "Se especializa en inmersi\u00f3n cultural y aprendizaje basado en conversaci\u00f3n, adaptando cada clase a la personalidad y objetivos del alumno.",
      fernEyebrow: "Co-Fundador \u00b7 Est. 2005",
      fernRole: "Especialista en Cultura y Profesor",
      fernP1: "Fernando aporta un profundo conocimiento de la historia, el folklore y la cultura boliviana a cada clase que imparte.",
      fernP2: "Sus clases son conocidas por el humor, las anécdotas y la capacidad de hacer que el español cobre vida a través de la cultura.",
      teamHandwritten: "Conoce a todos",
      teamTitle: "El Equipo Completo de Profesores",
      teamDesc: "Todos nuestros profesores son bolivianos nativos, certificados en ense\u00f1anza de ELE y apasionados por lo que hacen."
```

### 3. In `es` block — add `contact` and `reg` sections before closing `  },`

Find (end of es.faq):
```
      stillContact: "Formulario de Contacto"
    }
  },

  fr: {
```

Insert between `    }` and `  },`:

```js
    contact: {
      eyebrow: "Ponte en Contacto",
      heroTitle: "Nos Encantar\u00eda",
      heroTitleAccent: "Saber de Ti.",
      heroSubtitle: "Esch\u00edbenos por WhatsApp, email o vis\u00edtanos en Sucre \u2014 respondemos r\u00e1pido.",
      sayHello: "Saluda",
      sectionTitle: "Hablemos",
      addressLabel: "Direcci\u00f3n",
      phoneLabel: "Tel\u00e9fono",
      emailLabel: "Email",
      hoursLabel: "Horario",
      hours1: "Lunes \u2013 Viernes: 8:00 \u2013 18:00",
      hours2: "S\u00e1bado: 9:00 \u2013 13:00",
      hoursNote: "Hora Bolivia \u2014 UTC-4",
      waTitle: "Chatea en WhatsApp",
      waSubtitle: "Respuesta m\u00e1s r\u00e1pida \u2014 generalmente en menos de 1 hora",
      sendTitle: "Env\u00edanos un Mensaje",
      firstName: "Nombre *",
      firstNamePh: "Juan",
      lastName: "Apellido *",
      lastNamePh: "Garc\u00eda",
      email: "Email *",
      emailPh: "juan@ejemplo.com",
      phone: "Tel\u00e9fono / WhatsApp",
      phonePh: "+1 555 000 0000",
      subject: "Asunto *",
      subjectPh: "Selecciona un asunto...",
      sub1: "Informaci\u00f3n sobre las clases",
      sub2: "Precios y horarios",
      sub3: "Clases online",
      sub4: "Alojamiento",
      sub5: "Otro",
      message: "Mensaje *",
      messagePh: "Cu\u00e9ntanos sobre ti...",
      submit: "Enviar Mensaje",
      successTitle: "\u00a1Mensaje Enviado!",
      successText: "Te responderemos en menos de 24 horas.",
      mapsBtn: "Abrir en Google Maps"
    },
    reg: {
      eyebrow: "\u00danete a Nosotros",
      subtitle: "Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas.",
      personalInfo: "Informaci\u00f3n Personal",
      firstName: "Nombre *",
      firstNamePh: "Juan",
      lastName: "Apellido *",
      lastNamePh: "Garc\u00eda",
      nationality: "Nacionalidad *",
      nationalityPh: "ej. Americano, Franc\u00e9s...",
      dob: "Fecha de Nacimiento",
      email: "Email *",
      emailPh: "juan@ejemplo.com",
      phone: "Tel\u00e9fono / WhatsApp *",
      phonePh: "+1 555 000 0000",
      courseDetails: "Detalles del Curso",
      courseType: "Tipo de Curso *",
      f2fTitle: "Presencial",
      f2fSub: "En Sucre, Bolivia",
      onlineTitle: "Online",
      onlineSub: "En Vivo por Zoom",
      level: "Nivel de Espa\u00f1ol *",
      levelPh: "Selecciona tu nivel...",
      level1: "Principiante Absoluto",
      level2: "Principiante",
      level3: "Intermedio",
      level4: "Intermedio Alto",
      level5: "Avanzado",
      startDate: "Fecha de Inicio Preferida *",
      format: "Formato de Clase",
      formatPh: "Selecciona formato...",
      format1: "Clase grupal",
      format2: "Privado individual",
      format3: "Semi-privado",
      schedule: "Preferencia de Horario *",
      schedulePh: "Selecciona preferencia...",
      schedule1: "Ma\u00f1ana",
      schedule2: "Tarde",
      schedule3: "Noche",
      schedule4: "Flexible",
      duration: "\u00bfCu\u00e1nto tiempo planeas estudiar?",
      durationPh: "Selecciona duraci\u00f3n...",
      duration1: "1 semana",
      duration2: "2 semanas",
      duration3: "1 mes",
      duration4: "2-3 meses",
      duration5: "Largo plazo",
      source: "\u00bfC\u00f3mo nos encontraste?",
      sourcePh: "Selecciona...",
      source1: "Google",
      source2: "Instagram",
      source3: "Facebook",
      source4: "Boca a boca",
      source5: "Blog",
      source6: "Agencia",
      source7: "Otro",
      notes: "Notas Adicionales",
      notesPh: "Alguna petici\u00f3n especial o informaci\u00f3n que debamos saber...",
      submit: "Enviar Inscripci\u00f3n",
      privacy: "Al enviar este formulario aceptas nuestra pol\u00edtica de privacidad.",
      successTitle: "\u00a1Inscripci\u00f3n Recibida!",
      successText: "Revisaremos tus datos y nos pondremos en contacto en menos de 24 horas.",
      backHome: "Volver al Inicio"
    }
```

---

## What to Add to FR (French)

### 1. In `fr.methodology` — append after `t8Desc` line

Find:
```
      t8Desc: "Chez le m\u00e9decin, au restaurant, au t\u00e9l\u00e9phone. Des simulations qui vous pr\u00e9parent \u00e0 des situations r\u00e9elles."
    },
    teachers: {
      eyebrow: "La Famille Me Gusta",
```

Add comma after `t8Desc` value and insert before `    },`:

```js
      heroTitle: "Profitez de Chaque Cours.",
      heroTitleAccent: "Parlez avec Confiance.",
      heroSubtitle: "Nous concevons une m\u00e9thodologie efficace \u2014 test\u00e9e avec plus de 756 \u00e9tudiants du monde entier.",
      methEyebrow: "Notre M\u00e9thode",
      methP1: "Apprendre une langue, comme apprendre un instrument de musique, demande du temps, de la constance et la bonne approche. Chez Me Gusta Spanish, nous avons d\u00e9velopp\u00e9 une m\u00e9thode qui fonctionne \u2014 parce que nous l\u2019avons vue fonctionner encore et encore.",
      methQuote: "\"Tout le monde peut apprendre \u00e0 parler espagnol \u2014 quoi qu\u2019il en soit.\"",
      methP2: "Notre m\u00e9thodologie a \u00e9t\u00e9 test\u00e9e et perfectionn\u00e9e avec plus de 756 \u00e9tudiants de plus de 50 pays. Nous combinons sciences de l\u2019apprentissage, immersion culturelle et enseignement personnalis\u00e9 pour que chaque cours soit efficace et agr\u00e9able.",
      reqEyebrow: "Ce dont chaque \u00e9tudiant a besoin",
      req1Title: "Motivation",
      req1Desc: "Une raison claire d\u2019apprendre. Peut-\u00eatre un voyage, une relation, le travail ou simplement l\u2019amour de la culture. La motivation est le carburant.",
      req2Title: "Engagement",
      req2Desc: "Se pr\u00e9senter, pratiquer chaque jour, faire les devoirs. L\u2019engagement fait la diff\u00e9rence entre progresser vite ou stagner.",
      req3Title: "Discipline",
      req3Desc: "M\u00eame 20 minutes par jour font une \u00e9norme diff\u00e9rence. La constance l\u2019emporte toujours sur l\u2019intensit\u00e9.",
      req4Title: "Oubliez la grammaire \u2014 parlez simplement",
      req4Desc: "Les b\u00e9b\u00e9s n\u2019\u00e9tudient pas la grammaire avant de parler. Vous non plus. Parlez d\u2019abord, perfectionnez ensuite.",
      classEyebrow: "Dans la Salle de Classe",
      classTitlePre: "Comment Fonctionne",
      classTitleAccent: "Chaque Cours",
      classSubtitle: "Chaque cours est planifi\u00e9 \u00e0 l\u2019avance et adapt\u00e9 \u00e0 vos besoins. Rien n\u2019est improvis\u00e9 \u2014 chaque minute a un objectif.",
      theorTitle: "Th\u00e9orique",
      theorDesc: "Nous expliquons et pratiquons la grammaire, le vocabulaire et la prononciation \u2014 toujours en contexte r\u00e9el.",
      practTitle: "Pratique",
      practDesc: "Lecture, chansons, jeux, conversation \u2014 pour que l\u2019apprentissage soit actif et m\u00e9morable.",
      sciEyebrow: "La Science Derri\u00e8re",
      sciTitlePre: "Comment Apprend-on une",
      sciTitleAccent: "Nouvelle Langue\u00a0?",
      sciP1: "Il existe d\u2019innombrables th\u00e9ories sur la fa\u00e7on dont les \u00eatres humains apprennent. Nous avons \u00e9tudi\u00e9 les plus importantes et les avons int\u00e9gr\u00e9es dans notre m\u00e9thodologie.",
      sciP2: "Les enfants n\u2019\u00e9tudient pas les r\u00e8gles de grammaire \u2014 ils apprennent en parlant, en \u00e9coutant et en r\u00e9p\u00e9tant dans des contextes r\u00e9els. Nous appliquons ce m\u00eame principe en classe.",
      sci1Title: "L\u2019Approche Cerveau B\u00e9b\u00e9",
      sci1Desc: "Les b\u00e9b\u00e9s apprennent par interaction \u2014 en \u00e9coutant, en r\u00e9p\u00e9tant, en \u00e9tant corrig\u00e9s avec douceur. Nous reproduisons cette exp\u00e9rience pour les adultes.",
      sci2Title: "Associations Mentales",
      sci2Desc: "Associez de nouveaux mots \u00e0 des images, des \u00e9motions et des exp\u00e9riences. Le cerveau retient mieux ce qui est connect\u00e9 \u00e0 quelque chose de r\u00e9el.",
      sci3Title: "Cartes M\u00e9moire",
      sci3Desc: "Le mot d\u2019un c\u00f4t\u00e9, le sens de l\u2019autre. La r\u00e9p\u00e9tition espac\u00e9e est l\u2019une des techniques de m\u00e9morisation les plus efficaces qui existent.",
      ctaHandwritten: "Plongez dans la culture",
      ctaTitle: "Profitez de Chaque Cours. Sentez-vous Chez Vous.",
      ctaDesc: "Rejoignez 756+ \u00e9tudiants de 50+ pays qui ont choisi Me Gusta Spanish.",
      ctaContact: "Nous Contacter"
```

### 2. In `fr.teachers` — append after `viewAll` line

Find:
```
      viewAll: "Voir Tous les Professeurs"
    },
    testimonials: {
```

Add comma after `viewAll` value and insert before `    },`:

```js
      heroTitle: "Apprenez avec des Personnes qui",
      heroTitleAccent: "Aiment Vraiment Enseigner.",
      heroSubtitle: "Professeurs boliviens natifs \u2014 certifi\u00e9s, sympathiques et passionn\u00e9s par leur m\u00e9tier.",
      stat1Label: "Ann\u00e9es d\u2019exp\u00e9rience combin\u00e9e",
      stat2Label: "\u00c9tudiants enseign\u00e9s dans le monde",
      stat3Label: "Pays repr\u00e9sent\u00e9s",
      foundersHandwritten: "Les fondateurs",
      foundersTitle: "L\u00e0 O\u00f9 Tout a Commenc\u00e9",
      foundersDesc: "Elizabeth et Fernando ont commenc\u00e9 \u00e0 d\u00e9velopper la M\u00e9thode Me Gusta en 2005, bien avant l\u2019ouverture de l\u2019\u00e9cole. Leur vision\u00a0: cr\u00e9er une exp\u00e9rience d\u2019apprentissage \u00e0 la fois efficace, personnelle et profond\u00e9ment ancr\u00e9e dans la culture bolivienne.",
      elyEyebrow: "Co-Fondatrice \u00b7 Depuis 2005",
      elyRole: "Experte en M\u00e9thodologie et Professeure Principale",
      elyP1: "Elizabeth a co-fond\u00e9 Me Gusta Spanish avec la mission de cr\u00e9er un espace o\u00f9 apprendre l\u2019espagnol se sentirait naturel, chaleureux et efficace.",
      elyP2: "Elle se sp\u00e9cialise dans l\u2019immersion culturelle et l\u2019apprentissage ax\u00e9 sur la conversation, adaptant chaque cours \u00e0 la personnalit\u00e9 et aux objectifs de l\u2019\u00e9tudiant.",
      fernEyebrow: "Co-Fondateur \u00b7 Depuis 2005",
      fernRole: "Sp\u00e9cialiste Culturel et Professeur",
      fernP1: "Fernando apporte une connaissance approfondie de l\u2019histoire, du folklore et de la culture bolivienne \u00e0 chaque cours qu\u2019il donne.",
      fernP2: "Ses cours sont connus pour leur humour, leurs anecdotes et leur capacit\u00e9 \u00e0 donner vie \u00e0 l\u2019espagnol \u00e0 travers la culture.",
      teamHandwritten: "Rencontrez tout le monde",
      teamTitle: "Toute l\u2019\u00c9quipe Enseignante",
      teamDesc: "Tous nos professeurs sont boliviens natifs, certifi\u00e9s en enseignement de l\u2019espagnol et passionn\u00e9s par ce qu\u2019ils font."
```

### 3. In `fr` block — add `contact` and `reg` sections before closing `  }`

Find (end of fr.faq):
```
      stillContact: "Formulaire de Contact"
    }
  }
};
```

Insert between `    }` and `  }`:

```js
    contact: {
      eyebrow: "Contactez-Nous",
      heroTitle: "Nous Serions Ravis",
      heroTitleAccent: "d\u2019Avoir de Vos Nouvelles.",
      heroSubtitle: "Contactez-nous via WhatsApp, email ou venez nous rendre visite \u00e0 Sucre \u2014 nous r\u00e9pondons rapidement.",
      sayHello: "Bonjour",
      sectionTitle: "Parlons",
      addressLabel: "Adresse",
      phoneLabel: "T\u00e9l\u00e9phone",
      emailLabel: "Email",
      hoursLabel: "Horaires",
      hours1: "Lundi \u2013 Vendredi\u00a0: 8h00 \u2013 18h00",
      hours2: "Samedi\u00a0: 9h00 \u2013 13h00",
      hoursNote: "Heure Bolivie \u2014 UTC-4",
      waTitle: "Discutez sur WhatsApp",
      waSubtitle: "R\u00e9ponse la plus rapide \u2014 g\u00e9n\u00e9ralement en moins d\u2019une heure",
      sendTitle: "Envoyez un Message",
      firstName: "Pr\u00e9nom *",
      firstNamePh: "Jean",
      lastName: "Nom *",
      lastNamePh: "Dupont",
      email: "Email *",
      emailPh: "jean@exemple.com",
      phone: "T\u00e9l\u00e9phone / WhatsApp",
      phonePh: "+33 6 00 00 00 00",
      subject: "Sujet *",
      subjectPh: "S\u00e9lectionnez un sujet...",
      sub1: "Informations sur les cours",
      sub2: "Tarifs et horaires",
      sub3: "Cours en ligne",
      sub4: "H\u00e9bergement",
      sub5: "Autre",
      message: "Message *",
      messagePh: "Parlez-nous de vous...",
      submit: "Envoyer le Message",
      successTitle: "Message Envoy\u00e9\u00a0!",
      successText: "Nous vous r\u00e9pondrons dans les 24 heures.",
      mapsBtn: "Ouvrir dans Google Maps"
    },
    reg: {
      eyebrow: "Rejoignez-Nous",
      subtitle: "Remplissez le formulaire et nous vous contacterons dans les 24 heures.",
      personalInfo: "Informations Personnelles",
      firstName: "Pr\u00e9nom *",
      firstNamePh: "Jean",
      lastName: "Nom *",
      lastNamePh: "Dupont",
      nationality: "Nationalit\u00e9 *",
      nationalityPh: "ex. Am\u00e9ricain, Fran\u00e7ais...",
      dob: "Date de Naissance",
      email: "Email *",
      emailPh: "jean@exemple.com",
      phone: "T\u00e9l\u00e9phone / WhatsApp *",
      phonePh: "+33 6 00 00 00 00",
      courseDetails: "D\u00e9tails du Cours",
      courseType: "Type de Cours *",
      f2fTitle: "Pr\u00e9sentiel",
      f2fSub: "\u00c0 Sucre, Bolivie",
      onlineTitle: "En Ligne",
      onlineSub: "En Direct via Zoom",
      level: "Niveau d\u2019Espagnol *",
      levelPh: "S\u00e9lectionnez votre niveau...",
      level1: "D\u00e9butant Complet",
      level2: "D\u00e9butant",
      level3: "Interm\u00e9diaire",
      level4: "Interm\u00e9diaire Sup\u00e9rieur",
      level5: "Avanc\u00e9",
      startDate: "Date de D\u00e9but Souhait\u00e9e *",
      format: "Format du Cours",
      formatPh: "S\u00e9lectionnez le format...",
      format1: "Cours en groupe",
      format2: "Cours priv\u00e9 individuel",
      format3: "Semi-priv\u00e9",
      schedule: "Pr\u00e9f\u00e9rence d\u2019Horaire *",
      schedulePh: "S\u00e9lectionnez la pr\u00e9f\u00e9rence...",
      schedule1: "Matin",
      schedule2: "Apr\u00e8s-midi",
      schedule3: "Soir",
      schedule4: "Flexible",
      duration: "Combien de temps comptez-vous \u00e9tudier\u00a0?",
      durationPh: "S\u00e9lectionnez la dur\u00e9e...",
      duration1: "1 semaine",
      duration2: "2 semaines",
      duration3: "1 mois",
      duration4: "2-3 mois",
      duration5: "Long terme",
      source: "Comment nous avez-vous trouv\u00e9s\u00a0?",
      sourcePh: "S\u00e9lectionnez...",
      source1: "Google",
      source2: "Instagram",
      source3: "Facebook",
      source4: "Bouche \u00e0 oreille",
      source5: "Blog",
      source6: "Agence",
      source7: "Autre",
      notes: "Notes Suppl\u00e9mentaires",
      notesPh: "Toute demande sp\u00e9ciale ou information que nous devrions savoir...",
      submit: "Envoyer l\u2019Inscription",
      privacy: "En soumettant ce formulaire, vous acceptez notre politique de confidentialit\u00e9.",
      successTitle: "Inscription Re\u00e7ue\u00a0!",
      successText: "Nous examinerons vos informations et vous contacterons dans les 24 heures.",
      backHome: "Retour \u00e0 l\u2019Accueil"
    }
```

---

## Key Content

- **Tagline:** "Probably the most fun and friendly Spanish School in Sucre, Bolivia!"
- **Method statement:** "We design an effective methodology for teaching Spanish making this a fun process but with great results."
- **Formula:** Real life conversation + Grammar in context + Bolivian culture + Fun & friendly
- **4 student requirements:** Motivation · Commitment · Discipline · Forget the grammar rules
- **Class structure:** Theoretical (grammar in order) + Practical (reading, songs, games, real-life situations)
- **Stats:** 756 members · 8 class types · 34 videos

---

## Online Course Types

1. **Conversation Class** — speaking & listening, no textbooks, practical Spanish
2. **Couple Class** — 2 people + 1 teacher, personalized for shared level
3. **Regular Spanish Program** (Grammar & Practice) — step-by-step, grammar + speaking
4. **DELE Exam Preparation** — reading, writing, listening, speaking for official exam

---

## Face-to-Face Course Types

| Program | Price | Details |
|---|---|---|
| Private Excellence | $160 USD/week | 20h 1-on-1, total flexibility, any start day |
| Duo Dynamics | $145 USD/week/person | 2 students, study with travel partner |
| Group Immersion | $135 USD/week/person | Max 4 students, Mon–Fri 8:30–12:30 |
| Cultural Connection | $110 USD/week/person | Large group, budget-friendly |

> Prices removed from site per client request — kept here for reference only.

---

## Session Log

### Session 1 — 2026-04-08
- Full site redesign initiated
- Built `index.html` with new design system
- Built `clases.html` with F2F/Online tabs, pricing, levels, booking flow
- Built `metodologia.html`, `profesores.html`, `inscripcion.html`, and other pages
- Created `js/translations.js` (EN/ES/FR) and `js/main.js`
- Created `css/style.css` design system

### Session 2 — 2026-04-09
- `clases.html`: Removed estimados (price table), replaced online pricing cards with 4 course types from screenshot, replaced emojis with SVGs, redesigned levels section with CEFR bar
- `metodologia.html`: Full rewrite — updated navbar/hero to new pattern, added real site content

### Session 3 — 2026-04-09
- `profesores.html`: Full rewrite to new style — transparent navbar, dark hero, founders section, carousel
- Carousel refined: mismo diseño que main page (foto izq 360px + texto der), inicia en Claudia (index 2)

### Session 4 — 2026-04-10
- Fixed all `wa.me/` links → `wa.me/59173225725` (Ely's number for captaciones)
- Fixed hero overlay on all 8 pages: photo opacity 0.35, gradient rgba semi-transparent top-to-bottom
- Fixed eyebrow title colors (were displaying without color accent)
- Full i18n audit: `metodologia.html`, `profesores.html`, `contacto.html`, `inscripcion.html` — all data-i18n attributes added
- Added EN translations for methodology (new keys), teachers (new keys), contact (full section), reg (full section)
- ES and FR translations for new keys: **NOT YET DONE** — see "What to Add" sections above

### Session 5 — 2026-04-10
- Added ES translations: `methodology` new keys (heroTitle, methEyebrow, req×4, class, sci×3, cta), `teachers` new keys (heroTitle, stats, founders, ely, fern, team), full `contact` section, full `reg` section
- Added FR translations: same sections as ES — all keys complete
- Verified with Node.js: all 3 languages now have 14 sections each (nav→reg)
- `translations.js` is fully complete — i18n coverage is 100%

### Session 6 — 2026-04-10
- **SEO Optimization**: Added `<title>`, `<meta name="description">`, `og:image`, and Twitter cards to all 8 HTML files. Set `pago-virtual.html` to `noindex, nofollow`.
- Added `logo-me-gusta-spanish.png` as Favicon and default Open Graph image.
- Generated `sitemap.xml` and `robots.txt` for Google indexing.
- **Images Update**: Swapped generic Unsplash backgrounds on hero sections across all pages with real local images (`fondo-catedral-sucre`, `recoleta`, `sucre-1`, `estudiates-1`).
- Included `imagen-material.png` directly in the "Resources and Material" section of the Courses page (`clases.html`).

### Session 7 — 2026-04-13
- **Navbar logo**: Added `mix-blend-mode:multiply; filter:brightness(2.8) contrast(1.2)` to navbar logo (dark bg) via Python batch script across all 9 pages. Mobile menu logo stays without filter (`height:60px` only — white bg).
- **Activity photos**: Added real school photos to `clases.html` cultural activities section: `city-tour.webp`, `wally ball.webp`, `cooking-class.jpeg`, `charlate.webp`, `beer-tour.webp`.
- **Graduation photo** (`grafuacion-alumnos.jpeg`): Added to `index.html` "Why Choose Us" polaroid (replaced Unsplash students photo) and to `sobre-nosotros.html` right column of "How It Started" section (photo + compact stats bar below).
- **SEO improvements** (batch applied to 8 pages):
  - `<link rel="canonical">` added to all pages
  - `og:site_name` added to all pages
  - OG/Twitter image changed from `favicon.png` → `imagenes/logo-og.webp`
  - JSON-LD `LanguageSchool + LocalBusiness` schema added to `index.html`
  - JSON-LD `FAQPage` schema (11 Q&As) added to `faq.html`

### Pending (as of 2026-04-13)
- ⚠️ **CRÍTICO — Formularios no envían**: `handleContactSubmit` y `handleRegSubmit` no existen en `main.js`. Conectar a Formspree / EmailJS.
- Fotos reales pendientes (Unsplash en index.html):
  - Card "Face-to-Face Classes" (~línea 303)
  - Card "Online Classes" (~línea 346)
  - Tarjeta Elizabeth co-fundadora (~línea 412)
  - Tarjeta Fernando co-fundador (~línea 433)
- Google Analytics (GA4) — no hay tracking instalado
- Testimonios — verificar si son reales o de ejemplo
- ⚠️ Inconsistencia mayúsculas en rutas: algunas usan `Imagenes/` (con I mayúscula) y otras `imagenes/`. En Linux (GitHub Pages) sí importa — revisar si hay errores de imagen en producción.
