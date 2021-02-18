<template>
  <v-main>
    <div>
      <!--  this div will contain the YouTube Player
        when script gets loaded -->
      <div id="yt-player"></div>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      player: null,
    };
  },
  computed: {
    videoId() {
      return this.$store.state.currentSong;
    },
  },
  watch: {
    videoId(id) {
      this.player.loadVideoById(id);
    },
  },
  async mounted() {
    let searchString = "";
    window.YT.ready(function (){
      this.player = new YT.Player("yt-player", {
      host: "https://www.youtube.com",
      height: "400",
      width: "400",
      playerVars: {
        autoplay: 1,
        controls: 0,
      },
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    })})
    
 
  },
  methods: {
    playSong() {
      this.player.loadVideoById(this.videoId);
    },
    onPlayerStateChange(event) {
      if (event.data != YT.PlayerState.PLAYING) return;
    },
  },
};
</script>

dQw4w9WgXcQ
