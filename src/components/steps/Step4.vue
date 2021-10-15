<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Validação de documento`"></p>
      <p class="text--upper text--small my-10" v-text="`Agora iremos precisar de um documento pessoal com foto`"></p>
      <select name="doc-selection" v-model="selectedDoc" class="select mb-30">
        <option value="" v-text="`Tipo de documento`"></option>
        <option value="RG" v-text="`RG`"></option>
        <option value="CNH" v-text="`CNH`"></option>
      </select>
      <transition name="fade">
        <div class="doc__selection" v-if="selectedDoc">
          <p class="text--upper text--small" v-text="`Precisaremos de uma foto de frente e verso ${selectedDoc === 'RG' ? `do seu ${selectedDoc}` : `da sua ${selectedDoc}`}`"></p>
          <div class="step__buttons mt-10 mb-20">
            <button class="btn mr-25 text--bold" :class="{'default-blue' : add.front, 'light-gray' : !add.front}" @click="add.front = !add.front">
              {{ `Frente` }}
              <fa-icon :icon="['fas', 'check']" v-if="add.front" class="ml-10" />
            </button>
            <button class="btn text--bold" :class="{'default-blue' : add.back, 'light-gray' : !add.back}" @click="add.back = !add.back">
              {{ `Verso` }}
              <fa-icon :icon="['fas', 'check']" v-if="add.back" class="ml-10" />
            </button>
          </div>
          <p class="text--upper text--small" v-text="`E iremos precisar de uma foto sua segurando ${selectedDoc === 'RG' ? `o seu ${selectedDoc}` : `a sua ${selectedDoc}`}`"></p>
          <div class="step__buttons mt-15">
            <button class="btn text--bold" :class="{'default-blue' : add.youHolding, 'light-gray' : !add.youHolding}" @click="add.youHolding = !add.youHolding">
              {{ `Selfie` }}
              <fa-icon :icon="['fas', 'check']" v-if="add.youHolding" class="ml-10" />
            </button>
          </div>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDoc: "",
      add: {
        front: false,
        back: false,
        youHolding: false
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
