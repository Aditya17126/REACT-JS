
// function changeText(event){
//   console.log(event);
//   let fpara = document.getElementById('fpara');
//   fpara.textContent  ="aDITYA GUPTA";
// }
// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click' , changeText);

// fpara.removeEventListener('click' , changeText);

//donot add function at the name place of function becoz it is not the same function as passed in fpara.addEventListener('click' , changeText);

// let anchortag = document.getElementById('fanchor');

// anchortag.addEventListener("click" , function(event){
//   // event.preventDefault();
//   anchortag.textContent = "Click Done Bhai";
// })


let paras = document.querySelectorAll('p');

function alertfunct(event){
  alert("You have clicked on para :" + event.target.textContent);
} 
 

// for(let i=0; i<paras.length ; i++){
//    let  para =  paras[i];
//    para.addEventListener('click' ,alertfunct);
// } 

let mydiv = document.querySelector('div');

mydiv.addEventListener('click' , alertfunct);