var e =10;

function sum(a){
   return function(b){
     return function (c){
       return function(d){
         return a+b+c+d+e;
       }
     }
   }
}

console.log(sum(1)(10)(10)(10));

//Quest 2 => Write a Function that would allow you to do this

 function createBase(num1){
   
  function innerfun(num2){
    console.log(num1+num2);
  }
  
  return innerfun;
 }

var addsix = createBase(6);
addsix(10);
addsix(21);

// Ques 3 => How would you use a closure to create a private counter??

function counter(){
  var cnt = 0;

  function add(increment){
     cnt += increment;
  }
  function display(){
    return "Counter => " + cnt;
  }
  return{
    add,
    display,
  };
}
 
const c = counter();
c.add(10);

