// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // menuIcon.classList.remove('fas fa-bars');
    // menuIcon.classList.toggle('fa-solid fa-xmark');
    // this.classList.remove('fas fa-bars')
    // menuIcon.classList.remove('fas fa-bars');
    // console.log(menuIcon.className);
}



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });



    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}




// probar codigo para activar y desactivar el toggle interactivo
// const toggle_interactive = document.querySelector('.toggle_interactive');

// toggle_interactive.onclick = function() {
//     this.classList.toggle('open');
// }