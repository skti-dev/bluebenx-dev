<template>
  <div class="step">
    <h1 class="my-30" v-text="`Quase lá!`"></h1>
    <p class="mb-30" v-text="`Agora só faltam os dados finais`"></p>
    <div class="step__form">
      <div class="v__field">
        <label for="password" @click="inputFocus" v-text="`Senha`"></label>
        <input 
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
          v-model="password.value" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, password.category)"
          :ref="password.category"
        />
        <span class="message--invalid text--error" v-if="!password.isValid" v-text="`Senha inválida`"></span>
      </div>
      <p class="field--message my-15" v-text="`A senha deve conter: Mínimo de 8 caracteres, uma letra maiúscula, uma minúscula e um número`"></p>
      <div class="v__field">
        <label for="password-confirm" @click="inputFocus" v-text="`Confirmar senha`"></label>
        <input 
          type="password" 
          name="password-confirm" 
          placeholder="Confirme sua senha" 
          v-model="passwordConfirm.value" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, passwordConfirm.category)"
          :ref="passwordConfirm.category" 
        />
        <span class="message--invalid text--error" v-if="!passwordConfirm.isValid" v-text="`Senha inválida`"></span>
      </div>
      <p v-if="!match" class="text--error mt-30" v-text="`As senhas não conferem`"></p>
    </div>
  </div>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
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
