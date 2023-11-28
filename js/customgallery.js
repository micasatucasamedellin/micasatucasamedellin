$(document).ready(function () {
	// Al hacer clic en un enlace de filtro
	$('.filters ul.nav-pills li a').on('click', function (e) {
	  e.preventDefault();
  
	  // Obtén el valor del filtro
	  var filterValue = $(this).attr('data-filter');
  
	  // Cambia la clase activa en los enlaces de filtro
	  $('.filters ul.nav-pills li').removeClass('active');
	  $(this).parent().addClass('active');
  
	  // Mostrar u ocultar elementos según el filtro
	  if (filterValue === '*') {
		$('.isotope-item').show(); // Muestra todos los elementos si el filtro es "All"
	  } else {
		$('.isotope-item').hide(); // Oculta todos los elementos
		$(filterValue).show(); // Muestra solo los elementos que coinciden con el filtro
	  }
	});
  });