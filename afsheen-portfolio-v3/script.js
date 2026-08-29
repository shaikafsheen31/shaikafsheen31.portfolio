function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(opts).forEach(([key, val]) => {
    if (key === "class") node.className = val;
    else if (key === "text") node.textContent = val;
    else if (key === "html") node.innerHTML = val;
    else node.setAttribute(key, val);
  });
  children.forEach((c) => c && node.appendChild(c));
  return node;
}

/* ---------------- Hero ---------------- */
function renderHero() {
  document.getElementById("hero-tag").textContent = ROLE_TAG;
  document.getElementById("hero-heading").textContent = HERO.heading;
  document.getElementById("hero-sub").textContent = HERO.sub;
  document.getElementById("hero-github").href = GITHUB_URL;

  const pipeline = document.getElementById("pipeline");
  const nodes = ["DATA", "MODEL", "INSIGHT", "DECISION"];
  nodes.forEach((n, i) => {
    const row = el("div", { class: "pipeline-node" }, [
      el("span", { class: "pipeline-node__dot" }),
      el("span", { class: "pipeline-node__label", text: n }),
    ]);
    if (i < nodes.length - 1) {
      row.appendChild(
        el("div", { class: "pipeline-node__line" }, [
          el("div", { class: "pipeline-node__pulse", style: `animation-delay:${i * 0.6}s` }),
        ])
      );
    }
    pipeline.appendChild(row);
  });
}

/* ---------------- About ---------------- */
function renderAbout() {
  document.getElementById("about-body").textContent = ABOUT.body;
  const focusWrap = document.getElementById("about-focus");
  ABOUT.focus.forEach((f, i) => {
    focusWrap.appendChild(
      el("div", { class: "focus-row" }, [
        el("span", { class: "focus-row__idx", text: String(i + 1).padStart(2, "0") }),
        el("span", { class: "focus-row__label", text: f }),
      ])
    );
  });
}

/* ---------------- Skills ---------------- */
function renderSkills() {
  const wrap = document.getElementById("skills-grid");
  SKILLS.forEach((group) => {
    wrap.appendChild(
      el("div", { "data-reveal": "" }, [
        el("p", { class: "skill-group__label", text: group.label }),
        el("div", { class: "skill-chips" }, group.items.map((i) => el("span", { class: "chip", text: i }))),
      ])
    );
  });
}

/* ---------------- Projects ---------------- */
function renderProjects() {
  const wrap = document.getElementById("projects-grid");
  PROJECTS.forEach((p) => {
    const badges = [el("span", { class: "badge badge--accent", text: p.highlight })];
    if (p.status) badges.unshift(el("span", { class: "badge badge--status", text: p.status.toUpperCase() }));

    const card = el("div", { class: "project-card", "data-reveal": "" }, [
      el("div", { class: "project-card__top" }, [
        el("span", { class: "project-card__num", text: p.number }),
        el("div", { class: "project-card__badges" }, badges),
      ]),
      el("h3", { class: "project-card__title", text: p.title }),
      el("p", { class: "project-card__subtitle", text: p.subtitle }),
      el("p", { class: "project-card__desc", text: p.description }),
      el("div", { class: "project-card__tech" }, p.tech.map((t) => el("span", { class: "tech-tag", text: t }))),
      el("div", { class: "project-card__links" }, [
        el("button", { class: "project-card__view", type: "button", text: "View Details →" }),
        el("a", { class: "project-card__gh", href: p.github, target: "_blank", rel: "noopener", text: "GitHub ↗" }),
      ]),
    ]);

    card.querySelector(".project-card__view").addEventListener("click", () => openModal(p));
    wrap.appendChild(card);
  });
}

