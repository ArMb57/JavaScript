let age = 19;

// structure en if 

if(age < 18){
    console.log('Vous n\'êtes pas majeur.');
}
else if (age < 21) {
    console.log("Vous êtes majeur en France");
}
else{
    console.log("Vous êtes majeur partout, à vous les casinos");
}


// structure ternaire
age < 18 
? console.log('Vous n\'êtes pas majeur.')
:age < 21 
? console.log("Vous êtes majeur en France") 
: console.log("Vous êtes majeur partout, à vous les casinos")

// structure en switch

switch(true){
    case(age < 18 ):
        console.log('Vous n\'êtes pas majeur.');
        break;
    case(age < 21):
        console.log("Vous êtes majeur en France");
        break;
    default:
        console.log("Vous êtes majeur partout, à vous les casinos");
}

let consommable = "carotte";

switch(consommable){
    case"carotte":
    case"Courgette":
    case"Pomme de terre":
        console.log("C'est un légume");
        break;
    case"banane":
        console.log("C'est un fruit");
        break;
    default:
        console.log("Ceci n'est ni un fruit ni un légume" );

}
