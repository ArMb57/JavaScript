/////////////////////////// Le Typage ///////////////////////////

//  déclarer plusieur variables sur une ligne 
let prenom = "John", nom = "Doe", age = 35;
//  typeof renvoie le type de la variable
console.log(typeof prenom);
// pour réassigner une valeur à la variable on utilise pas de mot clé ( var, let, const) -> uniquement pour la déclaration
prenom = 25;
console.log(typeof prenom);
console.log(prenom, nom, age);

// déclarer une variable sans valeur
let mavariable;
console.log(mavariable);


let bool = true; 
console.log(typeof bool);

//  types non-primitifs
// tableaux (indéxés à partir de 0)
let monTableau = ["un", "deux", "trois"];
console.log(monTableau[2]);

// Les objects 
let myObject = {
    prenom: "John",
    nom: "Doe",
    age: 35
};
// Deux syntaxes pour accèder aux propriétés d'un obj prioriser le point
console.log(myObject.prenom);
console.log(myObject["nom"]);


/////////////////////////// La concaténation ///////////////////////////
let prenom = "Sofiane";
let nom = "Akermoun";

// concaténation avant ES6 
console.log("Bonjour " + prenom + " " + nom + " comment vas-tu ?");

//  concaténation avec les template literals -> backticks altgr + 7 sur windows azerty
console.log(`Bonjour ${prenom} ${nom} comment vas-tu ?`);



///////////////////////////// Opérateurs arithmétiques /////////////////////////////


let n1 = 10, n2 = 5, result;
result = (n1 + n2) * 5;
//  equivalent à result = result + 50;
result += 50;
// incrémenter de 1 
result++;
// décrémenter de 1
result--;
console.log(result);