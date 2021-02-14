<template>
  <div>
    <h1>Playlist</h1>
    <ul>
      <li v-for="song in playlist" :key="song">
        {{ song }}
      </li>
    </ul>
    <v-main>
      <router-link to="/playlist">/play</router-link>

      <router-link to="/media">/media</router-link>

      <router-link to="/playbar">bar</router-link>

      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="display-1 text--primary">be•nev•o•lent</p>
          <p>adjective</p>
          <div class="text--primary">
            well meaning and kindly.<br />
            "a benevolent smile"
          </div>
        </v-card-text>
      </v-card>
      <!--  -->
    </v-main>
  </div>
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
    const res = await fetch("/api/playlist");
    const data = await res.json();
    this.playlist = data;
  },
};
</script>

<style scoped></style>
