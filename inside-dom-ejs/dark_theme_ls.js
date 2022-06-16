/* const d = document;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"); //para agregar estilo a una etiqueta css dinamicamente es con corchetes
  console.log($selectors);
  $moonbtn = d.querySelector("#btndm");

  let btnDark = d.querySelector("gg-moon");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn === ) {
        $selectors.forEach((el) => el.classList.toggle("gg-sun"));
      } else {
        $selectors.forEach((el) => el.classList.toggle("gg-moon"));
      }
    }
  });
} */

const d = document,
  ls = localStorage;

export default function darkTheme(btn) {
  let imgDarkMode = d.getElementById("dm");

  if (ls.getItem("theme") === "light") {
    imgDarkMode.src = "assets/moon.png";
    d.body.classList.remove("dark-mode");
  } else if (ls.getItem("theme") === "dark") {
    imgDarkMode.src = "assets/sun.png";
    d.body.classList.add("dark-mode");
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      d.body.classList.toggle("dark-mode");

      if (d.body.classList.contains("dark-mode")) {
        imgDarkMode.src = "assets/sun.png";
        ls.setItem("theme", "dark");
      } else {
        imgDarkMode.src = "assets/moon.png";
        ls.setItem("theme", "light");
      }
    }
  });
}

/* Api local storage hace que se ejecuten las lineas de codigo cuando el dom se cargue
el metodo getItem es para obtener una variable, admite un valor y es el nombre de la variable
setItem le da un nuevo valor al localstorage, admite 2 valores, el nombre y el valor (key, value)*/
