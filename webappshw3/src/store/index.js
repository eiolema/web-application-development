import {createStore} from 'vuex'

export default createStore({
    state: {
        posts: {},
        likes: []
    },
    getters: {},
    mutations: {},
    actions: {
        getData(context) {
            fetch("https://api.jsonbin.io/v3/b/635969a30e6a79321e3565aa").then(response => response.json()
            ).then(data => {
                context.state.posts = data.record.posts;
                context.state.likes = new Array(data.record.posts.length).fill(0);
            });
        },
        incrementLikes(context, {id}) {
            context.state.likes[id - 1] += 1
        },
        resetLikes(context) {
            context.state.likes = new Array(context.state.likes.length).fill(0);
        }
    },
    modules: {}
})
