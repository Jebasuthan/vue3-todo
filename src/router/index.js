import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'
import Home from '@/modules/home'
import Login from '@/modules/login'
import Register from '@/modules/register'
import Todo from '@/modules/todo'

const authGuard = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next()
  } else {
    next('/login')
  }
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    beforeEnter: authGuard
  },
  {
    path: '/:pathMatch(.*)*',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
