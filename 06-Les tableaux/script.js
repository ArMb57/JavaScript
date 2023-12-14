///// Les tableaux /////
// Les tableau sont indicés à partir de 0 

//  Les tableaux à une dimension
// Ancienne Synataxe avant ES6 2015 
var monTableau = new Array("un", "deux", "trois");
let monTableau2 = Array("un", "deux", "trois");

// Nouvelle Synataxe depuis ES6 2015
const monTableau3 = ["un", "deux", "trois"];
console.log(monTableau3[0]); // Affiche "un"

//  Les tableaux à plusieurs dimensions
let monTableau2D = [
    ["Mark", "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"]
];
console.log(monTableau2D[0][1]); // Affiche Jeff
console.log(monTableau2D[1][1]); // Affiche Bezos

// Les tableaux associatifs ou objets
let monObjet = {
    "prenom": "Mark",
    "nom": "Zuckerberg",
    "poste": "PDG de Facebook"
};

// Les tableaux d'objets 
let monObjet2 = [
    {
        "prenom": "Mark",
        "nom": "Zuckerberg",
        "poste": "PDG de Facebook"
    },
    {
        "prenom": "Jeff",
        "nom": "Bezos",
        "poste": "PDG de Amazon"
    },
    {
        "prenom": "Bill",
        "nom": "Gates",
        "poste": "PDG de Microsoft"
    }
];

// tableaux dans objets 
let monTabAsso = {
    nom: ["Zuckerberg", "Bezos", "Gates"],
    prenom: ["Mark", "Jeff", "Bill"],
    poste: ["PDG de Facebook", "PDG de Amazon", "PDG de Microsoft"]
}


// Length : longueur du tableau
// IndexOf : index d'un élément

let arr = ["un", "deux", "trois", "quatre", "cinq"];

for(let i = 0; i < arr.length; i++){
    // Backtiks : alt gr + 7 + interpolation ${..}
    console.log(`l'index est : ${i} et la valeur est : ${arr[i]}`);
    console.log("l'index est :" + i + "et la valeur est :" + arr[i] + ".");
    console.log(arr.indexOf('trois'));
}

//  Ajouter des élements au tableau push() et unshift()
let arr = ["un", "deux", "trois", "quatre", "cinq"];
arr.push("six");
arr.unshift("zero");
console.log(arr);

// Tableau 2D

let monTableau2D = [
    ["Mark", "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"]
];

monTableau2D[0].push("John");
console.log(monTableau2D);

// Supprimer un élement du tableau pop() shift()
let arr = ["un", "deux", "trois", "quatre", "cinq"];
arr.pop(); 
arr.shift();
console.log(arr);

//  AJouter ou supprimer un élément d'un tableau splice()
let arr = ["un", "deux", "trois", "quatre", "cinq"];
arr.splice(1, 1); // supprime 1 élément à partir de l'index 1
arr.splice(0, 0, "nouvel élément","nouvel élément2", "nouvel élément3"); // ajoute un élément au début
console.log(arr); 

//  Copier les valeurs d'un tableau dans un autre tableau slice(indice de Début, indice de fin) !! l'indice de fin n'est pas inclus dans le nouveau tableau

const tab = [1, 2, 3, 4, 5];

let newArray = tab.slice(0, 2);
console.log(newArray); // Affiche [1, 2]


// Fusionner 2 tableaux avec concat()
const tab = [1, 2, 3, 4, 5];
const tab2  = [6, 7, 8, 9, 10];

let tab3 = tab.concat(tab2);
console.log( tab3);

// Faire une recherche dans un tableau avec includes()
let arr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];
console.log(arr.includes("a"));
console.log(arr.includes("r"));

//  Aplanir un tableau de tableaux

const arr = [
    [1, 2], 
    [3, 4, 
        [
            5, 6,
            [7, 8, 9],

        ]
    ]
];
console.log(arr.flat(3)); // [1, 2, 3, 4, 5, 6]

//  transfomer un tableau un chaine de caractère avec join()

let arr = ["Bonjour", "tout", "le", "monde"];

console.log(arr.join(" ")); 

// Inverser un tableau
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

//  trier un tableau par ordre alphabétique
let arr = ['Banane', 'Pomme', 'Poire', 'Fraise', 'Orange', 'Kiwi', 'Mangue', 'Framboise', 'Cerise', 'Abricot']
console.log(arr.sort())

//  trier un tableau par ordre croissant
let arr = [138, 443, 21, 655, 98, 1 , 32];
console.log(arr.sort(function(a, b){
    return a - b;
}));

// fonction fléchées 
console.log(arr.sort((a, b) => a - b));


//// Les boucles ////
/// for .. in -> à privilégier sur les objets  ///
/// for .. of -> à privilégier sur les tableaux ///

let fruits = ["pomme", "poire", "banane", "fraise", "framboise"];

for (let fruit in fruits) {
    console.log(fruit);
    console.log(fruits[fruit]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

let person = {
    name: "John",
    age: 30,
    city: "New-York"
}
for (let key in person ){
    console.log(key);
    console.log(person[key]);
}

for ( let [key, value] of Object.entries(person)){
    console.log(`ma clé : ${key} et ma valeur : ${value}`);
}

//// foreach() ////
let pays = ["France", "Belgique", "Italie", "Espagne", "Portugal", "Allemagne", "Angleterre", "Suisse", "Pays-Bas", "Luxembourg"];

// for(let current of pays) {
//     console.log(current);
// }
// equivalent avec un foreach()
// pays.forEach(function(value, key, tab){
//     console.log(`Index : ${key} : ${value} - Tableau : ${tab}`);
// })


// pays.forEach(function(ele){
//     console.log(ele);
// })
// equivalent avec une focntion fléchée
pays.forEach(ele => console.log(ele));


// Exemple fonction d'ordre supérieur
function cunstomForeach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}

let pays = ["France", "Belgique", "Italie", "Espagne", "Portugal", "Allemagne", "Angleterre", "Suisse", "Pays-Bas", "Luxembourg"];

cunstomForeach(pays, function(ele, index, array){
    console.log(ele, index, array);
})

//// map() ////

const numbers = [1, 2, 3, 4, 5];

let result = numbers.map(function(el){
    return el * 2;
})
console.log(numbers, result);


//// filter ////

const numbers = [54, 23, 66, 12]; 

let filterN = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(filterN, numbers); // [54, 66]

// Reduce () //

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce(function(acc, currentVal){
    return acc + currentVal;
}, 0);

console.log(result);

// moyen sans reduce 
let i = 0;
let somme = 0;
while( i < arr.length){
    somme += arr[i];
    i++;
}
let moy = somme / arr.length;
console.log(moy);

// moyen avec reduce 
let somRed = arr.reduce((acc, val) => acc + val , 0);
let moyRed = somRed / arr.length;
console.log(somRed);