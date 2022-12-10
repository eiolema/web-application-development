<template id="post-template">
    <div id="post{{id}}" class="content">
        <div class="post-header">
            <img alt="avatar" src="@/assets/images/img.png">
            <p class="date">{{ date }}</p>
        </div>
        <img v-if="imageUrl !== null" alt="postimage" :src="image()">
        <p id="post-text">{{ content }}</p>
        <div class="post-footer">
            <img alt="like" @click="increment()" src="@/assets/images/like-button-png-22714.png">
            <div class="post-likes">{{$store.state.likes[parseInt(id)-1]}}</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            image: () => {
                const arr = this.imageUrl.split("/");
                return require(`../assets/images/${arr[arr.length - 1]}`)
            },
        }
    },
    methods: {
        ...mapActions(["incrementLikes"]),
        increment() {
            this.incrementLikes({id: parseInt(this.id)});
        },
    },
    props: ["id", "userId", "date", "content", "imageUrl"]
}
</script>
