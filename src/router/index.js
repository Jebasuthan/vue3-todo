import { createWebHistory, createRouter } from 'vue-router'
import { getStore } from '@/config/Utils'
import Home from '@/modules/home'
import Login from '@/modules/login'
import Register from '@/modules/register'
import Todo from '@/modules/todo'

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
    meta: {
      requiredAuth: true
    }
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
    meta: {
      requiredAuth: true
    }
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiredAuth)) {
    if (!getStore('user')) {
      next({
        path: '/login'
      })
      return
    }
  }
  next()
})

export default router
