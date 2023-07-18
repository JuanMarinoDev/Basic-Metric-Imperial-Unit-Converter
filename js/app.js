/*________________________________________________________________
  ---------  Metric/Imperial Unit Converter JavaScript  ----------
  ----------------------------------------------------------------*/
const metersToFeet = document.querySelector('.meters');
const feetToMeters = document.querySelector('.feet');
const litersToGallons = document.querySelector('.liters');
const gallonsToLiters = document.querySelector('.gallons');
const kilosToPounds = document.querySelector('.kilograms');




const poundsToKilos = document.querySelector('.pounds');

const convert = function() {
    let unit = parseFloat(document.querySelector(".unit-container").value);
    // Conversion 1: Meters to Feet
    let metersToFeetConversion = Math.floor(unit * 3.28084 * 1000) / 1000;
    metersToFeet.innerHTML = `${unit} meters = ${metersToFeetConversion} feet`;
    // Conversion 2: Feet to Meters
    let feetToMetersConversion = Math.floor(unit * 0.3048 * 1000) / 1000;
    feetToMeters.innerHTML = `${unit} feet = ${feetToMetersConversion} meters`;
    // Conversion 3: Liters to Gallons
    let litersToGallonsConversion = Math.floor(unit * 0.264172 * 1000) / 1000;
    litersToGallons.innerHTML = `${unit} liters = ${litersToGallonsConversion} gallons`;
    // Conversion 4: Gallons to Liters
    let gallonsToLitersConversion = Math.floor(unit * 3.78541 * 1000) / 1000;
    gallonsToLiters.innerHTML = `${unit} gallons = ${gallonsToLitersConversion} liters`;
    // Conversion 5: Kilos to Pounds
    let kilosToPoundsConversion = Math.floor(unit * 2.20462 * 1000) / 1000;
    kilosToPounds.innerHTML = `${unit} kilos = ${kilosToPoundsConversion} pounds`;
    // Conversion 6: Pounds to Kilos
    let poundsToKilosConversion = Math.floor(unit * 0.453592 * 1000) / 1000;
    poundsToKilos.innerHTML = `${unit} pounds = ${poundsToKilosConversion} kilos`;


    



};














