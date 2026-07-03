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
// ==========================================================================
// 🎯 HORIZONTAL PROPERTIES SLIDER (NO PAGE SHIFT FIX)
// ==========================================================================

// Dono ID aur Class ko fallback ke sath select kiya taake code break na ho
const propTrack = document.getElementById('propertiesTrack') || document.querySelector('.properties-track');
const totalSets = 2; 
let currentSetIndex = 0;

function slideMultiProperties() {
    if (!propTrack) return; // Guard clause agar HTML element na mile

    currentSetIndex = (currentSetIndex + 1) % totalSets;
    
    /* 🟢 CRITICAL FIX: Kyunki aapki CSS me track width 200% hai aur har set 50% width ka hai,
       isliye hume pure -100% nahi balki sirf -50% move karna hai taake second set samne aaye!
    */
    const moveAmount = currentSetIndex * -50; 
    
    propTrack.style.transform = `translateX(${moveAmount}%)`;
}

// Har 5 seconds baad smoothly set badlega bina layout kharab kiye
setInterval(slideMultiProperties, 5000);


// --- Individual Cards Inner Image Slideshows (Wese hi rahega) ---
const propertyCards = document.querySelectorAll('.property-card');
propertyCards.forEach((card) => {
    const images = card.querySelectorAll('.slide-img');
    if (images.length === 0) return;
    let currentImgIndex = 0;

    setInterval(() => {
        images[currentImgIndex].classList.remove('active');
        currentImgIndex = (currentImgIndex + 1) % images.length;
        images[currentImgIndex].classList.add('active');
    }, 3000);
});