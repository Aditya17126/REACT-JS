// Quest 1 => ARROW FUNC VS NORMAL FUNC

 let user = {
  name : "ADITYA GUPTA",
   age : 21,
   childObj :{
    newName : "HeLLO JAGAT SETH",
     getDetails() {
      console.log(this.newName , "and" , this.name);
     }
   }
 }

 user.childObj.getDetails();

// CASE 2 . ARROW FUNCTION 
 let user1 = {
  name : "ADITYA GUPTA",
   age : 21,
   
   childObj (){
    const getDetails = () => { //parent normal function hona chahiye
      console.log(this.name);
     }
     getDetails();
   }
  // getDetails : () => {
  //   console.log(this.name); 
  //   console.log(this);
  //  }
 }
 user1.childObj();
 
 //Quest 2 =>
 const user2 = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Jen!';
    return this.firstName;
  }
};
console.log(user2.getName()); // What is logged?

// Quest 3=>
  class user3 {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user3 ("Piyush") // => This will generate a user object from the above class
User.getName();

