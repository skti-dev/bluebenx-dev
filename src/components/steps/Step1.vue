<template>
  <div class="step">
    <div class="step__title mt-10">
      <img src="../../assets/images/logo-bb-blue.png" alt="Logo da Bluebenx. Um aspiral formando uma letra 'B' em azul.">
      <h1 v-text="`Cadastro conta digital`" class="ml-5"></h1>
    </div>
    <h2 class="step__subtitle my-30" v-text="`Tudo certo? Então vamos lá!`"></h2>
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Primeiramente, como você gostaria de ser chamado?`"></p>
      <InputField 
        inputName="social-name"
        inputType="text"
        :inputRef="socialName.category"
        labelText="Nome Social"
        inputPlaceholder="Digite o seu nome social"
        :showError="!socialName.isValid"
        errorMessage="Nome social inválido"
        @input-focus="inputFocus"
        @input-blur="inputBlur($event), validate($event, socialName.category)"
      />
      <p class="text--bold mt-30" v-text="`Agora precisamos saber qual é seu número de CPF ou CNPJ`"></p>
      <InputField 
        inputName="cpf-cnpj"
        inputType="text"
        :inputRef="cpfCnpj.category"
        labelText="CPF/CNPJ"
        inputPlaceholder="CPF ou CNPJ"
        :showError="!cpfCnpj.isValid"
        errorMessage="CPF/CNPJ inválido"
        maskType="cpfCnpj"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, cpfCnpj.category)" 
      />
    </form>
  </div>
</template>

<script>
import InputField from "@/components/input/InputField"
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  components: { InputField },
  data() {
    return {
      socialName: {
        category: 'socialName',
        value: '',
        isValid: true
      },
      cpfCnpj: {
        category: 'cpfCnpj',
        value: '',
        isValid: true
      },
      dynamicMask: "###.###.###.##"
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    checkMask() {
      this.dynamicMask = this.cpfCnpj.value.length > 14 ? "##.###.###/####-##" : "###.###.###.##"
    }
  }
}
</script>
