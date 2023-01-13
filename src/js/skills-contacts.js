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
