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
    name: "tailwindcss",
    url: "https://tailwindcss.com"
  },
  {
    name: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "typescript",
    url: "https://www.typescriptlang.org"
  },
  {
    name: "jquery",
    url: "https://jquery.com"
  },
  {
    name: "angular",
    url: "https://angular.io"
  },
  {
    name: "react",
    url: "https://react.dev"
  },
  {
    name: "nextjs",
    url: "https://nextjs.org"
  },
  {
    name: "solidjs",
    url: "https://www.solidjs.com"
  },
  {
    name: "vuejs",
    url: "https://vuejs.org"
  },
  {
    name: "php",
    url: "https://www.php.net"
  },
  {
    name: "wordpress",
    url: "https://wordpress.com"
  },
];

const contacts = document.getElementById("contacts-container");

const contactsArray = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/foglia-francesco",
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

const resume = document.getElementById("resume-container");

const resumeArray = [
  {
    job: "Jr Full Stack Web Developer Trainee",
    company: "Boolean Careers",
    period: "10/2020 - 03/2021",
  },
  {
    job: "Jr Full Stack Web Developer",
    company: "Webag",
    period: "04/2021 - 12/2022",
  },
  {
    job: "Front End Web Developer",
    company: "Slum Design",
    period: "01/2023 - 06/2024",
  },
  {
    job: "Full Stack Web Developer",
    company: "NeedNap",
    period: "06/2024 - Present",
  },
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
      <img
        class="skill hvr-bob"
        src="img/skills/${skill.name}.${skill.name !== "typescript" && skill.name !== "solidjs" && skill.name !== "react" ? "webp" : "svg"}"
        alt="${skill.name} logo"
      >
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
      <img class="contact hvr-bob" src="img/contacts/${contact.name}.webp" alt="${contact.name} logo">
      <small>${contact.name}</small>
    </a>`;
});

// Dynamically create the resume.
resumeArray.reverse().forEach((element) => {
  resume.innerHTML +=
    `<div class="mb-4" data-aos="zoom-out" data-aos-delay="100">
      <h4>${element.job}</h4>
      <p>${element.company}</p>
      <p>${element.period}</p>
    </div>`;
});

// Clear the form after submission.
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
