//Access Property Names with Bracket Notation
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };
// function checkInventory(scannedItem) {
//   return foods[scannedItem];
// }
// console.log(checkInventory("apples"));
//Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);
//Check if an Object has a Property
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   if (
//     userObj.hasOwnProperty("Alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   ) {
//     return true;
//   }
//   return false;
// }
// console.log(isEveryoneHere(users));
//Iterate Through the Keys of an Object with a for...in Statement
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
function countOnline(usersObj) {}
