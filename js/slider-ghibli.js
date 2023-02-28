const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function moveSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const moveAmount = slideIndex * -100;
  sliderWrapper.style.transform = `translate3d(${moveAmount}%, 0, 0)`;
}

setInterval(moveSlides, 5000);

window.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const moveX = (mouseX - centerX) / 50;
  const moveY = (mouseY - centerY) / 50;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translate3d(${moveX * (i + 1)}px, ${moveY * (i + 1)}px, 0)`;
  }
});
