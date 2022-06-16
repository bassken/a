const d = document,
  n = navigator,
  ua = n.userAgent; //si mandamos a consola, muestra datos del navegador que usa el user, incluso si lo cambiamos a movil la visualizacion.

export default function userDeviceinfo(id) {
  /* console.log(ua); */
  const $id = d.getElementById(id),
    //ismobile, isdesktop, isbrowser son 3 objetos
    isMobile = {
      android: () => ua.match(/android/i), //busca si existe la palabra android dentro del useragent del user
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    //android, ios, windows = declaradas. any = anonima. porque any hace referencia a las otras 3 propiedades, si fuera declarada haaria referencia a la funcion userdeviceinfo

    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.opera() ||
          this.firefox()
        );
      },
    };

  /*   console.log(isMobile.android());
  console.log(ua);
  console.log(isDesktop.safari());
  console.log(isBrowser.chrome()); */
  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${
        isMobile.any() ? isMobile.any() : isDesktop.any()
      }<b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
            `;

  //contenido exclusivo
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark><b>Este contenido solo se ve en Chrome</b></mark></p>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark><b>Este contenido solo se ve en Firefox</b></mark></p>`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark><b>Descarga el programa para Linux</b></mark></p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark><b>Descarga el programa para Chrome</b></mark></p>`;
  }

  //redirecciones
  if (isMobile.android()) {
    window.location.href = `https://www.google.com`;
  }
}
