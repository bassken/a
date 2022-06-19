// IntersectionObserver es una api que detecta que en la parte visible del navegador se encuentra un elemento. recibe una funcion que recibe un evento (addeventlistener) y una serie de opciones

const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll(".section[data-scroll-spy]");
  const cb = (entries) => {
    /* console.log("entries", entries) */

    entries.forEach((entry) => {
      /* console.log("entry", entry) */
      const id = entry.target.getAttribute(`id`);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    //root busca el elemento del cual basarse. por default es el documento
    /* rootMargin: "-250px" */
    //threshold es limite. podemos especificarselo con un numero de 0 a 1, si se pone 0 es que apenas se vea, se visualize, 0.5 seria cuando se muestre el 50% de su contenido lo visualzie
    threshold: [0.5, 0.75],
  });
  /* console.log("observer", observer); */
  $sections.forEach((el) => observer.observe(el));
}
