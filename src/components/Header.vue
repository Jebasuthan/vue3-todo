<template>
  <header v-if="user">
    <div class="left">
      <h2>Vue 3 Application</h2>
    </div>
    <p class="menuitems">
      <router-link to="/todo">Contacts</router-link> |
      <router-link to="/home">Home</router-link>
    </p>
    <div class="right">
      <p class="loginUsername">{{user.name}} <a @click="logout" href="#">Logout</a></p>      
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from '@/router'
export default {
  name: 'app-header',
  computed: mapState({
    user: state => state.user.loginedUser
  }),
  methods: {
    ...mapActions('user', ['userLogout']),
    logout() {
      this.userLogout()
      router.push('/login')
    }
  }
}
</script>

<style>

</style>
