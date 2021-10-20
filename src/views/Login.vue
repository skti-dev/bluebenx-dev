<template>
  <section class="login max-width">
    <div class="login__img">
      <img src="../assets/images/img-login.png" alt="Mulher jovem sorrindo, vestindo uma blusa amarela e segurando um celular.">
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form mb-30">
      <fieldset>
        <legend v-text="`Login`" class="text--bold mb-30"></legend>
        <InputField 
          :customClass="`mb-30 ${!email.isValid && email.value ? 'invalid active' : !email.isValid ? 'invalid' : email.value ? 'active' : '' }`"
          labelText="E-mail"
          inputType="email"
          inputRef="email"
          inputName="email"
          :inputRequired="true"
          inputPlaceholder="Digite o seu e-mail"
          :showError="!email.isValid"
          errorMessage="E-mail inválido"
          @input-typing="setInputMessage($event)"
          @input-focus="inputFocus($event)"
          @input-blur="inputBlur($event), validate($event, email.category)"
        />
        <InputField 
          :customClass="`mb-30 ${!password.isValid && password.value ? 'invalid active' : !password.isValid ? 'invalid' : password.value ? 'active' : '' }`"
          labelText="Senha"
          inputType="password"
          inputRef="password"
          inputName="password"
          :inputRequired="true"
          inputPlaceholder="Digite a sua senha"
          :showError="!password.isValid"
          errorMessage="Senha inválida"
          @input-typing="setInputMessage($event)"
          @input-focus="inputFocus($event)"
          @input-blur="inputBlur($event), validate($event, password.category)"
        />
        <p v-if="authError" class="text--error mb-20" v-text="`E-mail e/ou senha inválidos`"></p>
      </fieldset>
      <p class="login__password-reset"> <a href="#" v-text="`Esqueci minha senha`"></a> </p>
      <button class="btn default-blue mt-30" v-text="`Acessar`" @click="validateLogin"></button>
    </form>
    <div class="login__footer ml-10 mr-10 mb-40">
      <p class="text--bold" v-text="`Ainda não possui um cadastro?`"></p>
      <router-link to="/register-welcome" class="text--default-blue text--bold" v-text="`Acesse aqui`"></router-link>
    </div>
  </section>
</template>

<script>
import InputField from "@/components/input/InputField"
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  components: { InputField },
  mixins: [inputFieldHandler, stepValidationHandler],
  data() {
    return {
      email: {
        category: "email",
        value: "",
        isValid: true
      },
      password: {
        category: "password",
        value: "",
        isValid: true
      },
      authError: false,
      pendingRequest: false
    }
  },
  methods: {
    setInputMessage(inputObj) {
      try {
        const { e, inputRef } = inputObj
        const { target } = e
        const { value } = target
        this[inputRef].value = value
      }catch(error) {
        console.error("Erro ao definir o valor para o input")
        console.error(error)
      }
    },
    validateInput(key) {
      if(!this[key].value || !this[key].value.trim("")) {
        this[key].isValid = false
        return false
      }
      if(!this[key].isValid) return false
      this[key].isValid = true
      return true
    },
    async validateLogin() {
      if(this.pendingRequest) return false
      if(this.validateInput("email") && this.validateInput("password") && this.email.isValid && this.password.isValid) {
        this.pendingRequest = true
        try {
          const sentData = { email: this.email.value, password: this.password.value}
          const response = await this.$apiRequest.post(`/login`, sentData)
          const { data } = response && response.data ? {...response.data} : {}
          let hasData = false
          if(data && Object.keys(data).length > 0) {
            hasData = true
            const { social_name } = data ? data : {}
            const { code } = data ? data : {}
            switch (code) {
              case 500:
                this.$router.push({ name: "error" })
              break
              case 400:
                this.authError = true
              break
              case 200:
              default:
                this.authError = false
                this.$store.commit("setUserInfos", { name: social_name })
                this.$router.push({ name: "home" })
              break
            }
          }
          if(!hasData) this.authError = true
          this.pendingRequest = false
        }catch(e) {
          console.error("Erro ao logar no sistema")
          console.error(e)
          this.pendingRequest = false
          this.$router.push({ name: "error" })
        }
      }
    }
  }
}
</script>
