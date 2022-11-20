<template>
  <div class="home">
    <div class="container">
    <div id="left"></div>
    <div id="posts">
  	</div>
    <div id = "right"></div>
    </div>
    <LikeReset/>
  </div>
</template>

<script>
import LikeReset from '@/components/LikeReset';

export default {
  name: 'HomeView',
  components: {
    LikeReset,
  }
}
</script>

<style >
@import "@/assets/css/index.css";
</style>
