/* ------------------------------------- MENU SHOW AND HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ------------------------------------- MENU SHOW */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ------------------------------------- MENU HIDDEN */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ------------------------------------- REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ------------------------------------- ACCORDION SKILLS */

const menuContent = document.getElementsByClassName('menu_content'),
      menuHeader = document.querySelectorAll('.menu_header')

function toggleMenu(){
    let itemClass = this.parentNode.className

    for(i = 0; i < menuContent.length; i++) {
        menuContent[i].className = 'menu_content menu_close'
    }
    if(itemClass === 'menu_content menu_close') {
        this.parentNode.className = 'menu_content menu_open'
    }
}

menuHeader.forEach((el) => {
    el.addEventListener('click', toggleMenu)
})

/* ------------------------------------- DARK AND LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ------------------------------------- SCROLL */



window.addEventListener('scroll', reveal);

function reveal(){
      const reveals = document.querySelectorAll('.menu, .contact, .slide, .fotos');

      for(let i = 0; i < reveals.length; i++){

        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if(revealtop < (windowheight - revealpoint)){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

/* ------------------------------------- SLIDE */

let swiperTestimonial = new Swiper(".slide_container", {
    loop:true,
    grabCursor: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 1,
        }
    }
});
