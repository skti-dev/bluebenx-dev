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
      v-mask="mask"
      @input="$emit('input-typing', { e: $event, inputRef })"
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
      mask: {
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
      }
    }
  }
</script>