(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slider = document.querySelector(".Categorias-Lista");
    const prueba = document.querySelector(".Categorias");

    next.addEventListener("click", () => {
      slider.scrollLeft += 300;
    });
    prev.addEventListener("click", () => {
      slider.scrollLeft -= 300;
      behavior: "smooth";
    });
  }
})(window, document, undefined);
