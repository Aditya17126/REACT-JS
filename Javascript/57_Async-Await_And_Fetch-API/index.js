
async function getData(){
  setTimeout(function(){
     console.log("I am inside a set TimeOut Block HELLO");
  },3000);
}

let output = getData(); //ASYNC FUNCTION ALWAYS RETURNS PROMISES


//TOPIC : FETCH() API

async function getData1() {
   
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/101');
   // parse json ->async

  let data = await response.json();
   console.log(data);

}
 getData1();

//3 SCENARIOS :
// 1-> Prepare url/ api endpoint => sync
// 2-> Await => fetch data ->network call ->async
// 3-> Process data->sync

 const myHeader = new Headers();
 myHeader.append("Content-Type" , "application/json"); 

const url = "https://jsonplaceholder.typicode.com/posts";

const options={
  method : "POST",
  body:JSON.stringify({username :" ADITYA GUPTA"}),
  headers : myHeader,
}

async function postData1() {
  const response = await fetch(url , options)
  let data = await response.json();
  console.log("My Data :", data);
}

postData1();

