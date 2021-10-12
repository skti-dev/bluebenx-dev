export default {
  state: {
    userID: null,
    userInfos: {}
  },
  mutations: {
    setUserID: (state, userID) => {
      state.userID = userID
    },
    setUserInfos: (state, userInfos) => {
      for(let key in userInfos) {
        state.userInfos[key] = userInfos[key]
      }
    }
  },
  getters: {
    getUserID: (state) => {
      return state.userID
    },
    getUserInfos: (state) => {
      return state.userInfos
    }
  }
}