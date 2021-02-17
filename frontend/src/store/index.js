import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      email: "",
      loggedIn: false,
    },
    player: {
      isPlaying: false,
      showVideo: false,
    },
    currentSong: {
      id: null,
      title: "",
      artist: "",
      album: "",
    },
    currentPlayList: {
      id: null,
      name: "",
      songs: [],
    },
    allPlaylists: {
      playlists: [],
    },
    searchList: {
      id: null,
      search: "",
      songs: [],
    },
    content: [],
    results: [],
    currentsong: "",
  },
  getters: {
    getIsPlaying: (state) => {
      return state.isPlaying;
    },
    getShowVideo: (state) => {
      return state.showVideo;
    },
    getCurrentSong: (state) => {
      return state.currentSong;
    },
    getCurrentPlaylist: (state) => {
      return state.currentPlaylist;
    },
    getAllPlaylists: (state) => {
      return state.currentPlaylist;
    },
  },
  mutations: {
    setIsPlaying: (state, status) => {
      state.isPlaying = status;
    },
    setShowVideo: (state, status) => {
      state.showVideo = status;
    },
    SET_SONG(state, song) {
      state.currentsong = song;
    },

    setCurrentPlaylist: (state, status) => {
      state.currentPlaylist = status;
    },
    setAllPlaylists: (state, status) => {
      state.allPlaylists = status;
    },

    returnResults: (state, results) => {
      state.results = results;
      console.log(results);
    },
  },
  actions: {
    /*
         TODO: Build API wrapper to call api requests
         import API from '@api/index.js'
         source-folder/api/index.js
         */

    // USER API
    // 3000:/api/users

    getUserStatus(context) {
      // fetch user and load into state
    },
    loginUser(contex) {
      // delete user and load into state
    },
    registerUser(contex) {
      // register user and load into state
    },
    logoutUser(contex) {
      // logout user and load into state
    },

    // PLAYLIST API
    // 3000:/api/playlists

    getPlaylist(playlistId) {
      // fetch playlists and load into state
      // 3000:/api/playlists/:id
    },
    async getSearchResults({ commit }, query) {
      const res = await axios.get(`/api/yt/songs/${query}`);
      // Execute the mutation which receive the data and pass to the state
      commit("returnResults", res.data.content);
    },

    addPlaylist(playlistId) {
      // add playlist and load into state
    },
    deletePlaylist(playlistId) {
      // delete playlist and load into state
    },

    // SONGS API
    // 3000:/api/playlists

    getSongs(songId) {
      // fetch songs and load into state
    },
    addSong(songId) {
      // add song here load into state
    },
    deleteSong(songId) {
      // delete song and load into state
    },
  },
});
