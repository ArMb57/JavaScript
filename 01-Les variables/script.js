// var prenom ="John";
// console.log(prenom);

// Function scoped 
//  var est relatif à la fonction dans laquelle elle est déclaré 

//  declaration globale de variable 
var prenom;
function hello(){
    // /déclaration dans une fonction = propre à la fonction elle n'existe pas en dehors de la fonction
    prenom = "Jane";
}
hello();
console.log(prenom);

//  block scoped 
//  let est relatif au bloc dans lequel elle est déclaré
//  Dans la majorité des cas prioriser l'utilisation let -> eviter des conflits de noms de variables 
// if(true){
//  let nom ="DOE";
// }
// console.log(nom);

// const on ne redéclare pas la constante

const prix = 200;
// prix = 300; // renvoie une erreur car on ne peut pas changer la valeur d'une constante
console.log(prix);


//  hoisting 

//  var est hoistée (montée) en haut du script
//  var reconnait une variable avant son initialisation phénomène corrigé avec let et const
let name = "JohnDoe";
console.log(name);