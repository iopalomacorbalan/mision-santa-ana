/* =========================================================
   COMISIÓN ADULTOS · MISIÓN SANTA ANA 2026
   style.css
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');


/* =========================
   VARIABLES
========================= */

:root {
  --crema: #f5f0e6;
  --crema-claro: #fbf8f2;
  --verde: #40513b;
  --verde-oscuro: #273524;
  --verde-suave: #dce4d6;
  --tierra: #a46f48;
  --tierra-claro: #d8b28f;
  --arena: #e8dcc8;
  --texto: #33352f;
  --texto-suave: #6c7066;
  --blanco: #ffffff;

  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'DM Sans', Arial, sans-serif;

  --radio: 24px;
  --sombra: 0 15px 45px rgba(39, 53, 36, 0.08);
}


/* =========================
   RESET
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--sans);
  background: var(--crema-claro);
  color: var(--texto);
  line-height: 1.7;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}


/* =========================
   ESTRUCTURA GENERAL
========================= */

.section {
  padding: 110px 25px;
  position: relative;
}

.section-alt {
  background: var(--crema);
}

.container {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.container-small {
  width: min(800px, 100%);
  margin: 0 auto;
}

.section-number {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--tierra);
  margin-bottom: 8px;
}

.section-number.light {
  color: var(--tierra-claro);
}

.section-label {
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--texto-suave);
  margin-bottom: 28px;
}

.section-label.light {
  color: rgba(255, 255, 255, 0.55);
}

h2 {
  font-family: var(--serif);
  font-weight: 500;
  color: var(--verde-oscuro);
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  line-height: 1.12;
  margin-bottom: 30px;
}

.section-intro {
  max-width: 720px;
  font-size: 1.08rem;
  color: var(--texto-suave);
  margin-bottom: 22px;
}


/* =========================================================
   HERO / PORTADA
========================================================= */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 70px 25px;

  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(220, 228, 214, 0.85),
      transparent 45%
    ),
    var(--crema-claro);

  position: relative;
  overflow: hidden;
}


/* círculo decorativo */

.hero::before {
  content: "";
  position: absolute;

  width: 450px;
  height: 450px;

  border: 1px solid rgba(64, 81, 59, 0.10);
  border-radius: 50%;

  top: -170px;
  right: -140px;
}

.hero::after {
  content: "";
  position: absolute;

  width: 300px;
  height: 300px;

  background: rgba(164, 111, 72, 0.05);
  border-radius: 50%;

  bottom: -150px;
  left: -100px;
}

.hero-content {
  max-width: 850px;
  position: relative;
  z-index: 2;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--tierra);
  margin-bottom: 25px;
}

.hero-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero h1 {
  font-family: var(--serif);
  color: var(--verde-oscuro);

  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 500;

  line-height: 0.88;
  letter-spacing: -3px;

  margin-bottom: 40px;
}

.hero-frase {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin: 0 auto 25px;
  max-width: 650px;
}

.hero-frase strong {
  color: var(--verde);
}

.hero-intro {
  max-width: 620px;
  margin: 0 auto 40px;

  color: var(--texto-suave);
  font-size: 1rem;
}

.btn-scroll {
  display: inline-block;

  background: var(--verde-oscuro);
  color: white;

  padding: 15px 25px;

  border-radius: 50px;

  font-size: 0.9rem;
  font-weight: 500;

  transition: 0.3s ease;
}

.btn-scroll:hover {
  transform: translateY(-3px);
  background: var(--verde);
}


/* =========================================================
   01 · PUNTO DE PARTIDA
========================================================= */

.cita {
  color: var(--tierra);
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 45px;
}

.texto-destacado {
  font-size: 1.3rem;
  max-width: 700px;
  margin-bottom: 20px;
}

#punto-partida .container > p:not(.section-label):not(.cita) {
  max-width: 750px;
}


/* elementos parábola */

.elementos-parabola {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 70px;

  background: white;

  padding: 40px;

  border-radius: var(--radio);
  box-shadow: var(--sombra);
}

.elemento {
  text-align: center;
  flex: 1;
}

.elemento span {
  font-size: 2.8rem;
  display: block;
  margin-bottom: 10px;
}

.elemento p {
  font-weight: 600;
}

.flecha {
  color: var(--tierra-claro);
  font-size: 1.4rem;
}


/* =========================================================
   02 · CARDS
========================================================= */

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  margin-top: 55px;
}

.card {
  background: var(--crema-claro);

  padding: 38px;

  border-radius: var(--radio);

  border: 1px solid rgba(64, 81, 59, 0.08);

  transition: 0.35s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sombra);
}

