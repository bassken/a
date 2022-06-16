const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //getBoundingClientRect es un metodo del dom que da un objeto con anchura, altura, posicion x, y, y cuan alejado esta de los margenes top, right, bottom, left. con esto limitariamos el movimiento de la bola.
/* /*   console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall, limitsStage); */

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  /*   console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey); //ctrl tiene su boolean propio
  console.log(e.altKey); //same
  console.log(e.shiftKey); //same
  console.log(e);
   */

  if (e.key === "a" && e.altKey) {
    alert(`Alerta de teclado`);
  }

  if (e.key === "c" && e.altKey) {
    confirm(`Alerta de teclado`);
  }

  if (e.key === "p" && e.altKey) {
    prompt(`Alerta de teclado`);
  }
}
