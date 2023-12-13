//// Boucle While //// 
// Incrémenter le compteur et mettre un condition d'arrêt 
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }


//// Boucle DO ... While //// 
// let prenom;
// let prenom;
// do{
//      prenom = prompt('quel est votre prénom ?');
    
//     }while(prenom == "" || prenom == null);

// alert('Bonjour ' +  prenom);


//// Boucle For //// 

// for(let i=1; i<=10; i++){
//     console.log(`Ligne: ${i}`);
// }


/// Break et continue ///
// let i = 1 ;
// while (i < 5 ){

// Stop la suite du code et arrête la boucle  
// if( i == 3){
//     break;
// }

// Stop la suite du code & pass à l'itération suivante
// if( i == "3"){
//     console.log(`Ligne : ${i}`);
//     continue;
// }

// console.log(`Ligne : ${i}`);
// i++;
// }


//// Gérer les exceptions Try Catch ////
//  structure conditionnelle qui permet de gérer les erreurs utile pour debuger le code 
//  try{
//     alert(hello);
//  }
//  catch(error){
//     console.log(error);
//     console.log(error.name); 
//     console.log(error.message);
//     console.log(error.stack);

//  }

//  Autre exemple

try{
   let arme = prompt("Coisisser une arme : épée, hache ou pioche");
   let degats;
   switch(arme){
         case "épée":
            alert("Vous avez choisi l'épée");
            degats = 40;
            break;
         case "hache":
            alert("Vous avez choisi la hache");
            degats = 50;
            break;
         case "pioche":
            alert("Vous avez choisi la pioche");
            degats = 10;
            break;
         default:
            throw new Error("Vous ne pouvez pas choisir cette arme");
   }
   alert(`Vous avez choisi ${arme} avec ${degats} de dégats`);

}catch(e){
   alert(e.message);
}
finally{
      // Code exécuté à la fin
      alert("Fin du programme");
}