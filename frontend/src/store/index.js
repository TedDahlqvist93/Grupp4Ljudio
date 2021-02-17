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
        .get("localhost:3000/api/yt/albums/search+string")
        .then((r) => r.data)
        .then((content) => {
          commit("SET_CONTENT", content);
        });
    },
    //------------------------------------------------------------------------

    async getSearchResults({ commit }, query) {
      const res = await axios.get(
        `http://localhost:3000/api/yt/albums/search+string${query}`
      );
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
