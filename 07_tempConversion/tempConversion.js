const convertToCelsius = function (temperature) {
  //(32°F − 32) × 5/9 = 0°C
  convertTemp = Math.round((((temperature - 32) * 5) / 9) * 10) / 10;

  return convertTemp;
};

const convertToFahrenheit = function (temperature) {
  //(0°C × 9/5) + 32 = 32°F
  convertTemp = Math.round(((temperature * 9) / 5 + 32) * 10) / 10;

  return convertTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
