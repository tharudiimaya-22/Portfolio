// Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Theme toggle (light/dark)
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀';
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    // scroll-to-top visibility
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 500);
  });

  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });

  // Project filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('show', match);
      });
    });
  });

  // About tabs (visual only demo swap of skill labels)
  const tabs = document.querySelectorAll('.tab');
  const skillSets = {
    technical: ['HTML','CSS','Web Design','Javascript'],
    tools: ['Git & GitHub','VS Code','Figma','Vercel'],
    soft: ['Communication','Problem Solving','Teamwork','Time Management','Adaptability','Leadership']
  };
  const skillGrid = document.querySelector('.skill-grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const set = skillSets[tab.dataset.tab] || [];
      skillGrid.innerHTML = set.map(s => `<div class="skill-chip">${s}</div>`).join('');
    });
  });

  // Contact form submit
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    e.target.reset();
    setTimeout(() => toast.classList.remove('show'), 3500);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.dataset.to;
    const suffix = counter.dataset.suffix || "";
    let count = 0;

    const updateCounter = () => {
        const increment = Math.ceil(target / 50);

        if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.textContent = count + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + suffix;
        }
    };

    updateCounter();
});
