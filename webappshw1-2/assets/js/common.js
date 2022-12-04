//fetchUser("https://api.jsonbin.io/v3/b/635ac6ce2b3499323bec93cc");
fetchUser("assets/js/user.json");


function fetchUser(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            this.createUser(data.record);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function createUser(data) {
    var userUL = document.querySelector(".dd-user");
    
    let nameLI = document.createElement("li")
    nameLI.innerHTML = data.name;
    userUL.appendChild(nameLI);

    let mailLI = document.createElement("li")
    mailLI.innerHTML = data.email;
    userUL.appendChild(mailLI);

    let logoutLI = document.createElement("li");
    logoutLI.innerHTML = "logout";
    userUL.appendChild(logoutLI)
}

function dropFunction(){
    document.getElementById("dropDown").classList.toggle("show");
}
