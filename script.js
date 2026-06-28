const profileConfig = {
  githubUser: "riccijandro",
  fallbackMetrics: {
    repos: 12,
    commits90: 0,
    years: 6,
    topLang: "PHP",
  },
};

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

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

function toYearsSince(isoDate) {
  const created = new Date(isoDate).getTime();
  const now = Date.now();
  if (!created || Number.isNaN(created)) {
    return profileConfig.fallbackMetrics.years;
  }
  return Math.max(1, Math.floor((now - created) / (1000 * 60 * 60 * 24 * 365.25)));
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

    const cut = Date.now() - 90 * 24 * 60 * 60 * 1000;
    const push90 = events.filter((event) => event.type === "PushEvent" && Date.parse(event.created_at) >= cut).length;

    document.getElementById("metricRepos").textContent = String(user.public_repos ?? profileConfig.fallbackMetrics.repos);
    document.getElementById("metricCommits90").textContent = String(push90);
    document.getElementById("metricYears").textContent = String(toYearsSince(user.created_at));
    document.getElementById("metricTopLang").textContent = getTopLanguage(repos);
  } catch (_) {
    document.getElementById("metricRepos").textContent = String(profileConfig.fallbackMetrics.repos);
    document.getElementById("metricCommits90").textContent = String(profileConfig.fallbackMetrics.commits90);
    document.getElementById("metricYears").textContent = String(profileConfig.fallbackMetrics.years);
    document.getElementById("metricTopLang").textContent = String(profileConfig.fallbackMetrics.topLang);
  }
}

loadGithubMetrics();

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
