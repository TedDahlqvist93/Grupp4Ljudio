<template>
  <v-main>
    <div>
      <!--  this div will contain the YouTube Player
        when script gets loaded -->
      <youtube :video-id="videoId" ref="youtube"  resize></youtube>
    </div>
  </v-main>
</template>

<script>


export default {
  data() {
    return {
      videoId:''
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    videoId() {
      return this.$store.state.currentSong;
    },
    play() {
      return this.$store.state.isPlaying;
    },
    
    pause() {
    return this.$store.state.isPlaying;
    }
    
  },
  watch: {
    videoId(id) {
      this.player.loadVideoById(id);
    },
    play() {
      if(this.$store.state.isPlaying === true){
        this.$refs.youtube.player.playVideo()
      }
    },
      pause() {
      if(this.$store.state.isPlaying === false){
        this.$refs.youtube.player.pauseVideo()
      }
    }
  },
  methods: {
    
  }
}
</script>

dQw4w9WgXcQ
