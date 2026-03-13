//link ativo-inativo
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

//Swiper da hero
document.addEventListener("DOMContentLoaded", () => {
  // Carrossel do Hero - Home
  const heroSliderElement = document.querySelector(".hero__slider");

  if (heroSliderElement) {
    new Swiper(".hero__slider", {
      loop: false,
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

//Toggler pix
const checkboxPix = document.getElementById("descontoPix");

if (checkboxPix) {
  const precos = document.querySelectorAll(".plano-preco");
  const parcelamento = document.querySelectorAll(".plano-parc");

  checkboxPix.addEventListener("change", () => {
    precos.forEach((preco) => {
      const precoAtual = preco.innerText;
      const precoNovo = preco.getAttribute("data-price-pix");
      preco.innerText = precoNovo;
      preco.setAttribute("data-price-pix", precoAtual);
    });
    parcelamento.forEach((i) => {
      i.classList.toggle("d-none");
    });
  });
}

//Swiper depoimentos
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper_depoimentos",
    clickable: true,
  },

  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
});
