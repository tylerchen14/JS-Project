const textbox=document.querySelector('#textbox')
const tocelsius=document.querySelector('#tocelsius')
const tofahren=document.querySelector('#tofahren')
const result=document.querySelector('.result')

let temp;

function convert(){

    if(tocelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.innerHTML=temp.toFixed(1)+"°C"
    }
    else if(tofahren.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.innerHTML=temp.toFixed(1)+"°F"
    }
    else{
        result.innerHTML="從上方點選項目";
    }


}