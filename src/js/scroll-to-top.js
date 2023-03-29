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
