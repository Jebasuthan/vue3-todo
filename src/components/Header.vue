<template>
  <header v-if="userLogined">
    <div class="left">
      <h2>Vue 3 Application</h2>
    </div>
    <p class="menuitems">
      <router-link to="/todo">Contacts</router-link> |
      <router-link to="/home">Home</router-link>
    </p>
    <div class="right">
      <p class="loginUsername">{{getUsername()}} <a @click="logout" href="#">Logout</a></p>      
    </div>
  </header>
</template>

<script>
import { getStore, removeItem } from '@/config/Utils'
import router from '@/router'
export default {
  name: 'app-header',
  data () {
    return {
      userLogined: false
    }
  },
  methods: {
    logout() {
      removeItem('user')
      this.userLogined = false
      router.push('/login')
    },
    getUsername() {
      if (getStore('user')) {
        return getStore('user').name
      }
    }
  },
  created() {
    console.log(getStore('user'))
    if (getStore('user')) {
      this.userLogined = true
    }
  }
}
</script>

<style>

</style>
