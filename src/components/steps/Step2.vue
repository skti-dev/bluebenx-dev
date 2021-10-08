<template>
  <div class="step">
    <div class="step__form">
      <p class="text--bold" v-text="`Como medida de segurança, precisamos confirmar alguns dados`"></p>
      <div class="v__field">
        <label for="email" @click="inputFocus" v-text="`E-mail`"></label>
        <input 
          type="email"
          name="email"
          placeholder="Digite o seu e-mail" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, email.category)" 
          v-model="email.value"
          :ref="email.category"
        />
        <span class="message--invalid text--error" v-if="!email.isValid" v-text="`E-mail inválido`"></span>
      </div>
      <br>
      <div class="v__field">
        <label for="phone" @click="inputFocus" v-text="`Telefone`"></label>
        <input 
          type="text"
          name="phone"
          placeholder="Digite o seu número de telefone" 
          @focus="inputFocus"
          @blur="inputBlur($event), validate($event, phone.category)" 
          v-model="phone.value"
          :ref="phone.category"
        />
        <span class="message--invalid text--error" v-if="!phone.isValid" v-text="`Telefone inválido`"></span>
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
      email: {
        category: 'email',
        value: '',
        isValid: true
      },
      phone: {
        category: 'phone',
        value: '',
        isValid: true
      }
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler]
}
</script>
