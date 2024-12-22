const FIZZBUZZ = "FizzBuzz";
const FIZZ = "Fizz";
const BUZZ = "Buzz";

exports.fizzbuzz = function (n) {
  if (n % 15 === 0) {
    return FIZZBUZZ;
  }
  if (n % 3 === 0) {
    return FIZZ;
  }
  if (n % 5 === 0) {
    return BUZZ;
  }
  return n;
};
