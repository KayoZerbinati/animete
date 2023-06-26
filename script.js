let intensity = 1;
let intervalId;

function createBinaryDigit() {
    const digit = document.createElement("span");
    digit.className = "binary-digit";
    digit.innerHTML = Math.random() < 0.5 ? "0" : "1";
    digit.style.left = Math.random() * 100 + "%";
    digit.style.animationDuration = (2 / intensity) + "s";
    document.getElementById("binary-rain").appendChild(digit);
    digit.addEventListener("animationend", function() {
        digit.remove();
    });
}

function startAnimation() {
    intervalId = setInterval(createBinaryDigit, 100);
    setTimeout(decreaseIntensity, 60000); // Diminui a intensidade após 60 segundos
}

function decreaseIntensity() {
    clearInterval(intervalId);
    intensity = 0.5; // Define a nova intensidade
    setTimeout(increaseIntensity, 60000); // Aumenta a intensidade após 60 segundos
    startAnimation(); // Reinicia a animação com a nova intensidade
}

function increaseIntensity() {
    clearInterval(intervalId);
    intensity = 1; // Define a nova intensidade
    setTimeout(decreaseIntensity, 60000); // Diminui a intensidade após 60 segundos
    startAnimation(); // Reinicia a animação com a nova intensidade
}

startAnimation();
