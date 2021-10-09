<template>
  <section class="register-welcome max-width">
    <header class="register-welcome__title mt-10">
      <img src="../assets/images/logo-bb-blue.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1 v-text="`Cadastro conta digital`" class="ml-5"></h1>
    </header>
    <div class="register-welcome__image mb-30">
      <img src="../assets/images/orientation-img.png" alt="Imagem de orientações">
    </div>
    <div class="register-welcome__content">
      <div class="register-welcome__list">
        <p class="text--bold" v-text="`Antes de continuarmos precisamos te dar umas dicas para poupar o seu tempo e te ajudar:`"></p>
        <ul class="mb-30">
          <li class="my-30">
            <span class="text--bold text--dark-blue" v-text="`1-`"></span>
            Para realizar o cadastro será necessário ter em mãos um documento com foto(ex: RG e CNH)
          </li>
          <li>
            <span class="text--bold text--dark-blue" v-text="`2-`"></span>
            Verifique se sua internet estará disponível durante todo o processo de cadastro, pois ela é fundamental para nós conseguirmos prosseguir com ele :)
          </li>
        </ul>
      </div>
      <footer class="register-welcome__footer">
        <h3 class="text--center mb-10" v-text="`Tudo pronto? Então vamos lá`"></h3>
        <button class="btn default-blue w-100" v-text="`Prosseguir`" @click="$router.push({ name: 'terms' })"></button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>