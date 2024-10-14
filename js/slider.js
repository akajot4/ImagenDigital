document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    let currentSlide = 0;

    function resetAnimation(element) {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Reiniciar animaciones
        const animatedElements = slides[currentSlide].querySelectorAll('.animate-p, .animate-h2, .animate-h3, .animate-btn');
        animatedElements.forEach(resetAnimation);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Inicializar el primer slide
    showSlide(0);
});

function reveal() {
    var reveals = document.querySelectorAll('.servicio-item');
    console.log('Number of .servicio-item elements:', reveals.length);
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            console.log('Revealing element', i);
            reveals[i].classList.add('reveal');
            reveals[i].classList.add('animate-fadeInUp');
        }
    }
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    reveal();
});

console.log('Script loaded');
