const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');
const aproposbtn = document.querySelector('.aproposbtn');

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('show');
});

const track = document.querySelector('.carousel-track');
const images = track.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(${-index * width}px)`;
}

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

aproposbtn.addEventListener('click', )