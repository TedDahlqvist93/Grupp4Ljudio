<template>
  <div>
    <h1>PlaylistList</h1>
    <ul>
      <li v-for="list in playlists" :key="list">
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PlaylistList",
    data() {
      return {
          playlists: []
      };
    },
    async created() {
      const res = await fetch("/api/playlist");
      const data = await res.json();
      this.playlists = data;
    },
  };
</script>

<style scoped>
</style>
