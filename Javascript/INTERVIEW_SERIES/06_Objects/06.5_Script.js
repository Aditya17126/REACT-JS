// QUEST 10 => REST AND SPREAD OPERATOR

function getItems (Fruit , Favorite , ...args){
   return [...Fruit , ...args ];
}

console.log(getItems(["Banana" , "Apple" ] , "Pear" , "Orange"));

//Quest 11 => Object Referencing
  let c = {greet : "Hey!"};
 let d;
d =c;
c.greet = "Hello";
console.log(d.greet);

//Quest 12 => 
 
 console.log({a :1} == {a :1});
//  console.log({a :1} === {a :1}); 

// Quest 13 =>
 let person = {
   name : "ADitya",
   age:21,
 }
  const members = [person];
  person = null;

  console.log(members);
  console.log(person);
// 1. Object Creation: You create an object person with properties name and age.

// 2. Array Assignment: You assign person to the members array. This means members[0] holds a reference to the same object that person refers to.

// 3 .Nullifying the Reference: You set person = null;. This action removes the reference from the person variable to the object, but it doesn't affect other references to the same object.

// 4 .Logging the Array: When you console.log(members);, it displays the array containing the original object, since members[0] still holds a reference to it.

// Ques 14 =>
 const value = {Number :10};
const multiply = (x = {...value}) =>{
  console.log((x.Number *= 2));
}

multiply();//copy=>20

multiply();//copy=>20

multiply(value);//20

multiply(value);//40

//Quest 15=> Shallow Copy and Deep Copy ??
 //Quest 16 => how to deep copy / clone an object ?
 
 let user = {
  name : "ADITYA GUPTA",
  age:24,
 }

//  const objClone = Object.assign({},user);
//  const objClone = JSON.parse(JSON.stringify(user));
 const objClone = {...user};
 objClone.name = "aditya";

 console.log(user , objClone);