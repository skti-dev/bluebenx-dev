<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Qual seu endereço de email?`"></p>
      <InputField 
        inputName="email"
        inputType="email"
        :inputRef="email.category"
        labelText="E-mail"
        inputPlaceholder="Digite o seu e-mail"
        :showError="!email.isValid"
        errorMessage="E-mail inválido"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, email.category)" 
      />
      <br>
      <p class="text--bold" v-text="`Qual seu telefone?`"></p>
      <InputField 
        inputName="phone"
        inputType="text"
        :inputRef="phone.category"
        labelText="Telefone"
        inputPlaceholder="Digite o seu número de telefone"
        :showError="!phone.isValid"
        errorMessage="Telefone inválido"
        maskType="phone"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, phone.category)" 
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
      email: {
        category: 'email',
        value: '',
        isValid: true
      },
      phone: {
        category: 'phone',
        value: '',
        isValid: true
      },
      dynamicMask: "+## ## #####-####"
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler]
}
</script>
