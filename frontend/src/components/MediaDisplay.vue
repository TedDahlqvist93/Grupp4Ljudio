<template>
  <div>
    <!--  this div will contain the YouTube Player
        when script gets loaded -->
    <div id="yt-player"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: null,
      videoId: "",
    };
  },
  async mounted() {
    let searchString = "";
    YT.ready(
      function() {
      player = new YT.Player("yt-player", {
        videoId: "dQw4w9WgXcQ",
        host: 'https://www.youtube.com',
        height: "300",
        width: "400",
        playerVars: { 
          autoplay: 0,
          controls: 0
          },
        events: {
          onStateChange: this.onPlayerStateChange
        },
    });
  })
  },
  methods: {

    playSong() {
      this.player.loadVideoById(this.videoId)
    },
    onPlayerStateChange(event) {
      if (event.data != YT.PlayerState.PLAYING) return
    }    
  }
}
</script>

dQw4w9WgXcQ