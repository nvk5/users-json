<template>
  <div id="app">
    <users-list></users-list>
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";

export default {
  components: {
    UsersList
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  counter-reset: li;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
