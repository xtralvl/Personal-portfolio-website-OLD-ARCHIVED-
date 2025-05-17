// Coding Time Counter //

/* const codingTime = document.getElementById("coding-time");
const startTime = new Date("2025-01-03T12:00:00");

function updateCounter() {
const now = new Date();
const elapsedTime = now - startTime; // Elapsed time in milliseconds //
const days = Math.floor(elapsedTime / 86400000); // days //
const minutes = Math.floor(elapsedTime / 60000); // minutes //
const seconds = Math.floor((elapsedTime % 60000) / 1000); // seconds //
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
const secondText = seconds === 1 ? 'second' : 'seconds'; // Pluralize if necessary

codingTime.textContent = `I started to code approximately ${days} days,  ${minutes} minutes and ${formattedSeconds} ${secondText} ago.`;
};

setInterval(updateCounter, 1000); */


// Dark-Light Mode Switch //

const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
const icons = document.getElementById('modebuttons');

// Light Mode Styles //
const lightMode = lightIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    darkIcon.style.opacity = '0.5';
    lightIcon.style.opacity = '1';
    lightIcon.style.transform = 'scale(1.1)';
    darkIcon.style.transform = 'scale(0.8)';
    icons.style.border = '2px solid black';
});

// Dark Mode Styles //
const darkMode = darkIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0.5';
    darkIcon.style.color = 'black';
    lightIcon.style.color = 'black';
    lightIcon.style.transform = 'scale(0.8)';
    darkIcon.style.transform = 'scale(1.1)';
    icons.style.border = '2px solid #87cefa';
});

// Scroll to the top arrow 
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    const scrolledFromTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = totalHeight - (scrolledFromTop + viewportHeight);

    if (window.scrollY > 100) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }

    if (distanceFromBottom < 70) {
        arrow.style.display = 'block';
        arrow.style.color = 'white';
    } else {
        arrow.style.color = 'black';
    }
});




// Mobile nav menu
const mobileNavIcon = document.getElementById('mobile-nav-icon');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNavList = document.getElementById('mobile-nav-list');

// Clicking in mobile nav hamburger icon, icon change to X //
mobileNavIcon.addEventListener('click', () => {
mobileNavIcon.style.display = 'none'; // Hamburger disapperars
  mobileNavClose.style.display = 'inline'; // X appears
  mobileNavList.style.display = 'block'; // menu elements appears
})

// Clicking in mobile nav x icon, icon change to hamburger //
mobileNavClose.addEventListener('click', () => {
    mobileNavIcon.style.display = 'inline'; // Hamburger appears
    mobileNavClose.style.display = 'none'; // X disappears
    mobileNavList.style.display = 'none'; // menu elements disappears
  });

