const scrollToTop = document.getElementById("scroll-to-top");

// Show button after 100px scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTop.classList.add("scroll-to-top-transform");
  } else {
    scrollToTop.classList.remove("scroll-to-top-transform");
  }
}

if (document.documentElement.scrollTop > 100) {
  scrollToTop.classList.add("scroll-to-top-transform");
}

scrollToTop.onclick = () => {
  document.documentElement.scrollTop = 0;
}
