<template>
  <div class="step last__step">
    <div class="step__content">
      <h1 v-text="`Cadastro concluído`" class="text--white"></h1>
    </div>
    <div class="footer__content">
      <h2 v-text="`Parabéns!`" class="mb-10"></h2>
      <p class="text--bold" v-text="`Você finalizou o seu cadastro, agora é só esperar a análise do nosso time para efetivar sua conta`"></p>
      <button class="btn default-blue mt-15 w-100" v-text="`Ir para a página inicial`" @click="$router.push({ name: 'home' })"></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
