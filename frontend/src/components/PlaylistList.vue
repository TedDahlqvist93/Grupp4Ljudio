
<template>
  <div id="border">
      <div id="buttons">
      <button v-on:click="toggleVideo()" >Toggle Video</button>
      <button v-on:click="toggleMusic() && getItems()"  >Toggle Music</button>
      </div>
      <div>
          <ul>
            <!-- <div v-for="item in playlists": key=""></div> -->
            <li>Swooow</li>
            <li>Test</li>
            <li>playlists</li>
            <li>get it</li>
          </ul>
      </div>
  </div>
</template>

<script>
import data from '../httpReq.js'

export default {
  name: 'PlaylistList',
  methods:{
    toggleVideo(){
    alert("Toggled Video")
    },
    toggleMusic(){
    alert("Toggled Audio")
    },
    getItems() {
        console.log()
    }
  }
}


</script>
<style>
#border{
    background: grey;
    border-style:solid;
    border-color: #636e72;
    margin-right: 90vw;
    
    }
    ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0;
    
    }
li{
    padding-bottom: 10%;
    list-style-type: none;
    
    }
    button{
        width: 100%;
        height: 70%;
        color: #00cec9;
        
        }
    #buttons{
        display: flex;   
        justify-content: center;
        align-items: center;  
        flex-direction: column;
        height: 3vw;

    }
</style>