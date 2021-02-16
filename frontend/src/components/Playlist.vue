<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="gettersuser in gettersusers" :key="gettersuser.id">
      {{ gettersuser.id }} {{ gettersuser.name }} {{ gettersuser.address }}
    </div>
    <h1>Made By Actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h1>nsdnjhebjb</h1>
  </div>
</template>

<script>
export default {
  name: "myStore",
  data() {
    return {
      msg: "Welcome to my Vuex Store",
    };
  },
  computed: {
    gettersusers() {
      return this.$store.getters.allUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>
