/* ==================================================
   LINK IN BIO — CENTRAL CONTROL
   Modifica este archivo para personalizar tu página.
================================================== */

const BIO = {

  /* -----------------------------------------------
     SETTINGS
  ----------------------------------------------- */

  SETTINGS: {
    showHero: true,
    showLinks: true,
    showCards: true,
    showSocials: true,
    showBadge: true,
    showCTA: true,

    maxLinks: 8,
    maxCards: 6,

    sliderInterval: 2500, // 2.5 segundos

    footer: "© 2026 · Creado con intención."
  },

  /* -----------------------------------------------
     PROFILE / HERO
  ----------------------------------------------- */

  PROFILE: {
    name: "Oliver Campos",

    badge: "CREATIVE DEVELOPER",

    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",

    title: "Construyendo ideas, aprendiendo en el proceso.",

    description:
      "Desarrollo web, creatividad, tecnología y proyectos personales. Documentando el camino, no solo el resultado.",

    cta: {
      label: "Explora mi trabajo",
      url: "https://github.com/"
    }
  },

  /* -----------------------------------------------
     HERO BACKGROUND SLIDER
     La cantidad de imágenes la controlas aquí.
     Agrega o elimina objetos de este array.
  ----------------------------------------------- */

  SLIDER: {
    enabled: true,

    images: [
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=85"
    ]
  },

  /* -----------------------------------------------
     SOCIAL NETWORKS
     Soporta código <svg>...</svg>, rutas "./icono.svg" o texto.
  ----------------------------------------------- */

  SOCIALS: [
    {
      name: "Instagram",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
      url: "https://instagram.com/"
    },
    {
      name: "GitHub",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
      url: "https://github.com/"
    },
    {
      name: "YouTube",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
      url: "https://youtube.com/"
    },
    {
      name: "X",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
      url: "https://x.com/"
    }
  ],

  /* -----------------------------------------------
     SECTION TEXT
  ----------------------------------------------- */

  SECTION: {
    eyebrow: "FIND ME ONLINE",
    title: "Mis espacios",
    description: "Proyectos, redes, recursos y otras cosas que estoy construyendo."
  },

  /* -----------------------------------------------
     LINKS / BUTTONS
     Cantidad: controlada por maxLinks.
     Soporta código <svg>...</svg>, rutas "./icono.svg" o texto.
  ----------------------------------------------- */

  LINKS: [
    {
      title: "Mi portfolio",
      description: "Proyectos y experimentos",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      url: "https://example.com/",
      enabled: false
    },
    {
      title: "GitHub",
      description: "Código y repositorios",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      url: "https://github.com/",
      enabled: false
    },
    {
      title: "Mi blog",
      description: "Ideas, notas y reflexiones",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
      url: "https://example.com/",
      enabled: false
    },
    {
      title: "Contacto",
      description: "Hablemos de proyectos",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
      url: "mailto:hello@example.com",
      enabled: false
    },
    {
      title: "YouTube",
      description: "Videos y contenido",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      url: "https://youtube.com/",
      enabled: false
    }
  ],

  /* -----------------------------------------------
     CARDS

     Tipos:
     - image
     - text
     - stat
     - horizontal

     Cantidad: controlada por maxCards.
  ----------------------------------------------- */

  CARDS: [
    {
      enabled: true,
      type: "image",
      label: "PROYECTO",
      title: "Mi próximo proyecto",
      description: "Experimentando con nuevas ideas y tecnologías.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      actionLabel: "Ver proyecto",
      url: "https://github.com/"
    },

    {
      enabled: false,
      type: "text",
      label: "SOBRE MI",
      title: "Aprender haciendo.",
      description: "Creo que la mejor manera de aprender es construir cosas reales, equivocarse y volver a intentarlo.",
      actionLabel: "Conóceme",
      url: "https://example.com/"
    },

    {
      enabled: false,
      type: "stat",
      label: "CURRENT FOCUS",
      number: "01",
      title: "Construyendo",
      description: "Actualmente enfocado en desarrollo web y automatización.",
      actionLabel: "Ver qué hago",
      url: "https://github.com/"
    },

    {
      enabled: false,
      type: "horizontal",
      label: "RECURSO",
      title: "Mi espacio de aprendizaje",
      description: "Notas, herramientas, recursos y conocimiento que voy recopilando.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      actionLabel: "Explorar",
      url: "https://example.com/"
    },

    {
      enabled: false,
      type: "text",
      label: "EXTRA",
      title: "Card adicional",
      description: "Puedes crear tantas cards como quieras. Controlas cuáles aparecen.",
      actionLabel: "Abrir",
      url: "https://example.com/"
    }
  ]
};


/* ==================================================
   RENDER ENGINE
   No necesitas editar esta sección para cambiar contenido.
================================================== */

const $ = (selector) => document.querySelector(selector);

/**
 * Renderiza un icono soportando:
 * 1. Código SVG en línea (<svg>...</svg>)
 * 2. Rutas o URLs a archivos .svg / imágenes
 * 3. Texto plano o emojis (retrocompatibilidad)
 */
function renderIcon(container, icon) {
  if (!icon) return;

  const trimmed = icon.trim();

  if (trimmed.startsWith("<svg")) {
    container.innerHTML = trimmed;
  } else if (
    trimmed.endsWith(".svg") ||
    trimmed.startsWith("http") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("/")
  ) {
    const img = document.createElement("img");
    img.src = trimmed;
    img.alt = "";
    img.className = "icon-svg-img";
    img.setAttribute("aria-hidden", "true");
    container.appendChild(img);
  } else {
    container.textContent = icon;
  }
}


/* -----------------------------------------------
   PROFILE
----------------------------------------------- */

