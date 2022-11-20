<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="validatePassword">
        <label for="email">Email: </label>
        <input type="email" class="inputfield" v-model="email" placeholder="Email" required><br>
        <label for="password">Password: </label>
        <input type="password" class="inputfield" v-model="password" placeholder="Password" required><br>
        <div v-if="errors.length>0" class="error">
          <div v-for="error in errors" :key="error">
            <p>{{error}}</p>
          </div>
        </div>
        <input type="submit" class="submit" name="login" value="Signup"> <br>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data: function() {
    return {
      email: '',
      password: '',
      errors:[],
    }},

  computed: {
    hasCorrectLength() {
      console.log(this.password.length);
      return this.password.length >= 8 && this.password.length <= 15;
    },
    hasTwoLowerCaseLetters() {
      let count = 0;
      let regex = /[a-z]/;
      for(const element of this.password) {
        if (regex.test(element)) {
          count = count + 1;
        }
        if(count === 2) {
          return true;
        }
      }
      return false;
    },

    startsWithUpperCase() {
      console.log(this.password[0]===this.password[0].toUpperCase());
      return this.password[0] === this.password[0].toUpperCase();
    },

    containsUnderscore(){
      let regex = /_/;
      return regex.test(this.password);
    },

    containsNumber() {
      let regex = /\d/;
      return regex.test(this.password);
    }
  },

  methods: {
    /* Validate password */
    validatePassword(){
      this.errors = [];
      if(!this.hasCorrectLength) {
        this.errors.push("password must contain between 8-15 characters")
      }

      if(!this.hasTwoLowerCaseLetters) {
        this.errors.push("password must contain at least 2 lower case letters")
      }

      if(!this.startsWithUpperCase) {
        this.errors.push("password must start with an upper case letter")
      }

      if(!this.containsNumber) {
        this.errors.push("password must contain a numeric character")
      }

      if(!this.containsUnderscore) {
        this.errors.push("password must contain an underscore character")
      }
    }
  }
}
</script>

<style >
@import "@/assets/css/login.css";
</style>
