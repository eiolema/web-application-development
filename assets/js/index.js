//fetchPosts("https://api.jsonbin.io/v3/b/635969a30e6a79321e3565aa");
fetchPosts("assets/js/posts.json");

function fetchPosts(url) {
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

function createPosts(data) {
    console.log(data);
    // todo: create posts
}
