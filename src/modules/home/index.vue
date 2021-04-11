<template>
  <div>
    <Welcome />
    <div class="box-container">
      <h2 class="heading">Welcome Jeba to Vue 3</h2>
    </div>
    <div class="footer">
      <router-link to="/todo">Create Contact</router-link>
    </div>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome'
export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
