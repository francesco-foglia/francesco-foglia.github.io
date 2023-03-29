// Create constants to store HTML elements for the Navigation menu on mobile (aside).
const html = document.querySelector("html");
const aside = document.getElementById("aside");
const openbtn = document.getElementById("openbtn");
const hamburger1 = document.querySelector(".hamburger .hamburger-1");
const hamburger2 = document.querySelector(".hamburger .hamburger-2");
const hamburger3 = document.querySelector(".hamburger .hamburger-3");
const overlay = document.getElementById("overlay");

// Dynamically create the Navigation menu on mobile (aside).
navLinks.forEach((link) => {
  aside.innerHTML += `<a href="#${link}">${link}</a>`;

  const asideLink = document.querySelectorAll("aside a");

  asideLink.forEach((link) => {
    link.addEventListener("click", () => {
      aside.classList.remove("aside-with");
      html.classList.remove("html-overflow");
      hamburger1.classList.remove("hamburger-1-toggle");
      hamburger2.classList.remove("hamburger-2-toggle");
      hamburger3.classList.remove("hamburger-3-toggle");
      overlay.classList.remove("overlay-2");
    });
  });
});

// On resize, if the window is bigger than 992px, remove the Navigation menu on mobile (aside).
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    aside.classList.remove("aside-with");
    html.classList.remove("html-overflow");
    hamburger1.classList.remove("hamburger-1-toggle");
    hamburger2.classList.remove("hamburger-2-toggle");
    hamburger3.classList.remove("hamburger-3-toggle");
    overlay.classList.remove("overlay-2");
  }
});

// On click, toggle the Navigation menu on mobile (aside).
openbtn.addEventListener("click", () => {
  aside.classList.toggle("aside-with");
  html.classList.toggle("html-overflow");
  hamburger1.classList.toggle("hamburger-1-toggle");
  hamburger2.classList.toggle("hamburger-2-toggle");
  hamburger3.classList.toggle("hamburger-3-toggle");
  overlay.classList.toggle("overlay-2");
});

// On click, toggle the Navigation menu on mobile (aside).
overlay.addEventListener("click", () => {
  aside.classList.remove("aside-with");
  html.classList.remove("html-overflow");
  hamburger1.classList.remove("hamburger-1-toggle");
  hamburger2.classList.remove("hamburger-2-toggle");
  hamburger3.classList.remove("hamburger-3-toggle");
  overlay.classList.toggle("overlay-2");
});