.card-icon {
  font-size: 2.3rem;
  display: block;
  margin-bottom: 22px;
}

.card h3 {
  font-family: var(--serif);
  color: var(--verde-oscuro);

  font-size: 1.55rem;
  margin-bottom: 14px;
}

.card p {
  color: var(--texto-suave);
  font-size: 0.95rem;
}


/* =========================================================
   03 · OBJETIVO
========================================================= */

.objetivo {
  text-align: center;

  background:
    radial-gradient(
      circle at center,
      rgba(220, 228, 214, 0.65),
      transparent 60%
    ),
    var(--crema-claro);
}

.objetivo blockquote {
  font-family: var(--serif);

  font-size: clamp(1.7rem, 4vw, 2.7rem);
  line-height: 1.45;

  color: var(--verde-oscuro);

  margin: 45px auto 55px;
}

.objetivo blockquote strong {
  color: var(--tierra);
}

.no-buscamos {
  background: white;

  padding: 30px;

  border-radius: var(--radio);

  box-shadow: var(--sombra);

  margin-bottom: 45px;
}

.no-buscamos p {
  padding: 8px 0;
  color: var(--texto-suave);
}

.gran-frase {
  font-family: var(--serif);
  font-size: 2rem;
  color: var(--verde-oscuro);
}


/* =========================================================
   04 · RECORRIDO
========================================================= */

.recorrido {
  margin: 60px 0;
}

.paso {
  display: flex;
  align-items: center;
  gap: 25px;

  background: var(--crema-claro);

  padding: 20px 25px;

  border-radius: 18px;
}

.paso span {
  font-size: 0.7rem;
  font-weight: 700;

  color: var(--tierra);

  letter-spacing: 1px;
}

.paso p {
  font-family: var(--serif);
  font-size: 1.35rem;

  color: var(--verde-oscuro);
}

.linea {
  width: 1px;
  height: 25px;

  background: var(--tierra-claro);

  margin-left: 38px;
}

.nota {
  background: var(--verde-suave);

  padding: 22px 26px;

  border-radius: 16px;

  font-size: 0.95rem;
}


/* =========================================================
   05 · TELÉFONO
========================================================= */

.telefono-section {
  background: var(--verde-oscuro);
  color: rgba(255, 255, 255, 0.82);
}

.telefono-section h2 {
  color: white;
}

.telefono-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;

  gap: 70px;
  align-items: center;

  margin-top: 40px;
}

.telefono-visual {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 350px;

  border: 1px solid rgba(255,255,255,0.1);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(164,111,72,0.25),
      transparent 65%
    );
}

.telefono-icon {
  font-size: clamp(7rem, 15vw, 12rem);

  transform: rotate(-8deg);

  filter: drop-shadow(
    0 20px 25px rgba(0,0,0,0.25)
  );
}

.telefono-content p {
  margin-bottom: 20px;
}

.pregunta-principal {
  font-family: var(--serif);

  font-size: clamp(1.6rem, 3vw, 2.4rem);

  color: var(--tierra-claro);

  padding: 25px 0;

  margin: 25px 0;

  border-top: 1px solid rgba(255,255,255,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.15);
}


/* preguntas */

.preguntas-telefono {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 15px;

  margin: 70px 0;
}

.preguntas-telefono div {
  border: 1px solid rgba(255,255,255,0.12);

  padding: 22px;

  border-radius: 15px;

  color: white;

  transition: 0.3s ease;
}

.preguntas-telefono div:hover {
  background: rgba(255,255,255,0.06);
}


/* conexión */

.conexion {
  text-align: center;

  max-width: 750px;

  margin: 0 auto;

  padding-top: 20px;
}

.conexion h3 {
  font-family: var(--serif);

  color: var(--tierra-claro);

  font-size: clamp(2rem, 4vw, 3.3rem);

  margin: 15px 0 25px;
}

.conexion-final {
  margin-top: 40px;

  padding: 30px;

  border-radius: 20px;

  background: rgba(255,255,255,0.06);

  font-family: var(--serif);

  font-size: 1.3rem;

  color: white;
}


/* =========================================================
   06 · FOCOS
========================================================= */

.focos-section {
  background: var(--crema-claro);
}

.focos-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;

  margin-top: 60px;
}

.foco-card {
  background: white;

  padding: 30px 24px;

  border-radius: 22px;

  border: 1px solid rgba(64,81,59,0.08);

  transition: 0.35s ease;
}

