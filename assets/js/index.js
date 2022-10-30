fetchPosts("https://api.jsonbin.io/v3/b/635969a30e6a79321e3565aa");

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
    const postsParent = document.querySelector("#posts");

    const postTemplate = document.querySelector("#post-template");
    const postElement = postTemplate.content.querySelector("div");

    data.posts.forEach(post => {
        const newPost = document.importNode(postElement, true);

        const header = newPost.querySelector(".post-header");

        const image = newPost.children[1];
        const text = newPost.children[2];
        const date = header.children[1];
        const avatar = header.children[0];

        if(post.imageUrl) {
            image.src = post.imageUrl;
        } else {
            image.remove();
        }

        text.innerHTML = post.content;
        date.innerHTML = post.date;
        avatar.src = "assets/images/img.png";

        postsParent.appendChild(newPost);
    });
}
