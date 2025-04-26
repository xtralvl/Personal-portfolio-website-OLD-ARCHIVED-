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


// Dark-Light Mode Switch //

const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
const icons = document.getElementById('modebuttons');

// Light Mode Styles //
lightIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    darkIcon.style.opacity = '0.5';
    lightIcon.style.opacity = '1';
    lightIcon.style.transform = 'scale(1.1)';
    darkIcon.style.transform = 'scale(0.8)';
    icons.style.border = '2px solid black';

});

// Dark Mode Styles //
darkIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0.5';
    darkIcon.style.color = 'black';
    lightIcon.style.color = 'black';
    lightIcon.style.transform = 'scale(0.8)';
    darkIcon.style.transform = 'scale(1.1)';
    icons.style.border = '2px solid #87cefa';
});
