/* =========================================
   COMISIÓN ADULTOS · MISIÓN SANTA ANA 2026
   script.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     1. APARICIÓN AL HACER SCROLL
  ========================================= */

  const elementos = document.querySelectorAll(
    ".card, .foco-card, .paso, .preguntas-telefono div, " +
    ".preguntas-finales > div, .nota, .conexion, .union-focos"
  );

  elementos.forEach((elemento) => {
    elemento.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.15
    }
  );

  elementos.forEach((elemento) => {
    observer.observe(elemento);
  });


  /* =========================================
     2. ANIMACIÓN DE LAS SECCIONES
  ========================================= */

  const titulos = document.querySelectorAll(
    ".section h2, .section-label, .section-number"
  );

  titulos.forEach((titulo) => {
    titulo.classList.add("reveal-title");
  });

  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible-title");
          titleObserver.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.2
    }
  );

  titulos.forEach((titulo) => {
    titleObserver.observe(titulo);
  });


  /* =========================================
     3. TELÉFONO
  ========================================= */

  const telefono = document.querySelector(".telefono-icon");

  if (telefono) {

    telefono.addEventListener("mouseenter", () => {
      telefono.classList.add("ringing");
    });

    telefono.addEventListener("mouseleave", () => {
      telefono.classList.remove("ringing");
    });

    telefono.addEventListener("click", () => {

      telefono.classList.remove("ringing");

      void telefono.offsetWidth;

      telefono.classList.add("ringing");

      setTimeout(() => {
        telefono.classList.remove("ringing");
      }, 900);

    });

  }


  /* =========================================
     4. FOCOS
  ========================================= */

  const focos = document.querySelectorAll(".foco-card");

  focos.forEach((foco, index) => {

    foco.style.transitionDelay = `${index * 100}ms`;

  });


  /* =========================================
     5. PREGUNTAS DEL TELÉFONO
  ========================================= */

  const preguntas = document.querySelectorAll(
    ".preguntas-telefono div"
  );

  preguntas.forEach((pregunta) => {

    pregunta.addEventListener("click", () => {

      preguntas.forEach((item) => {
        item.classList.remove("pregunta-activa");
      });

      pregunta.classList.add("pregunta-activa");

    });

  });


  /* =========================================
     6. SCROLL SUAVE
  ========================================= */

  const linksInternos = document.querySelectorAll(
    'a[href^="#"]'
  );

  linksInternos.forEach((link) => {

    link.addEventListener("click", (event) => {

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
