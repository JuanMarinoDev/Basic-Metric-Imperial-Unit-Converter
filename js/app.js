/*________________________________________________________________
  ---------  Metric/Imperial Unit Converter JavaScript  ----------
  ----------------------------------------------------------------*/
const metersToFeet = document.querySelector('.meters');

//p class="meters"
const convert = function() {
    let unit = parseFloat(document.querySelector(".unit-container").value);
    let metersToFeetConversion = Math.floor(unit * 3.28084 * 1000) / 1000;
    metersToFeet.innerHTML = `${unit} meters = ${metersToFeetConversion} feet`;
};














