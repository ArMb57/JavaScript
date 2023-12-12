//------------ EXERCICE : Les variables, commentaires & types  ------------//


// 1-  Écrire un commentaire sur plusieurs lignes

// commentaire 1 
// commentaire 2
// commentaire 3 


//2-  Déclarez une constante "data" qui contient le nombre 3

const data = 3;


// 3 - Déclarez des variables correspondant à ces différents types & vérifiez leurs types 

// String (texte)
let prenom = "Mickael";
console.log(typeof prenom);

// Number (nombres)
let number = 3;
console.log(typeof number);

// Boolean (booleen)
let boolean = true;
console.log(typeof boolean);

//undefined
let nom;
console.log(typeof nom);

// Object (object)
let MyObject = {
    name: "Mickael",
    age: 30,
    isStudent: true
}
console.log(typeof MyObject);
console.log(MyObject.name);


// Tableau
let arr = [1, 2, 3, 4, 5];  
console.log(typeof arr);
console.log(arr[1]);


// 4-  Déclarez trois variables sans valeur(undefined), en une ligne.
let var1, var2, var3;
console.log(var1, var2, var3);


//------------ EXERCICE : Les opérateurs, chaînes  ------------//

// Déterminez ce qui est vrai ou faux.

// 1- Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ? Faux mais erreur de syntaxe
let solde = 150000;
solde += 50000; 
console.log(solde);

// 2- resultat est égal à 5.
// Vrai ou Faux ? Faux modulo renvoie le reste de la division
let resultat = 10 % 7; //3
console.log(resultat);

// 3- la variable str permet-elle d'afficher le nombre de pneus dont j'ai besoin pour ma voiture ?
// Vrai ou Faux ? FAUX erreur de syntaxe + variable non déclarée
let nbPneus = 4;
let str = `J'ai besoin de ${nbPneus} pour ma voiture.`
console.log(str);

/////////////////// rédiger un algo ///////////////////////
// écrire un algorithme permettant d’échanger les valeurs de deux variables A et B

// Méthode 1 : avec une variable temporaire
// let a = 1;
// let b = 2;

// let temp = a;
// a = b;
// b = temp;
// console.log(`a = ${a} et b = ${b}`);

// Méthode 2 : avec opérateurs arithmétiques
a = a + b; // a = 3
b = a - b; // b = 1
a = a - b; // a = 2



// Méthode 3 : avec XOR ou exclusif ^
// On va comparer la valeur des nombres en base2 (binaire), on compare chaque bt et renvoie 1 si les bits sont différents 0 si ils sont identiques
let a = 1078; // 01
let b = 234; // 10
a = a ^ b; // a = 01 ^ 10 = 11	
b = a ^ b; // b = 11 ^ 10 = 01
a = a ^ b; // a = 11 ^ 01 = 10
console.log(`a = ${a} et b = ${b}`);


// Méthide 4 : avec destructuring   
// La destructuration permet d'extraire les valeurs d'un tableaux et les stocker dans des variables distinctes

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(`a = ${a} et b = ${b}`);

//  Exemple de destructuration
let myArray = [1, 2, 3, 4, 5];
let [x, y, z] = myArray;
console.log(x, y, z);
