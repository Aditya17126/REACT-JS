
// let firstPromise = new Promise(function(resolve, reject){
//    console.log("ADITYA");
//    resolve(100);
// })



// let secondPromise = new Promise( function (resolve , reject) {
  
//   setTimeout(function sayMYName(){
//     console.log("MY NAME IS ADITYA GUPTA")
//   } ,5000);
//    resolve("Promise is Fulfilled");  
//   //  reject("Promise Rejected");
// })

// secondPromise.then(function(message){
//   console.log("the message is " + message);
//    return 10;
// }).then(function(message){
//   console.log("This is the second message :",message );
// }).catch(function(error){
//   console.error("Error :"+error);
// }).finally(function(message){
//   console.log("main toh chlaunga pakkka hai");
// })


let Promise1 = new Promise((resolve , reject)=>{
  setTimeout(resolve, 1000, "first");
   
}) 
let Promise2 = new Promise((resolve , reject)=>{
  setTimeout(resolve, 2000, "Second");
   
}) 
let Promise3 = new Promise((resolve , reject)=>{
  setTimeout(reject, 3000, "third");
}) 

Promise.all([Promise1,Promise2,Promise3])
.then(function(values){
  console.log(values);
}).catch(function(error){
  console.error("Error :" + error);
}) 