<template>
  <div class="signup">
    <Header />
    <h1>This will be the signup-page</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'SignUp',
  components: {
    Footer,
    Header,
  }
}
</script>

<style >

</style>