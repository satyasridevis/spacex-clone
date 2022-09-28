const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollHideMenu);
// menu.addEventListener("scroll", scrollHideMenu);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  // document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollHideMenu() {
  overlay.classList.add("hide-overlay");
  menu.classList.add("hide-overlay");
}
