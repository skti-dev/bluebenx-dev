<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold" v-text="`Primeiramente, como você gostaria de ser chamado?`"></p>
      <InputField 
        :customClass="socialName.value ? 'active' : ''"
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
        :customClass="cpfCnpj.value ? 'active' : ''"
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
import { mapGetters } from 'vuex'

import InputField from "@/components/input/InputField"
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  components: { InputField },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfos",
      updateFromLocalStorage: "getUpdateFromLocalStorage"
    })
  },
  watch: {
    updateFromLocalStorage() {
      if(this.updateFromLocalStorage) this.setDataIfHas()
    }
  },
  mounted() {
    this.setDataIfHas()
  },  
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
    },
    setDataIfHas() {
      try {
        console.log("Alo: ", this.userInfo)
        if(!Object.keys(this.userInfo).length) return
        this.socialName.value = this.userInfo.social_name
        this.cpfCnpj.value = this.userInfo.doc_number
      }catch(e) {
        console.error("Não foi possível preencher os campos do step 1")
        console.error(e)
      }
    }
  }
}
</script>
