const initIfElementExists = (selector, callback) => {
  const element = document.querySelector(selector);
  if (element) callback(element);
};

document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. Link Ativo na Navegação ---
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // --- 2. Swiper Hero ---
  initIfElementExists(".hero__slider", () => {
    new Swiper(".hero__slider", {
      loop: true, 
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: { delay: 10000 },
      pagination: {
        el: ".hero__pagination",
        clickable: true,
      },
    });
  });

  // --- 3. Toggler de Preços (Pix) ---
  initIfElementExists("#descontoPix", (checkboxPix) => {
    const precos = document.querySelectorAll(".plano-preco");
    const parcelamentos = document.querySelectorAll(".plano-parc");

    checkboxPix.addEventListener("change", () => {
      precos.forEach((preco) => {
        // Usando a técnica de troca de valores via dataset de forma mais segura
        const valorAtual = preco.innerText;
        const valorPix = preco.dataset.pricePix;
        
        preco.innerText = valorPix;
        preco.dataset.pricePix = valorAtual;
      });

      parcelamentos.forEach(parc => {        
        parc.classList.toggle("d-none");
      });
    });
  });

  // --- 4. Swiper Depoimentos ---
  initIfElementExists(".mySwiper", () => {
    new Swiper(".mySwiper", {
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
  });
});

