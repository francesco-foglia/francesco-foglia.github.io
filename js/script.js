// Animate On Scroll Library
AOS.init();


// Create constants to store HTML elements.
const navbar = document.getElementById("navbar");

const navLinks = ["developer", "skills", "contacts"];

const skills = document.getElementById("skills-container");

const skillsArray = [
  {
    name: "html",
    url: "https://www.w3schools.com/html/default.asp"
  },
  {
    name: "css",
    url: "https://www.w3schools.com/css/default.asp"
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
    url: "https://www.w3schools.com/js/default.asp"
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

const button = document.getElementById("scroll-to-top");


// Dynamically create the navbar.
navLinks.forEach((link) => {
  navbar.innerHTML +=
    `<a
      data-aos="zoom-out"
      data-aos-delay="100"
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
    button.classList.add("button-transform");
  } else {
    button.classList.remove("button-transform");
  }
}


// When the user clicks on the button, scroll to the top of the document.
button.onclick = () => {
  document.documentElement.scrollTop = 0;
}
