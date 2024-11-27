const hamburgerMenu = document.querySelector(".hamburger__menu")
const hamburgerIcon = document.querySelector(".hamburger__icon")
const iconClose = document.querySelector(".ri-close-large-line")
const iconOpen = document.querySelector(".ri-menu-2-line")
const menuLinks = document.querySelector(".menu__links")


// open and close hamburger icon
hamburgerIcon.addEventListener("click", function(){
    iconClose.classList.toggle("hidden")
    menuLinks.classList.toggle("open")
    iconOpen.classList.toggle("hidden")


    // show menu links
    
})