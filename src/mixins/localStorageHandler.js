export const localStorageHandler = {
  methods: {
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
        const mainKey = arrKeys[0]
        const secondaryKey = arrKeys[1]
        const userID = localStorage.getItem(mainKey)
        const step = localStorage.getItem(secondaryKey)
        if(userID && userID != "null") {
          const response = await this.$apiRequest.get(`/user/${userID}`)
          const { data } = {...response.data}
          if(!data) return false
          const { address, document, mother_name, name, father_name, social_name, email, phone } = data
          if(!address && !document && !mother_name && !name && !father_name && !social_name && !email && !phone) throw new Error("Existe UID no localStorage, porém nenhum dado desse UID foi retornado pela API")
          // Com rota
          // this.$router.push({ name: "recover-data", params: { response, step: parseInt(step) } })
          
          // Sem rota
          this.hasNotification = true
          this.recoveredResponse = response
          this.recoveredStep = parseInt(step)
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