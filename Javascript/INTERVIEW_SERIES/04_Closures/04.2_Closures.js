//Lexical Scope
function subscribe() {
  var name = "ADITYA GUPTA";
 
  // this ic CAlled Closure 👇👇
 function display() {
   console.log(name)
  }
  display();
}
subscribe();


// Example => 2
 var a =10 , b=20;
function subscribe1() {
  var name = "ADITYA GUPTA";
 
  // this ic CAlled Closure 👇👇
 
  function displayName(num) {
   console.log(name , num+a+b);
  }
  return displayName ;
}
// Another way of writing calling function
subscribe1()(10);
// var myfun = subscribe1();
// myfun();



if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

// Ques 1 What will be Logged Out
let count =0;
(function printCount() {
   if(count === 0){
    let count =1; // Shadowing
    console.log(count); // 1
   } // Block Scope
   console.log(count);//0 
})();


