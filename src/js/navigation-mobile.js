// Create constants to store HTML elements for the Navigation menu on mobile (aside).
const html = document.querySelector("html");
const aside = document.getElementById("aside");
const openbtn = document.getElementById("openbtn");
const closebtn = document.getElementById("closebtn");

// Open and close the Navigation menu on mobile (aside).
openbtn.addEventListener("click", () => {
  aside.classList.add("aside-with");
  html.classList.add("html-overflow");
});

closebtn.addEventListener("click", () => {
  aside.classList.remove("aside-with");
  html.classList.remove("html-overflow");
});

// Dynamically create the Navigation menu on mobile (aside).
navLinks.forEach((link) => {
  aside.innerHTML += `<a href="#${link}">${link}</a>`;

  const asideLink = document.querySelectorAll("aside a");

  asideLink.forEach((link) => {
    link.addEventListener("click", () => {
      aside.classList.remove("aside-with");
      html.classList.remove("html-overflow");
    });
  });
});

// On resize, if the window is bigger than 992px, remove the Navigation menu on mobile (aside).
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    aside.classList.remove("aside-with");
    html.classList.remove("html-overflow");
  }
});
