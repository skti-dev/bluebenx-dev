<template>
  <div class="step">
    <div class="step__title mt-10">
      <img src="../../assets/images/logo-bb-blue.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1 v-text="`Cadastro conta digital`" class="ml-5"></h1>
    </div>
    <h2 class="step__subtitle my-30" v-text="`Tudo certo? Então vamos lá!`"></h2>
    <div class="step__form">
      <p class="text--bold" v-text="`Primeiramente, como você gostaria de ser chamado?`"></p>
      <div class="v__field">
        <label for="social-name" @click="inputFocus" v-text="`Nome social`"></label>
        <input type="text" vType="name" name="social-name" placeholder="Digite o seu nome social" @focus="inputFocus" @blur="inputBlur($event), validate($event, 'socialname')" v-model="socialName" />
        <!-- <span class="message--invalid text--error" v-if="!user.isValid" v-text="`Usuário inválido`"></span> -->
      </div>
      <p class="text--bold" v-text="`Agora precisamos saber qual é seu número de CPF ou CNPJ`"></p>
      <div class="v__field">
        <label for="cpf-cnpj" @click="inputFocus" v-text="`CPF/CNPJ`"></label>
        <input type="text" vType="cpfcnpj" name="cpf-cnpj" placeholder="CPF ou CNPJ" @focus="inputFocus" @blur="inputBlur($event), validate($event, 'cpfcnpj')" v-model="cpfCnpj" />
      </div>
    </div>
  </div>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  data() {
    return {
      socialName: "",
      cpfCnpj: ""
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    hasEmptyInputs() {
      if(!this.socialName || !this.cpfCnpj) return true
      return false
    }
  }
}
</script>
