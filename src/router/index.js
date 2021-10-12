import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login"
import Terms from "../views/Terms"
import Register from "../views/Register"
import RegisterWelcome from "../views/RegisterWelcome"
import Support from "../views/Support"
import Home from "../views/Home"
import RequestError from "../views/Error"
import Landing from "../views/Landing"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/register-welcome",
    name: "register-welcome",
    component: RegisterWelcome
  },
  {
    path: "/support",
    name: "support",
    component: Support
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/error",
    name: "error",
    component: RequestError
  },
  {
    path: "/landing",
    name: "landing",
    component: Landing
  },
  {
    path: "*",
    name: "any",
    component: Landing
  }
]

const router = new VueRouter({
  routes
})

export default router
