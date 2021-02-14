import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MediaDisplay from "../components/MediaDisplay.vue";
import PlaylistList from "../components/PlaylistList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  { path: "/playlist", component: PlaylistList },
  { path: "/media", component: MediaDisplay },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
