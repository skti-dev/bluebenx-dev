<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Qual seu endereço de e-mail?`"></p>
      <InputField 
        :customClass="email.value ? 'active' : ''"
        inputName="email"
        inputType="email"
        :inputRef="email.category"
        labelText="E-mail"
        inputPlaceholder="Digite o seu e-mail"
        :showError="!email.isValid"
        errorMessage="E-mail inválido"
        :inputRequired="true"
        @input-focus="inputFocus($event)" 
        @input-blur="inputBlur($event), validate($event, email.category)" 
      />
      <br>
      <p class="text--bold" v-text="`Qual seu telefone?`"></p>
      <InputField 
        :customClass="phone.value ? 'active' : ''"
        inputName="phone"
        inputType="text"
        :inputRef="phone.category"
        labelText="Telefone"
        inputPlaceholder="Digite o seu número de telefone"
        :showError="!phone.isValid"
        errorMessage="Telefone inválido"
        maskType="phone"
        :inputRequired="true"
        @input-focus="inputFocus($event)" 
        @input-blur="inputBlur($event), validate($event, phone.category)" 
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      userInfo: "getUserInfos"
    })
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  mounted() {
    this.setDataIfHas()
  },
  methods: {
    setDataIfHas() {
      try {
        if(!Object.keys(this.userInfo).length) return
        this.email.value = this.userInfo.email
        this.phone.value = this.userInfo.phone
      }catch(e) {
        console.error("Não foi possível preencher os campos do step 2")
        console.error(e)
      }
    }
  }
}
</script>
