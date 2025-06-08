//Quest 6 => Most important Question

const a ={};
const b ={key : "b"};
const c ={key : "c"};

a[b] = 123;
a[c] = 456;
// a["[object , object]"] = 123 => 456

console.log(a);
console.log(a[b]);
console.log(a[c]);

//Quest 7 => What is JSON.stringify and JSON.parse

// DEFINITION =>
// JSON.stringify(): Converting Objects to JSON Strings
// The JSON.stringify() method converts a JavaScript object or value into a JSON-formatted string. This is useful when you need to send data to a web server or store it in a text-based format like localStorage.

const user = {
  name: "ADITYA GUPTA",
  age: 25,
  isAdmin: false
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// localStorage.setItem("test" , jsonString);

// Output: '{"name":"Alice","age":25,"isAdmin":false}'
// DEFINITION =>
// JSON.parse(): Converting JSON Strings to Objects
// The JSON.parse() method parses a JSON-formatted string and converts it into a corresponding JavaScript object. This is commonly used when receiving data from a web server or reading from storage.​ 

const jsonParse = JSON.parse(jsonString);
console.log(jsonParse);

//Quest 8 => SPREAD OPERATOR
console.log([..."Aditya Gupta"]);