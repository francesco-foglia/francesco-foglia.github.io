// Array of objects with the name and link of each project
const swiperSlide = [
  // { name: "htmlcss-hubspot", link: "https://francesco-foglia.github.io/htmlcss-hubspot/" },
  // { name: "html-css-digitalocean", link: "https://francesco-foglia.github.io/html-css-digitalocean/" },
  // { name: "html-css-spotifyweb", link: "https://francesco-foglia.github.io/html-css-spotifyweb/" },
  // { name: "vue-boolzapp", link: "https://francesco-foglia.github.io/vue-boolzapp/" },
  // { name: "vue-boolflix", link: "https://francesco-foglia.github.io/vue-boolflix/" },
  // { name: "proj-html-vuejs", link: "https://francesco-foglia.github.io/proj-html-vuejs/" },

  // { name: "htmlcss-wp", link: "https://francesco-foglia.github.io/htmlcss-wp/" },
  // { name: "html-css-bootstrap-freelancer", link: "https://francesco-foglia.github.io/html-css-bootstrap-freelancer/" },
  // { name: "vue-dischi", link: "https://francesco-foglia.github.io/vue-dischi/" },

  // { name: "js-minesweeper", link: "https://francesco-foglia.github.io/js-minesweeper/" },

  { name: "foryou-tally-app", link: "https://foryou.tally-app.com/" },
  { name: "tally-app", link: "https://tally-app.com/" },
  { name: "cgs-dashboard", link: "https://cgs-dashboard.netlify.app/" },
  { name: "keep-pwa", link: "https://keep-pwa.netlify.app/" },
  { name: "eticoshop", link: "https://eticoshop.it/" },
  { name: "blueline-investments", link: "https://www.blueline-investments.com/" },
  { name: "minetuscany", link: "https://www.minetuscany.com/" },
  { name: "ollocat", link: "https://cat.ollo.it/" },

  // { name: "js-counter-app", link: "https://francesco-foglia.github.io/js-counter-app/" },
  // { name: "js-cities-app", link: "https://francesco-foglia.github.io/js-cities-app/" },
  { name: "angular-gorest-app", link: "https://angular-gorest-app.vercel.app/" },
  { name: "angular-news-app", link: "https://angular-news-app.vercel.app/" },
  { name: "react-vegetarian-recipes-app", link: "https://react-vegetarian-recipes-app.vercel.app/" },
  { name: "react-global-warming-app", link: "https://react-global-warming-app.vercel.app/" },
  { name: "vue-nientflix-app", link: "https://vue-nientflix-app.vercel.app/" },
  // { name: "vue-tic-tac-toe-app", link: "https://vue-tic-tac-toe-app.vercel.app/" },
  // { name: "vue-dashboard-app", link: "https://vue-dashboard-app.vercel.app/" },

  { name: "art-partner", link: "https://francesco-foglia.github.io/art-partner/" },

  // { name: "bkube", link: "https://www.bkube.it/" },
  { name: "campanialandtelling", link: "https://www.campanialandtelling.it/" },
  { name: "capellimario", link: "https://www.capellimario.it/" },
  { name: "curlybags", link: "https://www.curlybags.it/" },
  { name: "diletteratura", link: "https://www.diletteratura.it/" },
  { name: "frantoioilmandorlosrl", link: "https://www.frantoioilmandorlosrl.it/" },
  { name: "greenfoam", link: "https://www.greenfoam.it/" },
  // { name: "gronell", link: "https://www.gronell.it/" },
  // { name: "koi-italia", link: "https://www.koi-italia.com/" },
  // { name: "osmasas", link: "https://www.osmasas.it/" },
  { name: "physioterapiavoltan", link: "https://www.physioterapiavoltan.it/" },
  { name: "zankomentalcoach", link: "https://www.zankomentalcoach.com/" },
  // { name: "tuttocartafirenze", link: "https://tuttocartafirenze.it/" },
];

// Get the element with the class swiper-wrapper
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Loop through the array of objects and create a new slide for each object
swiperSlide.forEach((slide) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <a href="${slide.link}" target="_blank" rel="noopener noreferrer nofollow" class="d-block w-100 h-100">
        <img src="img/projects/${slide.name}.webp" alt="${slide.name}">
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
