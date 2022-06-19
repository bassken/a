//aca trabajaremos con la api de intersection observer (video anterior)
//los videos por default, se reproducirian igualaunque cambiemos de pestaña, por ende debemos pausarla. el objeto document tiene una propiedad document.visibilityState y el window tiene window.visibilityChange

const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer = new IntersectionObserver(cb, { treshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}
