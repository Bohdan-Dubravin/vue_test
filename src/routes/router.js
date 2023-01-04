import Main from '../pages/Main.vue'
import PostsPage from '..//pages/PostsPage.vue'
import FullPost from '..//pages/FullPost.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Main },
  { path: '/posts', component: PostsPage },
  { path: '/posts/:id', component: FullPost },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
