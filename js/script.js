// Animate On Scroll Library
AOS.init();


// Create constants to store HTML elements.
const navbar = document.getElementById("navbar");

const navLinks = ["developer", "skills", "contacts"];


// Dynamically create the navbar.
navLinks.forEach((link) => {
  navbar.innerHTML +=
    `<a
      class="hvr-underline-from-center"
      data-aos="zoom-out"
      data-aos-duration="1500"
      href="#${link}"
      >
      <span class="d-none d-md-block">${link}</span>
      <img class="d-block d-md-none icon" src="img/${link}.svg" alt="${link}">
    </a>`;
});
