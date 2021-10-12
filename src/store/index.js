import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userID: null
  },
  mutations: {
    setUserID: (state, userID) => {
      state.userID = userID
    }
  },
  getters: {
    getUserID: (state) => {
      return state.userID
    }
  }
})
