// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open');
});

// Close nav after click on small screens
navMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Counter animation when section appears
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 45));

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        el.textContent = `${target}+`;
        clearInterval(timer);
        observer.unobserve(el);
      } else {
        el.textContent = `${count}`;
      }
    }, 28);
  });
}, { threshold: 0.4 });

counters.forEach((counter) => counterObserver.observe(counter));

// Simulated loading animation
window.addEventListener('load', () => {
  document.getElementById('pageLoader')?.classList.add('hidden');
});

// AOS init
if (window.AOS) {
  AOS.init({
    once: true,
    duration: 800,
    offset: 80
  });
}

// Demo contact form behavior
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Message Sent ✓';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    form.reset();
  }, 2000);
});
