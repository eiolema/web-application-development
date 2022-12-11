<template id="post-template">
  <div v-bind:id="id" class="content" @click="select">
    <div class="post-header">
      <p class="date">{{ timestamp }}</p>
    </div>
    <p id="post-text">{{ content }}</p>
    <div class="post-footer">
    </div>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
export default {
  methods: {
    select: function(event) {
      let id = event.currentTarget.id;
      this.$router.push(`/post/${id}`);

    }
  },
  props: ["id", "timestamp", "content"]

}
</script>
