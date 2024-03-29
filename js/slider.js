const slide = document.querySelectorAll(".slide");
const slides = document.querySelector(".slides");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slide.length;
let slideWidth = slide[0].clientWidth;

let currentSlide = 0;

// Set up the slider

function init() {
    slide.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slide[0].classList.add("active");

    createNavigationDots();
}

init();

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slides.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

function setActiveClass() {
    let currentActive = document.querySelector(".slide.active");
    currentActive.classList.remove("active");
    slide[currentSlide].classList.add("active");

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}