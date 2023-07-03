// Variables for mobile pop-up menu
const button = document.querySelector('.nav-link');
const closeButton = document.querySelector('.close-button');
const popup = document.querySelector('.popup-menu');
const links = document.querySelectorAll('.popup-list');

// Toggle for mobile pop-up menu.
function toggle() {
  popup.classList.toggle('show-menu');
}

// Add event listeners to menu button.
button.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);

// Add event listeners to mobile menu links.
links.forEach((link) => {
  link.addEventListener('click', toggle);
});
