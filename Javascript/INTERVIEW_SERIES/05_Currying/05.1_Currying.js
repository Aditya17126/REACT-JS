function f(a){
    return function(b){
      //  console.log(a+b);
        return a+b;
    };
}

console.log(f(5)(6))

// Quest 1 => why should we use Currying?? important

function sum(a){
  return function(b){
     return function(c){
       return  a + b+ c;
     }
  }
}

console.log(sum(2)(9)(10));

// Quest 2

function evaluate(oper) {
   if(oper === 'sum'){
     return function(a){
       return function(b){
        return a + b;
       }
     }
   }
  else if(oper === 'multiply'){
    return function(a){
      return function(b){
       return a * b;
      }
    }
   } 
  else if(oper === 'divide'){
    return function(a){
      return function(b){
       return a / b;
      }
    }
   }
  else if(oper === 'subtract'){
    return function(a){
      return function(b){
       return a - b;
      }
    }
   }
}
const muly = evaluate('multiply');

 console.log(muly(10)(10));
console.log(evaluate("multiply")(6)(10));
console.log(evaluate("sum")(6)(10));
console.log(evaluate("subtract")(6)(10));
console.log(evaluate("divide")(6)(10));
console.log(evaluate("multiply")(634)(10));


// Ques 5 => Infinite Currying
 // -> sum(1)(2)(3)(4)(6).....(n)

function add(a){
  return function(b){
     if(b) {
      return add(a+b);
     }
     else{
      return a;
     }
  }
}
console.log(add(10)(123)(234)(12)());

// Ques 6 => Currying vs Partial Application

// 1. Partial Application
// Definition: Partial application refers to fixing a few arguments of a function, producing another function of smaller arity (i.e., fewer arguments).​
// Original function
function multiply(a, b, c) {
  return a * b * c;
}

// Partially applied function
function partialMultiply(a) {
  return function(b, c) {
    return multiply(a, b, c);
  };
}

// Usage
partialMultiply(2)(3, 4); // Returns 24


//  2. Currying
// Definition: Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.​
 
// Original function
function multiply(a, b, c) {
  return a * b * c;
}

// Curried version
function curriedMultiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
// Usage
curriedMultiply(2)(3)(4); // Returns 24


//  Ques 7 => Manipulating DOM
 
function updateElementText(id){
  return function(content){
      document.querySelector('#' + id).textContent = content;
  }
}

const updateHeader = updateElementText("heading");

updateHeader("ADITYA IS A BILLIONAIRE");
