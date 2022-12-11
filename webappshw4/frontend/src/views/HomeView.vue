<template>
    <div class="home">
        <div class="container">
            <div id="left"></div>
            <SignIn v-if="!auth"/>
            <div id="posts" v-if="auth">
                <div class="logout-container">
                    <input type="button" class="button" name="Logout" value="Logout" @click="Logout">
                </div>
                <post v-for="post in posts" :id="post.id" :timestamp="post.timestamp" :content="post.content"></post>
            </div>
            <div id="right"></div>
        </div>
        <PostButtons v-if="auth"/>
    </div>
</template>

<script>
// @ is an alias to /src
import PostButtons from '@/components/PostButtons';
import Post from "@/components/Post";
import SignIn from "@/components/SignIn.vue";

export default {
    name: 'HomeView',
    components: {
        Post,
        PostButtons,
        SignIn
    },
    data() {
        return {
            posts: [],
            auth: false
        };
    },
    methods: {
        Logout() {
            // this.$router.push("/Login");
        },

        authenticate() {
            fetch("http://localhost:3000/auth/authenticate")
                .then((response) => response.json())
                .then((data) => {
                    if (data.authenticated) {
                        this.fetchPosts()
                        this.auth = true;
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                    // to signup page
                });
        },

        fetchPosts() {
            fetch(`http://localhost:3000/posts`)
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message));
        }
    },
    mounted() {
        //this.fetchPosts();
        this.authenticate();
    },
}
</script>

<style scoped>
@import "@/assets/css/index.css";
</style>
