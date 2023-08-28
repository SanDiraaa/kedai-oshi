// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Ketika Member menu di klik
const navbarList = document.querySelector(".navbar-list");

document.querySelector("#member-button").onclick = (e) => {
  navbarList.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar sidebar untuk menghilangkan navbar //
const hamburger = document.querySelector("#hamburger-menu");
const mb = document.querySelector("#member-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!mb.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});
