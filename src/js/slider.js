const swiperSlide = [
  { name: "foryou-tally-app", link: "https://foryou.tally-app.com/" },
  { name: "tally-app", link: "https://tally-app.com/" },
  { name: "cgs-dashboard", link: "https://cgs-dashboard.netlify.app/" },
  { name: "keep-pwa", link: "https://keep-pwa.netlify.app/" },
  { name: "eticoshop", link: "https://eticoshop.it/" },
  { name: "blueline-investments", link: "https://www.blueline-investments.com/" },
  { name: "minetuscany", link: "https://www.minetuscany.com/" },
  { name: "ollocat", link: "https://cat.ollo.it/" },
  { name: "angular-gorest-app", link: "https://angular-gorest-app.vercel.app/" },
  { name: "angular-news-app", link: "https://angular-news-app.vercel.app/" },
  { name: "react-vegetarian-recipes-app", link: "https://react-vegetarian-recipes-app.vercel.app/" },
  { name: "react-global-warming-app", link: "https://react-global-warming-app.vercel.app/" },
  { name: "vue-nientflix-app", link: "https://vue-nientflix-app.vercel.app/" },
  { name: "vue-dashboard-app", link: "https://vue-dashboard-app.vercel.app/" },
  { name: "react-gorest-app", link: "https://react-gorest-app.vercel.app/" },
  { name: "art-partner", link: "https://francesco-foglia.github.io/art-partner/" },
  { name: "campanialandtelling", link: "https://www.campanialandtelling.it/" },
  { name: "capellimario", link: "https://www.capellimario.it/" },
  { name: "curlybags", link: "https://www.curlybags.it/" },
  { name: "diletteratura", link: "https://www.diletteratura.it/" },
  { name: "frantoioilmandorlosrl", link: "https://www.frantoioilmandorlosrl.it/" },
  { name: "greenfoam", link: "https://www.greenfoam.it/" },
  { name: "physioterapiavoltan", link: "https://www.physioterapiavoltan.it/" },
  { name: "zankomentalcoach", link: "https://www.zankomentalcoach.com/" },
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

swiperSlide.forEach((slide) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <a href="${slide.link}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full h-full">
        <img src="img/projects/${slide.name}.webp" alt="${slide.name}">
      </a>
    </div>
  `;
});

const swiper = new Swiper('.swiper', {
  effect: "cards",
  grabCursor: true,
  cardsEffect: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: true,
  },
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