let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');


// To add leading 0s to numbers les than 10
function pad(num) {
    return num.toString().padStart(2, '0');
}


// How the stopwatch is to be displayed
function updateDisplay() {
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


// Start/Stop Function
function startStop () {
    if (!isRunning) {
        isRunning = true;
        startStopBtn.textContent = 'STOP';
        startStopBtn.classList.add('stop');

        intervalId = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }   
            updateDisplay();
        }, 1000);
    } else {
        isRunning = false;
        startStopBtn.textContent = 'CONTINUE';
        startStopBtn.classList.remove('stop');
        clearInterval(intervalId);
    }
}


// Reset Function
function reset () {
    clearInterval(intervalId);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'START';
    startStopBtn.classList.remove('stop');
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

updateDisplay();