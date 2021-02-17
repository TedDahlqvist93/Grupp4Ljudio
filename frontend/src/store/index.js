import Vue from 'vue'
import Vuex from 'vuex'

import User from '../api/User.js'
import Song from '../api/Songs.js'
import Playlist from '../api/Playlists.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: null,
            email: '',
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
        setIsPlaying: (state, status) => {
            state.isPlaying = status
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
        getUserStatus(context) {
            // fetch user and load into state
        },
        loginUser(form) {
            User.login(form.email, form.password)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async registerUser(form) {
            await User.register(form.email, form.password)
                .then((response) => {
                    return response
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        logoutUser(form) {
            User.logout(form.email, form.password)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },


        getPlaylist(playlistId) {
            // fetch playlists and load into state
            // 3000:/api/playlists/:id
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
        }
    },
});
