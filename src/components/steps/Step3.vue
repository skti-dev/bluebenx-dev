<template>
  <div class="step">
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--bold mb-10" v-text="`Validação de segurança`"></p>
      <p class="text--upper text--small" v-text="`Enviamos um código para o seu e-mail`"></p>
      <div class="code__validation mt-30">
        <SingleCharInput @inputData="setFinalData('code-1', $event)" @setValue="setInputValue" />
        <SingleCharInput @inputData="setFinalData('code-2', $event)" @setValue="setInputValue" />
        <SingleCharInput @inputData="setFinalData('code-3', $event)" @setValue="setInputValue" />
        <SingleCharInput @inputData="setFinalData('code-4', $event)" @setValue="setInputValue" />
        <SingleCharInput @inputData="setFinalData('code-5', $event)" @setValue="setInputValue" />
      </div>
      <span v-if="codeTime" class="code__resend text--bold" v-text="`Reenviar código: ${codeTime}s`"></span>
      <span v-else class="code__resend cursor--click text--bold" v-text="`Reenviar código`" @click="initCodeInterval(), $emit('resendCode')"></span>
      <p v-if="hasError" class="text--error" v-text="`Preencha o código corretamente`"></p>
    </form>
  </div>
</template>

<script>
import SingleCharInput from "@/components/input/SingleCharInput"

export default {
  components: { SingleCharInput },
  data() {
    return {
      codeTime: 50,
      codeInterval: -1,
      finalData: {},
      hasError: false
    }
  },
  watch: {
    codeTime() {
      if(!this.codeTime) this.endCodeInterval()
    }
  },
  mounted() {
    this.initCodeInterval()
  },
  methods: {
    initCodeInterval() {
      this.codeTime = 50
      this.codeInterval = setInterval(() => { this.decrementCodeTime() }, 1000)
    },
    endCodeInterval() {
      this.codeInterval = clearInterval(this.codeInterval)
    },
    decrementCodeTime() {
      this.codeTime--
      if(this.codeTime === 0) this.codeInterval = clearInterval(this.codeInterval)
    },
    setFinalData(key, value) {
      this.finalData[key] = value
      this.$emit("setFinalData", { key: "code", value: Object.values(this.finalData).join("") })
    },
    verifyFinalData() {
      if(Object.keys(this.finalData).length != 5) {
        this.hasError = true
        return false
      }
      let isValid = true
      Object.values(this.finalData).forEach(value => {
        if(!/[0-9]/.test(value)) isValid = false
      })
      if(!isValid) {
        this.hasError = true
        return false
      }
      this.hasError = false
      return true
    },
    setInputValue(value) {
      try {
        for(let i = 0; i < value.length; i++) {
          if(this.$children[i]) {
            this.$children[i].inputValue = value[i]
            this.$children[i].$emit("inputData", this.$children[i].inputValue)
          }
        }
      }catch(e) {
        console.error("Erro ao definir o valor do input único")
        console.error(e)
      }
    }
  },
  destroyed() {
    this.endCodeInterval()
  }
}
</script>
