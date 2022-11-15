<template>
  <div class="home">
    <Header />
    <div class="container">
    <div id="left"></div>
    <div id="posts">    <h1>There will be posts here, eventually!</h1>
  	</div>
    <div id = "right"></div>
    </div>
    <LikeReset/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import LikeReset from '@/components/LikeReset.vue';

export default {
  name: 'HomeView',
  components: {
    Footer,
    Header,
    LikeReset,
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content:space-between;
  margin-top: 5px;
  margin-bottom: 5px;
}

#posts {
  width: 50%; 
  border-radius: 10px;
  background: grey;
}

#left, #right {
    width: 20%;
    background-color: black;
    border-radius: 10px;
}
</style>