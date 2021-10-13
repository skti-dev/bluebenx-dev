export const localStorageHandler = {
  methods: {
    // Salvar o UID e o Step, fazer um get para /user/:id
    setLocalStorageItem(mainKey, value) {
      try {
        const currentItem = localStorage.getItem(mainKey)
        if(currentItem && currentItem === value) return
        localStorage.setItem(mainKey, value)
      }catch(e) {
        console.error("Erro ao incluir o objeto no localStorage")
        console.error(e)
      }
    },
    async verifyLocalStorage(arrKeys) {
      try {
        console.log("Verificou")
        const mainKey = arrKeys[0]
        const secondaryKey = arrKeys[1]
        const userID = localStorage.getItem(mainKey)
        const step = localStorage.getItem(secondaryKey)
        if(userID && userID != "null") {
          console.log("Fez a req")
          const response = await this.$apiRequest.get(`/user/${userID}`)
          const { data } = {...response.data}
          const { address, document, mother_name, name, father_name, social_name, email, phone } = data
          console.log({ address, document, mother_name, name, father_name, social_name, email, phone })
          if(!address && !document && !mother_name && !name && !father_name && !social_name && !email && !phone) throw new Error("Existe UID no localStorage, porém nenhum dado desse UID foi retornado pela API")
          this.setUserInfos(response)
          this.currentStep = parseInt(step)
          this.$store.commit("setUpdateFromLocalStorage", true)
        }
      }catch(e) {
        console.error("Erro ao verificar a posição no localStorage")
        console.error(e)
      }
    },
    removeLocalStorageItem(mainKey) {
      try {
        localStorage.removeItem(mainKey)
      }catch(e) {
        console.error("Erro ao remover o objeto no localStorage")
        console.error(e)
      }
    }
  }
}