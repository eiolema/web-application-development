<template>
  <div class="home">
    <div class="container">
    <div id="left"></div>
    <div id="posts">    <h1>There will be posts here, eventually!</h1>
  	</div>
    <div id = "right"></div>
    </div>
    <LikeReset/>
  </div>
</template>

<script>
// @ is an alias to /src
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
