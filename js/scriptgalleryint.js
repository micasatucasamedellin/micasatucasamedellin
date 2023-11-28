// Obtén referencias a los elementos del DOM
const modals = document.querySelectorAll('.modal');
const fullImages = document.querySelectorAll('.full-image img');

// Agrega un controlador de eventos para cada miniatura en cada modal
modals.forEach((modal, modalIndex) => {
  const thumbnails = modal.querySelectorAll('.thumbnails img');

  thumbnails.forEach((thumbnail, thumbnailIndex) => {
    thumbnail.addEventListener('click', (event) => {
      const thumbnailSrc = event.target.getAttribute('src');
      fullImages[modalIndex].setAttribute('src', thumbnailSrc);
    });
  });

  // Muestra la primera imagen al cargar la página
  fullImages[modalIndex].setAttribute('src', thumbnails[0].getAttribute('src'));
});
