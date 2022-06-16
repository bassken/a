const d = document,
  w = window;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.direccion.value,
        "tester" /*referencia que necesita*/,
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
      //con . podemos acceder a los inputs dentro de un formulario (aparte de cualquier atributo de etiqueta html)
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) w.tester.close();
  });
}
