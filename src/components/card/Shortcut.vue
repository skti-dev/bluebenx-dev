<template>
  <div class="shortcut">
    <div class="shortcut__content">
      <fa-icon :icon="icon" />
      <p v-text="`${title}`"></p>
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
    }
  }
}
</script>

<style>

</style>