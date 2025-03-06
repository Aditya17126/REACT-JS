console.log("ADITYA");

function name(num , fname , sname ){
  let sum =0;
  for (let i = 0; i <= num; i++) {
    console.log( fname +" "+ sname + " " +  i);
    sum = sum + i;
  }
  return sum;
}

// console.log(name(10 , "ADITYA" , "GUPTA"));

//2.FUNCTION EXPRESSION => VARIABLE / FUNCTIONS NAME

 let solve = function(a ,b){
   return (a + b)**3;
 }

//  console.log(solve(10 , 90));
 
//3.ARROW FUNCTION => ES6

let solve1 = (x,y) => {
   return x**y; 
}

console.log(solve1(2,10));

