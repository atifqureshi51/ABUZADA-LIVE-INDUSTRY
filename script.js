document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelectorAll("#navMenu a");

  if (!navMenu || !menuButton) {
    return;
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  menuButton.addEventListener("click", toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", function (event) {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});
