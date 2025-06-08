//Quest 6 =>

const user = {name : "Lydia" , age:21};
const admin = {admin : true , ...user}; //REST operator

console.log(admin);

// Quest 7 =>
  const person ={
    username : "ADITYA GUPTA",
     height : 90,
     level : 20,
  }

  const data = JSON.stringify(person , ["height" , "level"]);
  console.log(data);

  // Quest 8 => M IMP. this => keyword
  const shape = {
    radius : 10,
    diameter() {
      return this.radius *2; 
    },
    perimeter : () => 2 * Math.Pi * this.radius,
  }

  console.log(shape.diameter());
  console.log(shape.perimeter());
  //1=> Regular Functions: Have their own "this" binding, which refers to the object that invokes the function.

  //2 => Arrow Functions: Do not have their own "this"; they inherit it from the surrounding scope

  // Quest 9 => Destructuring in Object ??
 
  let user1 = {
    name : "ADITYA GUPTA",
    age : 21,
    fullName :{
      first : "ADITYA",
      last : "GUPTA"
    }
  }

  const {name} = user1;
  const {fullName :{last}} = user1;
  console.log(name);
  console.log(last);
