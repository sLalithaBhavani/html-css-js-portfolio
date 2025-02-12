function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function enterPortfolio() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}
