var length = 4;
function callback() { 
 console.log(this.length); 
}

const object = { 
  length: 5, 
  method(fn) { 
    fn(); 
    // arguments[0]();
  } 

}; 

object.method(callback);

// Quest 6 =>
  const calc ={
    total :0,
    add(a){
      this.total += a;
      return this;
    },
    multiply(b){
      this.total *= b;
      return this;
    },
   subtract(c){
    this.total -= c;
    return this;
   },
  }

  const ans = calc.add(10).multiply(5).subtract(30).add(10);
  console.log(ans.total);