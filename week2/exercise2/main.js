(function() {
  let buttonClickedMessage = function(e) {
    console.log("you clicked me!");   // DEBUG
  }

// This function is used as a parameter to an eventListener
// that is triggered only once. Check below this for the listener
// passed the options object
  const instructionsParagraph = document.getElementById("instructions");
  let changeButtonMessage = function(e) {
    btn.innerHTML = "Fetch data";
    btn.addEventListener("click", fetchRepositories);
    instructionsParagraph.innerHTML = "Press the button to see what repositories exist";
  }

  const btn = document.getElementById("btn");
  btn.addEventListener("click", buttonClickedMessage);
  btn.addEventListener("click", changeButtonMessage, { once: true });

  let repositories;
  let addRepositories = function() {
    let repositoriesDiv = document.getElementById("repositories");
    repositoriesDiv.innerHTML = "";
    for (let i = 0; i < repositories.length; i++) {
      let repo = document.createElement("p");
      repo.className = "repo";
//    repo.id = repositories[i].name;
/* I don't use the above (the id) because I need it for the elements
    in the repos DIV and id is unique. Here I can just add a custom
    attribute */
      repo.setAttribute("repoName", repositories[i].name);
      repo.style.backgroundColor = "#c55";
      repo.innerHTML = repositories[i].name;
      repositoriesDiv.appendChild(repo);
    }
    repositoriesDiv.appendChild(document.createElement("hr"));
  }

//  addRepo(e.target.getAttribute("repoName"));
  let addRepo = function(name) {
    let reposDiv = document.getElementById("repos");
    let divElement = document.createElement("div");
    divElement.id = name;

    let repoObj;
    repositories.forEach(function(obj) {
      if (obj.name === name) repoObj = obj;
    });
    divElement.innerHTML = "<h3>Title: " + name + "</h3>";
    if (repoObj.html_url) {
      divElement.innerHTML += ("<a href='" + repoObj.html_url + "'>Repository Homepage</a>");
    }
    if (repoObj.owner.avatar_url) {
      divElement.innerHTML += ("<a class='img' href='http://socialhackersacademy.org/'><img src='" + repoObj.owner.avatar_url + "' alt='logo'></a>");
    }
    reposDiv.appendChild(divElement);
  }

  let removeRepo = function(name) {
    let reposDiv = document.getElementById("repos");
    reposDiv.removeChild(document.getElementById(name));
  }

  var fetchRepositories = function(e) {
    fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        repositories = myJson;
        addRepositories();
        instructionsParagraph.innerHTML = "Click on a repository box to see more info";
      });
  };

  document.body.addEventListener("click", function(e) {
    if (e.target.className === "repo")
    {
      let reposDiv = document.getElementById("repos");
      let targetRepoAttr = document.getElementById(e.target.getAttribute("repoName"));
      if (targetRepoAttr === null)
      {
        addRepo(e.target.getAttribute("repoName"));
        e.target.style.backgroundColor = "#55c";
      } else {
        removeRepo(e.target.getAttribute("repoName"));
        e.target.style.backgroundColor = "#c55";
      }
    }
  });

})();
