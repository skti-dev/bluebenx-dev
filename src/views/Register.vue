<template>
  <section class="register">
    <div class="register__step-count">
      <fa-icon :icon="['fas', 'chevron-left']" @click="returnToLogin" />
      <span class="text--bold" v-text="`Passo ${currentStep} de ${totalSteps}`"></span>
    </div>
    <div class="register__steps">
      <transition name="slide" mode="out-in">
        <component v-bind:is="currentView" />
      </transition>
    </div>
    <div class="register__footer" :class="{'single-btn' : !hasBackButton}">
      <div class="step__selection" v-if="hasBackButton">
        <span class="icon__circle white box-shadow" @click="previousStep">
          <fa-icon :icon="['fas', 'arrow-left']" />
        </span>
        <span class="text--bold" v-text="`Voltar`"></span>
      </div>
      <div class="step__selection">
        <span class="text--bold" v-text="`Próximo`"></span>
        <span class="icon__circle blue box-shadow" @click="nextStep">
          <fa-icon :icon="['fas', 'arrow-right']" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import Step1 from "@/components/steps/Step1"
import Step2 from "@/components/steps/Step2"
import Step3 from "@/components/steps/Step3"
import Step4 from "@/components/steps/Step4"
import Step5 from "@/components/steps/Step5"
import Step6 from "@/components/steps/Step6"
import Step7 from "@/components/steps/Step7"

export default {
  components: { Step1, Step2, Step3, Step4, Step5, Step6, Step7 },
  data() {
    return {
      currentStep: 1,
      totalSteps: 7
    }
  },
  computed: {
    currentView() {
      return `Step${this.currentStep}`
    },
    hasBackButton() {
      return this.currentStep > 1
    }
  },
  methods: {
    returnToLogin() {
      this.$router.push({ name: "login" })
    },
    previousStep() {
      this.currentStep--
    },
    nextStep() {
      this.currentStep < this.totalSteps ? this.currentStep++ : false
    }
  }
}
</script>

<style scoped>
  @keyframes slide-in {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-30px);
      opacity: 0;
    }
  }
  .slide-enter-active {
    animation: slide-in 300ms ease;
  }
  .slide-leave-active {
    animation: slide-out 300ms ease;
  }
</style>
