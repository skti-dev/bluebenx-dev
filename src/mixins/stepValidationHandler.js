export const stepValidationHandler = {
  methods: {
    validate(e) {
      try {
        const { target } = e
        const { value, type, name } = target
        let isValid = false
        switch(type) {
          case "text":
            isValid = this.textValidation(value)
          break
          case "email":
            isValid = this.emailValidation(value)
          break
          default: 
            console.warn("Tipo de input não identificado")
            console.warn(type)
            isValid = false
          break
        }

        console.log({ value, type })
        this.$emit("setFinalData", { key: name, value })
        this.$emit("setErrors", !isValid)
      }catch(error) {
        console.error("Erro ao validar o input")
        console.error(error)
      }
    },
    textValidation(value) {
      if(value && value.trim("")) return true
      return false
    },
    emailValidation(value) {
      if(value && value.trim("")) return true
      return false
    }
  }
}