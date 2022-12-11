import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPost.vue')
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import ('../views/Post.vue')
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
