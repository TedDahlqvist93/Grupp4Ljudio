<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right flat height="72">
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

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

    <v-navigation-drawer app clipped right>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title v-on:click="hide">Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <v-bottom-navigation v-model="value" :background-color="color" dark shift>
        <v-btn>
          <span>Video</span>

          <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
          <span>Music</span>

          <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
          <span>Album</span>

          <v-icon>mdi-album</v-icon>
        </v-btn>

        <v-btn>
          <span>Playlist</span>

          <v-icon>mdi-playlist-music</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import MediaDisplay from "@/components/MediaDisplay.vue";

export default {
  name: "Home",
  components: {
    MediaDisplay,
  },
  data: () => ({ value: 1 }),
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
  },
};
</script>
