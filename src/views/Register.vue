<template>
  <section class="register max-width">
    <header class="register__header">
      <div class="register__title">
        <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click text--default-blue" @click="returnToTerms" />
        <h1 v-text="`Cadastro Conta Digital`"></h1>
      </div>
      <div class="register__step-count" :class="{'last__step' : currentStep === 7}">
        <span class="text--bold" v-text="`Passo ${currentStep} de ${totalSteps}`"></span>
        <div class="progress__container mt-10">
          <div class="progress__bar" :style="`width: ${widthBar}`"></div>
        </div>
      </div>
    </header>
    <div class="register__steps my-15" :class="{'last__step' : currentStep === 7}">
      <transition name="slide" mode="out-in">
        <keep-alive>
          <component v-bind:is="currentView" @setFinalData="setFinalData" @resendCode="resendCode" />
        </keep-alive>
      </transition>
    </div>
    <div class="register__error ml-10" v-if="errorMessage">
      <p class="text--bold text--error" v-text="errorMessage"></p>
    </div>
    <footer class="register__footer" :class="{'single-btn' : !hasBackButton}" v-if="currentStep != 7">
      <div class="step__selection" v-if="hasBackButton">
        <span class="icon__circle light-gray box-shadow" @click="previousStep">
          <fa-icon :icon="['fas', 'arrow-left']" />
        </span>
        <span class="text--bold mx-10" v-text="`Voltar`"></span>
      </div>
      <div class="step__selection">
        <span class="text--bold mx-10" v-text="`Próximo`"></span>
        <span class="icon__circle blue box-shadow" @click="nextStep">
          <fa-icon :icon="['fas', 'arrow-right']" v-if="!pendingRequest" />
          <SpinLoader v-else  />
        </span>
      </div>
    </footer>
    <transition name="fade">  
      <RecoveredData
        v-if="hasNotification" 
        :response="recoveredResponse"
        :step="recoveredStep"
        @restore-data="restoreData"
        @close-notification="hasNotification = false"
      />
    </transition>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

import Step1 from "@/components/steps/Step1"
import Step2 from "@/components/steps/Step2"
import Step3 from "@/components/steps/Step3"
import Step4 from "@/components/steps/Step4"
import Step5 from "@/components/steps/Step5"
import Step6 from "@/components/steps/Step6"
import Step7 from "@/components/steps/Step7"
import SpinLoader from "@/components/loading/SpinLoader"
import RecoveredData from "@/components/footerNotification/RecoveredData"

import { localStorageHandler } from "@/mixins/localStorageHandler"

