<template>
  <div class="step">
    <div class="step__form">
      <p class="text--bold" v-text="`Como medida de segurança, precisamos confirmar alguns dados`"></p>
      <div class="v__field">
        <label for="email" @click="inputFocus" v-text="`E-mail`"></label>
        <input type="email" name="email" placeholder="Digite o seu e-mail" @focus="inputFocus" @blur="inputBlur($event), validate($event, 'email')" v-model="email" />
      </div>
      <div class="v__field">
        <label for="phone" @click="inputFocus" v-text="`Telefone`"></label>
        <input type="text" name="phone" placeholder="Digite o seu número de telefone" @focus="inputFocus" @blur="inputBlur($event), validate($event)" v-model="phone" />
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
      email: "",
      phone: ""
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    hasEmptyInputs() {
      if(!this.email || !this.phone) return true
      return false
    }
  }
}
</script>
