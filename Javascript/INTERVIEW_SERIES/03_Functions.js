//Q2 - What is Function Expression??
// Function Expression are assigned to a variable;
// const square1 = function (num){
//   return num * num;
// };
// this is called an Anonymous Functions
// console.log((square1(10)));

// Q3 => What are First Class Function?

// function square2(num){
//   return num * num;
// };

// function printsquare(fn){
//   console.log("Square is" + fn(5));
// };

// printsquare(square2);

//Q4 => What  are IIFE ??
//Immediately Invoked function expression
//  (function square3(num) {
//    console.log(num * num);
//   })(10);

// Q5 => IIFE CONCEPT OF CLOSURES

// (function (x){
//   console.log(x);

//   return (function(y){
//     console.log(y)
//     console.log("Inside inner function :", x);
//   })(10);

// })(20);

// Q6 => FUNCTION SCOPES
let num1 = 20;
var num2 = 30;
var name = "ADITYA GUPTA";

function multiply() {
  return num1 * num2;
}
console.log(multiply());

function getScore() {
  let num1 = 25;
  num2 = 35;
  function add() {
    return num1 + num2 + name;
  }
  return add();
}

console.log(getScore());

//Q7 => Function Scope -> O/P Based Questions

// for(let i =0; i <5;i++){
//    console.log("console stat :" ,i);
//   setTimeout(() => {
//       console.log("Let :",i);
//    }, i *1000);
// }
// for(var i =0; i <5;i++){
//    console.log("console stat :" , i);
//   setTimeout(() => {
//       console.log("Var :",i);
//    }, i *1000);
// }

// Q8 => FUNCTION HOISTING

// functionName();
// function functionName() {
//   console.log("ADITYA GUPTA");
// }
// console.log(x);
// var x =10;

// Q9 => FUNCTION HOISTING

// var x =24;
// var fun = function(){
//   console.log(x); // undefined becoz there two scope function
//   var x =20;
// }
// fun();

// Q10 => PARAMS VS ARGUMENTS

function cube(num) {
  //Params
  console.log(num * num * num);
}

cube(10); // Arguments

//11Q => REST AND SPREAD OPERATOR

function multiply(...nums) {
  // REST operator
  console.log(nums);
  let cnt = 1;
  for (let i = 0; i < nums.length; i++) {
    cnt = cnt * nums[i];
  }
  console.log(cnt);
}

var arr = [1, 2, 3, 4, 5, 6];

multiply(...arr); //SPREAD operator

//Q12 => Params And Arguments And Spread And Rest Operators
const fun = function (a, x, y, ...numb) {
  console.log(x, y, numb);
};

fun(4, 5, 6, 7, 8, 9, 10);

//  Q13=> Callback Function
// Q14=> Arrow Function

// const add1 = function(a , b){
//   return a+ b;
// }
// const add2 = (a , b)=> { a+ b;};

//  Q15 => Difference b/w Arrow function vs Regular Function
//  1-> Syntax
const add1 = function (a, b) {
  return a + b;
};
const add2 = (a, b) => {
  return a + b;
};

// 2-> Implicit "return" Keyword
const add3 = function (a, b) {
  return a + b;
};
const add4 = (a, b) => {
   a + b;
};

//3-> Arguments
//  function add5() {
//   console.log(arguments)
//  }

//  add5(1,2,4,5);
 
//  const add6 = () => {  // here we can not do this  
//   console.log(arguments);
//  }
//  add6(1,2,3,4);

 //4 -> "this" Keyword
 let user ={
  username : "Aditya Gupta",
  rc1 : () =>{
    console.log("Hello " + this.username);
  },
  rc2(){
    console.log("Hello " + this.username);
  }
 }
 user.rc1();
 user.rc2();