<template>
  <div class="signup">
    <Header />
    <Form/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'SignUp',
  components: {
    Footer,
    Header,
    Form,
  }
}
</script>

<style >

</style>