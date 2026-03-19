// Animate On Scroll Library
AOS.init({
  once: true,
});

const headerNav = document.getElementById("header-nav");
const footerNav = document.getElementById("footer-nav");

const navLinks = [
  // "developer",
  "skills",
  "projects",
  "contacts"
];

navLinks.forEach((link) => {
  headerNav.innerHTML +=
    `<a href="#${link}">
      <span class="hvr-underline-from-center">${link}</span>
    </a>`;

  footerNav.innerHTML +=
    `<a class="m-4" href="#${link}">
      <span class="hvr-underline-from-center">${link}</span>
    </a>`;
});

const year = document.querySelectorAll(".year");
year.forEach((el) => {
  el.innerHTML = new Date().getFullYear();
});