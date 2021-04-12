<template>
  <h2>
    <div class="marquee"><p>Hello {{user.name}}! Welcome to Vue 3</p></div>
  </h2>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'welcome',
  computed: mapState({
    user: state => state.user.loginedUser
  })
}
</script>
<style scoped>
.heading {
  color: white;
}
</style>
