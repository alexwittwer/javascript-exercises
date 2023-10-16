const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sumWithInitial;
};

const multiply = function (array) {
  const outputProd = array.reduce((a, b) => a * b);
  return outputProd;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0 || a == 1) {
    return 1;
  } else {
    let factorial = a;

    // take a number
    // multiply itself * itself - 1
    // save this value as a number
    // do again until it 1 is the last number

    for (let i = a; i > 1; i--) {
      factorial = factorial * (i - 1);
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
