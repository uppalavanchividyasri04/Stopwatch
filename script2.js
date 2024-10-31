// Variables to track time
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Display element
const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

// Function to format time
function formatTime(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Start the timer
document.getElementById('startBtn').onclick = function () {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 1000);
    }
};

// Pause the timer
document.getElementById('pauseBtn').onclick = function () {
    clearInterval(timerInterval);
    timerInterval = null;
};

// Reset the timer
document.getElementById('resetBtn').onclick = function () {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00:00";
    lapsContainer.innerHTML = ""; // Clear laps
};

// Record lap time
document.getElementById('lapBtn').onclick = function () {
    if (timerInterval) {
        const lapTime = formatTime(elapsedTime);
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap: ${lapTime}`;
        lapsContainer.appendChild(lapElement);
    }
};
