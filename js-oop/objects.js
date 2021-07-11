// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {}
   } 
} 

// Constructor function 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {}
} 
    
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
                      
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member                       
   let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});

//Property Decsriptors
const person = {
   name: 'Ladi',
}
const objectBase = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor); //prints the descriptor object of the toString method in the prototype/objectBase of the person object.

//to define the attributes/ descriptor of an property in an object, use;

//Object.defineProperty()

//Prototype vs Instance Members

function Human(name) {
   this.name = name;
}

//Since the eat method will be uniform accross all Human objects, it is better to define it in the prototype of those objects aka Human. 
Human.prototype.eat = function () {
   console.log('I am eating');
};

const person1 = new Human('Ladi');
const person2 = new Human('Yusuf');
const person3 = new Human('Kobi');

const personArray = [person1, person2, person3];
for (let person of personArray) {
   console.log(person.eat());
}// calling the eat method on all person object.
//eat method can still be accessed, because it was defined in the protoytpe/parent of the person object aka Human. ==> Protipical inheritance at work.