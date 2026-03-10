document.addEventListener("DOMContentLoaded", () => {
  // Carrossel do Hero - Home
  const heroSliderElement = document.querySelector(".hero__slider");

  if (heroSliderElement) {
     new Swiper(".hero__slider", {
      loop: false,
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      pagination: {
        el: ".hero__pagination",
        clickable: true,
      },
      
    });
  }
});
