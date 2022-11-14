<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign Up</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flexbox;
  padding: 30px;
  background-color: blue;
}

nav a {
  font-weight: bold;
  color:black;
}

nav a.router-link-exact-active {
  color:white;
}

</style>
