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
//Use a Constructor to Create Objects
// function Dog() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
// }
// let hound = new Dog();
//Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("Bob", "gray");
//Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;
//Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
// let canary = new Bird("Tweety");
// let ownProps = [];
// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
//Use Prototype Properties to Reduce Duplicate Code
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");
//Iterate Over All Properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
