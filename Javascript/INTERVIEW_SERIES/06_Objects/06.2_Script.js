//Quest 3 => LOOPING THROUG OBJECTS
  
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello!");
  },
  "Hi How are you" : true,
};

for(key in person){
  console.log(person[key]);
}

//Ques 4 => 

  const obj1={
    a :"one",
    b: "two",
    a : "three",
  }

  console.log(obj1);

//Ques 5 =>

 let nums ={
  a :100,
  b: 200,
  c: 300,
  d :400,
  title : "My Nums",
 }; 

 multiplyByTwo(nums);
 
 function multiplyByTwo(obj){
   
   for(key in obj){
      if(typeof(obj[key]) === "number"){
        obj[key] *= 2;
      } 
   }
 }
 console.log(nums);