<template>
  <v-list class="pl-14" shaped>
    <v-list-item v-for="n in 5" :key="n" link>
      <v-list-item-content>
        <v-list-item-title>{{ }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: "Playlist",
    computed: {
        ...mapGetters(["getCurrentPlaylist"])

    },
    async mounted() {
        // ...
    },
};
</script>

<style scoped>
