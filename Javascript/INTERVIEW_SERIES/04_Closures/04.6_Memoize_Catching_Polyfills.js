const expensiveTask = (num1 , num2)=> {
  for(let i=0; i <=1000000000 ;i++ ){
    
  }
  return num1*num2;
} 

console.time("First Call");
console.log(expensiveTask(93,244));
console.timeEnd("First Call");