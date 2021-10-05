<template>
  <div class="step">
    <h1 class="my-30 text--center" v-text="`Parabéns!`"></h1>
    <div class="step__image w-100 mb-30">
      <img src="../../assets/images/well_done.svg" alt="">
    </div>
    <p class="text--bold text--center" v-text="`Você finalizou o seu cadastro, agora é só esperar a análise do nosso time para efetivar sua conta`"></p>
    <button class="btn default-blue my-30 w-100" v-text="`Ir para a página inicial`" @click="$router.push({ name: 'home' })"></button>
  </div>
</template>

<script>
export default {

}
</script>
