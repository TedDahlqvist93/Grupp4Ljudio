<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right flat height="72">
      <v-spacer></v-spacer>
      <!-- Navbar with searchbar -->
      <v-responsive max-width="156">
        <v-text-field
          v-model="text"
          dense
          flat
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-btn @click="SearchFor()">Search</v-btn>
    </v-app-bar>

    <!-- List with playlists  -->
    <v-navigation-drawer v-model="drawer" app width="300" class="">
      <v-sheet height="128" width="100%"></v-sheet>

      <v-list class="pl-14" shaped>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    {{ text }}

    <!-- List with songs -->
    <v-navigation-drawer app clipped right>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main> </v-main>
    <!-- navbar for mobilescreen -->
    <v-footer app color="transparent" height="72" inset>
      <v-bottom-navigation v-model="value" :background-color="color" dark shift>
        {{ text }}
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
import MediaDisplay from "./components/MediaDisplay";
import SearchResults from "./components/SearchResults.vue";
import Playlist from "./components/Playlist.vue";
import store from "./store/index";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MediaDisplay,
    SearchResults,
    Playlist,
  },
  data() {
    return {
      value: 1,
      text: "",
      textinput: "",
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
    ...mapGetters(["searchResult"]),
  },
  methods: {
    ...mapActions(["getSearchResults"]),
  },
};
</script>
