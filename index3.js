//Convert Celsius to Fahrenheit
// function convertCtoF(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }
// convertCtoF(30);
// //Reverse a String
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("hello");
// //Factorialize a Number
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }
// factorialize(5);
//Find the Longest Word in a String
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//Return Largest Numbers in Arrays
function largestOfFour(arr) {}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
