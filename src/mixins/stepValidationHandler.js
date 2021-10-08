export const stepValidationHandler = {
  methods: {
    validate(e, origin) {
      try {
        const { target } = e
        const { value, type, name, parentElement } = target
        let isValid = this.isEmpty(value)
        if(isValid) {
          switch(origin) {
            case "state":
            case "address":
            case "city":
            case "socialName":
              isValid = this.socialNameValidation(value)
            break
            case "name":
              isValid = this.nameValidation(value)
            break
            case "cpfCnpj":
              isValid = this.cpfCnpjValidation(value)
            break
            case "email":
              isValid = this.emailValidation(value)
            break
            case "phone":
              isValid = this.phoneValidation(value)
            break
            case "password":
            case "passwordConfirm":
              isValid = this.passwordValidation(value)
            break
            case "number":
              isValid = this.numberValidation(value)
            break
            case "cep":
              isValid = this.cepValidation(value)
            break;
            default: 
              console.warn("Tipo de input não identificado")
              console.warn(origin)
              isValid = false
            break
          }
        }
        
        console.log({ target, value, type })
        this.setInvalidClass(parentElement, isValid)
        this.setInvalidInput(origin, isValid)
        this.$emit("setFinalData", { key: name, value })
        return isValid
      }catch(error) {
        console.error("Erro ao validar o input")
        console.error(error)
      }
    },
    isEmpty(value) {
      if(!value || !value.trim("")) return false
      return true
    },
    setInvalidInput(origin, state) {
      this[origin].isValid = state
    },
    setInvalidClass(elem, state) {
      if(!state) {
        elem.classList.add("invalid")
      }else{
        elem.classList.remove("invalid")
      }
    },
    nameValidation(value) {
      try {
        return /[A-Za-z\u00C0-\u017F]* [A-Za-z\u00C0-\u017F]*/.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar nome")
        console.error(e)
        return false
      }
    },
    socialNameValidation(value) {
      try {
        const isValid = /^[a-zA-Z\u00C0-\u017F´]{2,}$/.test(value) //eslint-disable-line
        if(!isValid) return this.nameValidation(value)
        return true
      }catch(e) {
        console.error("Erro ao validar nome")
        console.error(e)
        return false
      }
    },
    cpfCnpjValidation(value) {
      try {
        if (value.length == 11) {
          let cpf = value.trim()
          cpf = cpf.replace(/\./g, '')
          cpf = cpf.replace('-', '')
          cpf = cpf.split('')
          
          let v1 = 0, v2 = 0, aux = false
          
          for (let i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) aux = true
          } 
          
          if (aux == false) return false
          
          for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p
          } 
          
          v1 = ((v1 * 10) % 11)
          
          if (v1 == 10) v1 = 0
          
          if (v1 != cpf[9]) return false 
          
          for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p
          } 
          
          v2 = ((v2 * 10) % 11)
          
          if (v2 == 10) v2 = 0
          
          if (v2 != cpf[10]) return false
          return true; 
        } else if (value.length == 14) {
          let cnpj = value.trim()
          cnpj = cnpj.replace(/\./g, '')
          cnpj = cnpj.replace('-', '')
          cnpj = cnpj.replace('/', '')
          cnpj = cnpj.split('')
            
          let v1 = 0, v2 = 0, aux = false
            
          for (let i = 1; cnpj.length > i; i++) { 
            if (cnpj[i - 1] != cnpj[i]) aux = true
          } 
            
          if (aux == false) return false
            
          for (let i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {  
              v1 += cnpj[i] * p1
            } else {  
              v1 += cnpj[i] * p2
            } 
          } 
            
          v1 = (v1 % 11)
            
          if (v1 < 2) { 
            v1 = 0
          } else { 
            v1 = (11 - v1)
          } 
            
          if (v1 != cnpj[12]) return false
            
          for (let i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
            if (p1 >= 2) {  
              v2 += cnpj[i] * p1
            } else {   
              v2 += cnpj[i] * p2
            } 
          }
            
          v2 = (v2 % 11)
            
          if (v2 < 2) {  
            v2 = 0
          } else { 
            v2 = (11 - v2)
          } 
            
          if (v2 != cnpj[13]) return false
          return true
        } else {
          return false
        }
      }catch(e) {
        console.error("Erro ao validar cpf/cnpj")
        console.error(e)
        return false
      }
    },
    emailValidation(value) {
      try {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar email")
        console.error(e)
        return false
      }
    },
    phoneValidation(value) {
      try {
        return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar email")
        console.error(e)
        return false
      }
    },
    passwordValidation(value) {
      try {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar senha")
        console.error(e)
        return false
      }
    },
    numberValidation(value) {
      try {
        return /^[a-zA-Z0-9_.-\u00C0-\u017F\s]*$/.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar número")
        console.error(e)
        return false
      }
    },
    cepValidation(value) {
      try {
        return /^([\d]{2})\.*([\d]{3})-*([\d]{3})/.test(value) //eslint-disable-line
      }catch(e) {
        console.error("Erro ao validar CEP")
        console.error(e)
        return false
      }
    },
    validateAllInputs() {
      try {
        const validationArr = []
        Object.values(this.$refs).forEach((e, index) => {
          validationArr.push(this.validate({target: e}, Object.keys(this.$refs)[index]))
        })
        
        let isValid = true
        validationArr.forEach(value => {
          if(!value) isValid = false
        })
        
        return isValid
      }catch(e) {
        console.error("Erro ao validar os inputs")
        console.error(e)
        return false
      }
    }
  }
}