.foco-card:hover {
  transform: translateY(-7px);
  box-shadow: var(--sombra);
}

.foco-card > span {
  font-size: 2.5rem;

  display: block;

  margin-bottom: 20px;
}

.foco-card h3 {
  font-family: var(--serif);

  font-size: 1.5rem;

  color: var(--verde-oscuro);

  margin-bottom: 14px;
}

.foco-pregunta {
  font-weight: 600;

  margin-bottom: 15px;
}

.foco-card small {
  color: var(--texto-suave);

  line-height: 1.6;
}


/* unión */

.union-focos {
  max-width: 750px;

  margin: 80px auto 0;

  text-align: center;

  background: var(--verde-suave);

  padding: 45px 35px;

  border-radius: var(--radio);
}

.union-focos > p:first-child,
.union-focos > p:nth-child(2),
.union-focos > p:nth-child(3) {
  font-size: 1.4rem;
  margin: 8px;
}

.union-focos h3 {
  font-family: var(--serif);

  color: var(--verde-oscuro);

  font-size: clamp(2rem, 5vw, 3.4rem);

  margin: 25px 0;
}

.union-focos p {
  margin-top: 15px;
}


/* =========================================================
   07 · CIERRE
========================================================= */

.cierre {
  min-height: 100vh;

  display: flex;
  align-items: center;

  text-align: center;

  background: var(--verde-oscuro);

  color: rgba(255,255,255,0.8);
}

.cierre h2 {
  color: white;
}

.cierre-icon {
  font-size: 3rem;

  margin: 20px 0;
}

.cierre-intro {
  font-family: var(--serif);

  font-size: 1.4rem;

  margin-bottom: 60px;
}

.cierre-intro strong {
  color: var(--tierra-claro);
}


/* preguntas */

.preguntas-finales {
  text-align: left;
}

.preguntas-finales > div {
  display: grid;

  grid-template-columns: 50px 1fr;

  gap: 20px;

  padding: 25px 0;

  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.preguntas-finales span {
  color: var(--tierra-claro);

  font-size: 0.75rem;

  font-weight: 700;
}

.preguntas-finales p {
  font-family: var(--serif);

  font-size: 1.25rem;

  color: white;
}


/* frase final */

.frase-final {
  margin-top: 90px;
}

.frase-final p {
  font-size: 0.85rem;

  text-transform: uppercase;

  letter-spacing: 2px;

  color: rgba(255,255,255,0.45);
}

.frase-final h3 {
  font-family: var(--serif);

  font-size: clamp(2.8rem, 7vw, 5rem);

  font-weight: 500;

  color: var(--tierra-claro);

  margin: 5px 0 15px;
}

.frase-final span {
  font-size: 2.5rem;
}

.firma {
  margin-top: 80px;

  font-size: 0.75rem;

  letter-spacing: 1px;

  color: rgba(255,255,255,0.35);
}


/* =========================================================
   RESPONSIVE · CELULAR
========================================================= */

@media (max-width: 850px) {

  .section {
    padding: 85px 20px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .focos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .telefono-grid {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .telefono-visual {
    min-height: 280px;

    max-width: 280px;

    width: 100%;

    margin: auto;
  }

  .elementos-parabola {
    flex-wrap: wrap;

    gap: 20px;
  }

  .elemento {
    min-width: 40%;
  }

  .flecha {
    display: none;
  }

}


/* =========================
   CELULARES PEQUEÑOS
========================= */

@media (max-width: 550px) {

  .hero {
    min-height: 100svh;
  }

  .hero h1 {
    letter-spacing: -2px;
  }

  .hero-intro {
    font-size: 0.92rem;
  }

  .elementos-parabola {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    padding: 25px 15px;
  }

  .elemento span {
    font-size: 2.2rem;
  }

  .cards {
    gap: 15px;
  }

  .card {
    padding: 28px 25px;
  }

  .focos-grid {
    grid-template-columns: 1fr;
  }

  .foco-card {
    padding: 28px;
  }

  .preguntas-telefono {
    grid-template-columns: 1fr;
  }

  .telefono-icon {
    font-size: 8rem;
  }

  .union-focos {
    padding: 35px 22px;
  }

  .paso {
    padding: 18px;
  }

  .paso p {
    font-size: 1.15rem;
  }

  .preguntas-finales > div {
    grid-template-columns: 35px 1fr;
  }

  .preguntas-finales p {
    font-size: 1.1rem;
  }

}


/* =========================================================
   SELECCIÓN DE TEXTO
========================================================= */

::selection {
  background: var(--verde);
  color: white;
}