/* ---------------- Project modal ---------------- */
function openModal(project) {
  const content = document.getElementById("modal-content");
  content.innerHTML = "";

  content.appendChild(
    el("div", { class: "modal__top" }, [
      el("div", {}, [
        el("p", { class: "modal__tag", text: project.highlight }),
        el("h3", { class: "modal__title", text: project.title }),
        el("p", { class: "modal__subtitle", text: project.subtitle }),
      ]),
      el("button", { class: "modal__close", type: "button", "aria-label": "Close", text: "×" }),
    ])
  );
  content.querySelector(".modal__close").addEventListener("click", closeModal);

  [
    ["Problem", project.detail.problem],
    ["Solution", project.detail.solution],
    ["How it works", project.detail.how],
    ["Challenges", project.detail.challenges],
    ["What I learned", project.detail.learned],
  ].forEach(([label, text]) => {
    content.appendChild(
      el("div", { class: "modal__section" }, [
        el("p", { class: "modal__label", text: label }),
        el("p", { class: "modal__text", text }),
      ])
    );
  });

  // Research results block (E. coli project only)
  if (project.results) {
    const r = project.results;
    const statsGrid = el("div", { class: "results-grid" }, [
      ["Accuracy", r.accuracy],
      ["ROC-AUC", r.rocAuc],
      ["Precision", r.precision],
      ["Recall", r.recall],
    ].map(([label, value]) =>
      el("div", {}, [
        el("div", { class: "results-stat__value", text: value }),
        el("div", { class: "results-stat__label", text: label.toUpperCase() }),
      ])
    ));

    const cmTable = el("table", { class: "cm-table" }, [
      el("thead", {}, [
        el("tr", {}, [
          el("td", {}),
          el("td", { text: "PRED: SUSCEPTIBLE" }),
          el("td", { text: "PRED: RESISTANT" }),
        ]),
      ]),
      el("tbody", {}, [
        el("tr", {}, [
          el("td", { text: "ACTUAL: SUSCEPTIBLE" }),
          el("td", { class: "cm-highlight", text: r.cm.tn }),
          el("td", { text: r.cm.fp }),
        ]),
        el("tr", {}, [
          el("td", { text: "ACTUAL: RESISTANT" }),
          el("td", { text: r.cm.fn }),
          el("td", { class: "cm-highlight", text: r.cm.tp }),
        ]),
      ]),
    ]);

    content.appendChild(
      el("div", { class: "modal__section" }, [
        el("p", { class: "modal__label", text: "Results" }),
        statsGrid,
        cmTable,
        el("p", { class: "modal__text", text: r.note }),
      ])
    );
  }

  content.appendChild(
    el("div", { class: "modal__section" }, [
      el("p", { class: "modal__label", text: "Tech stack" }),
      el("div", { class: "project-card__tech" }, project.tech.map((t) => el("span", { class: "tech-tag", text: t }))),
    ])
  );

  content.appendChild(
    el("div", { class: "modal__section" }, [
      el("p", { class: "modal__label", text: "Key features" }),
      el("ul", { class: "modal__features" }, project.features.map((f) => el("li", { text: f }))),
    ])
  );

  content.appendChild(
    el("a", { class: "modal__ghlink", href: project.github, target: "_blank", rel: "noopener", text: "⌥ View on GitHub" })
  );

  document.getElementById("modal-overlay").classList.add("is-open");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("is-open");
}

/* ---------------- Highlights ---------------- */
function renderHighlights() {
  const wrap = document.getElementById("highlights-grid");
  HIGHLIGHTS.forEach((h) => {
    wrap.appendChild(
      el("div", { "data-reveal": "" }, [
        el("div", { class: "highlight-stat__value", text: h.value }),
        el("div", { class: "highlight-stat__label", text: h.label.toUpperCase() }),
      ])
    );
  });
}

/* ---------------- Timeline ---------------- */
function renderTimeline() {
  const wrap = document.getElementById("timeline");
  TIMELINE.forEach((t) => {
    wrap.appendChild(
      el("div", { class: "timeline-item", "data-reveal": "" }, [
        el("div", { class: "timeline-item__dot" }),
        el("div", { class: "timeline-item__year", text: t.year }),
        el("div", { class: "timeline-item__title", text: t.title }),
        el("div", { class: "timeline-item__detail", text: t.detail }),
      ])
    );
  });
}

/* ---------------- Contact ---------------- */
function renderContact() {
  document.getElementById("contact-email").href = `mailto:${EMAIL}`;
  document.getElementById("contact-email-text").textContent = EMAIL;
  document.getElementById("contact-linkedin").href = LINKEDIN_URL;
  document.getElementById("contact-linkedin-text").textContent = "linkedin.com/in/shaik-afsheen";
  document.getElementById("contact-github").href = GITHUB_URL;
  document.getElementById("contact-github-text").textContent = "github.com/shaikafsheen31";

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value;
    const emailVal = document.getElementById("cf-email").value;
    const message = document.getElementById("cf-message").value;
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}${emailVal ? `\n\nReply to: ${emailVal}` : ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });
}

/* ---------------- Footer ---------------- */
function renderFooter() {
  document.getElementById("footer-github").href = GITHUB_URL;
  document.getElementById("footer-linkedin").href = LINKEDIN_URL;
  document.getElementById("footer-email").href = `mailto:${EMAIL}`;
  document.getElementById("footer-copy").textContent = `© ${new Date().getFullYear()} Shaik Afsheen`;
  document.title = `${NAME} — AI/ML Engineer & Data Analyst`;
}

/* ---------------- Nav behavior ---------------- */
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  const burger = document.getElementById("nav-burger");
  const mobile = document.getElementById("nav-mobile");
  burger.addEventListener("click", () => mobile.classList.toggle("is-open"));
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobile.classList.remove("is-open"))
  );
}

/* ---------------- Modal overlay click-outside / escape ---------------- */
function initModalDismiss() {
  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ---------------- Scroll reveal ---------------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((t) => observer.observe(t));
}

/* ---------------- Init ---------------- */
renderHero();
renderAbout();
renderSkills();
renderProjects();
renderHighlights();
renderTimeline();
renderContact();
renderFooter();
initNav();
initModalDismiss();
initReveal();
