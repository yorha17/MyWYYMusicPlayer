import Vue from 'vue'
import VueRouter from 'vue-router'

import DiscoverPage from '@/views/DiscoverPage/DiscoverPage.vue'
import FMPage from '@/views/FMPage/FMPage.vue'
import PlayList from '@/views/PlayList/PlayList.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/discover' },
  { path: '/discover', component: DiscoverPage },
  { path: '/fm', component: FMPage },
  { path: '/list/:id', component: PlayList }
]

const router = new VueRouter({
  routes
})

export default router
