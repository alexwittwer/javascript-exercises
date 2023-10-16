//function to remove punctuation from string
const removePunctuation = function (string) {
  //turn string into array
  let string_original = string.split("");
  //removes punctuation
  let punctuation_arr = [" ", ",", ".", "?", "!", ";", ":", "-"];
  let string_original_nopunc = string_original.filter(
    (char) => !punctuation_arr.includes(char)
  );
  return string_original_nopunc.join("");
};

//function to reverse string for comparison.
const reverseString = function (stringInput) {
  let stringReverse = [];
  let j = 0;

  for (let i = stringInput.length - 1; i >= 0; i--) {
    stringReverse[j] = stringInput[i];
    j++;
  }

  return stringReverse.join("");
};

const palindromes = function (stringIn) {
  let string_original = stringIn.toLowerCase();
  let string_original_nopunc = removePunctuation(string_original);
  let string_reverse = reverseString(string_original_nopunc);

  if (string_original_nopunc === string_reverse) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
