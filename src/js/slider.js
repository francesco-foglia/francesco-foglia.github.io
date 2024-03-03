// Array of objects with the name and link of each project
const swiperSlide = [
  // { name: "htmlcss-hubspot", link: "https://francesco-foglia.github.io/htmlcss-hubspot/" },
  // { name: "html-css-digitalocean", link: "https://francesco-foglia.github.io/html-css-digitalocean/" },
  // { name: "html-css-spotifyweb", link: "https://francesco-foglia.github.io/html-css-spotifyweb/" },
  // { name: "vue-boolzapp", link: "https://francesco-foglia.github.io/vue-boolzapp/" },
  // { name: "vue-boolflix", link: "https://francesco-foglia.github.io/vue-boolflix/" },
  // { name: "proj-html-vuejs", link: "https://francesco-foglia.github.io/proj-html-vuejs/" },
  // { name: "art-partner", link: "https://francesco-foglia.github.io/art-partner/" },
  // { name: "js-minesweeper", link: "https://francesco-foglia.github.io/js-minesweeper/" },
  // { name: "frantoioilmandorlosrl", link: "https://www.frantoioilmandorlosrl.it/" },
  // { name: "capellimario", link: "https://www.capellimario.it/" },
  // { name: "curlybags", link: "https://www.curlybags.it/" },
  // { name: "diletteratura", link: "https://www.diletteratura.it/" },
  // { name: "htmlcss-wp", link: "https://francesco-foglia.github.io/htmlcss-wp/" },
  // { name: "html-css-bootstrap-freelancer", link: "https://francesco-foglia.github.io/html-css-bootstrap-freelancer/" },
  // { name: "vue-dischi", link: "https://francesco-foglia.github.io/vue-dischi/" },
  { name: "angular-gorest-app", link: "https://angular-gorest-app.vercel.app/" },
  { name: "angular-news-app", link: "https://angular-news-app.vercel.app/" },
  { name: "react-vegetarian-recipes-app", link: "https://react-vegetarian-recipes-app.vercel.app/" },
  // { name: "js-cities-app", link: "https://francesco-foglia.github.io/js-cities-app/" },
  // { name: "js-counter-app", link: "https://francesco-foglia.github.io/js-counter-app/" },
  { name: "vue-tic-tac-toe-app", link: "https://vue-tic-tac-toe-app.vercel.app/" },
  { name: "vue-dashboard-app", link: "https://vue-dashboard-app.vercel.app/" },
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
