// js/animations.js

// Animación del título principal
gsap.from("#main-title", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power3.out"
});

// Animación de subtítulos y otros elementos de entrada
gsap.from(".subtitle", {
    duration: 1.8,
    opacity: 0,
    y: -30,
    delay: 0.5,
    ease: "power3.out"
});

// Animación de entrada en los elementos de la barra de navegación
gsap.from(".navbar ul li", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    ease: "power3.out"
});

// Animación para la sección de bienvenida
gsap.from("#bienvenida h2", {
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: "power3.out"
});

gsap.from("#bienvenida p", {
    duration: 1.5,
    opacity: 0,
    x: 50,
    delay: 0.5,
    ease: "power3.out"
});

// Animación para la sección de contacto
gsap.from("#contacto h2", {
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 0.3
});

gsap.from("#contacto p", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    delay: 0.6,
    ease: "power3.out"
});

// Animación para el pie de página
gsap.from("footer p", {
    duration: 1.2,
    opacity: 0,
    y: 20,
    delay: 1,
    ease: "power3.out"
});
