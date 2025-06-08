//OBJECT IN JAVASCRIPT
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello!");
  },
  "Hi How are you" : true,
};
//  console.log(person);
//  delete person.greet;
console.log(person.name);
console.log(person["Hi How are you"]);

// Ques 1 =>
  const funct = (function (a){
    delete a; //Not Going to affect the local variable a
    return a;
  })(10);

  console.log(funct);

// Ques 2=>
  const property = "First Name";
 const name = "Aditya Gupta";

 const user = {
   [property] : name,
 }

 console.log(user["First Name"]);

 