//   https://api.github.com/users/USERNAME

const APICALL = "  https://api.github.com/users/";
const display = document.querySelector('.display');
const form = document.querySelector('.form-github-searchbar');
const inpSearch = document.querySelector('.input-searchbar');

async function dataGithub(user) {

    const answer = await fetch(`${APICALL}${user}`);
    const data = await answer.json();

    // console.log(data);
    
    cardBuilder(data);
}

// dataGithub('GuillaumeLeDevin');

function cardBuilder(user) {

    const cardHTML = `
        <div class="card">
            <img src="${user.avatar_url} alt="icon avatar" class="avatar">
            <h2>${user.name}</h2>
            <ul class="info-container">
                <li class="followers">Followers: ${user.followers}</li>
                <li class="stars">Repos: ${user.public_repos}</li>
                <li class="bio">Bio: ${user.bio}</li>
            </ul>
        </div>
    `;
    display.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if(inpSearch.value.length > 0){

        dataGithub(inpSearch.value);
        inpSearch.value = "";

    }

})