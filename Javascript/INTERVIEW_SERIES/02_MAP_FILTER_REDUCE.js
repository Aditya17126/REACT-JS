//MAP ,FILTER , AND REDUCE()

//1. What is Map()??
var nums = [1,2,3,4,5,6,7,8,9,10];
// var newarr = nums.map((elem, i , nums) =>{
  // console.log(elem);
  // console.log(i);
  // console.log(nums);
//    return elem * 10;
// })
// console.log(newarr);



//2. what is FILTER()?
// const moreThanTwo = nums.filter(function(num){
//   return num > 2;
// })
// console.log(moreThanTwo);



//3. what is reduce??
// const sum = nums.reduce(function(acc,curr , i , nums){
//     return acc + curr;
//  },0);
  
// console.log(sum);


//4. POLYFILL FOR MAP()
// this.prototype.myMap = function(cb){
//   let temp = [];
//   for(let i=0; i < this.length ; i++){
//      temp.push(cb(this[i] , i , this));
//   }
//   return temp;
// }

// const multplybyThree = nums.myMap((num , i, arr) => {
//   return num * 3;
// });
// console.log(multplybyThree);

// 5. POLYFILL FOR FILTER()
// this.prototype.myFilter = function (cb){
//   let temp= [];
//   for (let i = 0; i < this.length; i++) {
//      if(cb(this[i] , i , this)){
//       temp.push(this[i]);
//      }
    
//   }
//   return temp;
// }

// const moreThanTwo = nums.myFilter(function(num ,i , nums){
//   return num > 2;
// })
// console.log(moreThanTwo);

// 6. POLYFILLS FOR REDUCE()
// Array.prototype.myReduce = function (cb , initialValue){

//   let temp = [];
//   var accumulator = initialValue;
//   console.log("Inside calback function" , accumulator);

//   for (let i = 0; i < this.length; i++) {
//      accumulator = accumulator ? cb(accumulator , this[i] , i , this) : this[i];  
//      console.log(i , this[i] , accumulator);
//   }
//   return accumulator;
// };

// const sum = nums.myReduce(function(acc , curr ,i , nums){
//   return acc + curr;
// }, 0)

// console.log(sum);



// 7. MAP V/S FOREACH
 
const mapAns = nums.map(function(arr){
  return arr+2;
});

const forEachAns = nums.forEach(function(num , i){
   nums[i] =  num +3;
})
console.log(mapAns , forEachAns , nums);

// Ques1. 
 let students = [
  {name : "Piyush" ,  rollNumber : 31 , marks : 80},
  {name : "Jenny" ,   rollNumber : 15 , marks : 69 },
  {name : "Kaushal" , rollNumber : 16 , marks : 35},
  {name : "Dilpreet" ,rollNumber :  7, marks : 55}
 ];

//  let names =[];

//  for(let i= 0;i<students.length ; i++){
//   names.push(students[i].name.toUpperCase());
//  }
// //  OR
//  const names1 = students.map(function(stud){
//   stud.name.toUpperCase();
//  })
//  console.log(names1);

//Quest 2.
// const details = students.filter(function(stud){
//     return stud.marks > 60;
// })
// console.log(details);

// //Quest 3:
// const details1 = students.filter(function(stud){
//   return (stud.marks > 60 && stud.rollNumber > 15);
// })
// console.log(details1);

//Quest 4:
// const details2 = students.reduce(function(acc ,curr , i ,stud){
//   return acc + curr.marks; 
// },0)

// console.log(details2)

//Quest : 5
// Chaining Map and Filter

// const name1 = students.filter(function(stud){
//    return stud.marks > 60;
// }).map(function(stud){
//    return stud.name;
// })

// console.log(name1)

//Quest 6:

const newstud = students.map(function(stud){
   if(stud.marks < 60){
      stud.marks = stud.marks + 20;
    }
    return stud;
   
}).filter(function(stud){
  return stud.marks > 60;
}).reduce(function(acc , curr){
     return acc + curr.marks;

},0);

console.log(newstud);



