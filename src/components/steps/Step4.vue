<template>
  <div class="step">
    <form class="step__form">
      <p class="text--bold" v-text="`{{ socialName }}, agora como próximo passo em nosso cadastro, iremos precisar de um documento pessoal com foto`"></p>
      <select name="doc-selection" v-model="selectedDoc" class="select box-shadow mt-30">
        <option value="" v-text="`Selecione o tipo de documento`"></option>
        <option value="RG" v-text="`RG`"></option>
        <option value="CNH" v-text="`CNH`"></option>
      </select>
      <div class="step__image my-15">
        <img src="../../assets/images/document-img.png" alt="Celular sendo escaneado">
      </div>
      <transition name="fade">
        <div class="doc__selection" v-if="selectedDoc">
          <p class="text--bold" v-text="`Vamos lá! Precisaremos de uma foto de frente e verso do documento selecionado:`"></p>
          <div class="step__buttons my-30">
            <button class="btn box-shadow mr-25" :class="{'default-blue' : add.front, 'white text--default-blue' : !add.front}" @click="add.front = !add.front">
              Frente
              <fa-icon :icon="['fas', 'check']" v-if="add.front" class="ml-10" />
            </button>
            <button class="btn box-shadow" :class="{'default-blue' : add.back, 'white text--default-blue' : !add.back}" @click="add.back = !add.back">
              Verso
              <fa-icon :icon="['fas', 'check']" v-if="add.back" class="ml-10" />
            </button>
          </div>
          <p class="text--bold" v-text="`E iremos precisar de uma foto sua segurando o seu ${selectedDoc}, prometemos que será a última`"></p>
          <div class="step__buttons mt-15">
            <button class="btn box-shadow" :class="{'default-blue' : add.youHolding, 'white text--default-blue' : !add.youHolding}" @click="add.youHolding = !add.youHolding">
              {{ add.youHolding ? `Adicionado` : `Adicionar` }}
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
