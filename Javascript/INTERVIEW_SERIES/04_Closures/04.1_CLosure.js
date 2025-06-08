// Quest 3 => setTimeout OUTPUT

function abcd(){

  for (let i = 0; i < 5 ; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000);
  }
}

// abcd();

function abcd1(){

  for (var i = 0; i < 5 ; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000);
  }
}
// abcd1();

// To use Var to generate the same output as of let we use closures

for (var i = 0; i < 5 ; i++) {
  
  function inner(i){
    setTimeout(() => {
      console.log(i)
    }, i * 1000);
  }  
  
  inner(i);
}
