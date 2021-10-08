<template>
  <section class="login max-width">
    <div class="login__title my-40">
      <img class="mr-10" src="../assets/images/logo-bb.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1 v-text="`Olá, seja bem-vindo!`"></h1>
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form mb-30">
      <fieldset>
        <div class="v__field white-border" :class="{'invalid' : !user.isValid}">
          <label for="user" @click="inputFocus" v-text="`Usuário`"></label>
          <input type="text" name="user" placeholder="Digite o seu nome de usuário" @focus="inputFocus" @blur="inputBlur" v-model="user.message" required />
          <span class="message--invalid text--error" v-if="!user.isValid" v-text="`Usuário inválido`"></span>
        </div>
        <div class="v__field white-border" :class="{'invalid' : !password.isValid}">
          <label for="password" @click="inputFocus" v-text="`Senha`"></label>
          <input type="password" name="password" placeholder="Digite a sua senha" @focus="inputFocus" @blur="inputBlur" v-model="password.message" required />
          <span class="message--invalid text--error" v-if="!password.isValid" v-text="`Senha inválida`"></span>
        </div>
      </fieldset>
      <button class="btn white box-shadow mt-45" v-text="`Acessar`" @click="validateLogin"></button>
    </form>
    <p class="login__password-reset"> <a href="#" v-text="`Esqueci minha senha`"></a> </p>
    <div class="login__footer mb-40">
      <p v-text="`Ainda não possui um cadastro?`"></p>
      <router-link to="/register-welcome" class="mt-35">
        <button class="btn default-blue box-shadow" v-text="`Cadastrar`"></button> 
      </router-link>
    </div>
  </section>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"

export default {
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
