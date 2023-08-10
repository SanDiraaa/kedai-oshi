// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.prefentDefault();
};

// Klik diluar sidebar untuk menghilangkan navbar //
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
