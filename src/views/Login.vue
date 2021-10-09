<template>
  <section class="login max-width">
    <div class="login__img">
      <img src="../assets/images/img-login.png" alt="">
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form mb-30 box-shadow">
      <fieldset>
        <legend v-text="`Login`" class="text--bold mb-30"></legend>
        <InputField 
          :customClass="`mb-30 ${!user.isValid ? 'invalid' : ''}`"
          labelText="Usuário"
          inputType="text"
          inputRef="user"
          inputName="user"
          :inputRequired="true"
          inputPlaceholder="Digite o seu nome de usuário"
          :showError="!user.isValid"
          errorMessage="Usuário inválido"
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
      </fieldset>
      <p class="login__password-reset"> <a href="#" v-text="`Esqueci minha senha`"></a> </p>
      <button class="btn default-blue box-shadow mt-30" v-text="`Acessar`" @click="validateLogin"></button>
    </form>
    <div class="login__footer ml-10 mr-10 mb-40">
      <p v-text="`Ainda não possui um cadastro?`"></p>
      <router-link to="/register-welcome" class="text--default-blue" v-text="`Acesse aqui`"></router-link>
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
      user: {
        message: "",
        isValid: true
      },
      password: {
        message: "",
        isValid: true
      }
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
    validateLogin() {
      if(this.validateInput("user") && this.validateInput("password")) this.$router.push({ name: 'home' })
    }
  }
}
</script>
