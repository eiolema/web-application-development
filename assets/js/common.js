let common = {

    fetchPosts:function () {
        fetch("https://api.jsonbin.io/v3/b/635969a30e6a79321e3565aa")
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            })
    }
}