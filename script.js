const photos = [
    "IMG-20260103-WA0028.jpg",
    "IMG_20251223_223008_847.jpg",
    "IMG_20251223_223206_460.jpg",
    "IMG-20251226-WA0019.jpg",
    "IMG-20251216-WA0038.jpg",
    "IMG-20251216-WA0036.jpg",
    "IMG-20251216-WA0034.jpg",
    "IMG-20251215-WA0006.jpg",
    "IMG-20251215-WA0004.jpg"
];

const slide = document.getElementById("slide");
const overlay = document.getElementById("overlay");
const loveBtn = document.getElementById("loveBtn");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById("music");

let current = 0;

// Slideshow
setInterval(() => {
    slide.style.opacity = 0;

    setTimeout(() => {
        current = (current + 1) % photos.length;
        slide.src = photos[current];
        slide.style.opacity = 1;
    }, 400);

}, 3000);

// Buka surat + musik
loveBtn.addEventListener("click", () => {
    overlay.style.display = "flex";

    // Browser biasanya baru mengizinkan musik setelah pengguna menekan tombol
    music.play().catch(() => {});
});

// Tutup surat
closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Animasi hati
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 350);
