var navbarNav = document.getElementById("navbar-nav");
var bodyWrap = document.getElementById("bodyWrap");
var mainContent = document.getElementById("mainContent");
var navbar = document.getElementById("navbar");

function openNav() {
  navbarNav.style.width = "100%";
  bodyWrap.classList.toggle("nav-noscroll");
  mainContent.style.opacity = "0.6";
  navbar.style.opacity = "0.6";
}

function closeNav() {
  navbarNav.style.width = "0px";
  bodyWrap.classList.toggle("nav-noscroll");
  mainContent.style.opacity = "1";
  navbar.style.opacity = "1";
}