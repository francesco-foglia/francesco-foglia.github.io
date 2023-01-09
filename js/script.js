// Animate On Scroll Library
AOS.init();


// Create constants to store HTML elements.
const navbar = document.getElementById("navbar");

const navLinks = ["developer", "skills", "contacts"];

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

const scrollToTop = document.getElementById("scroll-to-top");


// Dynamically create the navbar.
navLinks.forEach((link) => {
  navbar.innerHTML +=
    `<a
      data-aos=""
      data-aos-delay="100"
      class="link-style"
      href="#${link}"
     >
      <span class="d-none d-md-block hvr-underline-from-center">${link}</span>
      <img class="d-block d-md-none icon" src="img/nav-icons/${link}.svg" alt="${link}">
    </a>`;
});


// Dynamically create the skills.
skillsArray.forEach((skill) => {
  skills.innerHTML +=
    `<a href="${skill.url}" target="_blank" rel="noopener noreferrer">
      <img
        class="skill hvr-bob"
        data-aos="zoom-out"
        data-aos-delay="100"
        src="img/skills/${skill.name}.png"
        alt="${skill.name} logo"
      >
    </a>`;
});


// Dynamically create the contacts.
contactsArray.forEach((contact) => {
  contacts.innerHTML +=
    `<a href="${contact.url}" target="_blank" rel="noopener noreferrer">
      <img
        class="contact hvr-bob"
        data-aos="zoom-out"
        data-aos-delay="100"
        src="img/contacts/${contact.name}.png"
        alt="${contact.name} logo"
      >
    </a>`;
});


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
  aside.innerHTML += `<a class="link-style" href="#${link}">${link}</a>`;

  const asideLink = document.querySelectorAll("aside a");

  asideLink.forEach((link) => {
    link.addEventListener("click", () => {
      aside.classList.remove("aside-with");
      html.classList.remove("html-overflow");
    });
  });
});

// On resize, if the window is bigger than 768px, remove the Navigation menu on mobile (aside).
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    aside.classList.remove("aside-with");
    html.classList.remove("html-overflow");
  }
});
