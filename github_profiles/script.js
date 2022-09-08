const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const description = document.querySelector(".description");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("There is no profile with such name");
    } else {
      createErrorCard(err.message);
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createErrorCard(message) {
  const cardHTML = `
  <div class="card">
  <h1>${message}</></div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;
  const cardHTML = `<div class="card">
  <div>
    <img
      src=${avatar_url}
      alt=${name}
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${name}</h2>
    <p>
      ${bio}
    </p>
    <ul>
      <li>${followers} <strong>Followers</strong></li>
      <li>${following} <strong>Following</strong></li>
      <li>${public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  </div>
</div>`;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

form.addEventListener("click", (e) => {
  description.style.opacity = 0;
});
