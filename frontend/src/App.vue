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
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-btn
        rounded
        small
        color="primary"
        dark
        @click="search(query)"
        max-width="120"
      >
      </v-btn>
    </v-app-bar>

    <!-- List with playlists  -->
    <v-navigation-drawer v-model="drawer" app width="300" class="">
      <SearchResults/>
    </v-navigation-drawer>

    <!-- List with songs -->
    <v-navigation-drawer app clipped right>
        <Register/>
    </v-navigation-drawer>
    <!-- navbar for mobilescreen -->

    <media-display></media-display>
    <v-footer app color="transparent" height="140" inset>
      <v-app-bar color="green" inset>
        <v-btn color="white" width="15%" @click="playPrevious()">
          <v-icon>mdi-skip-previous-circle</v-icon>
        </v-btn>
        <v-btn color="white" width="15%" @click="play()">
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn color="white" width="15%" @click="pause()">
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
          @drag="changeVolume()"
        ></v-slider>
      </v-app-bar>
      <v-bottom-navigation v-model="value" :background-color="color" dark shift>
        <v-btn>
          <span>
            <router-link to="/results">SearchResults</router-link>
          </span>

          <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
          <span> <router-link to="/media">Media</router-link></span>

          <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
          <span> <router-link to="/play">PlayList</router-link></span>

          <v-icon>mdi-album</v-icon>
        </v-btn>

        <v-btn>
          <span>Playlist</span>

          <v-icon>mdi-playlist-music</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
    <router-view></router-view>
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
    play(){
      this.$store.commit("setIsPlaying", true);
    },
    pause(){
      this.$store.commit("setIsPlaying", false);
    },
        ...mapActions(["searchSong"]),
        search(query) {
          this.searchSong(query)
        }
  },
};
</script>
