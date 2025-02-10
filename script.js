const textBox = document.getElementById("textBox");
const myFahrenheit = document.getElementById("myFahrenheit");
const myCelsius = document.getElementById("myCelsius");
const resultTemp = document.getElementById("resultTemp");

let temp;

function  convert(){
    
    if(myFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        resultTemp.textContent = temp.toFixed(1) +  " Fahrenheit";
    }
    else if (myCelsius.checked){
        temp = Number(textBox.value);
        temp = ( temp - 32 * 5 / 9);
        resultTemp.textContent = temp.toFixed(1) + " Celsius";
    }
    else{
        resultTemp.textContent = `You need to select an unit`;
    }

}