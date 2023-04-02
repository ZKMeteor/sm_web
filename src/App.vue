<template>
  <NavBar></NavBar>
  <div class="container-fluid app">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}

.app {
  padding: 0;
  margin: 0;
}
</style>
