const mensajeElemento = document.getElementById("mensaje");
const nombreElemento = document.getElementById("nombre");

const nombrePersona = "Rosa Mercedes Mayumi 🌹";
nombreElemento.textContent = nombrePersona;

const mensajeTexto =
`Querida ${nombrePersona},

Hoy quiero recordarte lo especial que eres ✨
Gracias por cada sonrisa, cada momento y cada emoción compartida 💕
Que este día quede guardado para siempre en el corazón 🌹`;

let index = 0;
let lluviaFinal = false;

// ✉️ Abrir carta
function abrirCarta() {
    const sobre = document.getElementById("sobre");
    if (sobre.classList.contains("abierto")) return;
    sobre.classList.add("abierto");
}

// ✍️ Efecto escritura
function escribirTexto() {
    if (index < mensajeTexto.length) {
        mensajeElemento.textContent += mensajeTexto.charAt(index);
        index++;
        setTimeout(escribirTexto, 40);
    }
}
escribirTexto();

// 🎁 Sorpresa
function sorpresa() {
    document.getElementById("oculto").style.display = "block";
    generarMagia();

    if (!lluviaFinal) {
        lluviaFinal = true;
        lluviaDeRosas();
    }
}

// 💫 Brillos y estrellas
function generarMagia() {
    setInterval(() => {
        const e = document.createElement("div");
        e.className = "flotante";
        e.textContent = ["💖","✨","⭐"][Math.floor(Math.random() * 3)];
        e.style.left = Math.random() * 100 + "vw";
        e.style.fontSize = (14 + Math.random() * 18) + "px";
        e.style.animationDuration = (5 + Math.random() * 4) + "s";
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 9000);
    }, 700);
}

// 🌹 Lluvia de rosas
function lluviaDeRosas() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const rosa = document.createElement("div");
            rosa.className = "rosa-final";
            rosa.textContent = "🌹";
            rosa.style.left = Math.random() * 100 + "vw";
            rosa.style.fontSize = (20 + Math.random() * 20) + "px";
            document.body.appendChild(rosa);
            setTimeout(() => rosa.remove(), 6000);
        }, i * 150);
    }
}

// 🌙 / 🌸 Cambiar modo
function cambiarModo() {
    document.body.classList.toggle("noche");
    document.body.classList.toggle("rosa");
}

// 🪟 Bienvenida
function cerrarBienvenida() {
    const b = document.getElementById("bienvenida");
    if (b) b.style.display = "none";
}

window.addEventListener("load", () => {
    const b = document.getElementById("bienvenida");
    if (b) b.style.display = "flex";
});