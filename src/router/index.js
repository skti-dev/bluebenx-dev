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

import store from "../store"

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
    path: "*",
    name: "any",
    component: Landing
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  try {
    const { name } = to
    const protectedRouteNames = ["register", "support", "home"]
    if(protectedRouteNames.includes(name)) {
      const userInfos = store.getters.getUserInfos
      const hasUserInfos = Object.keys(userInfos).length > 0 ? true : false
      const userID = store.getters.getUserID
      switch (name) {
        case "home":
        case "support":
          if(hasUserInfos) return next()
          return next("/login")
        case "register":
          if(userID) return next()
          return next("/terms")
        default:
          return next()
      }
    }
    return next()
  }catch(e) {
    console.error("Erro ao verificar a rota")
    console.error(e)
    return next()
  }
})

export default router
