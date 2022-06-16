const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById("webcam");
  //console.log(n.mediaDevices.getUserMedia);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "afterend",
          `<br>Se produjo un error: <p><mark>${err}</mark></p>`
        );
      }); //esa funcion es una promesa
  }
}
