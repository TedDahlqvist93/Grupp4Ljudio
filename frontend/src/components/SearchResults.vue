<template>
  <v-main>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-row align="center" justify="space-around">
        <div>
          <h1>Playlist</h1>
          <ul>
            <li v-for="song in content" :key="song.videoId">
              {{ song.name }}
              <v-btn tile @click="setSong(song.videoId)">
                <v-icon left>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn tile color="success" @click="addSong(song.videoId)">
                <v-icon left>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </li>
          </ul>

          <!--  -->
        </div>
      </v-row>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "SearchResults",
  computed: {
    content() {
      return this.$store.state.results;
    },
  },
  methods: {
    setSong(videoId) {
      this.$store.commit("SetSong", videoId);
    },
    addSong(videoId) {
      this.$store.commit("addSong", videoId);
    },
  },
  // addSong(videoId) {
  //   this.$store.commit("AddSong", videoId);
  // },
};
</script>
<style>
#border {
  background: grey;
  border-style: solid;
  border-color: #636e72;
  margin-right: 90vw;
}
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
}
li {
  padding-bottom: 10%;
  list-style-type: none;
}
button {
  width: 100%;
  height: 70%;
  color: #00cec9;
}
#buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 3vw;
}
</style>
