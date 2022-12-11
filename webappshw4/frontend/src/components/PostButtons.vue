<template>
    <div class="like-reset">
        <input type="button" class="button" name="AddPost" value="Add Post" @click="addPost">
        <input type="button" class="button"  name="DeleteAll" value="Delete all" @click="deleteAll">
        <br>
    </div>
</template>

<script>

export default {
    name: "PostButtons",
    methods: {
        addPost() {
            this.$router.push("/addpost");
        },
        deleteAll() {
        fetch(`http://localhost:3000/posts`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    }
}
</script>

<style>
.button {
    margin-bottom: 5px;
    border-radius: 15px;
    height: 30px;
    width: 100px;
    background-color: rgb(68, 160, 252);
}
</style>