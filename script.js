// ==========================================
// MISIÓN SANTA ANA 2026
// Guía interna - Comisión Adultos
// ==========================================


// ------------------------------------------
// 1. DESPLAZAMIENTO SUAVE
// ------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ------------------------------------------
// 2. CHECKLIST
// Guarda automáticamente lo que marcamos
// ------------------------------------------

const checks = document.querySelectorAll(
    '.checklist-section input[type="checkbox"]'
);


// Recuperamos lo que estaba marcado anteriormente

checks.forEach((check, index) => {

    const estadoGuardado = localStorage.getItem(
        `mision-adultos-check-${index}`
    );

    if (estadoGuardado !== null) {
        check.checked = estadoGuardado === "true";
    }


    // Guardamos cada cambio
    check.addEventListener("change", () => {

        localStorage.setItem(
            `mision-adultos-check-${index}`,
            check.checked
        );

        actualizarProgreso();

    });

});


// ------------------------------------------
// 3. PROGRESO DEL CHECKLIST
// ------------------------------------------

function actualizarProgreso() {

    const total = checks.length;

    const completados = [...checks].filter(
        check => check.checked
    ).length;

    const porcentaje =
        total === 0
            ? 0
            : Math.round((completados / total) * 100);


    // Si existe el contador en el HTML,
    // actualizamos sus valores.

    const contador = document.querySelector("#check-progress");

    if (contador) {

        contador.innerHTML = `
            <strong>${completados} de ${total}</strong>
            materiales preparados · ${porcentaje}%
        `;

    }


    // Actualizamos la barra de progreso

    const barra = document.querySelector("#progress-bar");

    if (barra) {
        barra.style.width = `${porcentaje}%`;
    }

}


// Ejecutamos una vez al cargar la página
actualizarProgreso();


// ------------------------------------------
// 4. EFECTO VISUAL AL MARCAR
// ------------------------------------------

checks.forEach(check => {

    function actualizarEstilo() {

        const label = check.closest("label");

        if (!label) return;

        if (check.checked) {
            label.classList.add("checked");
        } else {
            label.classList.remove("checked");
        }

    }


    actualizarEstilo();

    check.addEventListener("change", actualizarEstilo);

});


// ------------------------------------------
// 5. BOTÓN VOLVER ARRIBA
// ------------------------------------------

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";
botonArriba.className = "back-to-top";
botonArriba.setAttribute("aria-label", "Volver arriba");

document.body.appendChild(botonArriba);


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {
        botonArriba.classList.add("visible");
    } else {
        botonArriba.classList.remove("visible");
    }

});


botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ------------------------------------------
// 6. MENSAJE EN CONSOLA
// ------------------------------------------

console.log(
    "🌱 Misión Santa Ana 2026 · Guía Comisión Adultos"
);
