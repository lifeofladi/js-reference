// console.log('Iam working!!!!!!!!!!!');

const person = {
  name: "Mosh",
  age: 30,
};

//Bracket notation
/**
Used to access object properties dynamically. In the event a property name is unknown
 */
// console.log(person["name"]);

//Strict Equality (Type + Value)
/*
ensures both operands r values are of the same Type and Value
*/
// console.log(1 === 1); //true

//Lose Equality (Value)
/*
doesn't care about the type just value
*/
// console.log(2 == 1);

//Truhty & Falsy Values
// Anything that is not Falsy is Truthy
//Falsy values
let falsyValues = ["undefined", "null", 0, false, "", "NaN"];

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

function showPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

// showPrime(50);

//Creatiing Objects

//Factory Functions
function createCricle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

//Constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("constructor circle.");
  };
}

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for (let entry of Object.keys(circle)) {
//   console.log(entry);
// }

//Cloning an Object

//Using spread operator
const anotherCircle = { ...circle };
// console.log(anotherCircle);

//Using Object.assign
//Best use case is to combine multiple objects
const circleA = Object.assign({}, circle);

const someArray = [{ id: 1, name: "Ladi" }];

// console.log(someArray.find(person => person.name === "Ladi")) ;

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3.1 },
  { title: "d", year: 2017, rating: 4.5 },
];

const filtered = movies
  .filter(movie => movie.rating > 4 && movie.year === 2018)
  .sort((a, b) => a.title - b.title)
  .reverse()
  .map(m => m.title);

console.log(filtered);

//implementing basic form validation.
const validateForm = () => {
  const errors = {};
  const { account } = this.state;

  /*
  if the input field (username or password) is empty, send an error message to the respective property of the error object
  */

  if (account.username.trim() === "") errors.username = "Username is required.";
  if (account.password.trim() === "") errors.password = "Password is required.";

  /*
  If there's nothing in the error object return nothing, otherwise, return the errors object - (which is then used in the handleSubmit method)
  */

  return Object.keys(errors).length === 0 ? {} : errors;

  //Object.keys returns an array of property names in an object, so if the length is 0, it means there's nothing in that object.
};
