<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>



