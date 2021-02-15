import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MediaDisplay from "../components/MediaDisplay.vue";
import Playlist from "../components/Playlist.vue";
import SearchResult from "../components/SearchResult.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/playlist", component: Playlist },
  { path: "/results", component: SearchResult },
  { path: "/media", component: MediaDisplay },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
