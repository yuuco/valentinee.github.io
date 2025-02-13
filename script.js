const messages = [
    "Estás seguro?",
    "Realmente seguro??",
    "100% seguro?",
    "Di que chiii :c...",
    "Solo piensaloo",
    "Si me dices que no, estare muy triste...",
    "Muy tristee...",
    "Muuuuy peroo muuuuy triste...",
    "porfiiiii...",
    "DI QUE SII POR FAVOR!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.si-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "si_page.html";
}
