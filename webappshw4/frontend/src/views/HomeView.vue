<template>
    <div class="home">
        <div class="container">
            <input type="button" class="button" name="Logout" value="Logout" @click="Logout">
            <div id="left"></div>
            <div id="posts">
              <post v-for="post in posts" :id="post.id" :timestamp="post.timestamp" :content="post.content"></post>
            </div>
            <div id="right"></div>
        </div>
        <PostButtons/>
    </div>
</template>

<script>
// @ is an alias to /src
import PostButtons from '@/components/PostButtons';
import Post from "@/components/Post";

export default {
    name: 'HomeView',
    components: {
        Post,
        PostButtons,
    },
    data() {
    return {
      posts: [],
    };
    },
    methods: {
        Logout() {
           // this.$router.push("/Login");
        },

        fetchPosts() {
        fetch(`http://localhost:3000/posts`)
            .then((response) => response.json())
            .then((data) => (this.posts = data))
            .catch((err) => console.log(err.message));
        }
    },
    mounted() {
            this.fetchPosts();
            console.log("mounted");
    },
}
</script>

<style scoped>
@import "@/assets/css/index.css";
</style>