export default {
  components: { Step1, Step2, Step3, Step4, Step5, Step6, Step7, SpinLoader, RecoveredData },
  data() {
    return {
      currentStep: 1,
      totalSteps: 7,
      finalData: {},
      pendingRequest: false,
      errorMessage: "",
      recoveredResponse: {},
      recoveredStep: 0,
      hasNotification: false,
      sentData: {}
    }
  },
  computed: {
    ...mapGetters({
      userID: "getUserID"
    }),
    currentView() {
      return `Step${this.currentStep}`
    },
    hasBackButton() {
      return this.currentStep > 1
    },
    validateCurrentStep() {
      switch (this.currentStep) {
        case 1:
        case 2:
        case 3:
        case 5:
        case 6:
        return true
        default:
        return false
      }
    },
    widthBar() {
      const totalPercentage = 100
      const fullValue = this.totalSteps
      const partialValue = this.currentStep
      return `${((totalPercentage * partialValue) / fullValue).toFixed(2)}%`
    }
  },
  mixins: [localStorageHandler],
  mounted() {
    this.verifyLocalStorage([`userID`, `currentStep`])
  },
  methods: {
    restoreData({ response, step }) {
      try {
        const userID = localStorage.getItem("userID")
        this.$store.commit("setUserID", userID)
        this.setLocalStorageItem(`userID`, userID)
        this.setUserInfos(response)
        this.currentStep = step
        this.$store.commit("setUpdateFromLocalStorage", true)
      }catch(e) {
        console.error("Erro ao recuperar os dados")
        console.error(e)
      }
    },
    returnToTerms() {
      this.$router.push({ name: "terms" })
    },
    previousStep() {
      this.currentStep--
    },
    verifyStep5() {
      try {
        const hasAnyKey = keys => {
          let hasAtLeastOneKey = false
          keys.split(", ").forEach(key => {
            if(key && Object.prototype.hasOwnProperty.call(this.finalData, key)) hasAtLeastOneKey = true
          })
          return hasAtLeastOneKey 
        }
        return hasAnyKey("cep, address, city, number, complement, district, state")
      }catch(e) {
        console.error("Erro ao verificar o step 5")
        console.error(e)
      }
    },
    async nextStep() {
      if(this.pendingRequest) return false
      try {
        if(this.validateCurrentStep) {
          if(this.currentStep === 3) {
            if(!this.$children[this.currentStep - 1].verifyFinalData()) return false
          }else{
            if(!this.$children[this.currentStep - 1].validateAllInputs()) return false
          }
          if(this.currentStep != 5 || (this.currentStep === 5 && this.verifyStep5())) await this.sendData()
        }
        if(!this.errorMessage) this.currentStep < this.totalSteps ? this.currentStep++ : false
        if(this.currentStep === 7) {
          this.removeLocalStorageItem(`userID`)
          this.removeLocalStorageItem(`currentStep`)
        }
      }catch(e) {
        console.error("Não foi possível avançar para o próximo step")
        console.error(e)
      }
    },
    setFinalData({ key, value }) {
      this.finalData[key] = value
      if(this.currentStep <= 2) {
        this.setLocalStorageItem(`userID`, this.userID)
        this.setLocalStorageItem(`currentStep`, this.currentStep)
      }
    },
    getDataAndURL(specificStep) {
      const step = !specificStep ? this.currentStep : specificStep
      switch (step) {
        case 1: {
          const { social_name, document } = this.finalData
          return { url: `document-name`, data: { social_name, document } }
        }
        case 2: {
          const { email, phone } = this.finalData
          return { url: `email-phone`, data: { email, phone } }
        }
        case 3: {
          const { code } = this.finalData
          return { url: `code`, data: { code } }
        }
        case 5: {
          const data = this.returnStep5Data()
          return { url: `address`, data }
        }
        case 6: {
          const { password } = this.finalData
          return { url: `password`, data: { password } } 
        }
        default: {
          return { error: true }
        }
      }
    },
    returnStep5Data() {
      try {
        const userInfos = this.$store.getters.getUserInfos
        const { publicPlace, number, complement, district, city, state, zipCode } = userInfos
        const { address, cep } = this.finalData
        const finalDataDistrict = this.finalData.district
        const finalDataComplement = this.finalData.complement
        const finalDataCity = this.finalData.city
        const finalDataNumber = this.finalData.number
        const finalDataState = this.finalData.state
        
        let hasDiff = false
        if((publicPlace != address) || (finalDataNumber != number) || (cep != zipCode) || (finalDataCity != city) || (finalDataState != state) || (finalDataDistrict != district || finalDataComplement != complement)) hasDiff = true
        if(!hasDiff) return { stop: true }

        return {
          publicPlace: address ? address : publicPlace,
          number: finalDataNumber ? finalDataNumber : number,
          district: finalDataDistrict ? finalDataDistrict : district,
          complement: finalDataComplement ? finalDataComplement : complement,
          city: finalDataCity ? finalDataCity : city,
          state: finalDataState ? finalDataState : state,
          zipCode: cep ? cep : zipCode
        }
      }catch(e) {
        console.error("Erro ao retornar os dados do step 5")
        console.error(e)
        return { stop: true }
      }
    },
    handleStatus206(response) {
      const { status } = response
      if(status === 206) {
        const { message } = response.data
        this.errorMessage = message
        return false
      }
      return true
    },
    verifyLastData(dataToBeSent) {
      if(!Object.keys(this.sentData).length) return true
      let isDiff = JSON.stringify(this.sentData) != JSON.stringify(dataToBeSent)
      if(isDiff) {
        let hasDifferentValues = false
        let hasSameKey = false
        for(let key in this.sentData) {
          if(Object.prototype.hasOwnProperty.call(dataToBeSent, key)) {
            hasSameKey = true
            if(dataToBeSent[key] != this.sentData[key]) hasDifferentValues = true
          }
        }
        hasDifferentValues = hasSameKey ? hasDifferentValues : true
        isDiff = hasDifferentValues
      }
      return isDiff
    },
    async sendData() {
      try {
        const { url, data, error, stop } = this.getDataAndURL()
        if(stop) return false
        if(error) throw new Error(`Não foi possível receber os dados e a URL do step atual: ${this.currentStep}`)
        if(!this.verifyLastData(data)) return false
        this.pendingRequest = true
        const response = await this.$apiRequest.put(`/user/${this.userID}/${url}`, data)
        this.sentData = { ...this.sentData, ...data }
        if(this.handleStatus206(response)) {
          this.errorMessage = ""
          if(this.currentStep === 1 || !this.$store.getters.getUserInfos.address) this.setUserInfos(response)
        }
        this.pendingRequest = false
      }catch(e) {
        console.error("Erro ao enviar os dados para a API")
        console.error(e)
        this.pendingRequest = false
        this.$router.push({ name: "error" })
      }
    },
    setUserInfos(response) {
      try {
        const { data } = { ...response.data }
        if(!data) return false
        const { address, document, mother_name, name, father_name, social_name, email, phone } = data
        const { city, district, number, state, publicPlace, zipCode, complement } = address ? address : {}
        const doc_number = document ? document.number : null
        const { ddd, ddi } = phone ? phone : {}
        const phone_number = phone && phone.number ? phone.number : {}
        let { birth_date } = data
        birth_date = birth_date ? birth_date : null
        this.$store.commit("setUserInfos", { email, phone: ddd && ddi && phone_number ? `${ddi}${ddd}${phone_number}` : null, social_name, name, doc_number, birth_date, mother_name, father_name, city, district, number, state, publicPlace, zipCode, complement })
      }catch(e) {
        console.error("Erro ao definir as informações do usuário")
        console.error(e)
      }
    },
    async resendCode() {
      try {
        if(this.pendingRequest) return false
        const { url, data, error } = this.getDataAndURL(2)
        if(error) throw new Error(`Não foi possível receber os dados e a URL para reenviar os dados`)
        this.pendingRequest = true
        await this.$apiRequest.put(`/user/${this.userID}/${url}`, data)
        this.pendingRequest = false
      }catch(e) {
        console.error("Erro ao reenviar o código")
        console.error(e)
        this.pendingRequest = false
        this.$router.push({ name: "error" })
      }
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-30px);
      opacity: 0;
    }
  }
  .slide-enter-active {
    animation: slide-in 300ms ease;
  }
  .slide-leave-active {
    animation: slide-out 300ms ease;
  }
</style>

