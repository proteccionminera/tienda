let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
