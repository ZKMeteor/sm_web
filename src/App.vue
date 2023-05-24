<template>
  <NavBar></NavBar>
  <div class="container-fluid app">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import emitter from "./methods/emitter";
export default {
  components: {
    NavBar,
  },
  provide() {
    return {
      emitter,
    };
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
