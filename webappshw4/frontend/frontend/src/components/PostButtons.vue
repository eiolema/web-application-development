<template>
    <div class="like-reset">
        <input type="button" class="button" name="AddPost" value="Add Post">
        <input type=" button" class="button"  name="DeleteAll" value="Delete all">
        <br>
    </div>
</template>

<script>

export default {
    name: 'ResetLikes',
    methods: {
        reset() {
            this.$store.dispatch("resetLikes");
        }
    },
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