<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="content">Body: </label>
        <textarea name="content" required v-model="post.content"/>
        <input type="button" @click="addPost" class="addPost button" value="Add post">
    </div>
</template>

<script>
export default {
    name: "AddPost",
    data() {
        return {
            post: {
                content: "",
            },
        };
    },
    methods: {
        addPost() {
            let data = {
                content: this.post.content,
            };
            fetch("http://localhost:3000/posts/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
        },
    },
};
</script>

<style scoped>
@import "@/assets/css/addPost.css";
</style>