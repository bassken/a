const d = document,
  w = window;
export default function scrollTopBtn(btn) {
  const $scrollBtn = document.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    /*  console.log(
      w.pageYOffset,
      d.documentElement.scrollTop
    ); cualquiera de estos 2 comandos, dependiendo si queremos hacerlo desde elobjeto window o etiqueta html, da un numero en pixeles de la distancia desde el top a bot segun el scroll recorrido en eje y  */

    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
