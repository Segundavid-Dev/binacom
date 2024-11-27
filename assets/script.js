const hamburgerMenu = document.querySelector(".hamburger__menu")
const hamburgerIcon = document.querySelector(".hamburger__icon")
const iconClose = document.querySelector(".ri-close-large-line")
const iconOpen = document.querySelector(".ri-menu-2-line")


// open and close hamburger icon
hamburgerIcon.addEventListener("click", function(){
    iconClose.classList.toggle("hidden")
    iconOpen.classList.toggle("hidden")
})
