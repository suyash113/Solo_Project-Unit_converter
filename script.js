let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')

const btn = document.getElementById('btn')

btn.addEventListener("click", function() {
    const input = document.getElementById('input')
    const inputValue = Number(input.value)

    if(!inputValue) {
        alert("Add Number to convert")
    }else{
        length.textContent = `${inputValue} meters = ${(inputValue*3.28084).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.28084).toFixed(3)} meters` 
        volume.textContent = `${inputValue} liters = ${(inputValue/3.78541).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue*3.78541).toFixed(3)} liters` 
        mass.textContent = `${inputValue} kilos = ${(inputValue*2.20462).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.20462).toFixed(3)} kilos` 
    }
})