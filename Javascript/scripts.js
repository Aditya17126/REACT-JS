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

//TOPIC ARRAYS
 let obj = {
  name : "ADITYA GUPTA",
  age : 21,
  weight : 60,
  height: "5.8ft",
  greet : function(){
     console.log("HELLO JI KAISE HO AAP");
     
  }
 };
for(let key in obj){

  console.log(key," " , obj[key]);
}
 
obj.greet();

let arr = [1,2,3,4,5,6];
let brr = new Array('Aditya' , 'Gupta' );


brr.shift();
brr.shift();
brr.unshift(20);
brr.push(21);
brr.push(22);
brr.push(23);
brr.push(24);
brr.push(25);
brr.push(26);

// console.log(brr.slice(2,4));
// console.log(brr.splice(2,2,"ANKIT GUPTA"));


console.log(arr);
console.log(brr);

let ansarr = brr.map(function(num,idx){
  // console.log(idx);
  return num*num;  
})

console.log(ansarr);

let ans = ansarr.reduce(function(acc ,curr){
   return acc + curr;
} , 0);

console.log(ans);

let evenarr = arr.filter(function(num){
  if(num % 2==0){
    return true;
  }
  else{
    return false;
  }
})

console.log(evenarr); 
 

brr.forEach((val , idx)=>{
  console.log("Number " , val , "Index :" , idx); 
})
