  
  function outerFun(){
    let  name ="ADITYA GUPTA";

    function innerfunc(){
      console.log(name);
    }

   return innerfunc;
  }

let inner =   outerFun(); // inner function ki REFERENCE PASS HOGYA 
 console.log(inner);
 inner();
