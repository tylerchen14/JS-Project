const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`在 ${min} 與 ${max} 之間猜一個數字`)
    guess = Number(guess)

    if (isNaN(guess)) {
        alert("請輸入數字")
    } else if (guess < min && guess > max) {
        alert("請輸入正確數字")
    } else {
        attempts++
        if (guess < answer) {
            alert("高一點")
        } else if (guess > answer) {
            alert("低一點")
        }else{
            alert(`你猜對了！ 答案是 ${answer}，你總共猜了 ${attempts} 次`)
            running = false;
        }
    }}