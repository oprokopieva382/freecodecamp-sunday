//Create a Basic JavaScript Object
// let dog = {
//   name: "Aflac",
//   numLegs: 2,
// };
// //Use Dot Notation to Access the Properties of an Object
// console.log(dog.name);
// console.log(dog.numLegs);
//Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,

  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();
//Define a Constructor Function
function Dog() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
