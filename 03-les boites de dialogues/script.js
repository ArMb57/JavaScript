/// Alert ///
// let message = " Bonjour tout le monde !";
// alert(message);



/// confirm ///

// if(confirm("Voulez-vous continuer ?")){
//     alert("Vous avez répondu OK");
// }
// else{
//     alert("Vous avez répondu Annuler");
// }


/// prompt ///


// Exercice Demandez l'âge de l'utilisateur, puis affichez le message "Vous êtes majeur" si l'âge est supérieur ou égal à 18, ou "Vous êtes mineur" si l'âge est inférieur à 18.
let age = prompt("Quel âge avez vous ?");
// alert(`Vous avez ${age} ans`);

if(age >= 18){
    alert("Vous êtes majeur");
}
else{
    alert("Vous êtes mineur");
}



// comparaison valeur / type 
let nb = 3;

if(nb == "3"){
    console.log("true");
}else{
    console.log("false");
}

if(nb === "3"){
    console.log("true");
}else{
    console.log("false");
}