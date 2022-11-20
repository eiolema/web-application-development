<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="validateForm">
        <label for="email">Email: </label>
        <input class="inputfield" v-model="email" placeholder="Email"><br>
        <div v-if="emailerrors.length>0" class="error">
          <div v-for="error in emailerrors" :key="error">
            <p>{{ error }}</p>
          </div>
        </div>
        <label for="password">Password: </label>
        <input type="password" class="inputfield" v-model="password" placeholder="Password"><br>
        <div v-if="passworderrors.length>0" class="error">
          <div v-for="error in passworderrors" :key="error">
            <p>{{ error }}</p>
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
  data: function () {
    return {
      email: '',
      password: '',
      passworderrors: [],
      emailerrors: []
    }
  },

  computed: {
    isEmailAddress(){
      let regex = /\S+@\S+\.\S+/;
      return this.email.length > 0 && regex.test(this.email);
    },

    hasCorrectLength() {
      console.log(this.password.length);
      return this.password.length >= 8 && this.password.length <= 15;
    },

    hasTwoLowerCaseLetters() {
      let count = 0;
      let regex = /[a-z]/;
      for (const element of this.password) {
        if (regex.test(element)) {
          count = count + 1;
        }
        if (count === 2) {
          return true;
        }
      }
      return false;
    },

    startsWithUpperCase() {
      return this.password.length > 0 && this.password[0] === this.password[0].toUpperCase();
    },

    containsUnderscore() {
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
    validateForm() {
      this.validatePassword();
      this.validateEmail();
    },
    validatePassword() {
      this.passworderrors = [];
      if (!this.hasCorrectLength) {
        this.passworderrors.push("password must contain 8-15 characters")
      }

      if (!this.hasTwoLowerCaseLetters) {
        this.passworderrors.push("password must contain at least 2 lower case letters")
      }

      if (!this.startsWithUpperCase) {
        this.passworderrors.push("password must start with an upper case letter")
      }

      if (!this.containsNumber) {
        this.passworderrors.push("password must contain a numeric character")
      }

      if (!this.containsUnderscore) {
        this.passworderrors.push("password must contain an underscore character")
      }
    },

    validateEmail() {
      this.emailerrors = [];
      if(!this.isEmailAddress) {
        this.emailerrors.push("email address is not valid")
      }
    }
  }
}
</script>

<style>
@import "@/assets/css/login.css";
</style>
