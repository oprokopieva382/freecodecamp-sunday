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
