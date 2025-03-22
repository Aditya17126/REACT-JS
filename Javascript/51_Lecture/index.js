// let mydiv = document.querySelector('#mydiv');
// console.log(mydiv);

// let newElem  =  document.createElement('h1');

// newElem.textContent = "HI ADITYA THIS SIDE";

// console.log(newElem);

// mydiv.insertAdjacentElement('afterbegin',newElem);

//TOPIC :>CHANGING CSS USING JS DOM

let elem =  document.getElementById('fdiv');
let elem2 =  document.getElementById('sdiv');

// 1.CHANGING CSS USING (.style.property)

elem2.style.backgroundColor = 'blue';
elem2.style.color = 'white';

//2.CHANGING MULTIPLE CSS AT ONCE USING (.style.cssText) 
elem2.style.cssText = "background-color : red; color : black; padding: 3rem;"

console.log(elem2.style.cssText);//get part

// 3. ADDING ATTRIBUTE

// elem.setAttribute('class' , 'divclass');
// elem.setAttribute('class' , 'sdivclass');
elem.setAttribute('style' , 'background-color : violet');

console.log(elem);

//4. ADDING CLASS LIST
 
let fpara = document.querySelector('#fpara');
console.log(fpara);
console.log(fpara.classList);
