document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  /* MOBILE MENU */

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

      navMenu.classList.toggle("active");

    });

  }


  /* CLOSE MENU AFTER CLICK */

  document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

      if (navMenu) {
        navMenu.classList.remove("active");
      }

    });

  });


  /* CARD PRESS EFFECT */

  document.querySelectorAll(".team-card, .platform-box").forEach(function (card) {

    card.addEventListener("mousedown", function () {

      card.style.transform = "scale(0.985)";

    });

    card.addEventListener("mouseup", function () {

      card.style.transform = "";

    });

    card.addEventListener("mouseleave", function () {

      card.style.transform = "";

    });

  });


  /* IMAGE FALLBACK */

  document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

      image.style.display = "none";

      const parent = image.parentElement;

      if (parent) {
        parent.classList.add("image-missing");
      }

    });

  });

});
