const roulette = document.querySelector("#roulette");
const spinButton = document.querySelector("#spin");
const resetButton = document.querySelector("#reset");

const maxSpins = 40;
const minSpins = 1;

const maxDegrees = 720;
const minDegrees = 1;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Obtener la referencia al audio
const rouletteSound = document.getElementById("roulette-sound");

// Reproducir el audio cuando la ruleta comience a girar
function startRoulette() {
    rouletteSound.play();
}

// Detener el audio cuando la ruleta se detenga
function stopRoulette() {
    rouletteSound.pause();
    rouletteSound.currentTime = 0;
}

spinButton.addEventListener("click", () => {
    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = 4;

    startRoulette(); // Agregar esta línea para iniciar la reproducción del audio

    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transition = `transform ${animationTime}s cubic-bezier(0.1, 0.8, 0.1, 1)`;

    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";

    // Agregar esta línea para detener la ruleta después de 4 segundos
    setTimeout(() => {
        roulette.style.transition = "none";
        stopRoulette(); // Detener la reproducción del audio
        spinButton.style.display = "inline-block";
        resetButton.style.display = "none";
    }, animationTime * 1000);
});

resetButton.addEventListener("click", () => {
    roulette.style.transform = "rotate(0deg)";
    roulette.style.transitionDuration = "2s";
    spinButton.style.display = "inline-block";
    resetButton.style.display = "none";
});
