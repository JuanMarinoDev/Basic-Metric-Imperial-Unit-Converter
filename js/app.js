/*________________________________________________________________
  ---------  Metric/Imperial Unit Converter JavaScript  ----------
  ----------------------------------------------------------------*/
const metersToFeet = document.querySelector('.meters');
const feetToMeters = document.querySelector('.feet');
const litersToGallons = document.querySelector('.liters');
//p class="meters"
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
    // console.log(litersToGallons);
};














