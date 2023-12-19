// let btn = document.querySelector('button');

// // Evenement au clic 
// // btn.addEventListener('click', function() {
// //     if(confirm('Etes-vous sûr ? ')){
// //         location.href = 'https://www.google.fr';
// //     }
// // }
// // );

// // Evenement au survol
// btn.addEventListener('mouseenter', function() {
//     document.body.style.background = 'red';
// });
//  btn.addEventListener('mouseleave', function() {
//     document.body.style.background = 'white';
//  });

// // Evenement touche clavier 
// document.addEventListener('keydown', function(e) {
//     console.log(e.key);
// });

// // Ecrire dans une div avec keydown
// // let maDiv = document.createElement('div');
// // document.addEventListener('keydown', function(e) {
// //     maDiv.innerHTML += e.key;
// // });
// // document.body.appendChild(maDiv);

// // Evenement au submit 
// let form = document.querySelector('form');
// let nom = document.querySelector('#nom');

// form.addEventListener('submit', function(e) {
//     if(nom.value == ''){

//         // Empecher la soumission du formulaire 
//         e.preventDefault();
//         alert('champ vide !! ');

//     }else{
//         alert('formulaire envoyé !! ');
//     }
// });


// // Evenement lorsqu'on ecrit dans un formulaire 
// let maDiv = document.querySelector('#maDiv');
// nom.addEventListener('input', function(e) {
//     maDiv.innerHTML = e.target.value;
// });

// // Evenement lorsque la page est chargée 
// // window.addEventListener('load', function() {
// //    (() => {alert('page chargée !!')})();
// // });

// // Evenement au scroll 
// window.addEventListener('scroll', function() {
//     console.log(window.scrollY);
// });

// // Evenement au resize
// window.addEventListener('resize', function() {
//     let width = window.innerWidth; // renvoi la largeur du navigateur 
//     let color = width < 500 ? 'red' : 'green';
//     document.body.style.background = color;
// });


// //  La propagation d'evenement 
// let article = document.querySelector('article');
// let h1 = document.querySelector('h1');

// article.addEventListener('click', function() {
//     alert('article cliqué !! ');
// });

// h1.addEventListener('click', function(e) {
//     alert('h1 cliqué !! ');
//     e.stopPropagation(); // stopper la propagation de l'evenement
// });

// // setTimeout
//  setTimeout(function() {
//         alert('hello');
//     }, 2000);

    //  Que renvoi cette fonction ?
for(var i = 0; i < 10; i++){
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Renvoi 10 x 10 car la boucle est terminée avant que le setTimeout ne soit executé

// setInterval()
setInterval(function() {
    alert('hello');
}, 10000);

