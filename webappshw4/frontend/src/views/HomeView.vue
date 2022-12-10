<template>
    <div class="home">
        <div class="container">
            <div id="left"></div>
            <div id="posts">
                <h1 v-if="$store.state.posts.length === 0">There will be posts here, eventually!</h1>
                <!--  <post v-for="post in $store.state.posts" :id="post.id" :user-id="post.userId" :date="post.date"
                      :content="post.content" :image-url="post.imageUrl"/> -->
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
    mounted() {
        this.$store.dispatch("getData");
    }
}
</script>

<style>
@import "@/assets/css/index.css";
</style>
