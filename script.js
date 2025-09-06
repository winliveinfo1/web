AOS.init();

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? 'Modo Oscuro' : 'Modo Claro';
});

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Función para mostrar la fecha actual en el pie de página
const footer = document.querySelector('footer');
const dateSpan = document.createElement('span');
const today = new Date();
dateSpan.textContent = ` | Última actualización: ${today.toLocaleDateString()}`;
footer.appendChild(dateSpan);

// Función para desplazarse a una sección específica
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
