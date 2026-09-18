// Mostrar una pantalla y ocultar las demás
function mostrarPantalla(id) {
    const pantallas = document.querySelectorAll(".screen");

    pantallas.forEach((pantalla) => {
        pantalla.classList.remove("active");
    });

    const siguiente = document.getElementById(id);

    if (siguiente) {
        siguiente.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// Abrir el sobre antes de mostrar la carta
let cartaAbierta = false;

function abrirCarta() {

    if (cartaAbierta) return;

    cartaAbierta = true;

    const sobre = document.querySelector(".envelope");
    const boton = document.querySelector("#inicio button");

    if (sobre) {
        sobre.classList.add("open");
    }

    if (boton) {
        boton.style.opacity = "0";
        boton.style.pointerEvents = "none";
    }

    // Dejamos que termine la animación del sobre
    setTimeout(() => {
        mostrarPantalla("carta1");
    }, 1500);
}


// Pequeño efecto especial cuando aparece el ticket
const ticketButton = document.querySelector(
    'button[onclick="mostrarPantalla(\'ticketScreen\')"]'
);

if (ticketButton) {

    ticketButton.addEventListener("click", () => {

        setTimeout(() => {
            crearDestellos();
        }, 400);

    });

}


// Destellos discretos para la revelación
function crearDestellos() {

    const cantidad = 14;

    for (let i = 0; i < cantidad; i++) {

        const destello = document.createElement("span");

        destello.innerHTML = "✦";
        destello.style.position = "fixed";

        destello.style.left =
            Math.random() * 100 + "vw";

        destello.style.top =
            Math.random() * 100 + "vh";

        destello.style.fontSize =
            (Math.random() * 10 + 8) + "px";

        destello.style.color = "#d9c49f";

        destello.style.pointerEvents = "none";
        destello.style.zIndex = "999";

        destello.style.opacity = "0";

        destello.style.transition =
            "opacity .6s ease, transform 1.5s ease";

        document.body.appendChild(destello);

        setTimeout(() => {

            destello.style.opacity = ".8";

            destello.style.transform =
                `translateY(-${Math.random() * 50 + 20}px) scale(1.4)`;

        }, i * 60);

        setTimeout(() => {

            destello.style.opacity = "0";

        }, 900 + i * 60);

        setTimeout(() => {

            destello.remove();

        }, 2000);

    }
}
