<template>
  <v-app id="inspire">
    <v-app-bar app clipped-center flat height="72" color="#292b2c">
      <v-spacer></v-spacer>
      <!-- Navbar with searchbar -->
      <v-responsive max-width="400">
        <v-text-field
          v-model="query"
          dense
          flat
          rounded
          background-color="white"
          color="black"
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
    <v-navigation-drawer app width="300" class=""> </v-navigation-drawer>

    <!-- List with songs -->
    <v-navigation-drawer app clipped right>
      <Register />
    </v-navigation-drawer>
    <!-- navbar for mobilescreen -->

    <media-display></media-display>
    <v-main>
      <v-card>
        <span><SearchResults /></span></v-card
    ></v-main>
    <v-footer app color="transparent" height="140" inset fixed>
      <v-app-bar color="#424242" rounded inset>
        <v-btn rounded color="grey" width="15%" @click="playPrevious()">
          <v-icon>mdi-skip-previous-circle</v-icon>
        </v-btn>
        <v-btn
          v-if="!this.$store.state.player.isPlaying"
          color="grey"
          width="15%"
          @click="play(true)"
          rounded
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn rounded v-else color="grey" width="15%" @click="play(false)">
          <v-icon>mdi-pause</v-icon>
        </v-btn>
        <v-btn rounded color="grey" width="15%" @click="playNext()">
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
      value:"100"
    };
  },
  computed: {
    
    ...mapGetters(["getSearchList"]),
  },
  methods: {
    ...mapActions(["searchSong"]),

    changeVolume(volume){
      this.$store.commit("setVolume", volume);
    },
    play(bool) {
      this.$store.commit("setIsPlaying", bool);
    },
    search(query) {
      this.searchSong(query);
    },
  },
};
</script>
