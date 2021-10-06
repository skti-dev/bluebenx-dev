<template>
  <div class="step">
    <div class="step__form">
      <p class="text--bold mb-10"> Validação de segurança </p>
      <p class="text--bold"> Enviamos um código para o seu e-mail! </p>
      <div class="code__validation mt-30">
        <input type="number" maxlength="1" max="9" class="code mr-10 text--bold">
        <input type="number" maxlength="1" max="9" class="code mr-10 text--bold">
        <input type="number" maxlength="1" max="9" class="code mr-10 text--bold">
        <input type="number" maxlength="1" max="9" class="code mr-10 text--bold">
        <input type="number" maxlength="1" max="9" class="code mr-10 text--bold">
      </div>
      <span v-if="codeTime" class="code__resend" v-text="`Reenviar código: ${codeTime}s`"></span>
      <span v-else class="code__resend cursor--click" v-text="`Reenviar código`"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeTime: 50,
      codeInterval: -1
    }
  },
  mounted() {
    this.codeInterval = setInterval(() => { this.decrementCodeTime() }, 1000)
  },
  methods: {
    decrementCodeTime() {
      this.codeTime--
      if(this.codeTime === 0) this.codeInterval = clearInterval(this.codeInterval)
    }
  },
  destroyed() {
    this.codeInterval = clearInterval(this.codeInterval)
  }
}
</script>
