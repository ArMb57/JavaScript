// Introduction au mot clé this 

// let user = {
//     name: "John",
//     age: 30,

//     sePresenter(){
//         // this fait au contexte appelant CAD l'objet dans lequel il est appelé
//         console.log(`Bonjour, je m'appelle ${this.age}`);
//         // Manière equivalente de faire
//         console.log(`Bonjour, je m'appelle ${user.name}`)
//     }
// };

// user.sePresenter();


// L'objet Set(), permet de stocker des valeurs unique de n'importe quel type, mais ne stock que des valeurs ( pas d'indices)

// Exemple 1 : supprimer les valeurs dupliquées d'un tableau
// let nombres = [10, 45, 75, 10, 24, 45];
// let monSet = new Set(nombres);
// console.log(monSet);

// QUESTION : Comment faire pour supprimer les valeurs dupliquer sans utiliser un Set() ? 
// let result = [];
// for(let i = 0; i < nombres.length; i++){
//     if(result.indexOf(nombres[i]) === -1){
//         result.push(nombres[i]);
//     }
// }
// console.log(result);


// Exemple 2 : utilisations des méthodes propres au Set()

// let monSet2 = new Set();

// // Ajouter des valeurs dans un Set
// monSet2.add("Hello");
// monSet2.add("Bonjour");

// // Supprimer des valeurs dans un Set
// // monSet2.delete("Bonjour");

// // Vérifier si une valeur existe dans un Set
// console.log(monSet2.has("Hello"));

// // Afficher le nombre de valeurs dans un Set
// console.log(monSet2.size);

// // tout supprimer dans un Set
// monSet2.clear();

// console.log(monSet2);



// Map() est un objet qui stock des paires clé/valeur. Contrairement aux objets, les clés peuvent être de n'importe quel type (string, number, boolean, object, function, etc...)

// Exemple 1 comparaison renvoyer longueur d'un objet littéral et d'un Map()
// let obj = {
//     name: "John",
//     age: 30
// };
// // Renvoyer le nb d'éléments dans un objet littéral
// console.log(Object.keys(obj).length);

// // transformer un objet littéral en Map()
// let myMap = new Map(Object.entries(obj));
// // Afficher le nombre d'éléments dans un Map()
// console.log(myMap.size);

// Exemple 2: utilisation des méthodes propres au Map()

// let users = new Map();

// // Envoyer des données dans le Map()
// users.set("Mark zuckerberg", {
//     email: "mark@facebook.com",
//     poste: "PDG"
// });

// users.set("Elon Musk", {
//     email: "elon@musk.com",
//     poste: "sauver le monde"
// });

// // Récupérer les données dans le Map()
// console.log(users.get("Mark zuckerberg"));

// // Vérifier si une clé existe dans le Map()
// console.log(users.has("Mark zuckerberg"));

// // Supprimer une clé dans le Map()
// users.delete("Mark zuckerberg");
// console.log(users)


// // Exemple 3 : transformer un tableau en Map()
// // !!! Il faut que le tableau soit un tableau de tableaux
// let myArr = [
//     ["1", "HTML"],
//     ["2", "CSS"],
//     ["3", "JS"],
//     ["4", "PHP"]
// ];
// let map2 = new Map(myArr);
// console.log(map2);


// Objet Date()
// Récupérer la date au format UTC 
// let date = new Date();

// Récupérer le timestamp de la date actuelle 
// let timestamp = date.getTime();


// // Récupérer la date local 
// let localDate = date.toLocaleDateString('fr-FR');
// // Récupérer l'heure local
// let localTime = date.toLocaleTimeString('fr-FR');
// console.log(localTime);

// Affichage de date configuré 
// let options = {year: "numeric", month: "long", day: "numeric", hour:'2-digit', minute:'2-digit', second:'2-digit'};
// let dateConfig = date.toLocaleDateString('fr-FR', options);
// console.log(dateConfig)



// QUESTION : comment récupérer l'heure sur un autre fuseau horaire ?

const date = new Date();
const UsDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}).format(date);
console.log(UsDate);


// Objet Math()
// let x = 4.3;
// let y = 5.6;
// console.log(Math.abs(x)); // renvoie 4.3
// console.log(Math.ceil(x)); // renvoie 5
// console.log(Math.floor(x)); // renvoie 4 
// console.log(Math.round(x)); // renvoie 4
// console.log(Math.max(x, y)); // renvoie 5.6
// console.log(Math.min(x, y)); // renvoie 5.6
// console.log(Math.pow(x, 2)); // renvoie 18.49
// console.log(Math.sqrt(x)); // renvoie 2.07
// console.log(Math.random());