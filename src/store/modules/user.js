export default {
  state: {
    userID: null,
    userInfos: {},
    updateFromLocalStorage: false
  },
  mutations: {
    setUserID: (state, userID) => {
      state.userID = userID
    },
    setUserInfos: (state, userInfos) => {
      for(let key in userInfos) {
        state.userInfos[key] = userInfos[key]
      }
    },
    setUpdateFromLocalStorage: (state, updateFromLocalStorage) => {
      state.updateFromLocalStorage = updateFromLocalStorage
    }
  },
  getters: {
    getUserID: (state) => {
      return state.userID
    },
    getUserInfos: (state) => {
      return state.userInfos
    },
    getUpdateFromLocalStorage: (state) => {
      return state.updateFromLocalStorage
    }
  }
}