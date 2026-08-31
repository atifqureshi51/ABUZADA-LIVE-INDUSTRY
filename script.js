// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
  const nav = document.getElementById("navMenu");

  if (nav) {
    nav.classList.toggle("active");
  }
}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    const nav = document.getElementById("navMenu");

    if (nav) {
      nav.classList.remove("active");
    }

  });

});


// ================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ================================

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


// ================================
// SCROLL REVEAL
// ================================

const revealItems = document.querySelectorAll(
  ".platform, .person-card, .requirement, .earnings-box"
);

const observer = new IntersectionObserver(
  function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealItems.forEach(function(item) {
  item.classList.add("reveal");
  observer.observe(item);
});
