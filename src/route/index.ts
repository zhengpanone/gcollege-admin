import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/about",
    name: 'About',
    component: () => import("@/views/About.vue"),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
  },

  { path: '/:pathMatch(.*)', redirect: '/404' }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


