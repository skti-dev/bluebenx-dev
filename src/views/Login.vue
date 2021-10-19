<template>
  <section class="login max-width">
    <div class="login__img">
      <img src="../assets/images/img-login.png" alt="Mulher jovem sorrindo, vestindo uma blusa amarela e segurando um celular.">
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form mb-30">
      <fieldset>
        <legend v-text="`Login`" class="text--bold mb-30"></legend>
        <InputField 
          :customClass="`mb-30 ${!email.isValid ? 'invalid' : ''}`"
          labelText="E-mail"
          inputType="email"
          inputRef="email"
          inputName="email"
          :inputRequired="true"
          inputPlaceholder="Digite o seu e-mail"
          :showError="!email.isValid"
          errorMessage="E-mail inválido"
          @input-typing="setInputMessage"
          @input-focus="inputFocus"
          @input-blur="inputBlur"
        />
        <InputField 
          :customClass="`mb-30 ${!password.isValid ? 'invalid' : ''}`"
          labelText="Senha"
          inputType="password"
          inputRef="password"
          inputName="password"
          :inputRequired="true"
          inputPlaceholder="Digite a sua senha"
          :showError="!password.isValid"
          errorMessage="Senha inválida"
          @input-typing="setInputMessage"
          @input-focus="inputFocus"
          @input-blur="inputBlur"
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

export default {
  components: { InputField },
  mixins: [inputFieldHandler],
  data() {
    return {
      email: {
        message: "",
        isValid: true
      },
      password: {
        message: "",
        isValid: true
      },
      authError: false
    }
  },
  methods: {
    setInputMessage(inputObj) {
      try {
        const { e, inputRef } = inputObj
        const { target } = e
        const { value } = target
        this[inputRef].message = value
      }catch(error) {
        console.error("Erro ao definir o valor para o input")
        console.error(error)
      }
    },
    validateInput(key) {
      if(!this[key].message || !this[key].message.trim("")) {
        this[key].isValid = false
        return false
      }

      this[key].isValid = true
      return true
    },
    async validateLogin() {
      if(this.validateInput("email") && this.validateInput("password")) {
        try {
          const sentData = { email: this.email.message, password: this.password.message }
          const response = await this.$apiRequest.post(`/login`, sentData)
          const { data } = response
          const { code } = data
          switch (code) {
            case 200:
              this.authError = false
              this.$store.commit("setUserInfos", { name: this.email.message })
              this.$router.push({ name: "home" })
            break
            case 400:
              this.authError = true
            break
            default:
              this.$router.push({ name: "error" })
            break
          }
        }catch(e) {
          console.error("Erro ao logar no sistema")
          console.error(e)
        }
      }
    }
  }
}
</script>
