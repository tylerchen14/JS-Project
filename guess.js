const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`please guess a number between ${min} and ${max}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        alert("please enter a number!")
    } else if (guess < min && guess > max) {
        alert("please enter a VALID number!")
    } else {
        attempts++
        if (guess < answer) {
            alert("too low")
        } else if (guess > answer) {
            alert("too high")
        }else{
            alert(`WINNER! The answer is ${answer} and it took you ${attempts} attempts`)
            running = false;
        }
    }}