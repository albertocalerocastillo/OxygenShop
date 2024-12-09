document.addEventListener('DOMContentLoaded', function() {
    const sliderContenedor = document.querySelector('.slider-contenedor');
    const slides = document.querySelectorAll('.slider-contenedor img');
    const puntos = document.querySelectorAll('.slider-puntos button');
    let currentIndex = 0;

    const updateSlider = () => {
        sliderContenedor.style.transform = `translateX(-${currentIndex * 100}%)`;

        puntos.forEach(punto => punto.classList.remove('active'));
        puntos[currentIndex].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlider();
    };

    document.querySelector('.slider-button.next').addEventListener('click', nextSlide);
    document.querySelector('.slider-button.prev').addEventListener('click', prevSlide);

    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => goToSlide(index));
    });

    updateSlider();

    setInterval(nextSlide, 4000);
});