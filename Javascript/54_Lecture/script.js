// CODE 1
const t1 = performance.now();

for(let i=0; i<100;i++){
  let para = document.createElement('p');
  para.textContent = " BILLIONAIRE ADITYA GUPTA " + i;
  document.body.appendChild(para);//UI PE SHOW KARNA HAI
}

const t2 = performance.now();

console.log(t1 + " " + t2);

 //CODE 2
 const t3 = performance.now();
 let mydiv = document.createElement('div');

for(let i=0;i<=100;i++){
  let para = document.createElement('p');
  para.textContent = "Billionaire ADITYA GUPTA" + i;
  mydiv.appendChild(para);
}

document.body.appendChild(mydiv);
const t4 = performance.now();
console.log(t3 + " " + t4);


//CODE 3 BEST CODE
let fragment = document.createDocumentFragment('p');

for(let i =1 ; i<=100 ;i++){
  let para = document.createElement('p');
  para.textContent = "This is para :" + i;
  //NO reflow and REPAINT for the below line
  fragment.appendChild(para);
}

//THE below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);