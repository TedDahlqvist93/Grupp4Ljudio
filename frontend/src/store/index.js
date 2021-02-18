import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            loggedIn: false,
        },
        player: {
            isPlaying: false,
            showVideo: false,
        },
        currentSong: {
            id: null,
            title: '',
            artist: '',
            album: '',
        },
        currentPlayList: {
            id: null,
            name: '',
            songs: [],
        },
        allPlaylists: {
            playlists: []
        },
        searchList: {
            search: '',
            songs: [],
        },
        isPlaying: false
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getIsPlaying: state => {
            return state.isPlaying;
        },
        getShowVideo: state => {
            return state.showVideo;
        },
        getCurrentSong: state => {
            return state.currentSong;
        },
        getCurrentPlaylist: state => {
            return state.currentPlaylist;
        },
        getAllPlaylists: state => {
            return state.currentPlaylist;
        },
        getSearchList: state => {
          return state.searchList;
        }
    },
    mutations: {
        setUser: (state, status) => {
            state.user = status;
        },
        setIsPlaying: (state, status) => {
            state.isPlaying = status;
        },
        setShowVideo: (state, status) => {
            state.showVideo = status;
        },
        setCurrentSong: (state, status) => {
            state.currentSong = status;
        },
        setCurrentPlaylist: (state, status) => {
            state.currentPlaylist = status;
        },
        setAllPlaylists: (state, status) => {
            state.allPlaylists = status;
        },
        setSearchList: (state ,status) => {
            state.searchList = status
        }
    },
    actions: {
        async searchSong({ commit }, query) {
            await axios.get(`http://localhost:3000/api/yt/songs/${query}`)
                .then(response => {
                   commit('setSearchList', { search: query, songs: response.data.content})
                   console.log(response) 
                })
        },
        async getUser({commit}, data) {
            await axios.get('http://localhost:3000/api/login', data)
                .then((response) => {
                    commit('setUser', response.data)
            })
        },
        async login({commit}, data) {
            await axios.post('http://localhost:3000/api/login', data)
                .then(response => {
                    commit('setUser', response.data)
                })
        },
        async register({commit}, data) {
            await axios.post('http://localhost:3000/api/users', data)
                .then(response => {
                    commit('setUser', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async logout({commit}, data) {
            await axios.delete('http://localhost:3000/api/login', data)
                .then(response => {
                    commit('setUser', {
                        id: '',
                        email: '',
                        firstName: '',
                        lastName: '',
                        loggedIn: false,
                    })
                    return response
                })
        },

        async getPlaylists(data) {
            await Playlist.get(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async addPlaylist(data) {
            await axios.post('http://localhost:3000/api/playlists', data)
                .then(response => {
                    console.log(response);
                })
        },
        async deletePlaylist(data) {
            await axios.delete('http://localhost:3000/playlists', data)
                .then(response => {
                    console.log(response);
                })
        },
        async getSongs(data) {
            await axios.get('http://localhost:3000/api/songs', data)
                .then(response => {
                    console.log(response);
                })
        },
        async addSong(data) {
            await axios.post('http://localhost:3000/api/songs', data)
                .then(response => {
                    console.log(response);
                })
        },
        async deleteSong(data) {
            await axios.delete('http://localhost:3000/songs', data)
                .then(response => {
                    console.log(response);
                })
        }
    },
});