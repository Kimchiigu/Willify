// Navbar
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const nav = document.querySelector('.navbar')

// Display Mobile Menu
function mobileMenu () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    nav.classList.toggle('rounded');
}

menu.addEventListener('click', mobileMenu)
const bar = document.querySelector('.navbar__toggle')

// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelectorAll('.highlight')
    const homeMenu = document.querySelectorAll('#home-page')
    const aboutMenu = document.querySelectorAll('#about-page')
    const servicesMenu = document.querySelectorAll('#services-page')
    let scrollPos = window.scrollY

    // adds 'highlights' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }   else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }   else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return 
    }   

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
NavLogo.addEventListener('click', hideMobileMenu)