document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelectorAll("#navMenu a");

  if (!navMenu || !menuButton) return;

  function closeMenu() {
    navMenu.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  function toggleMenu(event) {
    event.stopPropagation();

    const isOpen = navMenu.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuButton.addEventListener("click", toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});
