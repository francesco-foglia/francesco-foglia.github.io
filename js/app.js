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

// Create constants to store HTML elements.
const skills = document.getElementById("skills-container");

const skillsArray = [
  {
    name: "html",
    url: "https://html.spec.whatwg.org"
  },
  {
    name: "css",
    url: "https://www.w3.org/TR/CSS"
  },
  {
    name: "sass",
    url: "https://sass-lang.com"
  },
  {
    name: "bootstrap",
    url: "https://getbootstrap.com"
  },
  {
    name: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "jquery",
    url: "https://jquery.com"
  }
];

const contacts = document.getElementById("contacts-container");

const contactsArray = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/foglia-francesco",
  },
  {
    name: "start2impact",
    url: "https://talent.start2impact.it/profile/francesco-foglia",
  },
  {
    name: "github",
    url: "https://github.com/francesco-foglia",
  },
  {
    name: "gmail",
    url: "mailto:francescofogliajj@gmail.com",
  }
];

// Dynamically create the skills.
skillsArray.forEach((skill) => {
  skills.innerHTML +=
    `<a
      href="${skill.url}"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="zoom-out" data-aos-delay="100"
      >
      <img class="skill hvr-bob" src="img/skills/${skill.name}.png" alt="${skill.name} logo">
      <small>${skill.name}</small>
    </a>`;
});

// Dynamically create the contacts.
contactsArray.forEach((contact) => {
  contacts.innerHTML +=
    `<a
      href="${contact.url}"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="zoom-out" data-aos-delay="100"
      >
      <img class="contact hvr-bob" src="img/contacts/${contact.name}.png" alt="${contact.name} logo">
      <small>${contact.name}</small>
    </a>`;
});

// Clear the form after submission.
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

// Array of objects with the name and link of each project
const swiperSlide = [
  { name: "htmlcss-hubspot", link: "https://francesco-foglia.github.io/htmlcss-hubspot/" },
  { name: "html-css-digitalocean", link: "https://francesco-foglia.github.io/html-css-digitalocean/" },
  { name: "html-css-spotifyweb", link: "https://francesco-foglia.github.io/html-css-spotifyweb/" },
  { name: "vue-boolzapp", link: "https://francesco-foglia.github.io/vue-boolzapp/" },
  { name: "vue-boolflix", link: "https://francesco-foglia.github.io/vue-boolflix/" },
  { name: "proj-html-vuejs", link: "https://francesco-foglia.github.io/proj-html-vuejs/" },
  { name: "art-partner", link: "https://francesco-foglia.github.io/art-partner/" },
  { name: "js-minesweeper", link: "https://francesco-foglia.github.io/js-minesweeper/" },
  { name: "frantoioilmandorlosrl", link: "https://www.frantoioilmandorlosrl.it/" },
  { name: "capellimario", link: "https://www.capellimario.it/" },
  { name: "curlybags", link: "https://www.curlybags.it/" },
  { name: "diletteratura", link: "https://www.diletteratura.it/" },
  // { name: "htmlcss-wp", link: "https://francesco-foglia.github.io/htmlcss-wp/" },
  // { name: "html-css-bootstrap-freelancer", link: "https://francesco-foglia.github.io/html-css-bootstrap-freelancer/" },
  // { name: "vue-dischi", link: "https://francesco-foglia.github.io/vue-dischi/" },
];

// Get the element with the class swiper-wrapper
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Loop through the array of objects and create a new slide for each object
swiperSlide.forEach((slide) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <a href="${slide.link}" target="_blank">
        <img src="img/projects/${slide.name}.png" alt="${slide.name}">
      </a>
    </div>
  `;
});

// Initialize Swiper slider with the class swiper and the options below
const swiper = new Swiper('.swiper', {
  effect: "fade",
  speed: 500,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Create constant to store HTML element.
const scrollToTop = document.getElementById("scroll-to-top");

// When the user scrolls down 100px from the top of the document, show the button.
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTop.classList.add("scroll-to-top-transform");
  } else {
    scrollToTop.classList.remove("scroll-to-top-transform");
  }
}

// If the page is already scrolled down 100px from the top of the document, show the button.
if (document.documentElement.scrollTop > 100) {
  scrollToTop.classList.add("scroll-to-top-transform");
}

// When the user clicks on the button, scroll to the top of the document.
scrollToTop.onclick = () => {
  document.documentElement.scrollTop = 0;
}
