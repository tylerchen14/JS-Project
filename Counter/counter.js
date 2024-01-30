const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const countlabel = document.querySelector('.countlabel');

let count = 0;

increase.addEventListener('click', () => {
    count++;
    countlabel.innerHTML = count;
})


decrease.addEventListener('click', ()=>{
    count--;
    countlabel.innerHTML=count;
})

reset.addEventListener('click',()=>{
    count=0;
    countlabel.innerHTML=count;
})