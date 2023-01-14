// Animate On Scroll Library
AOS.init();

// Create constants to store HTML elements.
const headerNav = document.getElementById("header-nav");

const footerNav = document.getElementById("footer-nav");

const navLinks = ["developer", "skills", "projects", "contacts"];

// Dynamically create the Header and Footer Navigation.
navLinks.forEach((link) => {
  headerNav.innerHTML +=
    `<a href="#${link}">
      <span class="hvr-underline-from-center">${link}</span>
    </a>`;

  footerNav.innerHTML +=
    `<a class="m-3" href="#${link}">
      <span class="hvr-underline-from-center">${link}</span>
    </a>`;
});

// Set the current year in the Footer.
const year = document.querySelectorAll(".year");
year.forEach((el) => {
  el.innerHTML = new Date().getFullYear();
});
