<template>
  <section class="error">
    <header class="error__header">
      <fa-icon :icon="['fas', 'times']" class="cursor--click" @click="$router.push({ name: 'landing' })"></fa-icon>
    </header>
    <div class="error__content">
      <fa-icon :icon="['fas', 'exclamation-circle']" class="text--default-blue mb-30" />
      <h1 class="mb-10" v-text="`Ops!`"></h1>
      <h2 v-text="`Ocorreu um erro ao buscas as informações :(`" class="mb-30"></h2>
      <button class="btn light-gray" v-text="`Tentar novamente`" @click="$router.push({ name: 'terms' })"></button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
