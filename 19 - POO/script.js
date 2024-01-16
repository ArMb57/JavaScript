// Exemple 1 : Créer des constructeurs , des instances et lier les constructeurs par une propriété

// Créer un constructueur pour nos utilisateurs 
function Utilisateurs(prenom, nom, mail){
    this.prenom = prenom;
    this.nom = nom; 
    this.email = mail;
}

// Créer un constructeur pour nos logements qui seront liés à un utilisateur
function Logements(type, surface, adresse, utilisateur){
    this.type = type;
    this.surface = surface;
    this.adresse = adresse;
    this.proprietaire = utilisateur

}


// Stocker les méthode d'un constructeur dans le prototype et pas directement dans le constructeur
Utilisateurs.prototype.sePresenter = function(){
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et vous pouvez me contacter à l'adresse ${this.email}`);
}

// Créer une instance de notre constructeur

let user1 = new Utilisateurs("John", "Doe", "john.doe@gmail.com");
let user2 = new Utilisateurs("Mark", "Zuckerberg", "mark@fb.com");
console.log(user1);
console.log(user2);

// Appeler la méthode sePresenter de notre instance user1
user1.sePresenter();

// Créer une instance de notre constructeur Logements
let logA = new Logements("Appartement", 50, "1 rue de la paix", user1.prenom);
console.log(logA);


// Exemple 2 : l'héritage sans class 

// Créer un constructeur de base 
function Animaux(nombreDepattes, poids){
    this.nombreDepattes = nombreDepattes;
    this.poids = poids;
}
Animaux.prototype.presentation = function(){
    console.log(`Cet animal a ${this.nombreDepattes} pattes et pèse ${this.poids} `);
}

// Créer un constructeur spécifique
function Oiseaux(nombreDepattes, poids, longueurDesAiles, couleur){
    Animaux.call(this, nombreDepattes, poids)
    this.longueurDesAiles = longueurDesAiles;
    this.couleur = couleur;
}
Oiseaux.prototype = Object.create(Animaux.prototype); // Pour faire hériter les méthodes du constructeur Animaux

let perroquet = new Oiseaux(2, '1kg', '10cm', 'vert');
console.log(perroquet);
perroquet.presentation();

Exemple 3 : l'héritage avec class

class Animaux{
    constructor(nombreDepattes, poids){
        this.nombreDepattes = nombreDepattes;
        this.poids = poids;
    }
    presentation(){
        console.log(`Cet animal a ${this.nombreDepattes} pattes et pèse ${this.poids} `);
    }

}
// On utilise extends pour faire hériter les propriétés et méthodes de la class Animaux
class Oiseaux extends Animaux{
    constructor(nombreDepattes, poids, longueurDesAiles, couleur){
        // récupérer les propriétés du constructeur parent avec le mot clé super 
        super(nombreDepattes, poids);
        this.longueurDesAiles = longueurDesAiles;
        this.couleur = couleur;
    }
}

let perroquet = new Oiseaux(2, '1kg', '10cm', 'vert');
console.log(perroquet);
perroquet.presentation();

// Exemple 3.1
class Gateaux{
    constructor(tempsDePrepa, tempsDeCuisson){
        this.prepa = tempsDePrepa;
        this.cuisson = tempsDeCuisson;
    }

    recette(){
        console.log(`Préparation : ${this.prepa} minutes, cuisson : ${this.cuisson} minutes`);
    }
}
class Tarte extends Gateaux{
    constructor(tempsDePrepa, tempsDeCuisson, nbParts){
        super(tempsDePrepa, tempsDeCuisson);
        this.parts = nbParts;
    }
}

class Chocolat extends Gateaux {
    constructor(tempsDePrepa, tempsDeCuisson, qteChocolat){
        super(tempsDePrepa, tempsDeCuisson);
        this.choco = qteChocolat;
    }
}

let tarteAuxPommes = new Tarte(10, 30, 6);
let gateauxChoco = new Chocolat(20, 40, 200);
console.log(tarteAuxPommes);
console.log(gateauxChoco);
tarteAuxPommes.recette();
gateauxChoco.recette();


// // Exemple 4 : Méthodes classiques et static
// constructeur -> method qui permet d'initialiser les propriétés de notre objet

class utilisateur {
    constructor(prenom, nom, mail){
        this.prenom = prenom;
        this.nom = nom;
        this.mail = mail;
    }
    // Méthode classique qui est appelé par l'instance 
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et vous pouvez me contacter à l'adresse ${this.mail}`);
    }
    // Méthode static qui est appelé par la class et non par l'instance
    static bienvenue(){
        console.log('Bienvenue sur notre site');
    }
}

let user1 = new utilisateur("John", "Doe", "john@gmail.com");
user1.sePresenter();

utilisateur.bienvenue();


// Exemple 5 : Encapsulation :  Getters et Setters
class users {
    constructor(prenom, nom, mail){
        this._prenom = prenom;
        this._nom = nom;
        this._mail = mail;
    }

    // Getter
    get prenom(){
        return this._prenom;
    }
    // Setter
    set prenom(newPrenom){
        this._prenom = newPrenom;
    }

    // Getter mail 
    get mail(){
        return this._mail;
    }
    // Setter mail
    set mail(newMail){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regex.test(newMail)){
            this._mail = newMail;
        }
        else{
            throw new Error("Le mail n'est pas valide");
        }
    }

}

let user1 = new users("John", "Doe", "john@gmail.com");
// Utiliser le getter pour accéder à la propriété
console.log(user1.prenom);
// Utiliser le setter pour modifier la propriété
user1.prenom = "Mark";
console.log(user1.prenom);

// modifier le mail 
// user1.mail = "john.gmail.com"; // Erreur car le mail n'est pas valide
user1.mail = "john@yahoo.com"
console.log(user1.mail);


// Exercice :  faire un getter et un setter pour renvoyer et modifier le nom complet de l'utilisateur
user1.nomComplet = "Mark Zuckerberg";
