<template>
  <section class="home max-width">
    <div class="home__header">
      <div class="home__title">
        <img class="mr-10" src="../assets/images/logo-bb.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul." @click="$router.push({ name: 'login' })">
        <h3 v-text="`Olá, {{ socialName }}`"></h3>
      </div>
      <fa-icon class="mr-10" :icon="['fas', 'bell']" />
    </div>
    <div class="cards">
      <Card 
        v-for="(card, index) in cardsData" :key="index"
        :title="card.title"
        :value="card.value"
      />
    </div>
    <h3 class="home__subtitle" v-text="`Atalhos`"></h3>
    <div class="shortcuts">
      <Shortcut 
        v-for="(shortcut, index) in shortcutsData" :key="index"
        :title="shortcut.title"
        :icon="shortcut.icon"
      />
    </div>
    <div class="home__footer--aux"></div>
    <div class="home__footer">
      <ul>
        <li class="active">
          <fa-icon :icon="['fas', 'home']" />
          <span v-text="`Home`"></span>
        </li>
        <li>
          <fa-icon :icon="['fas', 'dollar-sign']" />
          <span v-text="`Investir`"></span>
        </li>
        <li @click="$router.push({ name: 'support' })">
          <fa-icon :icon="['fas', 'info-circle']" />
          <span v-text="`Suporte`"></span>
        </li>
        <li>
          <fa-icon :icon="['fas', 'user']" />
          <span v-text="`Perfil`"></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Card from "@/components/card/Card"
import Shortcut from "@/components/card/Shortcut"

export default {
  components: { Card, Shortcut },
  data() {
    return {
      cardsData: [
        { title: `Saldo em conta`, value: `R$ 0,00` },
        { title: `Investimentos`, value: `R$ 0,00` }
      ],
      shortcutsData: [
        { title: `QR Pay`, icon: ['fas', 'qrcode'] },
        { title: `Depósitos`, icon: ['fas', 'wallet'] },
        { title: `Extratos`, icon: ['fas', 'file-alt'] }
      ]
    }
  }
}
</script>
