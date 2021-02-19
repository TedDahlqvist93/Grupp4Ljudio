<template>
  <div class="main">
    <div>
      <h1>Songs</h1>
      <ul>
        <li v-on:click="playSong(song)" 
            v-for="song in this.songs" 
            :key="song.id">
            {{ song.title }} - {{ song.artist }}
            <button v-if="this.$store.state.currentPlaylist !== undefined" v-on:click="remove(song.id)">delete</button>
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
        playlist: this.$store.state.currentPlaylist,
      }
    },
    computed: {
      songs() {
        return this.$store.state.allSongs;
      }

    },
     async mounted() {
      if (this.store.state.currentPlaylist === undefined){
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
      async remove(id) {
        const userId = this.$store.state.user.id
        const data = {
            userId: userId,
            id: id
            }

        await this.deleteSong(data)
        .then(() => {
        })
      },
      async update() {
        this.songs = this.$store.state.allSongs;
        console.log(this.$store.getters.allSongs)
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

