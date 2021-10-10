<template>
  <div class="step">
    <h1 class="my-30" v-text="`Quase lá!`"></h1>
    <p class="mb-30" v-text="`Agora só faltam os dados finais`"></p>
    <form class="step__form" autocomplete="off" action="#" method="POST" @submit.prevent>
      <InputField 
        inputName="password"
        inputType="password"
        inputPlaceholder="Digite sua senha"
        :inputRef="password.category"
        labelText="Senha"
        :showError="!password.isValid"
        errorMessage="Senha inválida"
        @input-focus="inputFocus"
        @input-blur="inputBlur($event), validate($event, password.category)"
      />
      <p class="field--message my-15" v-text="`A senha deve conter: Mínimo de 8 caracteres, uma letra maiúscula, uma minúscula e um número`"></p>
      <InputField 
        inputName="password-confirm"
        inputType="password"
        inputPlaceholder="Confirme sua senha"
        :inputRef="passwordConfirm.category"
        labelText="Confirmar senha"
        :showError="!passwordConfirm.isValid"
        errorMessage="Senha inválida"
        @input-focus="inputFocus"
        @input-blur="inputBlur($event), validate($event, passwordConfirm.category)"
      />
      <p v-if="!match" class="text--error mt-30" v-text="`As senhas não conferem`"></p>
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
      password: {
        value: '',
        category: 'password',
        isValid: true
      },
      passwordConfirm: {
        value: '',
        category: 'passwordConfirm',
        isValid: true
      }
    }
  },
  computed: {
    match() {
      return this.passwordMatches()
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    passwordMatches() {
      if(this.password.value === this.passwordConfirm.value) return true
      return false
    }
  }
}
</script>
