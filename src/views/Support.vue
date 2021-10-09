<template>
  <section class="support max-width">
    <header class="step-back__header">
      <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click" @click="$router.push({ name: 'home' })" />
      <span class="text--bold" v-text="`Suporte`"></span>
    </header>
    <h1 class="support__title text--center my-30" v-text="`Precisa de ajuda?`"></h1>
    <div class="support__image mb-30">
      <img src="../assets/images/support.svg" alt="">
    </div>
    <p class="support__message text--center text--bold" v-text="`Bem-vindo ao nosso canal de suporte!`"></p>
    <p class="support__message text--center text--bold" v-text="`Escolha por gentileza a opção abaixo na qual prefere prosseguir`"></p>
    <div class="support__shortcuts mt-30">
      <Shortcut
        v-for="(shortcut, index) in shortcutsData" :key="index"
        :title="shortcut.title"
        :icon="shortcut.icon"
        :lightBlue="true"
      />
    </div>
  </section>
</template>

<script>
import Shortcut from "@/components/card/Shortcut"

export default {
  components: { Shortcut },
  data() {
    return {
      shortcutsData: [
        { title: `Chat`, icon: ['fas', 'comments'] },
        { title: `Email`, icon: ['fas', 'envelope'] }
      ]
    }
  }
}
</script>

<style>

</style>