<template>
  <v-app id="inspire">
    <v-app-bar app clipped-center flat height="72">
      <v-spacer></v-spacer>
      <!-- Navbar with searchbar -->
      <v-responsive max-width="400">
        <v-text-field
          v-model="query"
          dense
          flat
          rounded
          background-color="grey"
          color="white"
          
        ></v-text-field>
      </v-responsive>
      <v-btn
        rounded
        small
        color="primary"
        dark
        @click="search(query)"
        max-width="120"
      >Search
      </v-btn>
    </v-app-bar>

    <!-- List with playlists  -->
    <v-navigation-drawer app width="300" class="">
      <SearchResults/>
    </v-navigation-drawer>

    <!-- List with songs -->
    <v-navigation-drawer app clipped right>
        <Register/>
    </v-navigation-drawer>
    <!-- navbar for mobilescreen -->

    <media-display></media-display>
    <v-footer app color="transparent" height="140" inset>
      <v-app-bar color="indigo" rounded inset>
        <v-btn color="white" width="15%" @click="playPrevious()">
          <v-icon>mdi-skip-previous-circle</v-icon>
        </v-btn>
        <v-btn v-if="!this.$store.state.player.isPlaying" color="white" width="15%" @click="play(true)">
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn v-else color="white" width="15%" @click="play(false)">
          <v-icon>mdi-pause</v-icon>
        </v-btn>
        <v-btn color="white" width="15%" @click="playNext()">
          <v-icon>mdi-skip-next-circle</v-icon>
        </v-btn>
        <v-slider
          min="0"
          max="100"
          value="100"
          thumb-label
          prepend-icon="mdi-volume-high"
          v-model="value"
          @input="changeVolume(value)"
        >
        </v-slider>
      </v-app-bar>
    </v-footer>
  </v-app>
</template>

<script>
import SearchResults from "./components/SearchResults.vue";
import Playlist from "./components/Playlist.vue";
import { mapActions, mapGetters } from "vuex";
import MediaDisplay from "./components/MediaDisplay.vue";
import Register from "./components/Register.vue";

export default {
  name: "App",
  components: {
    MediaDisplay,
    SearchResults,
    Playlist,
    MediaDisplay,
    Register,
  },
  data() {
    return {
      value: 1,
      text: "",
      query: "",
      value: "100"
    
    };
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "#880E4F";
        case 1:
          return "teal";
        case 2:
          return "cyan";
        case 3:
          return "indigo";
        default:
          return "#880E4F";
      }
    },
    ...mapGetters(["getSearchList"]),


  },
  methods: {
    ...mapActions(["searchSong"]),
    play(bool){
        this.$store.commit("setIsPlaying", bool)
      
    },
    changeVolume(volume){
        this.$store.commit("setVolume", volume)
    },
    search(query) {
      this.searchSong(query)
    }
  },
};
</script>
