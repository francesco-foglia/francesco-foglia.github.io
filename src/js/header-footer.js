// Animate On Scroll Library
AOS.init();


// Create constants to store HTML elements.
const headerNav = document.getElementById("header-nav");

const footerNav = document.getElementById("footer-nav");

const navLinks = ["developer", "skills", "contacts"];

// Dynamically create the Header and Footer Navigation.
navLinks.forEach((link) => {
  headerNav.innerHTML +=
    `<a
      data-aos=""
      data-aos-delay="100"
      href="#${link}"
      >
      <span class="d-none d-md-block hvr-underline-from-center">${link}</span>
      <img class="d-block d-md-none icon" src="img/nav-icons/${link}.svg" alt="${link}">
    </a>`;

  footerNav.innerHTML +=
    `<a class="m-3" href="#${link}">
      <span class="hvr-underline-from-center">${link}</span>
    </a>`;
});