function renderProfile() {
  const profile = BIO.PROFILE;

  $("#avatar").style.backgroundImage = `url("${profile.avatar}")`;

  $("#badge").textContent = profile.badge;
  $("#hero-title").textContent = profile.title;
  $("#hero-description").textContent = profile.description;

  $("#cta-label").textContent = profile.cta.label;
  $("#hero-cta").href = profile.cta.url;

  $("#badge").hidden = !BIO.SETTINGS.showBadge;
  $("#hero-cta").hidden = !BIO.SETTINGS.showCTA;

  $("#hero").hidden = !BIO.SETTINGS.showHero;
}


/* -----------------------------------------------
   SLIDER
----------------------------------------------- */

function initSlider() {
  const slider = $("#hero-slider");
  const images = BIO.SLIDER.images;

  if (!BIO.SLIDER.enabled || !images.length) {
    slider.style.display = "none";
    return;
  }

  let current = 0;

  function changeImage() {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.style.backgroundImage = `url("${images[current]}")`;
      slider.style.opacity = "1";

      current = (current + 1) % images.length;
    }, 500);
  }

  slider.style.transition = "opacity 1s ease";
  slider.style.backgroundImage = `url("${images[0]}")`;

  current = images.length > 1 ? 1 : 0;

  if (images.length > 1) {
    setInterval(changeImage, BIO.SETTINGS.sliderInterval);
  }
}


/* -----------------------------------------------
   SOCIALS
----------------------------------------------- */

function renderSocials() {
  const container = $("#socials");

  container.innerHTML = "";

  if (!BIO.SETTINGS.showSocials) return;

  BIO.SOCIALS.forEach(social => {
    const link = document.createElement("a");

    link.className = "social-link";
    link.href = social.url;
    link.title = social.name;
    link.setAttribute("aria-label", social.name);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    renderIcon(link, social.icon);

    container.appendChild(link);
  });
}


/* -----------------------------------------------
   SECTION
----------------------------------------------- */

function renderSection() {
  $("#section-eyebrow").textContent = BIO.SECTION.eyebrow;
  $("#section-title").textContent = BIO.SECTION.title;
  $("#section-description").textContent = BIO.SECTION.description;
}


/* -----------------------------------------------
   LINKS
----------------------------------------------- */

function renderLinks() {
  const container = $("#links-container");

  container.innerHTML = "";

  if (!BIO.SETTINGS.showLinks) return;

  const links = BIO.LINKS
    .filter(link => link.enabled)
    .slice(0, BIO.SETTINGS.maxLinks);

  links.forEach(link => {
    const element = document.createElement("a");

    element.className = "link-item";
    element.href = link.url;

    if (link.url.startsWith("http")) {
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    }

    element.innerHTML = `
      <div class="link-icon"></div>

      <div class="link-text">
        <h3></h3>
        <p></p>
      </div>

      <span class="link-arrow">↗</span>
    `;

    renderIcon(element.querySelector(".link-icon"), link.icon);
    element.querySelector("h3").textContent = link.title;
    element.querySelector("p").textContent = link.description;

    container.appendChild(element);
  });
}


/* -----------------------------------------------
   CARD BUILDER
----------------------------------------------- */

function createCard(card) {
  const element = document.createElement("article");

  element.className = "content-card";

  if (card.type === "text") {
    element.classList.add("text-card");
  }

  if (card.type === "stat") {
    element.classList.add("stat-card");
  }

  if (card.type === "horizontal") {
    element.classList.add("horizontal-card");
  }

  /* IMAGE */
  if (card.image) {
    const image = document.createElement("img");

    image.className = "card-image";
    image.src = card.image;
    image.alt = card.title || "Card image";
    image.loading = "lazy";

    element.appendChild(image);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  /* STAT */
  if (card.type === "stat" && card.number) {
    const number = document.createElement("div");

    number.className = "stat-number";
    number.textContent = card.number;

    body.appendChild(number);
  }

  /* LABEL */
  if (card.label) {
    const label = document.createElement("span");

    label.className = "card-label";
    label.textContent = card.label;

    body.appendChild(label);
  }

  /* TITLE */
  const title = document.createElement("h3");
  title.textContent = card.title || "";

  body.appendChild(title);

  /* DESCRIPTION */
  const description = document.createElement("p");
  description.textContent = card.description || "";

  body.appendChild(description);

  /* ACTION */
  if (card.actionLabel && card.url) {
    const action = document.createElement("a");

    action.className = "card-action";
    action.textContent = `${card.actionLabel} ↗`;
    action.href = card.url;

    if (card.url.startsWith("http")) {
      action.target = "_blank";
      action.rel = "noopener noreferrer";
    }

    body.appendChild(action);
  }

  element.appendChild(body);

  return element;
}


/* -----------------------------------------------
   CARDS RENDERER
----------------------------------------------- */

function renderCards() {
  const container = $("#cards-container");

  container.innerHTML = "";

  if (!BIO.SETTINGS.showCards) {
    $(".cards-section").hidden = true;
    return;
  }

  $(".cards-section").hidden = false;

  $("#cards-eyebrow").textContent = "SELECTED";
  $("#cards-title").textContent = "Destacados";

  const cards = BIO.CARDS
    .filter(card => card.enabled)
    .slice(0, BIO.SETTINGS.maxCards);

  cards.forEach(card => {
    container.appendChild(createCard(card));
  });
}


/* -----------------------------------------------
   FOOTER
----------------------------------------------- */

function renderFooter() {
  $("#footer").textContent = BIO.SETTINGS.footer;
}


/* -----------------------------------------------
   INITIALIZATION
----------------------------------------------- */

function initBio() {
  renderProfile();
  initSlider();
  renderSocials();
  renderSection();
  renderLinks();
  renderCards();
  renderFooter();
}

document.addEventListener("DOMContentLoaded", initBio);