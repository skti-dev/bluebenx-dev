<template>
   <section class="recovered-data max-width">
    <!-- <header class="step-back__header">
      <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click text--dark-blue" @click="returnToTerms" />
      <span class="text--bold" v-text="`Recuperar cadastro`"></span>
    </header> -->
    <footer class="recovered-data__content mt-30">
      <p class="text--bold" v-text="`Existe um cadastro pendente. Você deseja continuar de onde parou?`"></p>
      <div class="recovered-data__buttons">
        <button class="btn default-blue mt-30 mr-10" v-text="`Sim, quero continuar o cadastro`" @click="continueRegistration(true)"></button>
        <button class="btn mt-30" v-text="`Não, quero começar o cadastro do início `" @click="continueRegistration(false)"></button>
      </div>
    </footer>
  </section>
</template>

<script>
import { localStorageHandler } from "@/mixins/localStorageHandler"

export default {
  props: {
    response: {
      type: Object,
      required: true
    },
    step: {
      type: [Number, String],
      required: true
    }
  }, 
  mixins: [localStorageHandler],
  methods: {
    returnToTerms() {
      try {
        this.removeLocalStorageItem(`userID`)
        this.removeLocalStorageItem(`currentStep`)
        this.$router.push({ name: "terms" })
      }catch(e) {
        console.error("Erro ao retornar para os termos")
        console.error(e)
      }
    },
    continueRegistration(status) {
      try {
        if(!status) {
          this.removeLocalStorageItem(`userID`)
          this.removeLocalStorageItem(`currentStep`)
          return this.$emit("close-notification")
        }
        this.$emit("restore-data", { response: this.response, step: this.step })
        this.$emit("close-notification")
      }catch(e) {
        console.error("Erro ao continuar o cadastro")
        console.error(e)
      }
    }
  }
}
</script>
