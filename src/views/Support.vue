<template>
  <section class="support max-width">
    <header class="step-back__header">
      <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click text--dark-blue" @click="$router.push({ name: 'home' })" />
      <span class="text--bold" v-text="`Suporte`"></span>
    </header>
    <h1 class="support__title mt-30 mb-20" v-text="`Precisa de ajuda?`"></h1>
    <p class="support__message text--bold" v-text="`Bem-vindo ao nosso canal de suporte!`"></p>
    <p class="support__message text--bold" v-text="`Escolha por gentileza a opção abaixo na qual prefere prosseguir`"></p>
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