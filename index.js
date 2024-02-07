const userInput = document.getElementById('user-input');
const userButton = document.getElementById('user-button');


userButton.addEventListener('click',function(){
    let num = userInput.value
    let roundOff=function(value){
        return (value).toFixed(3)
    }
    const answer = {
        toFeet   :roundOff(num * 3.281),
        toMeter  :roundOff(num * 0.304),
        toGallon :roundOff(num * 0.264),
        toLiter  :roundOff(num * 3.785),
        toPound  :roundOff(num * 2.204),
        toKilo   :roundOff(num * 0.453)  
    }   
    document.querySelector('.ansLength').textContent = `${num} meters = ${answer.toFeet} feet | ${num} feet = ${answer.toMeter} meters`;
    document.querySelector('.ansVolume').textContent = `${num} liters = ${answer.toGallon} gallons | ${num} gallons = ${answer.toLiter} liters`;
    document.querySelector('.ansMass').textContent   = `${num} kilos = ${answer.toPound} pounds | ${num} pounds = ${answer.toKilo} kilos`;
  
});