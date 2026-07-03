// ==========================================================================
// 🚀 HERO BANNER SLIDER LOGIC (Right Side Sliding)
// ==========================================================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots span'); // Agar class .dot hai toh '.dot' kar dein
let currentSlide = 0;

function changeSlide(index) {
    if (slides.length === 0) return;

    slides.forEach((slide, i) => {
        if (i === index) {
            // Jo active slide hai, use screen ke center (0) par lao
            slide.classList.add('active');
            slide.style.transform = 'translateX(0)';
        } else if (i < index) {
            // Jo slides guzar chuki hain, unhe left side (-100%) par bhej do
            slide.classList.remove('active');
            slide.style.transform = 'translateX(-100%)';
        } else {
            // Jo aane wali slides hain, unhe right side (100%) par rakho
            slide.classList.remove('active');
            slide.style.transform = 'translateX(100%)';
        }
    });

    // Dots active state update
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide(currentSlide);
}

// Har 4 seconds baad slide auto-change hogi right side se
setInterval(nextSlide, 4000);

// Pehli dafa run karne ke liye
changeSlide(currentSlide);

// ==========================================================================
// ⚠️ NOTE: Iske NEECHE aapka purana propertyCards wala code wese hi rahega!
// ==========================================================================

// --- Individual Cards Inner Image Slideshows ---
const propertyCards = document.querySelectorAll('.property-card');

propertyCards.forEach((card) => {
    const images = card.querySelectorAll('.slide-img');
    let currentImgIndex = 0;

    // Har individual card ke liye alag timer chalega
    setInterval(() => {
        // Pehle active image se active class hatao
        images[currentImgIndex].classList.remove('active');

        // Agli image par jao
        currentImgIndex = (currentImgIndex + 1) % images.length;

        // Nayi image par active class laga do
        images[currentImgIndex].classList.add('active');
    }, 3000); // Har 3 seconds baad photo badlegi
});
// --- Horizontal Set Slider for Properties (Sliding from Right Side) ---
const propTrack = document.getElementById('propertiesTrack');
const totalSets = 2; 
let currentSetIndex = 0;

function slideMultiProperties() {
    currentSetIndex = (currentSetIndex + 1) % totalSets;
    const moveAmount = currentSetIndex * -100;
    propTrack.style.transform = `translateX(${moveAmount}%)`;
}

// Every 5 seconds, the whole set of 3 cards slides smoothly
setInterval(slideMultiProperties, 5000);