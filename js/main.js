(() => {
  const PROJECT_GROUPS = [
    { en: 'Professional & Academic', fr: 'Professionnel & Académique', items: [
    { img: 'xss-automation-framework', en: ['XSS Automation Framework', 'Internship · Year 4', 'Automated XSS vulnerability detection tool with a scan dashboard and history — runs DAST scans and generates PDF reports.'], fr: ["Framework d'Automatisation XSS", 'Stage · Année 4', 'Outil de détection automatisée des vulnérabilités XSS avec tableau de bord et historique des scans — exécute des analyses DAST et génère des rapports PDF.'], tech: 'Playwright, XSStrike, DalFox', alt: 'XSS Automation Framework dashboard screenshot' },
    { img: 'monitoring-grafana', en: ['Systems Monitoring Architecture', 'PFA · Year 4', 'Set up system monitoring with Node Exporter, Prometheus and Grafana (memory, network traffic, disk space), as part of a defensive security approach.'], fr: ['Architecture de Supervision des Systèmes', 'PFA · Année 4', "Mise en place d'une supervision des systèmes avec Node Exporter, Prometheus et Grafana (mémoire, trafic réseau, espace disque), dans une approche de sécurité défensive."], tech: 'Prometheus, Grafana, Node Exporter', alt: 'Systems monitoring Grafana dashboard screenshot' },
    { img: 'phishing-simulation-lab', en: ['Phishing Simulation Lab', 'Academic · Year 4', 'Cloned login page built for a phishing simulation exercise, in an educational security-awareness context.'], fr: ['Simulation de Phishing', 'Académique · Année 4', "Réplique d'une page de connexion utilisée pour un exercice de simulation de phishing, dans un cadre pédagogique de sensibilisation à la sécurité."], alt: 'Phishing awareness simulation login page screenshot' },
    { img: 'after-sales-management', en: ['After-Sales Service Management', 'PFA · Year 3', 'Design and development of an after-sales service management application.'], fr: ['Gestion du Service Après-Vente', 'PFA · Année 3', "Conception et développement d'une application de gestion du service après-vente."], tech: 'Python, Django', alt: 'After-Sales Service Management app screenshot' }
    ] },
    { en: 'Personal', fr: 'Personnel', items: [
    { img: 'solo-leveling-system', en: ['Solo Leveling System', 'personal', 'A real-life RPG "System" inspired by Solo Leveling: daily quests, XP, levels, stats and ranks for habits, learning, fitness and faith, with adaptive challenge recommendations, friends and leaderboards.'], fr: ['Solo Leveling System', 'personnel', "Un « System » RPG de la vie réelle inspiré de Solo Leveling : quêtes quotidiennes, XP, niveaux, statistiques et rangs pour les habitudes, l'apprentissage, le sport et la foi, avec recommandations de défis adaptatives, amis et classements."], tech: 'Next.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vercel', alt: 'Solo Leveling System status dashboard screenshot' },
    { img: 'money-manager', en: ['Money Manager', 'personal', 'A local-first personal finance desktop app for Windows: accounts, budgets, bank-statement import, cash-flow forecast, net worth, PDF reports and an optional AI advisor, with a Windows Hello lock and password-protected backups. Data stays in a local SQLite database.'], fr: ['Money Manager', 'personnel', "Application de bureau de gestion financière personnelle pour Windows, local-first : comptes, budgets, import de relevés bancaires, prévision de trésorerie, patrimoine net, rapports PDF et conseiller IA optionnel, avec verrouillage Windows Hello et sauvegardes protégées par mot de passe. Les données restent dans une base SQLite locale."], tech: 'Python, PySide6, SQLite', alt: 'Money Manager dashboard screenshot' },
    { img: 'reddit-clone', en: ['Reddit Clone', 'personal', 'A personal clone of Reddit built to practice front-end architecture and state management.'], fr: ['Reddit Clone', 'personnel', "Un clone personnel de Reddit conçu pour pratiquer l'architecture front-end et la gestion d'état."], tech: 'React', alt: 'Reddit Clone app screenshot' },
    { img: 'escape-the-missile', en: ['Escape the Missile', 'personal', 'A personal game project built from scratch.'], fr: ['Escape the Missile', 'personnel', 'Un jeu personnel développé de zéro.'], tech: 'Java', alt: 'Escape the Missile game screenshot' },
    { img: 'task-manager', en: ['Task Manager & Reminder', 'personal', 'A desktop app for tracking tasks with due dates and reminders, with active and completed-history views.'], fr: ['Gestionnaire de Tâches & Rappels', 'personnel', "Une application de bureau pour suivre les tâches avec dates d'échéance et rappels, avec vues des tâches actives et de l'historique."], tech: 'Python', alt: 'Task Manager & Reminder app screenshot' },
    { img: 'calisthenics-coach', en: ['Calisthenics Coach', 'personal', 'A workout tracking app that generates daily calisthenics sessions, tracks streaks and weekly progress, and advances training phases over time.'], fr: ['Calisthenics Coach', 'personnel', "Application de suivi d'entraînement qui génère des séances de callisthénie quotidiennes, suit les séries et la progression hebdomadaire, et fait évoluer les phases d'entraînement dans le temps."], tech: 'React, Next.js', alt: 'Calisthenics Coach app screenshot' },
    { img: 'football-prediction-platform', en: ['Football Prediction Platform', 'personal', 'A match-forecasting dashboard that imports historical football data, builds features, and serves an Elo-based model to predict upcoming match outcomes.'], fr: ['Football Prediction Platform', 'personnel', 'Tableau de bord de pronostics footballistiques qui importe des données historiques, construit des features et expose un modèle (Elo) pour prédire les résultats des matchs à venir.'], tech: 'Python, FastAPI', alt: 'Football Prediction Platform dashboard screenshot' },
    { img: 'watch-tracker', en: ['Watch Tracker', 'personal', 'A local-first desktop app for tracking movies, TV series, and anime — watch status, personal ratings, and history, all stored in a local SQLite database.'], fr: ['Watch Tracker', 'personnel', 'Application de bureau local-first pour suivre films, séries et anime — statut de visionnage, notes personnelles et historique, le tout stocké dans une base SQLite locale.'], tech: 'Electron, React, TypeScript, SQLite', alt: 'Watch Tracker dashboard screenshot' }
    ] }
  ];
  const PROJECTS = PROJECT_GROUPS.flatMap((g) => g.items);

  // Ordered by importance: groups first, then certificates within each group.
  const CERT_GROUPS = [
    { en: 'Cloud & Cybersecurity', fr: 'Cloud & Cybersécurité', certs: [
      ['oracle-oci-foundations.png', 'Oracle Cloud Infrastructure Certified Foundations Associate', 'Oracle — Sep 2026 · Verified'],
      ['google-foundations-cybersecurity.jpg', 'Foundations of Cybersecurity', 'Google — Oct 2026'],
      ['kasbah-crisis-exercise.png', 'Exercice KASBAH — Gestion de Crise Cyber', 'EMSI & CyberSup — Sep 2026'],
      ['linux-rh124.jpg', 'Administration Linux avec Red Hat RH124', 'Honoris — May 2026'],
      ['unix-workbench.jpg', 'The Unix Workbench', 'Johns Hopkins University — Dec 2024'],
      ['blockchain-architecture.jpg', 'Fundamentals of Blockchain Architecture', 'LearnQuest — Apr 2026']
    ] },
    { en: 'Software Engineering & Data', fr: 'Génie Logiciel & Data', certs: [
      ['python-data-science.jpg', 'Python for Data Science, AI & Development', 'IBM — Nov 2025'],
      ['software-engineering.jpg', 'Software Engineering: Software Design and Project Management', 'HKUST — Apr 2025'],
      ['cpp-oop.jpg', 'Introduction à la programmation orientée objet (C++)', 'EPFL — Nov 2024'],
      ['react-native.jpg', 'React Native', 'Meta — Dec 2025'],
      ['react-basics.jpg', 'React Basics', 'Meta — Dec 2025'],
      ['interactivity-javascript.jpg', 'Interactivity with JavaScript', 'University of Michigan — Dec 2024']
    ] },
    { en: 'Project Management', fr: 'Gestion de Projet', certs: [
      ['google-project-management.jpg', 'Google Project Management · Professional Cert.', 'Google — Feb 2026 · 7 courses'],
      ['foundations-project-management.jpg', 'Foundations of Project Management', 'Google — Nov 2025'],
      ['project-initiation.jpg', 'Project Initiation: Starting a Successful Project', 'Google — Dec 2025'],
      ['project-planning.jpg', 'Project Planning: Putting It All Together', 'Google — Jan 2026'],
      ['project-execution.jpg', 'Project Execution: Running the Project', 'Google — Jan 2026'],
      ['agile-project-management.jpg', 'Agile Project Management', 'Google — Jan 2026'],
      ['pm-capstone.jpg', 'Capstone: Applying Project Management in the Real World', 'Google — Feb 2026']
    ] },
    { en: 'Other', fr: 'Autres', certs: [
      ['accelerate-job-search-ai.jpg', 'Accelerate Your Job Search with AI', 'Google — Feb 2026'],
      ['social-media-management.jpg', 'Social Media Management', 'Meta — Jun 2026'],
      ['recherche-documentaire.jpg', 'La recherche documentaire', 'École Polytechnique — Apr 2025']
    ] }
  ];
  const CERTS = CERT_GROUPS.flatMap((g) => g.certs);

  const T = {
    en: {
      close: 'Close', tech: 'Tech:', send: 'Send Message', sending: 'Sending…',
      sent: "Message sent — thank you! I'll get back to you soon.",
      error: 'Something went wrong sending your message — please email benhachimiwalid2@gmail.com directly.',
      roles: ['Cybersecurity Engineering Student', 'Application Security', 'DevSecOps'],
      lead: "I'm a computer science engineering student specializing in cybersecurity and penetration testing, focused on identifying vulnerabilities and building resilient, secure systems."
    },
    fr: {
      close: 'Fermer', tech: 'Technologies :', send: 'Envoyer le Message', sending: 'Envoi…',
      sent: 'Message envoyé — merci ! Je vous répondrai bientôt.',
      error: "Une erreur s'est produite — écrivez-moi directement à benhachimiwalid2@gmail.com.",
      roles: ['Élève ingénieur en cybersécurité', 'Sécurité applicative', 'DevSecOps'],
      lead: "Je suis élève ingénieur en informatique, spécialisé en cybersécurité et tests d'intrusion, avec pour objectif d'identifier les vulnérabilités et de construire des systèmes résilients et sécurisés."
    }
  };

  const EASE = 'cubic-bezier(.2,.7,.1,1)';
  const GLYPHS = '!<>-_/[]{}=+*^?#01$%&';
  const root = document.documentElement;
  const $ = (s) => document.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const anim = !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const fine = !!(window.matchMedia && matchMedia('(pointer: fine)').matches);

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'text') el.textContent = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    kids.forEach((c) => c && el.append(c));
    return el;
  }

  const state = { lang: store.get('wb-portfolio-lang') === 'fr' ? 'fr' : 'en', open: null, sel: null, opener: null };
  let rgb = '166,240,74';
  let mx = -999, my = -999;

  // ---------- text scramble ----------
  function scramble(el, final, dur = 900) {
    if (!el) return;
    const n = final.length, t0 = performance.now();
    const at = Array.from({ length: n }, (_, i) => (i / n) * dur * 0.65 + Math.random() * dur * 0.35);
    const id = (el._scr = (el._scr || 0) + 1);
    const f = (now) => {
      if (el._scr !== id) return;
      const e = now - t0;
      let out = '';
      for (let i = 0; i < n; i++) {
        const c = final[i];
        out += (c === ' ' || e >= at[i]) ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      if (e < dur) requestAnimationFrame(f); else el.textContent = final;
    };
    requestAnimationFrame(f);
  }
  const setText = (el, v) => { el._scr = (el._scr || 0) + 1; el.textContent = v; };

  // ---------- projects ----------
  const projectList = $('#projectList');
  const preview = $('#preview'), previewImg = $('#previewImg');
  const groupStarts = new Map();
  PROJECT_GROUPS.reduce((start, g) => { groupStarts.set(start, g); return start + g.items.length; }, 0);
  const projectGroupTitles = [];
  const projectEls = PROJECTS.map((p, i) => {
    if (groupStarts.has(i)) {
      const g = groupStarts.get(i), name = h('span');
      projectGroupTitles.push({ name, g });
      projectList.append(h('h3', { class: 'project-group', 'data-reveal': '' }, name,
        h('span', { class: 'project-group-count', text: String(g.items.length).padStart(2, '0') })));
    }
    const num = String(i + 1).padStart(2, '0');
    const src = 'assets/images/' + p.img + '.png';
    const title = h('span', { class: 'project-title' });
    const tag = h('span');
    const btn = h('button', { type: 'button', class: 'project-toggle', 'data-cursor': '', 'aria-expanded': 'false', 'aria-controls': 'panel-' + num },
      h('span', { class: 'project-num', text: num }),
      title,
      h('span', { class: 'project-meta' }, tag, h('span', { class: 'project-plus', 'aria-hidden': 'true', text: '+' })));
    const desc = h('p', { class: 'project-desc' });
    const tech = p.tech ? h('p', { class: 'project-tech' }) : null;
    const panel = h('div', { class: 'project-panel', id: 'panel-' + num, hidden: '' },
      h('figure', { class: 'project-shot' }, h('img', { src, alt: p.alt, loading: 'lazy' })),
      h('div', { class: 'project-info' }, desc, tech));
    const el = h('div', { class: 'project', 'data-reveal': '' }, btn, panel);
    btn.addEventListener('click', () => toggleProject(i));
    btn.addEventListener('mouseenter', () => {
      if (!fine || state.open === i) { hidePreview(); return; }
      if (previewImg.getAttribute('src') !== src) previewImg.setAttribute('src', src);
      preview.classList.add('is-visible');
    });
    projectList.append(el);
    return { el, btn, panel, title, tag, desc, tech, p };
  });
  $('#projectCount').textContent = '(' + PROJECTS.length + ')';
  function hidePreview() { preview.classList.remove('is-visible'); }
  projectList.addEventListener('mouseleave', hidePreview);

  function toggleProject(i) {
    state.open = state.open === i ? null : i;
    projectEls.forEach((it, j) => {
      const o = state.open === j;
      it.el.classList.toggle('is-open', o);
      it.btn.setAttribute('aria-expanded', String(o));
      it.panel.hidden = !o;
    });
    hidePreview();
    if (state.open != null && anim) {
      projectEls[state.open].panel.animate(
        [{ opacity: 0, transform: 'translateY(-12px)', clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0 0 0 0)' }],
        { duration: 700, easing: EASE });
    }
  }

  // ---------- certificates ----------
  const ribbon = $('#ribbon');
  const certGrid = $('#certGrid');
  const certImg = (f) => 'assets/certificates/' + f;
  const pad = (n) => String(n).padStart(2, '0');
  [0, 1].forEach((copy) => {
    CERTS.forEach(([f, title, meta], i) => {
      const card = h('button', { type: 'button', class: 'cert-card', 'data-cursor': '', 'aria-label': title },
        h('span', { class: 'cert-thumb' }, h('img', { src: certImg(f), alt: '', loading: 'lazy' })),
        h('span', { class: 'cert-title', text: title }),
        h('span', { class: 'cert-meta', text: meta }));
      if (copy) { card.setAttribute('aria-hidden', 'true'); card.tabIndex = -1; }
      card.addEventListener('click', () => openCerts(i, card));
      ribbon.append(card);
    });
  });
  let certIndex = 0;
  const groupTitles = CERT_GROUPS.map((g) => {
    const name = h('span');
    const grid = h('div', { class: 'cert-grid' });
    g.certs.forEach(([f, title, meta]) => {
      const i = certIndex++;
      const tile = h('button', { type: 'button', class: 'cert-tile' },
        h('span', { class: 'cert-tile-thumb' }, h('img', { src: certImg(f), alt: title, loading: 'lazy' })),
        h('span', { class: 'cert-tile-title', text: title }),
        h('span', { class: 'cert-tile-meta', text: meta }));
      tile.addEventListener('click', () => selectCert(i));
      grid.append(tile);
    });
    certGrid.append(h('section', { class: 'cert-group' },
      h('h4', { class: 'cert-group-title' }, name, h('span', { class: 'cert-group-count', text: pad(g.certs.length) })),
      grid));
    return { name, g };
  });

  const certModal = $('#certModal'), certViewer = $('#certViewer'), certPos = $('#certPos');
  function renderCert() {
    const s = state.sel;
    certViewer.hidden = s == null;
    certGrid.hidden = s != null;
    certPos.textContent = s == null ? String(CERTS.length) : pad(s + 1) + ' / ' + CERTS.length;
    if (s != null) {
      const [f, title, meta] = CERTS[s];
      $('#certViewerImg').src = certImg(f);
      $('#certViewerImg').alt = title;
      $('#certViewerTitle').textContent = title;
      $('#certViewerMeta').textContent = meta;
    }
  }
  function openCerts(i, opener) {
    state.sel = typeof i === 'number' ? i : null;
    state.opener = opener || document.activeElement;
    renderCert();
    certModal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#certClose').focus();
  }
  function closeCerts() {
    certModal.hidden = true;
    state.sel = null;
    document.body.style.overflow = '';
    if (state.opener && state.opener.focus) state.opener.focus();
  }
  function selectCert(i) { state.sel = i; renderCert(); certModal.querySelector('.dialog').scrollTop = 0; }
  function stepCert(d) { state.sel = (state.sel + d + CERTS.length) % CERTS.length; renderCert(); }
  $('#certOpenBtn').addEventListener('click', (e) => openCerts(null, e.currentTarget));
  $('#certClose').addEventListener('click', closeCerts);
  $('#certBack').addEventListener('click', () => { state.sel = null; renderCert(); });
  $('#certPrev').addEventListener('click', () => stepCert(-1));
  $('#certNext').addEventListener('click', () => stepCert(1));
  certModal.addEventListener('click', (e) => { if (e.target === certModal) closeCerts(); });
  addEventListener('keydown', (e) => {
    if (certModal.hidden) return;
    if (e.key === 'Escape') closeCerts();
    if (state.sel != null && e.key === 'ArrowRight') stepCert(1);
    if (state.sel != null && e.key === 'ArrowLeft') stepCert(-1);
  });

  // ---------- language ----------
  const roleEl = $('#role');
  let roleIdx = 0;
  function renderLead() {
    const lead = $('#lead');
    lead.textContent = '';
    T[state.lang].lead.split(' ').forEach((w) => lead.append(h('span', { 'data-w': '', text: w + ' ' })));
  }
  function applyLang() {
    const lang = state.lang, t = T[lang];
    $$('.i18n').forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.textContent;
      const v = lang === 'fr' ? el.dataset.fr : el.dataset.en;
      if (v != null && el.textContent !== v) setText(el, v);
    });
    root.lang = lang;
    $('#langBtn').textContent = lang === 'fr' ? 'EN' : 'FR';
    $('#certClose').setAttribute('aria-label', t.close);
    $('#submitLabel').textContent = t.send;
    projectEls.forEach(({ title, tag, desc, tech, p }) => {
      const [ti, ta, de] = p[lang];
      title.textContent = ti; tag.textContent = ta; desc.textContent = de;
      if (tech) tech.textContent = t.tech + ' ' + p.tech;
    });
    groupTitles.forEach(({ name, g }) => { name.textContent = g[lang]; });
    projectGroupTitles.forEach(({ name, g }) => { name.textContent = g[lang]; });
    roleIdx = 0;
    setText(roleEl, t.roles[0]);
    renderLead();
  }
  $('#langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'fr' ? 'en' : 'fr';
    store.set('wb-portfolio-lang', state.lang);
    applyLang();
    tick();
  });

  // ---------- theme ----------
  function readAccent() {
    const hex = (getComputedStyle(root).getPropertyValue('--accent-hex') || '#a6f04a').trim().replace('#', '');
    rgb = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',');
  }
  $('#themeBtn').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    store.set('wb-portfolio-theme', next);
    root.setAttribute('data-theme', next);
    readAccent();
  });

  // ---------- loader + intro ----------
  function loader() {
    const o = $('#loader');
    if (!anim) { o.remove(); return 0; }
    const c = o.querySelector('[data-l="c"]'), b = o.querySelector('[data-l="b"]');
    scramble(o.querySelector('[data-l="n"]'), 'Walid Benhachimi', 1200);
    scramble(o.querySelector('[data-l="a"]'), 'Cybersecurity · Pentest · DevSecOps', 1400);
    const D = 1600, t0 = performance.now();
    const f = (now) => {
      const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3);
      c.textContent = String(Math.round(e * 100)).padStart(3, '0');
      b.style.transform = `scaleX(${e})`;
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
    const out = o.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 1000, delay: D + 150, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
    out.onfinish = () => o.remove();
    return D + 450;
  }

  function intro(L) {
    if (!anim) return;
    $$('[data-ch]').forEach((el, i) =>
      el.animate([{ transform: 'translateY(115%) rotate(6deg)' }, { transform: 'none' }], { duration: 1200, delay: L + i * 45, easing: EASE, fill: 'backwards' }));
    $$('[data-intro="rule"]').forEach((el) =>
      el.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1600, delay: L + 500, easing: EASE, fill: 'backwards' }));
    $$('[data-intro="fade"]').forEach((el, i) =>
      el.animate([{ opacity: 0, transform: 'translateY(20px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 1100, delay: L + 700 + i * 120, easing: EASE, fill: 'backwards' }));
    const plate = $('[data-intro="plate"]');
    if (plate) plate.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 1500, delay: L + 250, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'backwards' });
    $('#heroImg').animate([{ transform: 'scale(1.45)' }, { transform: 'scale(1.12)' }], { duration: 2400, delay: L + 250, easing: EASE, fill: 'backwards' });
    setTimeout(() => scramble(roleEl, T[state.lang].roles[0], 1000), L + 700);
  }

  function rotateRole() {
    const roles = T[state.lang].roles;
    roleIdx = (roleIdx + 1) % roles.length;
    scramble(roleEl, roles[roleIdx], 800);
    setTimeout(rotateRole, 2800);
  }

  // ---------- scroll reveal ----------
  function reveal() {
    if (!anim || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      el.style.opacity = '';
      if (el.hasAttribute('data-scramble')) { scramble(el, el.textContent, 1100); return; }
      el.animate([{ opacity: 0, transform: 'translateY(48px)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 1200, delay: +el.getAttribute('data-reveal') || 0, easing: EASE, fill: 'backwards' });
    }), { rootMargin: '0px 0px -10% 0px' });
    $$('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.9) return;
      el.style.opacity = '0';
      io.observe(el);
    });
    $$('[data-scramble]').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.9) return;
      io.observe(el);
    });
  }

  // ---------- particle network background ----------
  function background() {
    const c = $('#bgCanvas');
    if (!anim) return;
    const ctx = c.getContext('2d');
    const dpr = Math.min(2, devicePixelRatio || 1);
    let W = 0, H = 0;
    const resize = () => {
      W = innerWidth; H = innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      c.style.width = W + 'px'; c.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener('resize', resize);
    const N = W < 700 ? 40 : 95;
    const pts = [];
    for (let i = 0; i < N; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 });
    const R = 140, MR = 220;
    const loop = () => {
      requestAnimationFrame(loop);
      if (document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      const fade = Math.max(0.28, 1 - scrollY / (H * 1.1));
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < MR && d > 0.1) { const f = (MR - d) / MR; p.x += dx / d * f * 1.6; p.y += dy / d * f * 1.6; }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < N; i++) {
        const a = pts[i];
        for (let j = i + 1; j < N; j++) {
          const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - Math.sqrt(d2) / R) * 0.32 * fade})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my);
        if (dm < MR + 60) {
          ctx.strokeStyle = `rgba(${rgb},${(1 - dm / (MR + 60)) * 0.7 * fade})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${rgb},${0.75 * fade})`;
        ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
      }
    };
    loop();
  }

  // ---------- cursor, hero spotlight, project preview ----------
  function cursor() {
    const ring = $('#cursorRing'), dot = $('#cursorDot'), spot = $('#heroSpot');
    let rx = innerWidth / 2, ry = innerHeight / 2, sx = rx, sy = ry, px = 0, py = 0, big = false;
    addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (!fine) return;
      ring.style.opacity = '1'; dot.style.opacity = '1';
      dot.style.transform = `translate(${mx}px,${my}px)`;
      const hit = e.target && e.target.closest ? e.target.closest('a,button,input,textarea,[data-cursor]') : null;
      if (!!hit !== big) { big = !!hit; ring.classList.toggle('is-big', big); }
    });
    const loop = () => {
      requestAnimationFrame(loop);
      if (mx < -500) return;
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (fine) ring.style.transform = `translate(${rx}px,${ry}px)`;
      if (anim) { sx += (mx - sx) * 0.06; sy += (my + scrollY - sy) * 0.06; spot.style.transform = `translate(${sx}px,${sy}px)`; }
      if (fine) { px += (mx + 28 - px) * 0.14; py += (my - 110 - py) * 0.14; preview.style.transform = `translate(${px}px,${py}px)`; }
    };
    loop();
  }

  // ---------- marquee + ribbon ----------
  function marquee() {
    const A = $('#marqA'), B = $('#marqB');
    if (!anim) return;
    let xa = 0, xb = -B.scrollWidth / 2, last = scrollY, v = 0;
    const loop = () => {
      requestAnimationFrame(loop);
      const d = scrollY - last; last = scrollY;
      v += (Math.min(40, Math.abs(d)) * 0.35 - v) * 0.08;
      const sp = 0.7 + v, wa = A.scrollWidth / 2, wb = B.scrollWidth / 2;
      xa -= sp; xb += sp;
      if (-xa >= wa) xa += wa;
      if (xb >= 0) xb -= wb;
      A.style.transform = `translateX(${xa}px) skewX(${-v * 0.6}deg)`;
      B.style.transform = `translateX(${xb}px) skewX(${v * 0.6}deg)`;
    };
    loop();
  }

  function ribbonMotion() {
    if (!anim) return;
    const m = ribbon.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 75000, iterations: Infinity });
    const wrap = $('#ribbonWrap');
    wrap.addEventListener('mouseenter', () => m.pause());
    wrap.addEventListener('mouseleave', () => m.play());
    wrap.addEventListener('focusin', () => m.pause());
    wrap.addEventListener('focusout', () => m.play());
  }

  // ---------- small interactions ----------
  function magnetic() {
    if (!fine || !anim) return;
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.45}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  function spots() {
    $$('[data-spot]').forEach((el) => el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }));
  }

  $('#heroName').addEventListener('mouseover', (e) => {
    const el = e.target;
    if (!anim || !el.hasAttribute || !el.hasAttribute('data-ch') || el._busy) return;
    const ch = el.textContent;
    el._busy = true;
    // Glyphs are wider than most letters: pin the width so the name never reflows.
    el.style.width = el.getBoundingClientRect().width + 'px';
    el.style.textAlign = 'center';
    let n = 0;
    const iv = setInterval(() => {
      el.textContent = ++n > 6 ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      if (n > 6) { clearInterval(iv); el.style.width = ''; el.style.textAlign = ''; el._busy = false; }
    }, 45);
  });

  // ---------- scroll-driven state ----------
  const progress = $('#progress'), heroImg = $('#heroImg');
  let currentSec = null;
  function tick() {
    const y = scrollY, vh = innerHeight, max = root.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    if (anim && y < vh * 1.3) {
      heroImg.style.transform = `scale(1.12) translateY(${(y * -0.08).toFixed(1)}px)`;
    }
    const lead = $('#lead');
    const r = lead.getBoundingClientRect(), words = lead.querySelectorAll('[data-w]');
    const prog = anim ? Math.max(0, Math.min(1, (vh * 0.8 - r.top) / (r.height + vh * 0.25))) : 1;
    const lit = Math.round(prog * words.length);
    words.forEach((w, i) => { w.style.opacity = i < lit ? '1' : '0.16'; });
    $$('[data-track]').forEach((t) => {
      const tr = t.getBoundingClientRect();
      t.querySelector('[data-fill]').style.transform = `scaleY(${anim ? Math.max(0, Math.min(1, (vh * 0.7 - tr.top) / tr.height)) : 1})`;
    });
    let cur = null;
    $$('section[data-sec]').forEach((s) => { if (s.getBoundingClientRect().top < 160) cur = s.dataset.sec; });
    if (cur !== currentSec) {
      currentSec = cur;
      $$('[data-nav]').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === cur));
    }
  }
  let raf = null;
  const onScroll = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = null; tick(); }); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  // ---------- contact form ----------
  const form = $('#contactForm'), submitBtn = $('#submitBtn'), status = $('#formStatus');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = T[state.lang];
    submitBtn.disabled = true;
    $('#submitLabel').textContent = t.sending;
    status.hidden = true;
    let ok = false;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      ok = res.ok;
    } catch (err) { ok = false; }
    if (ok) form.reset();
    status.textContent = ok ? T[state.lang].sent : T[state.lang].error;
    status.hidden = false;
    submitBtn.disabled = false;
    $('#submitLabel').textContent = T[state.lang].send;
  });

  $('#year').textContent = new Date().getFullYear();
  $('#toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: anim ? 'smooth' : 'auto' }));

  // ---------- boot ----------
  readAccent();
  applyLang();
  const L = loader();
  intro(L);
  reveal();
  background();
  cursor();
  marquee();
  ribbonMotion();
  magnetic();
  spots();
  if (anim) {
    setTimeout(rotateRole, L + 2600);
    $('#caret').animate([{ opacity: 1 }, { opacity: 1, offset: .5 }, { opacity: 0, offset: .51 }, { opacity: 0 }], { duration: 1000, iterations: Infinity });
  }
  tick();
})();
