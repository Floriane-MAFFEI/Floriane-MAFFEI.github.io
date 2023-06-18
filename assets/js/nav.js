const mobileNavToggle = document.querySelector('.mobile-nav-toggle'); // Sélectionne le bouton de navigation mobile
const header = document.querySelector('#header'); // Sélectionne l'élément header

mobileNavToggle.addEventListener('click', () => { // Ajoute un écouteur d'événement pour le clic sur le bouton de navigation mobile
    header.classList.toggle('mobile-nav-active'); // Ajoute ou supprime la classe 'mobile-nav-active' à l'élément
    // header lors du clic
});