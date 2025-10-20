document.addEventListener('DOMContentLoaded', () => {
    const allAnimated = document.querySelectorAll('.animate-left, .animate-right');

    allAnimated.forEach((el, index) => {
        const direction = el.classList.contains('animate-left') ? 'fade-left' : 'fade-right';
        el.setAttribute('data-aos', direction);
        el.setAttribute('data-aos-duration', '2000');
        el.setAttribute('data-aos-delay', `${index * 200}`); // domino effect
    });

    // Initialize AOS after setting all attributes
    AOS.init({
        once: true, // optional: animate once
    });
});
