// js/main.js

$(document).ready(function() {
    // Efecto de desplazamiento suave en los enlaces de navegación
    $('a.nav-link').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // Animación de texto en la sección de bienvenida
    $('#bienvenida h2').hide().fadeIn(2000);
    $('#bienvenida p').hide().fadeIn(3000);
});
