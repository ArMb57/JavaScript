// Les cookies 

// Créer un cookie sécurisé
// !! Ne pas définir un cookie du coté client pour des raisons de sécurité 
// document.cookie = "prenom=John; path=/admin; domain=monsite.com; max-age=31536000; secure";


// localStorage 

// // Créer un localStorage
// localStorage.setItem("prenom", "John");
// localStorage.setItem("nom", "Doe");

// // Récupérer un localStorage par le nom de la clé
// let prenom = localStorage.getItem("prenom");

// // récupérer un localStorage par son index
// let key = localStorage.key([3]);


// // supprimer le localStorage par son nom de clé
// localStorage.removeItem("prenom");

// // supprimer tous les localStorage
// localStorage.clear();

// // récupérer la taille du localStorage
// localStorage.length;



// stocker un obj dans le localStorage 
// Pour stocker des objets ou tableaux dans le localStorage, il faut les convertir en JSON

// Pour les récupérer il faut les convertir en objet ou tableau JS 
let produit = {
    nom: "produit 1",
    prix: 10,
    description: "lorem ipsum"
}

localStorage.setItem("produits", JSON.stringify(produit));

let produits = JSON.parse(localStorage.getItem("produits"));
console.log(produits);