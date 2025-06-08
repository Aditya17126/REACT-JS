// var vs let vs const

// 1.VARIABLE SHADOWING 
 
 function test1() {
    let a = "hello";

    if(true){
      let a = "Hi";
      console.log(a);
    }
    console.log(a);
 }
 test1();

 //2. ILLEGEAL SHADOWING

//  function test() {
//   let a = "hello";
//   var b = "ADITYA";

//   if(true){
//     var a = "Hi"; (ERROR)
//     let b = "Goodbye";
//     console.log(a);

//     console.log(b);
//   }
//   console.log(a);
// }

//  test();

// 3.HOISTING
  console.log(first)
  var first = 10;
  // let first = 10; // ERROR CANNOT access 'first' before initialization
  // const first =10;// ERROR CANNOT access 'first' before initialization
  
  function abc(){
    console.log(a); 
    var a = 10;
  }
