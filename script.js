var display = document.getElementById('display');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
var rangeInput = document.getElementById("myRange")
var decimal = document.getElementById("decimal_display");
var currentValue = rangeInput.value;
rangeInput.value = 75;

rangeInput.addEventListener("change", function() {
  function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

  console.log(convertToBinary(rangeInput.value) );
  display.textContent = convertToBinary(rangeInput.value);
  decimal_display.textContent = rangeInput.value;
});
minInput.addEventListener('change', updateRange);
maxInput.addEventListener('change', updateRange);
function updateRange() {
    rangeInput.min = minInput.value;
    rangeInput.max = maxInput.value;
  }

const
  range = document.getElementById('myRange'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
