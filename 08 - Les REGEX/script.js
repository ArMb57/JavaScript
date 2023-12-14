/// Les REGEX ///
let str = "Bonjoura, je suis Sofiane1.";

// Les flags //
// let regex = /[a]/;
// let regex = /[a]/g; // g chercher toutes les occurences
// let regex = /[a-z]/g; // toutes les lettres minuscules
// let regex = /[a-zA-Z]/g; // toutes les lettres minuscules et majuscules
// let regex = /[^a-zA-Z]/g;  // tous sauf les lettres minuscules et majuscules
// let regex = /[0-9]/g; // tous les chiffres

// let regex = /\d/; // tous les chiffres
// let regex = /\D/; // tous sauf les chiffres
// let regex = /\w/; // tous les caractères alphanumériques
// let regex = /\s/; // tous les espaces
// let regex = /[0-9\s]/g; // tous les chiffres et les espaces

// let regex = /^b/; // commence par b
// let regex = /.$/; // finit par .




// Exemple mail test 

let mail = "mon-mail@exemple.fr";

let regex= /^[a-zA-Z0-9-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(mail.match(regex));
console.log(regex.test(mail));
