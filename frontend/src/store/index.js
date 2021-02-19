import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'
axios.defaults.withCredentials = true

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
            volume: 100,
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
            userId: '',
        },
        allPlaylists: [],
        allSongs: [],
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
            return state.allPlaylists;
        },
        getAllSongs: state => {
            return state.allSongs;
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
            state.player.isPlaying = status;
        },
        setVolume: (state, status) => {
            state.player.volume = status;
        },
        setShowVideo: (state, status) => {
            state.showVideo = status;
        },
        setCurrentSong: (state, status) => {
            state.currentSong = status;
        },
        setCurrentPlaylist: (state, status) => {
            state.currentPlaylist = status
        },
        setAllPlaylists: (state, status) => {
            state.allPlaylists = status;
        },
        setAllSongs: (state, status) => {
            state.allSongs = status;
        },
        setSearchList: (state ,status) => {
            state.searchList = status
        },
        addPlaylist: (state, status) => {
            state.allPlaylists.push(status);
        }

    },
    actions: {
        async searchSong({ commit }, query) {
            await axios.get('/api/yt/songs/${query}')
                .then(response => {
                   commit('setSearchList', { search: query, songs: response.data.content})
                })
        },
        // TODO: Hämtar user för att kolla om den kan logga in automatiskt
        async getUser({commit}, data) {
            await axios.get('/api/login', {data: {data},
                withCredentials: true})
                .then((response) => {
                    console.log(reponse.data)
                    commit('setUser', response.data)
            })
        },
        async login({commit}, data) {
            await axios.post('/api/login', data)
                .then(response => {
                    commit('setUser', response.data)
                })
        },
        async register({commit}, data) {
            await axios.post('/api/users', data)
                .then(response => {
                    commit('setUser', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async logout({commit}, data) {
            await axios.delete('/api/login', data)
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
        async getPlaylists({commit}, data) {
            console.log("get lists")
            await axios.get('/api/playlists/${data}', {
                withCredentials: true
                }).then(response => {
                    commit('setAllPlaylists', response.data)
                })
        },
        async addPlaylist({dispatch}, data) {
            await axios.post('/api/playlists/${data.userId}/${data.name}')
                .then(response => {
                    dispatch('getPlaylists', data.userId);
                    return response
                })
        },
        async deletePlaylist({dispatch}, data) {
            await axios.delete('/api/playlists/${data.userId}/${data.id}')
                .then(response => {
                    dispatch('getPlaylists', data.userId)
                    return response
                })
        },
        async getSongs({commit}, data) {
            await axios.get('/api/songs/${data.userId}/${data.id}', {
                withCredentials: true
            }).then(response => {
                    commit('setAllSongs', response.data)
            })
        },
        async addSong({dispatch}, data) {
            await axios.post('/api/songs', {data,
                withCredentials: true
            }).then(response => {
                dispatch('getSongs', {userId: data.userId, id: data.id});
                return response
            })
        },
        async deleteSong({dispatch}, data) {
            await axios.delete('/api/songs/${data.userId}/${data.id}/${data.key}')
                .then(response => {
                    dispatch('getSongs', {data: {userId: data.userId, id: data.id}})
                    return response
                })
        }
    },
});