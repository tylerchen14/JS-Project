let display = document.querySelector('.display')

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;


function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    running = false;
    display.innerHTML = "00:00:00:00"
}

function update() {
    let currentTime = Date.now()
    elapsedTime = currentTime - startTime

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let secs = Math.floor(elapsedTime / 1000 % 60)
    let mill = Math.floor(elapsedTime % 1000 / 10)

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    mill = String(mill).padStart(2, "0");

    display.innerHTML = `${hours}:${minutes}:${secs}:${mill}`
}