const hamburgerMenu = document.querySelector(".hamburger__menu")
const hamburgerIcon = document.querySelector(".hamburger__icon")
const iconClose = document.querySelector(".ri-close-large-line")
const iconOpen = document.querySelector(".ri-menu-2-line")
const menuLinks = document.querySelector(".menu__links")
const menuLink = document.querySelectorAll(".menu__link")


// open and close hamburger icon
hamburgerIcon.addEventListener("click", function(){
    iconClose.classList.toggle("hidden")
    menuLinks.classList.toggle("open")
    iconOpen.classList.toggle("hidden")

})

// remove hamburger menu when a menu link is clicked
menuLink.forEach( menuElements =>{
    menuElements.addEventListener("click", ()=>{
        // remove hamburger nav
        menuLinks.classList.remove("open")
        // return close icon back to original state
        iconClose.classList.toggle("hidden")
        iconOpen.classList.toggle("hidden")
    })
})