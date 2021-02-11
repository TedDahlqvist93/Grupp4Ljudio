<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MediaDisplay from './components/MediaDisplay'
import PlaylistList from './components/PlaylistList.vue'


export default {
  name: "App",

  components: {
    MediaDisplay,
    PlaylistList  
  },

  data: () => ({
    //
  }),
};
</script>
