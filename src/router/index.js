import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login"
import Register from "../views/Register"
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "*",
    name: "any",
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
