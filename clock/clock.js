

function clock() {
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, 0);
    let meridiem = hour > 12 ? "PM" : "AM"
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0)
    let min = now.getMinutes().toString().padStart(2, 0);
    let sec = now.getSeconds().toString().padStart(2, 0);

    let time = `${hour}:${min}:${sec} ${meridiem}`;

    document.querySelector('.clock').innerHTML = time;
}

clock();
setInterval(clock, 1000)