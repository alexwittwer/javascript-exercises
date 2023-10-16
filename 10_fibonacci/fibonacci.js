const fibonacci = function (inputNumber) {
  // fibonnaci is defined by the recursive relationship
  // f0 = 1, f1 = 1
  // fn = fn-1 + fn-2
  let nums = parseInt(inputNumber);

  //initialize fibonnaci sequence with the necessary starting elements
  let fibo_array = [1, 1];

  if (nums < 0) {
    return "OOPS";
  } else {
    for (let i = 2; i < nums; i++) {
      //initialize the recursive function
      let newFibo = fibo_array[i - 2] + fibo_array[i - 1];
      fibo_array.push(newFibo);
    }
    return fibo_array.pop();
  }
};

// Do not edit below this line
module.exports = fibonacci;
