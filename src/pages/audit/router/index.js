import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: "/audit/",
  routes
})

export default router
