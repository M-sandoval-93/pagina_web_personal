// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
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
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repearts on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
     
}




// probar codigo para activar y desactivar el toggle interactivo
// const toggle_interactive = document.querySelector('.toggle_interactive');

// toggle_interactive.onclick = function() {
//     this.classList.toggle('open');
// }


// dark mode implementation testing

// const btn = document.getElementById('visual-mode');
// const rootStyles = document.documentElement.style;

// btn.addEventListener('click', () => {
//     if (rootStyles.getPropertyValue('--main-color') === '#243441') {
//         rootStyles.setProperty('--main-color', '#ecf6ff');
//         rootStyles.setProperty('--secondary-main-color', '#bac5cd');
//         rootStyles.setProperty('--text-white', '#000000');
//         rootStyles.setProperty('--text-nav', '#2f6fa4');
//     } else {
//         rootStyles.setProperty('--main-color', '#243441');
//         rootStyles.setProperty('--secondary-main-color', '#2f4b61');
//         rootStyles.setProperty('--text-white', '#ffffff');
//         rootStyles.setProperty('--text-nav', '#3aa4fa');
//     }
// });



