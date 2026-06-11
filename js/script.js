// Techados Acosta - sitio estático con galería editable y cotización por WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    phoneDisplay: "+52 (81) 1587-6112",
    phoneRaw: "528115876112",
    email: "techadosacosta@gmail.com",
    facebook: "https://www.facebook.com/techados.acosta",
    defaultMessage: "Hola, vi la página de Techados Acosta y quiero una cotización. Tengo fotos y medidas aproximadas."
  };

  const materials = [
    {
      icon: "bi-brightness-high",
      title: "Policarbonato",
      image: "src/ilustracion-policarbonato.svg",
      alt: "Ilustración de techado con paneles de policarbonato",
      text: "Cubierta translúcida o transparente que deja pasar luz natural y protege de la lluvia.",
      use: "Ideal para pasillos, patios, domos ligeros y áreas donde se busca iluminación natural.",
      features: ["Entrada de luz natural", "Protección UV", "Buena opción para espacios estrechos"]
    },
    {
      icon: "bi-layers",
      title: "Lámina acanalada",
      image: "src/ilustracion-lamina-acanalada.svg",
      alt: "Ilustración de lámina acanalada para techados",
      text: "Lámina metálica con canales que ayudan a dar rigidez y dirigir el agua.",
      use: "Funciona bien en cocheras, bodegas, áreas de trabajo y techos prácticos de bajo mantenimiento.",
      features: ["Económica", "Resistente", "Instalación ágil"]
    },
    {
      icon: "bi-house-door",
      title: "Galvateja",
      image: "src/ilustracion-galvateja.svg",
      alt: "Ilustración de techo tipo galvateja",
      text: "Cubierta metálica con apariencia de teja tradicional, pero más ligera y práctica.",
      use: "Buena para fachadas, casas, terrazas y espacios donde importa mucho la apariencia.",
      features: ["Apariencia decorativa", "Durable", "Estilo residencial"]
    },
    {
      icon: "bi-grid-3x3-gap",
      title: "Deck sintético",
      image: "src/ilustracion-deck-sintetico.svg",
      alt: "Ilustración de deck sintético tipo madera",
      text: "Acabado tipo madera usado para dar una vista cálida y moderna al espacio.",
      use: "Ideal en terrazas, áreas sociales, plafones decorativos y techados con diseño.",
      features: ["Vista elegante", "Uso exterior", "Acabado cálido"]
    },
    {
      icon: "bi-tree",
      title: "Lambrim",
      image: "src/ilustracion-lambrim.svg",
      alt: "Ilustración de lambrim para revestimiento",
      text: "Revestimiento decorativo para techos o muros que mejora la presentación del área.",
      use: "Se usa en interiores, terrazas y acabados donde se busca una vista más fina.",
      features: ["Acabado decorativo", "Sensación cálida", "Útil en muros y plafones"]
    },
    {
      icon: "bi-flower2",
      title: "Pérgolas",
      image: "src/ilustracion-pergola.svg",
      alt: "Ilustración de pérgola metálica para exterior",
      text: "Estructuras decorativas y funcionales para crear sombra, diseño y áreas sociales.",
      use: "Ideales para jardines, patios, terrazas, cocheras abiertas y espacios de descanso.",
      features: ["Diseño a medida", "Metal y acabados mixtos", "Ideal para exteriores"]
    }
  ];

  const works = [
    {
      title: "Techo de policarbonato",
      description: "Cubierta translúcida con estructura metálica para pasillo o patio.",
      category: "Policarbonato",
      img: "src/techoPolicarbonato.jpeg"
    },
    {
      title: "Mesa de trabajo",
      description: "Fabricación de mesa con estructura metálica y acabado tipo madera.",
      category: "Soldadura",
      img: "src/mesa-despues.jpeg"
    },
    {
      title: "Estructura metálica",
      description: "Armado de estructura en altura para instalación de techado.",
      category: "Estructura",
      img: "src/estructura.jpeg"
    },
    {
      title: "Techo comercial",
      description: "Trabajo en área comercial con estructura y soporte especializado.",
      category: "Comercial",
      img: "src/techoComercial.jpg"
    },
    {
      title: "Techado con deck sintético",
      description: "Acabado decorativo con estructura metálica, iluminación y ventilador.",
      category: "Deck",
      img: "src/techoDeckSintetico.jpeg"
    },
    {
      title: "Techo de galvateja",
      description: "Cubierta tipo galvateja con plafón, iluminación y acabado residencial.",
      category: "Galvateja",
      img: "src/techoGalvateja.jpeg"
    }
  ];

  const whatsappUrl = (message = CONFIG.defaultMessage) =>
    `https://wa.me/${CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;

  function setContactLinks() {
    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      link.href = whatsappUrl();
    });

    document.querySelectorAll(".js-call").forEach((link) => {
      link.href = `tel:${CONFIG.phoneRaw}`;
    });

    document.querySelectorAll(".js-call-text").forEach((link) => {
      link.href = `tel:${CONFIG.phoneRaw}`;
      link.textContent = CONFIG.phoneDisplay;
    });
  }

  function renderMaterials() {
    const grid = document.getElementById("materialsGrid");
    if (!grid) return;

    grid.innerHTML = materials.map((material) => `
      <div class="col-md-6 col-lg-4">
        <article class="material-card fade-in">
          <div class="material-visual">
            <img src="${material.image}" alt="${material.alt}" loading="lazy">
          </div>
          <div class="material-card-body">
            <span class="material-icon"><i class="bi ${material.icon}"></i></span>
            <h3>${material.title}</h3>
            <p>${material.text}</p>
            <p class="material-use"><strong>Uso común:</strong> ${material.use}</p>
            <ul class="feature-list">
              ${material.features.map((feature) => `<li><i class="bi bi-check-circle-fill"></i>${feature}</li>`).join("")}
            </ul>
          </div>
        </article>
      </div>
    `).join("");
  }

  function renderFilters(active = "Todos") {
    const filters = document.getElementById("galleryFilters");
    if (!filters) return;

    const categories = ["Todos", ...new Set(works.map((work) => work.category))];

    filters.innerHTML = categories.map((category) => `
      <button class="filter-btn ${category === active ? "active" : ""}" type="button" data-category="${category}">
        ${category}
      </button>
    `).join("");

    filters.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        renderFilters(button.dataset.category);
        renderGallery(button.dataset.category);
      });
    });
  }

  function renderGallery(category = "Todos") {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const filtered = category === "Todos" ? works : works.filter((work) => work.category === category);

    grid.innerHTML = filtered.map((work, index) => `
      <div class="col-md-6 col-lg-4">
        <article class="gallery-card fade-in" data-index="${works.indexOf(work)}" tabindex="0" role="button" aria-label="Ver ${work.title}">
          <img src="${work.img}" alt="${work.title}" loading="lazy">
          <div class="gallery-card-body">
            <h3>${work.title}</h3>
            <p>${work.description}</p>
            <span class="badge-soft">${work.category}</span>
          </div>
        </article>
      </div>
    `).join("");

    grid.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", () => openWorkModal(Number(card.dataset.index)));
      card.addEventListener("keyup", (event) => {
        if (event.key === "Enter") openWorkModal(Number(card.dataset.index));
      });
    });

    observeFadeIns();
  }

  function openWorkModal(index) {
    const work = works[index];
    if (!work) return;

    document.getElementById("modalImage").src = work.img;
    document.getElementById("modalImage").alt = work.title;
    document.getElementById("modalTitle").textContent = work.title;
    document.getElementById("modalDescription").textContent = work.description;
    document.getElementById("modalTag").textContent = work.category;

    const modal = new bootstrap.Modal(document.getElementById("workModal"));
    modal.show();
  }

  function setupQuoteForm() {
    const form = document.getElementById("quoteForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const nombre = data.get("nombre").trim();
      const telefono = data.get("telefono").trim();
      const ubicacion = data.get("ubicacion").trim();
      const servicio = data.get("servicio").trim();
      const descripcion = data.get("descripcion").trim();

      if (!nombre || !telefono || !ubicacion || !servicio || !descripcion) return;

      const message =
        `Hola, vi la página de Techados Acosta y quiero una cotización.%0A%0A` +
        `*Nombre:* ${nombre}%0A` +
        `*Teléfono:* ${telefono}%0A` +
        `*Ubicación:* ${ubicacion}%0A` +
        `*Tipo de trabajo:* ${servicio}%0A` +
        `*Descripción:* ${descripcion}%0A%0A` +
        `Puedo enviar fotos y medidas aproximadas.`;

      window.open(`https://wa.me/${CONFIG.phoneRaw}?text=${message}`, "_blank", "noopener");
      form.reset();
    });
  }

  function setupNavbar() {
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const collapse = document.getElementById("navbarNav");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (collapse && collapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        }
      });
    });
  }

  function observeFadeIns() {
    const elements = document.querySelectorAll(".fade-in:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((el) => observer.observe(el));
  }

  setContactLinks();
  renderMaterials();
  renderFilters();
  renderGallery();
  setupQuoteForm();
  setupNavbar();
  observeFadeIns();

  console.log("Techados Acosta listo. Actualiza datos, trabajos y links en js/script.js.");
});
