let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const laps = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function startStop() {
    if (!running) {
        startTimer();
    } else {
        stopTimer();
    }
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerHTML = timeToString(elapsedTime);
    }, 1000);
    startStopBtn.textContent = "Stop";
    running = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    startStopBtn.textContent = "Start";
    running = false;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = timeToString(elapsedTime);
        const lapElement = document.createElement('div');
        lapElement.textContent = lapTime;
        laps.appendChild(lapElement);
    }
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);