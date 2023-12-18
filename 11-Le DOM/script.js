//  Sélectionner un élement du DOM 

let testP = document.querySelector('p');
let testPAll = document.querySelectorAll('p');
let testClass = document.querySelector('.item');
let testId = document.querySelector('#monTitre');
console.log(testP);
console.log(testClass);
console.log(testId);

// modifier un element 
let item2= document.querySelector('.i2');
// peut avoir des soucis en fonction des navigateurs 
item2.innerText = 'Mon texte modifié';

// à privilégier
item2.textContent = 'Mon texte modifié par textContent';
item2.innerHTML = '<strong>Mon texte modifié</strong>';

//  Créer et ajouter des élements Html avec JS 
let hellWorld = document.createElement('div');
hellWorld.textContent = 'Hell World';
// document.body.appendChild(hellWorld);

let test = document.createElement('p');
test.textContent = 'test';
// insérer test à l'intérieur de hellWorld
// hellWorld.appendChild(test);

// document.body.append(test, hellWorld);

// Exemple avec prepend -> ajouter avant l'element selectionné 
let container = document.querySelector('.container');

let helloWorld = document.createElement('p');
helloWorld.textContent = 'Hello World1';
container.prepend(helloWorld);

let helloWorld2 = document.createElement('p');
helloWorld2.textContent = 'Hello World2';
container.append(helloWorld2);


