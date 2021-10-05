<template>
  <div class="step">
    <h1 class="my-30" v-text="`Quase lá!`"></h1>
    <p class="mb-30" v-text="`Agora só faltam os dados finais`"></p>
    <div class="step__form">
      <div class="v__field">
        <label for="password" @click="inputFocus" v-text="`Senha`"></label>
        <input type="password" name="password" placeholder="Digite sua senha" v-model="password" @focus="inputFocus" @blur="inputBlur($event), validate($event)" />
      </div>
      <p class="field--message" v-text="`A senha deve conter: Mínimo de 8 caracteres, uma letra maiúscula e um número`"></p>
      <br>
      <div class="v__field">
        <label for="password-confirm" @click="inputFocus" v-text="`Confirmar senha`"></label>
        <input type="password" name="password-confirm" placeholder="Confirme sua senha" v-model="passwordConfirm" @focus="inputFocus" @blur="inputBlur($event), validate($event)" />
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
      password: "",
      passwordConfirm: ""
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    hasEmptyInputs() {
      if(!this.password || !this.passwordConfirm) return true
      return false
    }
  }
}
</script>
