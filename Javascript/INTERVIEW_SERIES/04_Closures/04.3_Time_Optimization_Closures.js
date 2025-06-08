//Ques 2 =>  Time Optimization Using Closures

function find1(index) {
  let a =[] ;
  for(let i=0; i <1000000 ; i++){
      a[i] = i * i;
  }
  console.log(a[index]);
 
}


console.time("Time Took To run : 6");
find1(6);
console.timeEnd("Time Took To run : 6");
console.time("Time Took To run : 50");
find1(50);
console.timeEnd("Time Took To run : 50");


//Example => 2
function find2(index) {
  let a =[] ;
  for(let i=0; i <1000000 ; i++){
      a[i] = i * i;
  }

  return function(index){
    console.log(a[index]);
  }
}

const Closure = find2();
console.time("6 :");
Closure(6);
console.timeEnd("6 :");
 