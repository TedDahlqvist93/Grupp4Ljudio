<template>
  <div>
    <h1>Search {{this.$store.state.searchList.search}}</h1>
    <ul>
      <li @click="setSong(song.videoId)" v-for="song in this.$store.state.searchList.songs" :key="song.browseId">
        {{ song.name }}-{{ song.artist.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchResults",
  data() {
    return {
      result: this.$store.state.searchList,
    }
  },
  computed: {
  },
  methods: {
    ...mapGetters(["getSearchList"]),
    setSong(videoId) {
      this.$store.commit("setCurrentSong", videoId);
    },
  },
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
