document.addEventListener("DOMContentLoaded", () => {

  /* ELEMENTOS QUE APARECEN AL HACER SCROLL */

  const elementos = document.querySelectorAll(
    ".card, .foco-card, .paso, .preguntas-telefono div, " +
    ".preguntas-finales > div, .nota, .conexion, .union-focos"
  );

  elementos.forEach(elemento => {
    elemento.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elementos.forEach(elemento => {
    observer.observe(elemento);
  });


  /* TÍTULOS */

  const titulos = document.querySelectorAll(
    ".section h2, .section-label, .section-number"
  );

  titulos.forEach(titulo => {
    titulo.classList.add("reveal-title");
  });

  const titleObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-title");
          titleObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  titulos.forEach(titulo => {
    titleObserver.observe(titulo);
  });


  /* TELÉFONO */

  const telefono = document.querySelector(".telefono-icon");

  if (telefono) {

    telefono.addEventListener("click", () => {

      telefono.classList.remove("ringing");

      void telefono.offsetWidth;

      telefono.classList.add("ringing");

      setTimeout(() => {
        telefono.classList.remove("ringing");
      }, 900);

    });

  }


  /* PREGUNTAS DEL TELÉFONO */

  const preguntas = document.querySelectorAll(
    ".preguntas-telefono div"
  );

  preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

      preguntas.forEach(item => {
        item.classList.remove("pregunta-activa");
      });

      pregunta.classList.add("pregunta-activa");

    });

  });


  /* SCROLL SUAVE */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const destino = document.querySelector(
        link.getAttribute("href")
      );

      if (destino) {

        event.preventDefault();

        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});
