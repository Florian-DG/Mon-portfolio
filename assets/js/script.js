const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');


hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('show');
});


document.querySelectorAll(".projet").forEach(element => {
  element.addEventListener("click", (e) => {
    window.location.assign(e.currentTarget.dataset.href)
  });
});