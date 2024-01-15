const resultsDisplay = document.querySelector('.table-results');
let dataAPI;

// récupérer les données de l'API 
async function getUsers() {
    try{
    const response = await fetch('https://randomuser.me/api/?nat=us,dk,fr,gb&results=50');
    const {results} = await response.json();
    dataAPI = results;
    console.log(results)
    createList(dataAPI);

}
catch(error){
    console.log(error);
}
}
getUsers();


// Afficher les utilisateurs 
function createList(arr){
    
 arr.forEach(user => {
    const listItem = document.createElement('li');
    listItem.className = 'table-item';

    listItem.innerHTML = `
            <p class="main-info">
            <img
              src="${user.picture.thumbnail}"
              alt="avatar picture"
            />
            <span>${user.name.last} ${user.name.first}</span>
          </p>
          <p class="email">${user.email}</p>
          <p class="phone">${user.phone}</p>
    `;
    resultsDisplay.appendChild(listItem);
 });
}

// faire la recherche utilisateur

const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', filterData);

function filterData(e) {

    resultsDisplay.innerHTML = '';
    let searchedValue = e.target.value;
    // const filteredData  = dataAPI.filter(user => user.name.first.toLowerCase().includes(searchedValue));
    const filteredData  = dataAPI.filter(user => searching(user));
  
    function searching(user){


        const types = {
            firstname: user.name.first.toLowerCase(),
            lastname: user.name.last.toLowerCase(),
            tel: user.phone,
        }

        for(let prop in types){
        if(types[prop].includes(searchedValue)){
            return true;
        }
    }
    }
    createList(filteredData);
   
}