<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Primeiramente, como você gostaria de ser chamado?`"></p>
      <InputField 
        inputName="social_name"
        inputType="text"
        :inputRef="socialName.category"
        labelText="Nome Social"
        inputPlaceholder="Digite o seu nome social"
        :showError="!socialName.isValid"
        errorMessage="Nome social inválido"
        @input-focus="inputFocus"
        @input-blur="inputBlur($event), validate($event, socialName.category)"
      />
      <p class="text--bold mt-30" v-text="`Qual o seu número de CPF ou CNPJ`"></p>
      <InputField 
        inputName="document"
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
