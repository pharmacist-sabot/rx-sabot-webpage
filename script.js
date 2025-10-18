document.addEventListener("DOMContentLoaded", function () {
  // --- Copyright Year ---
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Hamburger Menu Logic ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const logoLink = document.querySelector(".logo");

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  };

  hamburger.addEventListener("click", toggleMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  logoLink.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});
