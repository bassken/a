const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `
    <p> Tu posicion actual es:</p>
    <ul>
      <li>Latitud: <b> ${coords.latitude}</b></li>
      <li>Longitud: <b> ${coords.longitude}</b></li>
      <li>Precision: <b> ${coords.accuracy}</b></li>
      </ul>
      <a href="https:www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target=_blank rel="noopener">Ver en Google Maps`;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err}: ${err.message}`);
  };

  //geolocation necesita una funcion en caso de exito, una en caso de error y las opciones
  n.geolocation.getCurrentPosition(success, error, options);
}

// enableHighAccuracy por default viene en false. en true hace que el dispositivo haga la mejor lectura posible.
//maximumage 0 hace que no se guarde en cache las lecturas, que no tenga como referencia la anterior
//existe otro metodo llamado watchposition que dice si la ubicacion ha tenido algun cambio
