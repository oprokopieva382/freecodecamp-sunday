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
function largestOfFour(arr) {
  return arr.map((group) =>
    group.reduce(function (prev, curr) {
      return curr > prev ? curr : prev;
    })
  );
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += num;
  }
  return result;
}
repeatStringNumTimes("abc", 3);
//Truncate a String
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
