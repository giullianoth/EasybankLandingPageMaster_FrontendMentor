import { fadeIn, fadeOut, slideDown, slideUp } from "./effects.js"

const menuIcon = document.querySelector(".j_menu_icon")
const menuOverlay = document.querySelector(".j_menu_overlay")
const mobileMenu = document.querySelector(".j_mobile_menu")

const menuIsVisible = () =>
    window.getComputedStyle(menuOverlay).display !== "none"
    && window.getComputedStyle(mobileMenu).display !== "none"

const iconHamburger = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"11\"><g fill=\"#2D314D\" fill-rule=\"evenodd\"><path d=\"M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z\"/></g></svg>"

const iconClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"19\"><g fill=\"#2D314D\" fill-rule=\"evenodd\"><path d=\"M.868.661l16.97 16.97-.706.708L.162 1.369z\"/><path d=\"M.161 17.632L17.131.662l.708.706-16.97 16.97z\"/></g></svg>"

export function ToggleMenu() {
    menuIcon.addEventListener("click", () => {
        if (!menuIsVisible()) {
            fadeIn(menuOverlay, "flex")
            slideDown(mobileMenu, "flex")
            menuIcon.innerHTML = iconClose
        } else {
            fadeOut(menuOverlay)
            slideUp(mobileMenu)
            menuIcon.innerHTML = iconHamburger
        }
    })

    menuOverlay.addEventListener("click", ({ target }) => {
        if (target.classList.contains("j_menu_overlay") && menuIsVisible()) {
            slideUp(mobileMenu)
            fadeOut(menuOverlay)
            menuIcon.innerHTML = iconHamburger
        }
    })
}