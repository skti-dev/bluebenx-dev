<template>
  <input type="number" :maxlength="1" @input="verifyInput" v-model="inputValue" @keyup.delete="deletePrevious" autocomplete="off" class="code mr-10 text--bold">
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    }
  },
  methods: {
    verifyInput(e) {
      try {
        if(this.inputValue.length > 1) this.inputValue = this.inputValue.substring(0, 1)

        const { target } = e
        const { nextSibling, previousElementSibling } = target
        if(this.inputValue.length === 1) {
          if(nextSibling) nextSibling.focus()
        }else if(this.inputValue.length === 0) {
          if(previousElementSibling) previousElementSibling.focus()
        }
        this.$emit("inputData", this.inputValue)
      }catch(error) {
        console.error("Erro ao validar o input")
        console.error(error)
      }
    },
    deletePrevious(e) {
      try {
        const { target } = e
        const { previousElementSibling, value } = target
        if(!value) {
          if(previousElementSibling) previousElementSibling.focus()
          this.inputValue = ""
        }
      }catch(error) {
        console.error("Erro ao deletar o valor anterior")
        console.error(error)
      }
    }
  }
}
</script>
