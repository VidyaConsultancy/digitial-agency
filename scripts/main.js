const menuToggle = document.getElementById('menu-toggle');
const menuBar = document.getElementById("navbar-menu");

menuToggle.addEventListener('click', function(event) {
    menuBar.classList.toggle('open');
})