//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
convertCtoF(30);
//Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
//Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
factorialize(5);
