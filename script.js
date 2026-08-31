// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}


// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

document.querySelectorAll("#navMenu a").forEach(function(link) {

  link.addEventListener("click", function() {

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
      navMenu.classList.remove("active");
    }

  });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {

  anchor.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ===============================
// CARD CLICK EFFECT
// ===============================

document.querySelectorAll(".team-card, .platform-card").forEach(function(card) {

  card.addEventListener("click", function() {

    card.style.transform = "scale(0.98)";

    setTimeout(function() {
      card.style.transform = "";
    }, 120);

  });

});
