<template>
  <div class="card">
    <div class="card__header">
      <h2 v-text="`${title}`"></h2>
      <fa-icon :icon="currentIcon" @click="isHidden = !isHidden" />
    </div>
    <div class="card__content">
      <h1 v-text="`${!isHidden ? value : '---'}`"></h1>
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
    value: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      isHidden: true
    }
  },
  computed: {
    currentIcon() {
      return this.isHidden ? ['fas', 'eye'] : ['fas', 'eye-slash'] 
    }
  }
}
</script>
