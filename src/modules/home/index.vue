<template>
  <div>
    <Welcome />
    <div class="box-container">
      <h2>Welcome {{user.name}} to Vue 3</h2>
    </div>
    <div class="footer">
      <router-link to="/todo">Create New Contact</router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Welcome from '@/components/Welcome'
export default {
  name: 'home',
  components: {
    Welcome
  },
  computed: mapState({
    user: state => state.user.loginedUser
  })
}
</script>
