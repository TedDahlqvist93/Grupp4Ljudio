import Vue from 'vue'
import Vuex from 'vuex'

import User from '../api/User.js'
import Song from '../api/Songs.js'
import Playlist from '../api/Playlists.js'

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
            id: null,
            search: '',
            songs: [],
        }
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
        }
    },
    mutations: {
        setUser: (state, status) => {
            console.log(status)
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
        }
    },
    actions: {
        async getUser(data) {
            await User.getStatus(1)
                .then(response => {
                    console.log(response)
                    return response
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async login({commit}, data) {
            await User.login(data)
                .then(response => {
                    commit('setUser', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async register({commit}, data) {
            await User.register(data)
                .then(response => {
                    commit('setUser', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async logout({commit}, data) {
            await User.logout(data)
                .then(response => {
                    commit('setUser', {
                        id: '',
                        email: '',
                        firstName: '',
                        lastName: '',
                        loggedIn: false,
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },

        async getPlaylists(data) {
            Playlist.get(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async addPlaylist(data) {
            Playlist.add(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async deletePlaylist(data) {
            Playlist.remove(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getSongs(data) {
            Song.get(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async addSong(data) {
            Song.add(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async deleteSong(data) {
            Song.remove(data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
});
