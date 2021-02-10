<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MediaDisplay from "./components/MediaDisplay";

export default {
  name: "App",

  components: {
    MediaDisplay,
  },

  data: () => ({
    //
  }),
};
</script>
