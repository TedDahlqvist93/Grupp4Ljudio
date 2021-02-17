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
  },
  getters: {},
  actions: {
    //----------------------------------------------------------------------
    insertContent({ commit }) {
      axios
        .get("/api/yt/albums/search+string")
        .then((r) => r.data)
        .then((content) => {
          commit("SET_CONTENT", content.content);
          console.log(content.content);
        });
    },
    //------------------------------------------------------------------------

    async getSearchResults({ commit }, query) {
      const res = await axios.get(`/api/yt/albums/search+string${query}`);
      // Execute the mutation which receive the data and pass to the state
      commit("returnResults", res.data.name);
    },
  },
  mutations: {
    SET_CONTENT(state, content) {
      state.content = content;
    },
    returnResults: (state, results) => (state.results = results),
  },
});
