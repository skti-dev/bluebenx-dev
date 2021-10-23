<template>
  <div class="loader" :class="{'small' : small}"></div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      required: false
    }
  }
}
</script>
