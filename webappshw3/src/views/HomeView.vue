<template>
  <div class="home">
    <Header />
    <div class="container">
    <div id="left"></div>
    <div id="posts">    <h1>There will be posts here, eventually!</h1>
  	</div>
    <div id = "right"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    Footer,
    Header,
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content:space-between;
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