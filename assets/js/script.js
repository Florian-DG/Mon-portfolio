const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('show');
});

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});