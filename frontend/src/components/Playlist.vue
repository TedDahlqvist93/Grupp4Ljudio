<template>
  <v-list class="pl-14" shaped>
    <v-list-item    v-for="song in content"
              :key="song.videoId"
            >
            {{ song.name }}
      <v-list-item-content>
        <v-list-item-title>     {{ song.name }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: "Playlist",
     computed: {
  content() {
      return this.$store.state.currentPLayList;
    },
  },
};
</script>

<style scoped>
