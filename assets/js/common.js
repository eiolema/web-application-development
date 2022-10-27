//fetchUser("https://api.jsonbin.io/v3/b/635ac6ce2b3499323bec93cc");
fetchUser("assets/js/user.json");

function fetchUser(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            this.createPosts(data.record);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function createUser(data) {
    console.log(data);
    // todo: create user data dropdown
}