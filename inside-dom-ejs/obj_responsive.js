const d = document,
  w = window;

export default function responsiveMedia(
  id,
  mediaQuery,
  mobileContent,
  desktopContent
) {
  let breakpoint = w.matchMedia(mediaQuery);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    console.log("MQ", breakpoint, (e.matches));
  };

  breakpoint.addEventListener("change", responsive); //esto para hacer el responsive
  responsive(breakpoint); //esto es para ejecutar el cambio del documento
}


