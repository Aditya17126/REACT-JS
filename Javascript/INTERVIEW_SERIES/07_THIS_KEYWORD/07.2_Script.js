const person = {
  name: "Aditya",

  greet: function () {
    console.log("Outer function this.name:", this.name);

    const inner = () => {
      console.log("Inner arrow function this.name:", this.name);
    };

    inner();
  },
};

person.greet();

//Quest 2=>

// function makeUser() {
//   return {
//     name: "John",
//     ref: this // pointing to window object
//   };
// }

// let user = makeUser();

// console.log( user); // What's the result?

// how to fix this ??
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }, // pointing to window object
  };
}

let user = makeUser();

console.log(user.ref().name);

// Quest 4 =>

const user1 = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user1.logMessage, 1000);
// how to fix this ??
setTimeout(function() {
  user1.logMessage();
}, 1000);


// ```plaintext

// After a delay of 1 second, `undefined` is logged to console.

// While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.

// And during a regular function invocation *this* equals the global object which is `window` in the case of the browser environment.

// That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.

// How can you fix this code so that 'Piyush Agarwal!' is logged to console?
// Write your solution in a comment below!

// ### Question 5 -What logs to console of the following code snippet?
const person1 = { 
  name: 'Piyush', 
  greet() { 
    return `Hello, {this.name}`; 
  }, 
  farewell: () => { 
    return `Goodbye, ${this.name}!`;
   } 
  
}; 
   
  console.log(person1.greet()); 
  console.log(person1.farewell()); 

 