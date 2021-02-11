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
/*     let res = await fetch("/api/yt/songs/" + searchString);
    let songs = await res.json(); 
    console.log(songs); */
    this.player = new YT.Player("yt-player", {
      videoId: "dQw4w9WgXcQ",
      height: "300",
      width: "400",
      playerVars: {
        controls: 0,
      },
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });
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