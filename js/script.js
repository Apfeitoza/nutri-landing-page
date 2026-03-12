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
