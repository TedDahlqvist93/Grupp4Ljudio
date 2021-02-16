// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  content: [],
};

//to handle state
const getters = {
  allUsers: (state) => state.users,
};

//to handle actions
const actions = {
  getAlbum({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      commit("SET_ALBUM", response.data);
    });
  },
};

//to handle mutations
const mutations = {
  SET_ALBUM(state, content) {
    state.content = content;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
