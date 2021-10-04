<template>
  <section class="login">
    <div class="login__title my-40">
      <img class="mr-10" src="../assets/images/bluebenx-logo.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1 v-text="`Olá, seja bem-vindo!`"></h1>
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form mb-40">
      <fieldset>
        <div class="v__field white-border">
          <label for="user" @click="inputFocus" v-text="`Usuário`"></label>
          <input type="text" name="user" placeholder="Digite o seu nome de usuário" @focus="inputFocus" @blur="inputBlur" required />
        </div>
        <div class="v__field white-border">
          <label for="password" @click="inputFocus" v-text="`Senha`"></label>
          <input type="password" name="password" placeholder="Digite a sua senha" @focus="inputFocus" @blur="inputBlur" required />
        </div>
      </fieldset>
      <button class="btn white box-shadow mt-45" v-text="`Acessar`"></button>
    </form>
    <p class="login__password-reset"> <a href="#" v-text="`Esqueci minha senha`"></a> </p>
    <div class="login__footer mb-40">
      <p v-text="`Ainda não possui um cadastro?`"></p>
      <router-link to="/register" class="mt-35">
        <button class="btn blue box-shadow" v-text="`Cadastrar`"></button> 
      </router-link>
    </div>
  </section>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"

export default {
  mixins: [inputFieldHandler]
}
</script>
