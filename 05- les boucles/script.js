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
 try{
    alert(hello);
 }
 catch(error){
    console.log(error);
    console.log(error.name); 
    console.log(error.message);
    console.log(error.stack);

 }