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
  { name: "htmlcss-wp", link: "https://francesco-foglia.github.io/htmlcss-wp/" },
  { name: "html-css-bootstrap-freelancer", link: "https://francesco-foglia.github.io/html-css-bootstrap-freelancer/" },
  { name: "vue-dischi", link: "https://francesco-foglia.github.io/vue-dischi/" },
];

swiperWrapper = document.querySelector('.swiper-wrapper');

swiperSlide.forEach((slide) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <a href="${slide.link}" target="_blank">
        <img src="img/projects/${slide.name}.png" alt="${slide.name}">
      </a>
    </div>
  `;
});

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
