import hamburguerMenu from "./inside-dom-ejs/menu_ham.js";
import { digitalClock, alarm } from "./inside-dom-ejs/reloj.js";
import { moveBall, shortcuts } from "./inside-dom-ejs/keyb_event.js";
import countdown from "./inside-dom-ejs/countdown.js";
import scrollTopBtn from "./inside-dom-ejs/scroll_btn.js";
import darkTheme from "./inside-dom-ejs/dark_theme_ls.js";
import responsiveMedia from "./inside-dom-ejs/obj_responsive.js";
import responsiveTester from "./inside-dom-ejs/responsive-tester.js";
import userDeviceinfo from "./inside-dom-ejs/detec_disp.js";
import networkStatus from "./inside-dom-ejs/red-det.js";
import webCam from "./inside-dom-ejs/webcam.js";
import getGeolocation from "./inside-dom-ejs/geo.js";
import searchFilters from "./inside-dom-ejs/search_filters.js";
import draw from "./inside-dom-ejs/sorteo.js";
import slider from "./inside-dom-ejs/carrousel.js";
import scrollSpy from "./inside-dom-ejs/scroll_spy.js";
import smartVideo from "./inside-dom-ejs/video_int.js";
import contactFormV from "./inside-dom-ejs/validation_form.js";
import speechReader from "./inside-dom-ejs/narrator.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown" /* como solo pedimos un id, no ponemos el #, ya que no usamos queryselector */,
    "Oct 04, 2022 14:28:30",
    "Feliz cumpleaños"
  );
  scrollTopBtn(".scroll-top-btn");
  darkTheme("#dm");
  responsiveMedia(
    "youtube",
    "(min-width: 720px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 720px)",
    `<a href=" https://goo.gl/maps/eHSVZSoVi8vDqipi8" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6069.801053786012!2d-64.51685954821883!3d-31.37109750552036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6619b38604a9%3A0xfb7e871dca236fe2!2sPeko&#39;s%20Multiparque!5e0!3m2!1ses-419!2sar!4v1655059578223!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceinfo("user-device");
  webCam("webcam")
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormV();
});

//eventos del teclado, (atajos), dentro del objeto keyboardevent, el keycode es una propiedad muy importante ya que cada tecla tiene un codigo.
//keydown es cuando pulsamos la tecla.
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

/* keyup es cuando soltamos la tecla
d.addEventListener("keyup", (e) => {
  shortcuts(e);
}); */

/*  press es cuando tenemos precionada la tecla 
d.addEventListener("keypress", (e) => {
  shortcuts(e);
}); */


networkStatus();
speechReader();
