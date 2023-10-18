let celciusInput=document.querySelector('#Celcius > input')
let fahrenheitInput=document.querySelector('#Fahrenheit > input')
let kelvinInput=document.querySelector('#Kelvin > input')
let btn=document.querySelector('.clear button')

function roundNumber(number){
    return Math.round(number*100)/100
}
   celciusInput.addEventListener("input",function(){
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15
    fahrenheitInput.value= roundNumber(fTemp)
    kelvinInput.value= roundNumber(kTemp)
 }
 )
 fahrenheitInput.addEventListener("input",function(){
    let fTemp=parseFloat(fahrenheitInput.value)
    let cTemp=(cTemp-32)*(5/9)
    let kTemp=(kTemp-32)+(5/9)*273.15
    Celcius.value= roundNumber(cTemp)
    kelvinInput.value= roundNumber(kTemp)
 }
 )
    kelvinInput.addEventListener("input",function(){
    let kTemp=parseFloat(kelvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(kTemp-273.15)*(9/5)+32
    celciusInput.value= roundNumber(cTemp)
    fahrenheitInput.value= roundNumber(fTemp)
 }
 )

 btn.addEventListener('click',()=>{
    celciusInput.value=""
    fahrenheitInput.value=""
    kelvinInput.value=""

 })