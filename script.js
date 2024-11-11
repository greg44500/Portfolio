const buttons = document.querySelectorAll('.nav-button')
const sections = document.querySelectorAll('.section')

// Variable pour suivre le z-index le plus élevé
let currentZIndex = 1;

// Fonction pour afficher la section cible et appliquer la transition
function showSection(target) {
  const section = document.getElementById(target);
  
  // Augmente le z-index et applique l'effet
  currentZIndex++;
  section.style.zIndex = currentZIndex;
  
  // Applique les classes 'animate' et 'fade-in' pour la transition
  sections.forEach(sec => sec.classList.remove('animate'));
  section.classList.add('animate');
}


// Ajoute l'événement de clic à chaque bouton
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Fonction de gestion des clics sur les boutons
function handleClick(event) {
  const target = event.currentTarget.getAttribute('data-target');
  showSection(target);
  
}

