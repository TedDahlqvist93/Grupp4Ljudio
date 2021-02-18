<template>
  <v-main>
    <div>
      <!--  this div will contain the YouTube Player
        when script gets loaded -->
      <youtube :video-id="videoId" ref="youtube" :player-vars="playerVars"  resize></youtube>
    </div>
  </v-main>
</template>

<script>


export default {
  data() {
    return {
      videoId: '',
      playerVars:{
        autoplay:1,
        controls:0

      },
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    video() {
      return this.$store.state.currentSong.id;
    },
    play() {
      return this.$store.state.player.isPlaying;
    },
    
    pause() {
    return this.$store.state.player.isPlaying;
    }
    
  },
  watch: {
    video(id) {
      this.videoId = id;
    },
    play() {
      if(this.$store.state.player.isPlaying === true){
        this.$refs.youtube.player.playVideo()
      }
    },
      pause() {
      if(this.$store.state.player.isPlaying === false){
        this.$refs.youtube.player.pauseVideo()
      }
    }
  },
  methods: {
    
  }
}
</script>

dQw4w9WgXcQ
