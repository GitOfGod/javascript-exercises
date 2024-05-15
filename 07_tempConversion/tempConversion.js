const convertToCelsius = function(temp) {
  let celsius = (5/9)*(temp - 32);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = ((9/5)*temp) + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
