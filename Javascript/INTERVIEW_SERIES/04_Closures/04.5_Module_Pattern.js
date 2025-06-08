var Module = (function(){
  function privateMethod(){
    console.log(Private);
  }

  return {
    publicMethod : function (){
        console.log("Public");
     }
  }
})();

Module.publicMethod();
// Module.privateMethod();

// Quest2 =>  Make this run only once

let view ;

function likeThis(){
  let flag = 0;

  return function(){
     if(flag > 0){
        console.log("Already Printed the ans");
     }
     else{
      veiw = "ADITYA GUPYA";
      console.log(veiw);
      flag++;
     }
  }
}

const myfun = likeThis();

myfun();
myfun();
myfun();
myfun();
myfun();
myfun();
