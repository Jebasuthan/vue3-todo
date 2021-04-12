<template>
  <div class="main-container">
    <form @submit.prevent="onSubmit" novalidate autocomplete="off">
      <div class="box-container">
        <h2 class="heading">Login</h2>
        <div class="form-fields">
          <input name="email" v-model="email" type="text" placeholder="Email Address" autocomplete="email">
          <small class="error" v-for="(error, index) of v$.email.$errors" :key="index">
            {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
          </small>
        </div>
        <div class="form-fields">
          <input name="password" v-model="password" type="password" placeholder="Password" autocomplete="new-password">
          <small class="error" v-for="(error, index) of v$.password.$errors" :key="index">
            {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
          </small>
        </div>
        <small class="error" v-if="loginFailed">Login Failed! Invalid login credentials!</small>
        <div class="form-fields">
          <button class="signIn" type="submit">
            Login
          </button>
        </div>
        <div class="login-choice"><span><a href="#">Forgot Password</a></span></div>
      </div>
    </form>
    <div class="footer">
       <p>Don't have an account? <a href="/register"> Create one now</a></p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
import { getStore, capitalizeFirstLetter, lowercaseFirstLetter } from  '@/config/Utils'
import router from '@/router'

export default {
  name: 'login',
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: '',
      password: '',
      loginFailed: false
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) }
    };
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    formatModalName(string) {
      return capitalizeFirstLetter(string)
    },
    formatMessage(string) {
      return lowercaseFirstLetter(string)
    },
    onSubmit() {
      this.v$.$touch();
      if (this.v$.$error) return;
      let user = getStore('user')
      console.log(user)
      if (user) {
        if (user.email == this.email && user.password == this.password) {
          this.userLogin(user)
          router.push('/todo')
          return
        }
      }
      this.loginFailed = true
    }
  }
}
</script>
