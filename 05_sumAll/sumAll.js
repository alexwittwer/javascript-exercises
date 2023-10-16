const sumAll = function (a, b) {
  //we dont need no function
  //they asked gauss to do this in grade school
  //famously as a way to keep him preoccupied
  //but instead he came up with this elegant summation
  // n(n-1)/2
  if ((typeof a && typeof b != "number") || a * b < 0) {
    return "ERROR";
  } else if (a > b) {
    return (a * (a + 1)) / 2;
  } else if (b > a) {
    return (b * (b + 1)) / 2;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
