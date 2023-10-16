const reverseString = function (stringInput) {
  let stringReverse = [];
  let j = 0;

  for (let i = stringInput.length - 1; i >= 0; i--) {
    stringReverse[j] = stringInput[i];
    j++;
  }

  return stringReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
