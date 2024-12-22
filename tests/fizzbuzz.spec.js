const { fizzbuzz } = require("../src/fizzbuzz.js");

test("fizzbuzz test", () => {
  expect(fizzbuzz(1)).toBe(1);
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(30)).toBe("FizzBuzz");
  expect(fizzbuzz(31)).toBe(31);
});
