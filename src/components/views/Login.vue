<template>
  <section class="login">
    <div class="login__title">
      <img src="../../assets/images/bluebenx-logo.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1> Olá, seja bem-vindo! </h1>
    </div>
    <form action="#" method="POST" @submit.prevent class="login__form">
      <fieldset>
        <div class="v__field">
          <label for="user"> Usuário </label>
          <input type="text" name="user" placeholder="Digite o seu nome de usuário" @focus="inputFocus" @blur="inputBlur" required />
        </div>
        <div class="v__field">
          <label for="user"> Senha </label>
          <input type="text" name="user" placeholder="Digite a sua senha" @focus="inputFocus" @blur="inputBlur" required />
        </div>
      </fieldset>
      <button class="btn white"> Acessar </button>
    </form>
    <p> <a href="#"> Esqueci minha senha </a> </p>
    <div class="login__footer">
      <p> AInda não possui um cadastro? </p>
      <button class="btn blue"> Cadastrar </button>
    </div>
  </section>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"

export default {
  mixins: [inputFieldHandler]
}
</script>

<style>

</style>