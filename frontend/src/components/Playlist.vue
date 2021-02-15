<template>
  <v-main>
    <div>
      <h1>Playlist</h1>
      <ul>
        <li v-for="song in playlist" :key="song.playlist">
          {{ song.playlist }}
        </li>
      </ul>

      <!--  -->
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Playlist",
  data() {
    return {
      playlist: {
        name: String,
        songs: [],
      },
    };
  },
  async created() {
    const res = await fetch("/api/playlist" + this.route.$id);
    const data = await res.json();
    this.playlist = data;
  },
};
</script>

<style scoped></style>
