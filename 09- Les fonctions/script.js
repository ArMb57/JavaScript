// Hoisting avec les fonctions

// function multiplier(nb){
//     let result = nb * 2
//     return result;
// } 

// let resultFunc = multiplier(2);
// console.log(resultFunc);



// Paramètres par défaut //
// function cuisiner (nbGateau, tempPrepa = 10, tempCuisson =15 ){
//     let result = nbGateau * (tempPrepa + tempCuisson);
//     return result;
// }

// let chocolat = cuisiner(2, 10, 15); 
// let fraisier = cuisiner(4, 20);

// console.log(chocolat + fraisier);


// Conversion de type //

function prevoirAge(){
    
    // let age = prompt("Quel est votre âge ?");
    // age = parseInt(age); // Convertit la chaine de caractère en nombre entier
    // age = Number(age); // Convertit la chaine de caractère en nombre
    // alert("Bientot vous aurez " + (age + 1) + " ans");

}

prevoirAge();

nombre = 10;
nbToString= nombre.toString(); // Convertit le nombre en chaine de caractère
nbToString2 = nombre + ""; // coercition de type (convertit le nombre en chaine de caractère)
console.log(typeof nbToString2);


foo();
function foo(){
    console.log("foo");
}

//  si une seule instruction dans la fonction, on peut ingnorer les accolades
let bar = () => console.log("bar");
bar();


let FooBar = (param1, param2) => {
    console.log(param1);
    console.log(param2);
}

FooBar("Foo", "Bar");


////////  Fonctions annonymes ////////
// Fonction classique equivalent à une expression de fonction en préservant du hoisting
function maFunction(){
    console.log("Hello World");
}



// L'expression de fonction 
let maFonction = function() {
    console.log("Hello World");
}
maFonction();


// Les fonctions anonymes auto-invoquées

(function(param1, param2){
    console.log(param1 + param2)
})('Hello', ' World');


// Fonctions recursives

// compteur avec boucle for
for(i=1; i<=10; i++) {
    console.log(i)
  }
  
  // compteur avec fonction recursive
  function recursion(num){
      if (num >= 10 ){
          console.log("C'est fini");
      }else {
          num++;
          console.log(num);
          recursion(num);
      }
  }
  recursion(0);


  //  Les closures sont des fonctions qui se souviennent de leur environnement lexical (portée) lorsqu'elles sont exécutées en dehors de ce contexte.


// Fonction classique 
// function bonjour(prenom){
//     console.log(`Bonjour ${prenom}`)

// }

//  fonction qui utilise une closure
// function bonjourBis(prenom){
//     let maClosure = () => console.log(`Bonjour ${prenom}`);
//     return maClosure;
// }


// bonjour('Romain');


// let appBis = bonjourBis('Franck');
// appBis();


function compteur(){
    let sec = 0;

    let maClosure = () => {
        sec++;
        console.log(sec);
    }
    return maClosure;
}

// La closure garde en mémoire la valeur de la variable sec lors de son dernère appel
let monCompteur = compteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();
monCompteur();