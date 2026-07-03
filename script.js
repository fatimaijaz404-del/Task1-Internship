// 1. Sab se pehle saari slides aur dots ko HTML se select karenge
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function changeSlide() {
    // Agar page par slides nahi hain toh code ruk jaye
    if (slides.length === 0) return;

    // 2. Jo slide abhi chal rahi hai, us se 'active' class hata do (takay wo chup jaye)
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // 3. Agli slide par jao (agar teesri slide khatam ho jaye toh wapas 0 yani pehli par jao)
    currentSlide = (currentSlide + 1) % slides.length;

    // 4. Nayi slide aur dot ko 'active' class do (takay wo smoothly screen par aa jaye)
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Har 3000 milliseconds (yaani 3 seconds) baad automatic slide change hogi
setInterval(changeSlide, 3000);

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