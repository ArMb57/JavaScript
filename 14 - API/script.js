// afficher la liste des posts 
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json()) // convertir la réponse en object js
// .then(posts =>{
//     posts.forEach(post => {
//         console.log(`Post ${post.id}: ${post.title}`);
//         console.log(post.body);
//         console.log('-------------------');
//     });
// })
// .catch(error => console.log(error));



// Afficher les 10 premiers posts
// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
// .then(response => response.json()) // convertir la réponse en object js
// .then(posts =>{
//     posts.forEach(post => {
//         console.log(`Post ${post.id}: ${post.title}`);
//         console.log(post.body);
//         console.log('-------------------');
//     });
// })
// .catch(error => console.log(error));


// Ajouter un post et afficher les 10 derniers posts 

// Fonction pour ajouter un post 
function sendNewPost(){
const options = {
    method: 'POST', // méthode d'envoi des données ici ajouter une donnée 
    headers: {
        'Content-type': 'application/json; charset=UTF-8', // type de données envoyées
    },
    body: JSON.stringify({ // convertir l'objet js en json
        title: 'Mon nouveau titre',
        body: 'Ceci est le contenu de mon nouveau post',
        userId: 1
    })
};

return fetch('https://jsonplaceholder.typicode.com/posts', options)
.then(response => response.json()) // convertir la réponse en object js
.catch(error => console.log(error));
}

// Fonction pour récupérer les 10 derniers posts 
function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(function(response){
    //     return response.json();
    // })  // equivalent à la ligne suivante
    .then(response => response.json())
    .then(posts =>{
     const lastPosts = posts.slice(-10);
     lastPosts.forEach(post =>displayData(post));
    })
    .catch(error => console.log(error));
}

// Fonction pour créer les elements qui affciheront les posts dans le DOM 
function displayData(data){
    // Créer les éléments du DOM
    const postDiv = document.createElement('div');
    const postTitle = document.createElement('h2');
    const postBody = document.createElement('p');

    // Injecter le contenu dans les éléments du DOM
    postTitle.innerText = `${data.id} - ${data.title}`;
    postBody.innerText = data.body;

    // Ajouter les éléments dans le DOM
    postDiv.appendChild(postTitle); 
    postDiv.appendChild(postBody);

    document.querySelector('.myPosts').appendChild(postDiv);
}


// Appeler les fonctions

sendNewPost()
.then(newPost => {
    displayData(newPost);
    fetchPosts();  
})
.catch(error => console.log(error));


 Axios exemple afficher les posts 
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    const posts = response.data;
    posts.forEach(post => {
        console.log(`Post ${post.id}: ${post.title}`);
        console.log(post.body);
        console.log('-------------------');
    }) 
})
.catch(error => console.log(error));    


//Exemples Axios instance 


// L'instance Axios
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', 
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

// Get =  récupérer des données
axiosInstance.get('/posts?userId=1')
.then(response => {
    const posts = response.data;
    console.log('Posts de l\'utilisateur 1')
    console.log(posts);
})
.catch(error => console.log(error));



// Post = envoyer des données
const data = {
    title: 'Mon nouveau titre',
    body: 'Ceci est le contenu de mon nouveau post',
    userId: 1
};
axiosInstance.post('/posts', data)
.then(response => console.log(response.data))
.catch(error => console.log(error));

// Put = modifier des données

const postIds= [100, 99, 10];

const dataUpdate = {
    title: 'Mon titre modifié',
    body: 'Ceci est le contenu de mon post modifié',
    userId: 1
};

axiosInstance.put(`/posts/${postIds[0]}`, dataUpdate)
.then(response => console.log(response.data))
.catch(error => console.log(error));


// Patch = modification partielle des données
const PatchedData = {
    title: 'Mon titre modifié par patch ',
};

axiosInstance.patch(`/posts/${postIds[1]}`, PatchedData)
.then(response => console.log(response.data))
.catch(error => console.log(error));


// Delete = supprimer des données
axiosInstance.delete(`/posts/${postIds[2]}`)
.then(response => {
    console.log(`Post ${postIds[2]} supprimé`)
    console.log(response.data)
})
.catch(error => console.log(error));
