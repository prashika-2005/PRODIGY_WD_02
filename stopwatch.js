let timerInterval;
let milliseconds = 0, seconds = 0, minutes = 0;
let isRunning = false;

const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startPauseBtn.textContent = 'Pause';
        timerInterval = setInterval(updateTime, 10);
    } else {
        isRunning = false;
        startPauseBtn.textContent = 'Start';
        clearInterval(timerInterval);
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timerInterval);
    milliseconds = seconds = minutes = 0;
    updateDisplay();
    startPauseBtn.textContent = 'Start';
    lapsList.innerHTML = '';
}

function lapStopwatch() {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('minutes').textContent = formatTime(minutes);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

startPauseBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', lapStopwatch);
