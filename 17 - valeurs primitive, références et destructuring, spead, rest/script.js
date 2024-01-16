// // Valeur primitive 
// let a = 'abc';
// let b = a;
// a = 'def';
// console.log(a)
// console.log(b); // affiche 'abc'

// // Valeur de référence
// let obj1 = {str:"abc"};
// let obj2 = obj1; // obj2 est une référence vers obj1
// obj1.str = "def";
// console.log(obj2)

// Destructuring 
// Permet d'extraire des valeurs d'un tableau ou d'un objet et les assigner à des variables distinctes.


// destructuring sur un tableau 
// let infos = ['Jean', 'Dupont', 35];

// affectation sans destructuring
// let nom = infos[0];
// let prenom = infos[1];
// let age = infos[2];

// affectation avec destructuring
// let [nom, prenom, age] = infos;
// console.log(nom, prenom, age);


// destructuring sur un objet 
// let user = {
//     nom: 'Jean',
//     prenom: 'Dupont',
//     age: 35
// };

// affectation sans destructuring
// let nom = user.nom;
// let prenom = user.prenom;
// let age = user.age;

// affectation avec destructuring
// let {nom, prenom, age} = user;
// console.log(nom, prenom, age);


// question comment stocker cette obj dans des var distinctes
let user = {
    nom: 'Jean',
    prenom: 'Dupont',
    age: 35, 
    adresse: {
        rue: 'rue de la paix',
        ville: 'Paris'
    }
};
let {nom, prenom, age} = user;
let {rue, ville} = user.adresse;
console.log(nom, prenom, age, rue, ville);


// Décomposition ou spread operator 
//Combiner plusieurs tableaux ou objets ou créer une copie superficielle d'un objet.

// let fruits = ['pomme', 'poire', 'banane'];
// let aliments = ['tomate', 'carotte']; 

// // Exemple 1
// let fruits2 = fruits; // copie sans spread 
// let fruits3 = [...fruits]; // copie avec spread

// // Exemple 2 
// let total = [...fruits, ...aliments]; // combinaison de tableaux avec spread
// let total2 = fruits.concat(aliments); // combinaison de tableaux sans spread
// console.log(total2);

// // Exemple 3

// let str = "Bonjour!";
// let str2 = [...str]; // décomposition d'une chaîne de caractères
// let str3 = str.split(''); // décomposition d'une chaîne de caractères
// console.log(str3);


// exemple copie superficielle d'un objet
// let obj1 = {str:"abc"};
// let obj2 = {...obj1}; 
// obj1.str = "def";
// console.log(obj2) // affiche {str: "abc"}


// rest parameter 
// permet de passer un nombre variable d'arguments à une fonction sous forme de tableau.

// function add( a, b ){
//     return a + b;
// }

// console.log(add(1, 2)); 

// somme de nombres avec le rest parameter
// function sum(...nb){
//     let total = 0;
//     for(let n of nb){
//         total += n;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5)); // affiche 15

// function sum(...nb){
//     return nb.reduce((total, n) => total + n);
// }
// console.log(sum(1, 2, 3, 4, 5)); // affiche 15