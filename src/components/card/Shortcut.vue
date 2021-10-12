<template>
  <div class="shortcut" :class="{'light-blue' : lightBlue}">
    <div class="shortcut__content">
      <fa-icon :icon="icon" />
      <p v-text="`${title}`" class="text--bold"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: Array,
      required: true
    },
    lightBlue: {
      type: Boolean,
      required: false
    }
  }
}
</script>
