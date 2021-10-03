<template>
  <section class="login">
    <div class="login__title">
      <img src="../assets/images/bluebenx-logo.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1> Olá, seja bem-vindo! </h1>
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form">
      <fieldset>
        <div class="v__field">
          <label for="user" @click="inputFocus"> Usuário </label>
          <input type="text" name="user" placeholder="Digite o seu nome de usuário" @focus="inputFocus" @blur="inputBlur" required />
        </div>
        <div class="v__field">
          <label for="password" @click="inputFocus"> Senha </label>
          <input type="password" name="password" placeholder="Digite a sua senha" @focus="inputFocus" @blur="inputBlur" required />
        </div>
      </fieldset>
      <button class="btn white box-shadow"> Acessar </button>
    </form>
    <p class="login__password-reset"> <a href="#"> Esqueci minha senha </a> </p>
    <div class="login__footer">
      <p> Ainda não possui um cadastro? </p>
      <router-link to="/register">
        <button class="btn blue box-shadow"> Cadastrar </button> 
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
