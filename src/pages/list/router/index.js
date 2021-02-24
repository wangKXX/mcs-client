import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "mcs-list" */ "../views/index.vue"),
    meta: {
      title: "index"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "about"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/list/",
  routes
});

router.beforeEach((to, from, next) => {
  const {meta: { title }} = to;
  document.title = title;+
  next();
});

export default router;
