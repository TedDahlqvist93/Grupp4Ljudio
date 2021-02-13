import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MediaDisplay from "../components/MediaDisplay.vue";
import PlaylistList from "../components/PlaylistList.vue";
import PlayBar from "../components/PlayBar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/playlist",
    name: "PlayList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlayList.vue"),
  },
  { path: "/playlist", component: PlaylistList },
  { path: "/media", component: MediaDisplay },
  { path: "/playbar", component: PlayBar },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
