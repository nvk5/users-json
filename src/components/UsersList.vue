<template>
  <div class="user-list-wrap">
    <div v-if="loading" class="user-list__loader">
      <spinner></spinner>
    </div>
    <div v-if="error" class="user-list__error">{{ error }}</div>
    <ul v-else class="user-list">
      <li v-for="user in users" :key="user.id" class="user-list__item">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  components: {
    spinner: Spinner,
  },
  computed: {
    loading() {
      return this.$store.state.users.usersLoading;
    },
    error() {
      return this.$store.state.users.usersError;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
@keyframes show {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.user-list {
  animation: show 1s ease;
  list-style: none;
  font-size: 30px;
}

.user-list__item {
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 20px;
}

.user-list__item::before {
  counter-increment: li;
  content: counter(li) ":";
  justify-self: center;
}
</style>