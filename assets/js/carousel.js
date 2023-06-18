// Crée une nouvelle instance de Swiper avec le sélecteur ".portfolio-details-slider"
var swiper = new Swiper('.portfolio-details-slider', {
    // Affiche un seul slide à la fois
    slidesPerView: 1,

    // Vitesse de transition des slides en millisecondes
    speed: 500,

    // Active la lecture automatique du swiper
    autoplay: {
        // Délai entre chaque transition de slide en millisecondes
        delay: 2500,

        // Empêche l'autoplay de s'arrêter lors de l'interaction de l'utilisateur
        disableOnInteraction: false
    },

    // Active la navigation avec les boutons next et prev
    navigation: {
        // Sélecteur du bouton "Suivant"
        nextEl: '.swiper-button-next',

        // Sélecteur du bouton "Précédent"
        prevEl: '.swiper-button-prev',
    },

    // Active la pagination du swiper
    pagination: {
        // Sélecteur de l'élément qui contiendra la pagination
        el: '.swiper-pagination',

        // Permet de cliquer sur les points de la pagination pour naviguer
        clickable: true,
    },

    // Active le mode "Loop" pour une transition continue des slides
    loop: true,
});
