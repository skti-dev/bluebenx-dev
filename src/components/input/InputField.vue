<template>
  <div class="v__field" :class="[customClass]">
    <label :for="inputName" @click="$emit('input-focus', $event)" v-text="labelText"></label>
    <input 
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder" 
      autocomplete="off"
      :ref="inputRef"
      :required="inputRequired"
      :disabled="inputDisabled"
      v-mask="mask"
      v-model="$parent[inputRef].value"
      @input="$emit('input-typing', { e: $event, inputRef }), checkMask($event)"
      @focus="$emit('input-focus', $event)" 
      @blur="$emit('input-blur', $event, inputRef)" 
    />
    <span class="message--invalid text--error" v-if="showError" v-text="errorMessage"></span>
  </div>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String
      },
      maskType: {
        type: String,
        default: ""
      },
      inputName: {
        type: String,
        required: true
      },
      inputType: {
        type: String,
        required: true
      },
      inputRef: {
        type: String,
        required: true
      },
      labelText: {
        type: String,
        required: true
      },
      inputPlaceholder: {
        type: String,
        default: ""
      },
      showError: {
        type: Boolean,
        default: false
      },
      errorMessage: {
        type: String,
        default: ""
      },
      inputRequired: {
        type: Boolean,
        default: false
      },
      inputDisabled: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.setMask('')
    },
    data() {
      return {
        masks: {
          cep: {
            initialMask: "#####-###"
          },
          cpfCnpj: {
            initialMask: "###.###.###-##",
            updatedMask: "##.###.###/####-##",
            limiter: 14
          },
          phone: {
            initialMask: "+##(##)####-####", 
            updatedMask: "+##(##)#####-####",
            limiter: 16
          }
        },
        mask: ""
      }
    },
    methods: {
      setMask(value) {
        try {
          if(!this.maskType || !this.masks[this.maskType]) return
          const { initialMask, updatedMask, limiter } = this.masks[this.maskType]
          this.mask = value && value.length > limiter ? updatedMask : initialMask
        }catch(e) {
          console.error("Erro ao setar a máscara")
          console.error(e)
        }
      },
      checkMask(e) {
        try {
          if(!this.maskType) return
          const { target } = e
          const { value } = target
          this.setMask(value, this.masks[this.maskType])
        }catch(error) {
          console.error("Erro ao checar a máscara")
          console.error(error)
        }
      }
    }
  }
</script>