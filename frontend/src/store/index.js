import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    content: [],
    results: [],
    currentsong:""
  },
  getters: {},
  actions: {
    //----------------------------------------------------------------------
    insertContent({ commit }) {
      axios
        .get("/api/yt/search/search+string")
        .then((r) => r.data)
        .then((content) => {
          commit("SET_CONTENT", content.content);
          console.log(content.content);
        });
    },
    //------------------------------------------------------------------------

    async getSearchResults({ commit }, query) {
      const res = await axios.get(`/api/yt/songs/${query}`);
      // Execute the mutation which receive the data and pass to the state
      commit("returnResults", res.data.content);
    },
  },
  mutations: {
    SET_CONTENT(state, content) {
      state.content = content;
    },
    returnResults: (state, results) => {
      state.results = results;
      console.log(results);
    },
    SET_SONG(state, song) {
      state.currentsong = song;
      
    }
  },
});
