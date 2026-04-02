const profileConfig = {
  githubUser: "RiccijandroUpec",
  name: "Riccijandro",
  email: "riccijandro.dev@gmail.com",
  fallbackMetrics: {
    repos: 12,
    stars: 1,
    followers: 1,
    commits90: 0,
    years: 6,
    topLang: "PHP",
  },
};

const i18n = {
  es: {
    navAbout: "Sobre mi",
    navSkills: "Skills",
    navProjects: "Proyectos",
    navOpenSource: "Open Source",
    navContact: "Contacto",
    role: "Ingeniero en Computacion",
    heroTitle: "Construyo software robusto, elegante y con impacto real.",
    heroText:
      "Especialista en desarrollo de software, sistemas operativos y arquitectura tecnica. Construyo soluciones mantenibles, escalables y listas para produccion.",
    heroCtaProjects: "Ver proyectos",
    heroCtaContact: "Hablemos",
    heroCtaCv: "Ver CV",
    metricRepos: "repositorios publicos",
    metricStars: "estrellas acumuladas",
    metricFollowers: "seguidores en GitHub",
    verifiedTitle: "Metricas verificables",
    quoteText: "\"Maximo esfuerzo. Siempre.\"",
    aboutEyebrow: "Sobre mi",
    aboutTitle: "Ingenieria con mentalidad de sistema y foco en resultados.",
    aboutP1:
      "Soy Riccijandro, ingeniero en computacion y desarrollador de software. Disfruto disenar, construir y optimizar aplicaciones con arquitectura limpia y mantenimiento sencillo.",
    aboutP2:
      "Tambien trabajo con sistemas operativos, automatizacion y herramientas para equipos tecnicos. Mi camino profesional esta muy ligado al open source y al aprendizaje continuo.",
    skillsEyebrow: "Skills",
    skillsTitle: "Capacidades tecnicas de alto rendimiento.",
    skill1Title: "Desarrollo de software",
    skill1Text: "Aplicaciones web, arquitectura limpia, APIs y buenas practicas de codigo.",
    skill2Title: "Sistemas operativos",
    skill2Text: "Linux, shell scripting, administracion y solucion de problemas en entorno real.",
    skill3Title: "Open source",
    skill3Text: "Colaboracion comunitaria, repositorios publicos y mejora continua.",
    skill4Title: "Stack principal",
    skill4Text: "PHP, JavaScript, Python, HTML, CSS y entornos de desarrollo productivos.",
    projectsEyebrow: "Proyectos reales",
    projectsTitle: "Repositorios seleccionados con tecnologias y metricas.",
    projectView: "Ver repositorio",
    osEyebrow: "Open Source",
    osTitle: "Construir en publico. Aprender en comunidad.",
    osText:
      "Mi perfil open source refleja contribuciones reales, aprendizaje constante y una mentalidad de compartir conocimiento util.",
    osMetric1: "eventos push en 90 dias",
    osMetric1Text: "Actividad reciente registrada en eventos publicos de GitHub.",
    osMetric2: "anios en GitHub",
    osMetric2Text: "Trayectoria desde la creacion de la cuenta en 2020.",
    osMetric3: "como tecnologia destacada",
    osMetric3Text: "Lenguaje con mayor presencia en repositorios visibles.",
    contactEyebrow: "Contacto",
    contactTitle: "Listo para colaborar en proyectos de alto nivel.",
    contactText: "Enviame un mensaje y te respondo con enfoque tecnico y soluciones claras.",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSend: "Enviar mensaje",
    formSuccess: "Mensaje enviado. Te respondere pronto.",
    formError: "No se pudo enviar. Intenta de nuevo en unos minutos.",
    footerText: "Software, sistemas operativos y open source.",
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navOpenSource: "Open Source",
    navContact: "Contact",
    role: "Computer Engineer",
    heroTitle: "I build robust, elegant software with real-world impact.",
    heroText:
      "Focused on software engineering, operating systems, and technical architecture. I build maintainable and production-ready solutions.",
    heroCtaProjects: "See projects",
    heroCtaContact: "Let's talk",
    heroCtaCv: "View resume",
    metricRepos: "public repositories",
    metricStars: "total stars",
    metricFollowers: "GitHub followers",
    verifiedTitle: "Verifiable metrics",
    quoteText: "\"Maximum effort. Always.\"",
    aboutEyebrow: "About",
    aboutTitle: "Engineering mindset with systems thinking and strong execution.",
    aboutP1:
      "I am Riccijandro, a computer engineer and software developer. I enjoy designing, building, and optimizing maintainable applications with clean architecture.",
    aboutP2:
      "I also work with operating systems, automation, and practical tooling for technical teams. My path is deeply connected to open source and continuous learning.",
    skillsEyebrow: "Skills",
    skillsTitle: "High-performance technical capabilities.",
    skill1Title: "Software development",
    skill1Text: "Web applications, clean architecture, APIs, and solid coding practices.",
    skill2Title: "Operating systems",
    skill2Text: "Linux, shell scripting, administration, and real-world troubleshooting.",
    skill3Title: "Open source",
    skill3Text: "Community collaboration, public repositories, and continuous improvement.",
    skill4Title: "Core stack",
    skill4Text: "PHP, JavaScript, Python, HTML, CSS, and productive development workflows.",
    projectsEyebrow: "Real projects",
    projectsTitle: "Selected repositories with technologies and metrics.",
    projectView: "View repository",
    osEyebrow: "Open Source",
    osTitle: "Build in public. Learn with the community.",
    osText:
      "My open source profile reflects real contributions, continuous learning, and knowledge sharing.",
    osMetric1: "push events in 90 days",
    osMetric1Text: "Recent activity registered from public GitHub events.",
    osMetric2: "years on GitHub",
    osMetric2Text: "Track record since account creation in 2020.",
    osMetric3: "as highlighted technology",
    osMetric3Text: "Most represented language across visible repositories.",
    contactEyebrow: "Contact",
    contactTitle: "Ready to collaborate on high-impact projects.",
    contactText: "Send me a message and I will reply with technical clarity and practical solutions.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send message",
    formSuccess: "Message sent. I will get back to you soon.",
    formError: "Message could not be sent. Please try again in a few minutes.",
    footerText: "Software, operating systems, and open source.",
  },
};

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const langToggle = document.getElementById("langToggle");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

