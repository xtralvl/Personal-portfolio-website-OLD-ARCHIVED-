// Coding Time Counter //

const codingTime = document.getElementById("coding-time");
const startTime = new Date("2025-01-03T12:00:00");

function updateCounter() {
const now = new Date();
const elapsedTime = now - startTime; // Elapsed time in milliseconds //
const minutes = Math.floor(elapsedTime / 60000);
const seconds = Math.floor((elapsedTime % 60000) / 1000);
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
const secondText = seconds === 1 ? 'second' : 'seconds'; // Pluralize if necessary

codingTime.textContent = `I started to code approximately ${minutes} minutes and ${formattedSeconds} ${secondText} ago.`;
};

setInterval(updateCounter, 1000);

