// Execution synchrone du script 

// console.log('client 1 commence ses achats ')

// for( let i = 0 ; i < 5000 ; i++){
//     console.log("la caissière traite les articles du client 1 ")
// }

// console.log('client 1 a fini ses achats ')
// console.log("client 2 commence ses achats ")


// Execution asynchrone du script
// console.log("Client 1 passe une commande");
// setTimeout(function(){
//     console.log("La commande du client 1 est traitée");
// }, 5000);


// console.log("Client 2 passe une commande");
// setTimeout(function(){
//     console.log("La commande du client 2 est traitée");
// }, 2000);


// console.log('Le serveur prend d\'autres commandes');



// Les promesses -  dans une variable - syntaxe de base

// const prom1 = new Promise((resolve, reject) => {
//     // resolve('promise 1 resolved');
//     reject('promise 1 rejected');
//     });

// prom1.then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })


// Les promesses -  dans une fonction - syntaxe de base

//Promise.all attend que toutes les promesses soient résolues ou qu'une soit rejetée.
// Promise.race attend que la première promesse soit résolue ou rejetée.

// function prom(){
//     let prom1 = new Promise((resolve, reject) => {
//         resolve('promise 1 resolved');
//         reject('promise 1 rejected');
//         });
    
//     let prom2 = new Promise((resolve, reject) => {
//         // resolve('promise 2 resolved');
//         reject('promise 2 rejected');
//         });

//     Promise.race([prom1, prom2])
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// prom();


//  Exemple charger une page de script 

// function loadScript(script){
//     return new Promise((resolve, reject) => {
//         let element = document.createElement('script');
//         element.src = script;
//         document.body.appendChild(element);

//         element.addEventListener('load', () => {
//             resolve('script chargé')
//         });

//         element.addEventListener('error', () => {
//             reject(new Error('Opération impossible pour le script ' + script))
//         });

//     });
// };

// loadScript('script2.js')
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// });



// Exemple Geoloc 
// function getGeoloc(){
//     return new Promise((resolve, reject) => {
//         if('geolocation' in navigator){
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         }else{
//             reject('Geoloc non disponible')
//         }
//     });
// }

// function encoder(data){
//     return btoa(encodeURIComponent(data));
// }

// getGeoloc()
// .then((position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     // Encodage des données
//     const latEnc = encoder(latitude);
//     const longEnc = encoder(longitude);
    
//     console.log('Latitude encodé: ' + latEnc);
//     console.log('Longitude encodé: ' + longEnc);
// })
// .catch((error) => {
//     console.log(error)
// });


// Async await 
function loadScript(script){
        return new Promise((resolve, reject) => {
            let element = document.createElement('script');
            element.src = script;
            document.body.appendChild(element);
    
            element.addEventListener('load', () => {
                resolve('script chargé')
            });
    
            element.addEventListener('error', () => {
                reject(new Error('Opération impossible pour le script ' + script))
            });
    
        });
    };

    async function result(){
        try{
            const scriptA = await loadScript('script2.js');
            console.log(scriptA);

            const scriptB = await loadScript('script3.js');
            console.log(scriptB);

        }catch(error){
            console.log(error);
            document.body.lastChild.remove();
        }
    }

    result();