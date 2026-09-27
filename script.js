const profileConfig = {
  githubUser: "riccijandro",
  fallbackMetrics: {
    repos: 12,
    commits90: 0,
    years: 6,
    topLang: "PHP",
  },
};

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  const setMenu = (open) => {
    mainNav.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  menuToggle.addEventListener("click", () => setMenu(!mainNav.classList.contains("open")));
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

// Tema claro / oscuro
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
  });
}

// Borde del header al hacer scroll
const siteHeader = document.getElementById("siteHeader");
const onScroll = () => siteHeader && siteHeader.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Animación de aparición
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
  { threshold: 0.12 }
);
revealNodes.forEach((node) => revealObserver.observe(node));

// Enlace activo en la navegación
const navLinks = mainNav ? [...mainNav.querySelectorAll('a[href^="#"]')] : [];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) sectionObserver.observe(section);
});

// Métricas de GitHub
function toYearsSince(isoDate) {
  const created = new Date(isoDate).getTime();
  if (!created || Number.isNaN(created)) {
    return profileConfig.fallbackMetrics.years;
  }
  return Math.max(1, Math.floor((Date.now() - created) / (1000 * 60 * 60 * 24 * 365.25)));
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

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = String(value);
}

async function loadGithubMetrics() {
  const base = `https://api.github.com/users/${profileConfig.githubUser}`;

  try {
    const [userResp, reposResp, eventsResp] = await Promise.all([
      fetch(base),
      fetch(`${base}/repos?per_page=100&sort=updated`),
      fetch(`${base}/events/public?per_page=100`),
    ]);

    if (!userResp.ok || !reposResp.ok) {
      throw new Error("GitHub API unavailable");
    }

    const user = await userResp.json();
    const repos = await reposResp.json();
    const events = eventsResp.ok ? await eventsResp.json() : [];

    const cut = Date.now() - 90 * 24 * 60 * 60 * 1000;
    const push90 = events.filter((event) => event.type === "PushEvent" && Date.parse(event.created_at) >= cut).length;

    setText("metricRepos", user.public_repos ?? profileConfig.fallbackMetrics.repos);
    setText("metricCommits90", push90);
    setText("metricYears", toYearsSince(user.created_at));
    setText("metricTopLang", getTopLanguage(repos));
  } catch (_) {
    const fb = profileConfig.fallbackMetrics;
    setText("metricRepos", fb.repos);
    setText("metricCommits90", fb.commits90);
    setText("metricYears", fb.years);
    setText("metricTopLang", fb.topLang);
  }
}

loadGithubMetrics();

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
