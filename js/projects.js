const githubUsername = "YOUR_GITHUB_USERNAME";

const projects = [
  {
    title: "HTML/CSS Portfolio",
    summary: "A personal portfolio introducing my work and skills, built with semantic HTML and responsive CSS.",
    stack: ["HTML", "CSS"],
    category: "frontend",
    repo: `https://github.com/${githubUsername}/html-css-portfolio`
  },
  {
    title: "JavaScript Landing Page",
    summary: "A polished landing page that brings together responsive layout and interactive JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    repo: `https://github.com/${githubUsername}/javascript-landing-page`
  },
  {
    title: "Weather Dashboard",
    summary: "A weather dashboard that connects to an API to present current weather information.",
    stack: ["JavaScript", "Weather API", "CSS"],
    category: "frontend",
    repo: `https://github.com/${githubUsername}/weather-dashboard`
  },
  {
    title: "PHP Dynamic Site",
    summary: "A dynamic website built with PHP, introducing server-rendered pages and reusable content.",
    stack: ["PHP", "HTML", "CSS"],
    category: "php",
    repo: `https://github.com/${githubUsername}/php-dynamic-site`
  },
  {
    title: "Student Records",
    summary: "A student records application backed by MySQL for storing and managing student data.",
    stack: ["PHP", "MySQL", "CRUD"],
    category: "php",
    repo: `https://github.com/${githubUsername}/student-records-system`
  },
  {
    title: "PHP Auth System",
    summary: "A PHP authentication system for account access and session-based sign-in.",
    stack: ["PHP", "MySQL", "Sessions"],
    category: "php",
    repo: `https://github.com/${githubUsername}/php-auth-system`
  },
  {
    title: "PHP Blog CMS",
    summary: "A blog content management system for creating and managing posts with PHP and MySQL.",
    stack: ["PHP", "MySQL", "CMS"],
    category: "php",
    repo: `https://github.com/${githubUsername}/php-blog-cms`
  },
  {
    title: "School Database",
    summary: "A SQL database project modeling the records and relationships in a school.",
    stack: ["SQL", "Database Design"],
    category: "php",
    repo: `https://github.com/${githubUsername}/school-database-sql`
  },
  {
    title: "PHP Shop & Cart",
    summary: "An online shop with a cart flow, built with PHP and MySQL.",
    stack: ["PHP", "MySQL", "Shopping Cart"],
    category: "php",
    repo: `https://github.com/${githubUsername}/php-shop-cart`
  },
  {
    title: "Node CLI",
    summary: "A command-line tool built with Node.js.",
    stack: ["Node.js", "CLI"],
    category: "node",
    repo: `https://github.com/${githubUsername}/node-cli`
  },
  {
    title: "Express REST API",
    summary: "A REST API built with Express to expose application data through HTTP endpoints.",
    stack: ["Node.js", "Express", "REST API"],
    category: "node",
    repo: `https://github.com/${githubUsername}/express-rest-api`
  },
  {
    title: "Notes API",
    summary: "A notes API combining Express, Neon, and JWT-based authentication.",
    stack: ["Express", "Neon", "JWT"],
    category: "node",
    repo: `https://github.com/${githubUsername}/notes-api`,
    featured: true
  },
  {
    title: "React Quiz",
    summary: "An interactive quiz experience built with React.",
    stack: ["React", "JavaScript"],
    category: "frontend",
    repo: `https://github.com/${githubUsername}/react-quiz`
  },
  {
    title: "Next.js Company Site",
    summary: "A company website built with Next.js and React.",
    stack: ["Next.js", "React"],
    category: "nextjs",
    repo: `https://github.com/${githubUsername}/nextjs-company-site`
  },
  {
    title: "Next.js Recipe Explorer",
    summary: "A recipe discovery experience built with Next.js.",
    stack: ["Next.js", "React", "API"],
    category: "nextjs",
    repo: `https://github.com/${githubUsername}/nextjs-recipe-explorer`,
    featured: true
  },
  {
    title: "Next.js Project Tracker",
    summary: "A full-stack project tracker with Neon, GitHub authentication, CI, and a production deployment.",
    stack: ["Next.js", "Neon", "GitHub Auth", "CI/CD"],
    category: "nextjs",
    repo: `https://github.com/${githubUsername}/nextjs-project-tracker`,
    featured: true
  }
];

const categoryLabels = {
  frontend: "Frontend",
  php: "PHP & MySQL",
  node: "Node.js",
  nextjs: "Next.js"
};

function createProjectCard(project) {
  const article = document.createElement("article");
  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = categoryLabels[project.category];
  article.append(category);

  if (project.featured) {
    const badge = document.createElement("span");
    badge.className = "featured-label";
    badge.textContent = "Featured";
    article.append(badge);
  }

  const title = document.createElement("h3");
  title.textContent = project.title;
  article.append(title);

  const summary = document.createElement("p");
  summary.textContent = project.summary;
  article.append(summary);

  const tags = document.createElement("ul");
  tags.className = "project-tags";
  for (const technology of project.stack) {
    const tag = document.createElement("li");
    tag.textContent = technology;
    tags.append(tag);
  }
  article.append(tags);

  const links = document.createElement("div");
  links.className = "project-links";
  const repoLink = document.createElement("a");
  repoLink.href = project.repo;
  repoLink.target = "_blank";
  repoLink.rel = "noopener noreferrer";
  repoLink.textContent = "View repository";
  links.append(repoLink);

  if (project.live) {
    const liveLink = document.createElement("a");
    liveLink.href = project.live;
    liveLink.target = "_blank";
    liveLink.rel = "noopener noreferrer";
    liveLink.textContent = "Live site";
    links.append(liveLink);
  }

  article.append(links);
  return article;
}

function renderProjects(category = "all") {
  const matchesCategory = (project) => category === "all" || project.category === category;
  const visibleProjects = projects.filter(matchesCategory);
  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const otherProjects = visibleProjects.filter((project) => !project.featured);
  const featuredContainer = document.querySelector("#featured-projects");
  const projectsContainer = document.querySelector("#all-projects");
  const resultCount = document.querySelector("#project-result-count");

  featuredContainer.replaceChildren(...featuredProjects.map(createProjectCard));
  projectsContainer.replaceChildren(...otherProjects.map(createProjectCard));
  resultCount.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "project" : "projects"} shown`;

  featuredContainer.closest(".project-group").hidden = featuredProjects.length === 0;
  projectsContainer.closest(".project-group").hidden = otherProjects.length === 0;
}

document.querySelectorAll(".project-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".project-filters button").forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });
    renderProjects(button.dataset.category);
  });
});

renderProjects();
