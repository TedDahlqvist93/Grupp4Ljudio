<template>
  <div class="main">
    <div>
      <h1>Songs</h1>
      <ul>
        <li @click="playSong(song)" 
            v-for="song in songs" 
            :key="song.id">
            {{ song.title }} - {{ song.artist }}
            <br>
            <br>
            <v-btn v-on:click="remove(song)" width="20%">delete</v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Songs",
    computed: {
    },
    data() {
      return {
        addClicked: false,
        name: '',
        playlist: this.$store.getters.getCurrentPlaylist,
      }
    },
    computed: {
      songs() {
        return this.$store.state.allSongs;
      }

    },
     async mounted() {
      if (this.$store.state.currentPlaylist === undefined){
        return
      }
      const data = { userId: this.$store.state.user.id, id: this.$store.state.currentPlaylist.id }
      await this.getSongs(data)
      .then(() => {
        console.log(this.$store.state.allSongs)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    methods: {
       ...mapActions(["getSongs"]),
       ...mapActions(["addSongs"]),
       ...mapActions(["deleteSong"]),

       playSong(song) {
      this.$store.commit("setCurrentSong", {
        id: song.key,
        title: song.name,
        artist: song.artist.name,
        album: song.album.name,
      });
      this.$store.commit("setIsPlaying", true);
    },
      async remove(data) {
        const userId = this.$store.state.user.id
        const params = {
            key: data.key,
            id: data.id,
            userId: userId
            }

        await this.deleteSong(params)
        .then(() => {
        })
      },
      async update() {
        this.songs = this.$store.state.allSongs;
        await this.$nextTick(() =>{
          this.songs = this.$store.state.allSongs;
        })
      },
      async add() {
        const id = this.$store.state.user.id
        const data = {userId: id, name: this.name}

        await this.addSongs(data)
        .then(response => {
          this.clicked()
        })
      }
    }
};
</script>

<style scoped>

