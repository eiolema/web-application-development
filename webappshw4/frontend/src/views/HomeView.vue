<template>
    <div class="home">
        <div class="container">
            <input type="button" class="button" name="Logout" value="Logout" @click="Logout">
            <div id="left"></div>
            <div id="posts">
                <ul>
                    <div class="item" v-for="post in posts" :key="post.id">
                        <a class= 'post' :href="'/post/' + post.id">
                            <span class="title"> <b>Title:</b> {{ post.title }}  </span><br />
                            <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
                            <span class="url"> <b>Url:</b> {{ post.urllink }} </span> <br />
                        </a>
                    </div>
                </ul>
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
        fetch(`http://localhost:3000/posts/`)
            .then((response) => response.json())
            .then((data) => (this.posts = data))
            .catch((err) => console.log(err.message));
        },
       
    },
    mounted() {
            this.fetchPosts();
            console.log("mounted");
    },
}
</script>

<style scoped>
@import "@/assets/css/index.css";
.home{
    color: red;
}
</style>