const revealNodes = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);
revealNodes.forEach((node) => revealObserver.observe(node));

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "es" ? "EN" : "ES";
  }

  localStorage.setItem("portfolioLang", lang);
}

function getInitialLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "es" || urlLang === "en") {
    return urlLang;
  }

  const saved = localStorage.getItem("portfolioLang");
  if (saved === "es" || saved === "en") {
    return saved;
  }

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "es" ? "en" : "es";
    applyLanguage(next);
  });
}

function safeText(value, fallback) {
  return value && String(value).trim() ? String(value).trim() : fallback;
}

function toYearsSince(isoDate) {
  const created = new Date(isoDate).getTime();
  const now = Date.now();
  if (!created || Number.isNaN(created)) {
    return profileConfig.fallbackMetrics.years;
  }
  return Math.max(1, Math.floor((now - created) / (1000 * 60 * 60 * 24 * 365.25)));
}

function renderProjects(repos) {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !Array.isArray(repos) || repos.length === 0) {
    return;
  }

  const currentLang = document.documentElement.lang;
  const cta = i18n[currentLang].projectView;

  const selected = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.updated_at) - Date.parse(a.updated_at))
    .slice(0, 3);

  if (selected.length === 0) {
    return;
  }

  grid.innerHTML = selected
    .map((repo, idx) => {
      const lang = safeText(repo.language, "Code");
      const stars = Number(repo.stargazers_count || 0);
      const desc = safeText(
        repo.description,
        currentLang === "es"
          ? "Repositorio publico con desarrollo activo."
          : "Public repository with active development."
      );
      const delay = idx === 1 ? " delay-1" : idx === 2 ? " delay-2" : "";
      const starWord = currentLang === "es" ? (stars === 1 ? "estrella" : "estrellas") : stars === 1 ? "star" : "stars";

      return `
        <article class="project-card reveal visible${delay}">
          <p class="project-tag">${lang} · ${stars} ${starWord}</p>
          <h3>${repo.name}</h3>
          <p>${desc}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener">${cta}</a>
        </article>
      `;
    })
    .join("");
}

function getTopLanguage(repos) {
  const count = {};
  repos.forEach((repo) => {
    if (repo.language) {
      count[repo.language] = (count[repo.language] || 0) + 1;
    }
  });

  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sorted.length > 0 ? sorted[0][0] : profileConfig.fallbackMetrics.topLang;
}

async function loadGithubMetrics() {
  const headers = { "User-Agent": "portfolio" };

  try {
    const userResp = await fetch(`https://api.github.com/users/${profileConfig.githubUser}`, { headers });
    const reposResp = await fetch(
      `https://api.github.com/users/${profileConfig.githubUser}/repos?per_page=100&sort=updated`,
      { headers }
    );
    const eventsResp = await fetch(
      `https://api.github.com/users/${profileConfig.githubUser}/events/public?per_page=100`,
      { headers }
    );

    if (!userResp.ok || !reposResp.ok) {
      throw new Error("GitHub API unavailable");
    }

    const user = await userResp.json();
    const repos = await reposResp.json();
    const events = eventsResp.ok ? await eventsResp.json() : [];

    const totalStars = repos.reduce((sum, repo) => sum + Number(repo.stargazers_count || 0), 0);
    const cut = Date.now() - 90 * 24 * 60 * 60 * 1000;
    const push90 = events.filter((event) => event.type === "PushEvent" && Date.parse(event.created_at) >= cut).length;

    document.getElementById("metricRepos").textContent = String(user.public_repos ?? profileConfig.fallbackMetrics.repos);
    document.getElementById("metricStars").textContent = String(totalStars);
    document.getElementById("metricFollowers").textContent = String(user.followers ?? profileConfig.fallbackMetrics.followers);
    document.getElementById("metricCommits90").textContent = String(push90);
    document.getElementById("metricYears").textContent = String(toYearsSince(user.created_at));
    document.getElementById("metricTopLang").textContent = getTopLanguage(repos);

    renderProjects(repos);
  } catch (_) {
    document.getElementById("metricRepos").textContent = String(profileConfig.fallbackMetrics.repos);
    document.getElementById("metricStars").textContent = String(profileConfig.fallbackMetrics.stars);
    document.getElementById("metricFollowers").textContent = String(profileConfig.fallbackMetrics.followers);
    document.getElementById("metricCommits90").textContent = String(profileConfig.fallbackMetrics.commits90);
    document.getElementById("metricYears").textContent = String(profileConfig.fallbackMetrics.years);
    document.getElementById("metricTopLang").textContent = String(profileConfig.fallbackMetrics.topLang);
  }
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const lang = document.documentElement.lang === "en" ? "en" : "es";
    const dict = i18n[lang];

    formStatus.textContent = "...";
    formStatus.className = "form-status";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error("submit failed");
      }

      formStatus.textContent = dict.formSuccess;
      formStatus.className = "form-status ok";
      contactForm.reset();
    } catch (_) {
      formStatus.textContent = dict.formError;
      formStatus.className = "form-status error";
    }
  });
}

const initialLang = getInitialLanguage();
applyLanguage(initialLang);
loadGithubMetrics();

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
