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
      <h1> {{selected}} </h1>
    </v-app-bar>

    <!-- List with playlists  -->
    <v-navigation-drawer app width="300" class=""> 
      <Songs/>
    </v-navigation-drawer>

    <!-- List with songs -->
    <v-navigation-drawer app clipped right>
      <Register />
      <div v-if="this.$store.state.user.loggedIn">
        <Playlist/>
      </div>
    </v-navigation-drawer>
    <!-- navbar for mobilescreen -->

    <media-display></media-display>
    <v-main>
      <v-card>
        <h2>Current song: {{song}} </h2>
        <br>
        <span><SearchResults /></span></v-card
    ></v-main>
    <v-footer app color="transparent" height="140" inset fixed>
      <v-app-bar color="#424242" rounded inset>
        <v-btn
          v-if="!this.$store.state.player.isPlaying"
          color="grey"
          width="30%"
          @click="play(true)"
          rounded
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn v-else color="grey" width="30%" @click="play(false)">
          <v-icon>mdi-pause</v-icon>
        </v-btn>
        <v-slider
          min="0"
          max="100"
          value="100"
          thumb-label
          append-icon="mdi-volume-high"
          @drag="changeVolume()"
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
import Songs from "./components/Songs.vue";

export default {
  name: "App",
  components: {
    MediaDisplay,
    SearchResults,
    Playlist,
    MediaDisplay,
    Register,
    Songs,
  },
  data() {
    return {
      value: 1,
      text: "",
      query: "",
      song: "",
      selected: null,

      value:"100"

    };
  },
  methods: {
    async update() {
      this.selected = this.$store.state.currentPlaylist
      await this.$nextTick(() =>{
        this.selected = this.$store.state.currentPlaylist
      })
    }
  },
  mounted() {
    this.$store.dispatch('getUser')


  },
  computed: {
    getSong(){
      return this.$store.state.currentSong.title;
    },
    
    ...mapGetters(["getSearchList"]),
    ...mapGetters(["getCurrentPlaylist"]),
  },
  watch:{
getSong(song){
      this.song = song
    },
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
