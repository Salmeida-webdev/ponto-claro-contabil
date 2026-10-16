const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const primaryNav = document.querySelector<HTMLElement>('#primary-nav');

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
    menuButton.querySelector('.sr-only')!.textContent = isOpen ? 'Abrir menu' : 'Fechar menu';
  });

  primaryNav.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
      menuButton.querySelector('.sr-only')!.textContent = 'Abrir menu';
    }
  });
}

const contactForm = document.querySelector<HTMLFormElement>('#contact-form');
const formStatus = document.querySelector<HTMLElement>('#form-status');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const topic = String(formData.get('topic') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const lines = [
    'Olá! Gostaria de conversar com a Ponto Claro Contábil.',
    '',
    `Nome: ${name}`,
    email ? `E-mail: ${email}` : '',
    `Assunto: ${topic}`,
    `Mensagem: ${message}`,
  ].filter(Boolean);
  const url = `https://wa.me/5583998739712?text=${encodeURIComponent(lines.join('\n'))}`;
  if (formStatus) formStatus.textContent = 'Abrindo o WhatsApp para você revisar e enviar a mensagem.';
  window.open(url, '_blank', 'noopener,noreferrer');
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll<HTMLElement>('main > section')]
    .filter((section) => section.getBoundingClientRect().top > window.innerHeight * 0.75);

  if (sections.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      revealObserver.observe(section);
    });
  }
}
