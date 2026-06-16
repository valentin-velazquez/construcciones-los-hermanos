// =============================================
//  CONSTRUCCIONES LOS HERMANOS — main.js
// =============================================

// ---- WhatsApp numbers ----
const WA = {
  luis:  '5491145287281',
  jorge: '5491138211980'
};

// ---- Build WhatsApp URL with pre-filled message ----
function buildWAUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// ---- WA Float button toggle ----
const waFloat = document.getElementById('wa-float-btn');
const waMenu  = document.getElementById('wa-menu');

waFloat.addEventListener('click', () => {
  waMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.wa-float')) {
    waMenu.classList.remove('open');
  }
});

// ---- Form → WhatsApp ----
const form = document.getElementById('consulta-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre    = document.getElementById('f-nombre').value.trim();
  const servicio  = document.getElementById('f-servicio').value;
  const ubicacion = document.getElementById('f-ubicacion').value.trim();
  const mensaje   = document.getElementById('f-mensaje').value.trim();
  const destino   = document.querySelector('input[name="destino"]:checked').value;

  const number = WA[destino];

  const text = [
    `Hola! Me contacto desde su página web. 👷`,
    ``,
    `*Nombre:* ${nombre}`,
    `*Servicio:* ${servicio}`,
    `*Ubicación de la obra:* ${ubicacion}`,
    mensaje ? `*Mensaje:* ${mensaje}` : null,
  ].filter(Boolean).join('\n');

  window.open(buildWAUrl(number, text), '_blank');
});

// ---- Scroll animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- Stagger children ----
document.querySelectorAll('.servicios-grid .servicio-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 40}ms`;
});