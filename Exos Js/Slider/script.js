//  Composant iconique de moult pages web, il faut savoir en coder un.
//   Deux boutons, des slides qui ... slident, voilà ce qu'il y a faire.
//   Creusez-vous la tête, il existe de multiples façon de le faire, mais toutes ne sont pas aussi bonne les unes ques les autres

//   A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc...
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Pensez globalement au problème à résoudre, vous allez très probablement avoir besoin d'indexs, d'une variable pour bloquer l'animation, etc ...
// 2. Gérez le clic sur les boutons.
// 3. Décomposez l'animation : 
// - Une slide sort avec un effet retro et disparaît en glissant.
// - Une slide arrivant en apparaissant.
// 4. N'oubliez pas de revenir à zéro quand on atteint l'index final et qu'on clic à droite, ou inversement.
  
// C. Ajoutez du style à l'interface afin de terminer le projet.


const slides = [...document.querySelectorAll('.slide')];

const btns = [...document.querySelectorAll('.direction-btn')];


const data = {
    slideOut:0, // Diapo courante 
    slideIn:0, // Diapo suivante
    direction:0
}


btns.forEach( btn => btn.addEventListener('click',sliding));

function sliding(event){
    slideOut()

    // définir la direction du slide
    data.direction = event.target.className.includes('right') ? 1 : -1;

    // Trouver l'indice du slide courant 
    data.slideOut = slides.findIndex(slide => slide.classList.contains('active'));
    
    // Trouver l'index du slide suivant
    if(data.slideOut + data.direction > slides.length - 1){
        data.slideIn = 0;
        console.log("premier if ");
    }
    else if (data.slideOut + data.direction < 0){
        data.slideIn = slides.length - 1;
        console.log("else if");
    }else{
        data.slideIn = data.slideOut + data.direction;
        console.log("else");
    }
    
    console.log(" la diapo courante est à l'index " + data.slideOut + " La diapo suivante est à l'index " + data.slideIn);
    console.log(" la direction est : " + data.direction);
    
    console.log(data)

}

// Fonction pour appliquer les props de transition
function slideTransition(obj){
for( let prop in obj.props){
    obj.ele.style[prop] = obj.props[prop];  
}

}

function slideOut(){

    // Appliquer les props pour afficher la nouvelle diapo 
    slideTransition({
        ele: slides[data.slideIn],
        props: {
            transform:`translateX(${data.direction < 0 ? "100%" : "-100%"})`,
         
        }
    })

    // Appliquer les props pour faire sortir l'ancienne diapo
    
    slideTransition({
        ele: slides[data.slideOut],
        props: {
            transform:`translateX(${data.direction < 0 ? "-100%" : "100%"})`,
            transition: "transform 0.5s ease-in-out"
            
        }
    })
    slides[data.slideOut].addEventListener('transitionend', slideIn);
}


function slideIn(event){
 
    slideTransition({
        ele: slides[data.slideIn],
        props: {
            transform:`translateX(0%)`,
            
        }
    })

    
    // Ajouter la classe active sur la nouvelle diapo
    slides[data.slideIn].classList.add('active');
    
    // Retirer la classe active sur l'ancienne diapo
    slides[data.slideOut].classList.remove('active');
    // slides[data.slideOut].style.display = "none";
    event.target.removeEventListener('transitionend', slideIn);
}