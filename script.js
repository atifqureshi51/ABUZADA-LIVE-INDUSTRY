function toggleMenu() {
  const nav = document.getElementById("navMenu");

  if (nav) {
    nav.classList.toggle("active");
  }
}


// Mobile menu close after clicking a link
document.querySelectorAll("#navMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    const nav = document.getElementById("navMenu");

    if (nav) {
      nav.classList.remove("active");
    }
  });
});


// Close menu when clicking outside
document.addEventListener("click", function(event) {

  const nav = document.getElementById("navMenu");
  const menuButton = document.querySelector(".menu-btn");

  if (!nav || !menuButton) {
    return;
  }

  if (
    nav.classList.contains("active") &&
    !nav.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    nav.classList.remove("active");
  }

});


// Smooth page loading
document.addEventListener("DOMContentLoaded", function() {

  document.body.classList.add("page-loaded");

});
