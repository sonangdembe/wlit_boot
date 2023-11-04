//using id
const h1Element = document.getElementById('demo'); 
const h1Volvo = h1Element.innerText;
console.log(h1Element);
console.log(h1Volvo);

//updatingElement
h1Element.innerText =  'updated head hello sona';

//using tagName
const pTagElement = document.getElementsByTagName('p');
console.log(pTagElement);

//error indentifying or use using console.log
console.log(pTagElement[1].innerText);

//using  index
pTagElement[2].innerText = 'this is updated para 3';

//updated paragraph (update using specific)
const paragraphElement = document.getElementById('demo1');
paragraphElement.innerText = 'this is updated para';
console.log(paragraphElement);

//using className
// const divElement = document.getElementsByClassName('demo');
// console.log(divElement);

//creating new element using id
const containerElement = document.getElementById('container');
const newELement = document.createElement('p')
newELement.innerText = 'this is new paragraph that is added by using code'; // this is displayed only in console
console.log(newELement); 
containerElement.append(newELement); //this will display in website

//setting styles
containerElement.style.backgroundColor = 'green';
containerElement.style.color = 'yellow';
containerElement.style.textAlign = 'center';

//removing element
paragraphElement.remove();

// events


