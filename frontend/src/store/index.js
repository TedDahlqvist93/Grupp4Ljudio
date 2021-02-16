import Vue from 'vue'
import Vuex from 'vuex'

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
            name: '',
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
            // update user status here?
            // e.g login. logout
        }
    },
});
