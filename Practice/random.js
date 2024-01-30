const rolldice=document.querySelector('.rolldice')
const rolllabel_1=document.querySelector('.rolllabel_1')
const rolllabel_2=document.querySelector('.rolllabel_2')
const rolllabel_3=document.querySelector('.rolllabel_3')

const min=1;
const max=6;

let num1;
let num2;
let num3;

rolldice.addEventListener('click',()=>{
    num1=Math.floor(Math.random()*max)+min;
    num2=Math.floor(Math.random()*max)+min;
    num3=Math.floor(Math.random()*max)+min;
    rolllabel_1.innerHTML=num1;
    rolllabel_2.innerHTML=num2;
    rolllabel_3.innerHTML=num3;
})