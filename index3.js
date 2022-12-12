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
//Finders Keepers
function findElement(arr, func) {
  return arr.find(func);
}
findElement([1, 2, 3, 4], (num) => num % 2 === 0);
//or one more option
// function findElement(arr, func) {
//   return arr[arr.map(func).indexOf(true)];
// }
//Boo who
function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(null);
//Title Case a Sentence
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
titleCase("I'm a little tea pot");
//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
//Falsy Bouncer
function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);
//Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}
getIndexToIns([40, 60], 50);
//Mutations
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
