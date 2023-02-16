const meter = 3.28084; //feet
const liter = 0.264172; //gallon
const kilogram = 2.20462; //pound
const ft = 0.3048; //meter
const gallon = 3.78541; // liter
const pounds = 0.453592; //kilogram
const input = document.getElementById("input");
const meterText = document.querySelector(".meter");
const literText = document.querySelector(".liter");
const kilogramText = document.querySelector(".kilogram");
const btn = document.getElementById("btn");

window.addEventListener("load", () => {
  input.value = 20;
  input.setAttribute("placeholder", input.value);
});
input.addEventListener("focus", () => {
  input.value = "";
  input.setAttribute("placeholder", input.value);
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    input.setAttribute("placeholder", input.value);
    let meterToFt = input.value * meter;
    let ftToNumber = parseFloat(meterToFt).toFixed(3);
    let literToGalon = input.value * liter;
    let gallonToNumber = parseFloat(literToGalon).toFixed(3);
    let kilogramToPounds = input.value * kilogram;
    let poundToNumber = parseFloat(kilogramToPounds).toFixed(3);

    let ftToMeter = input.value * ft;
    let gallonToLiter = input.value * gallon;
    let meterToNumber = parseFloat(ftToMeter).toFixed(3);
    let literToNumber = parseFloat(gallonToLiter).toFixed(3);
    let poundsToKilogram = input.value * pounds;
    let kilogramToNumber = parseFloat(poundsToKilogram).toFixed(3);

    meterText.textContent = `${input.value} meters  = ${ftToNumber} feet  | ${input.value} feet = ${meterToNumber} meters`;

    literText.textContent = `${input.value} liters  = ${gallonToNumber} gallons  | ${input.value} gallons = ${literToNumber} liters`;

    kilogramText.textContent = `${input.value} kilos  = ${poundToNumber} pounds  | ${input.value} pounds = ${kilogramToNumber} kilos`;
  }

  input.value = "";
});
