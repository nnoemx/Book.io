const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu-h');
const menuItems = document.querySelectorAll('.menu-h .menu-item');


hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});










const items = document.querySelectorAll('.container div');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('rotate'); 
  });
});





// Función para abrir el modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar modal si se hace clic fuera de la imagen
window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};







// Obtener el enlace de contacto y el popup
const contactLink = document.getElementById('contact-link');
const popup = document.getElementById('contact-popup');
const closePopup = document.getElementById('close-popup');

// Abrir el popup al hacer clic en el enlace de contacto
contactLink.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar que se siga el enlace
    popup.style.display = 'flex'; // Mostrar el popup
});

// Cerrar el popup al hacer clic en el botón de cerrar
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Ocultar el popup
});

// Cerrar el popup si se hace clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});











