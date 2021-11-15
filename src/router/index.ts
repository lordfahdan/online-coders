import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function load (component: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/${component}.vue`)
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: load('views/Home')
  },
  {
    path: '/start-code',
    name: 'Code-Editor',
    component: load('views/CodeEditor')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
