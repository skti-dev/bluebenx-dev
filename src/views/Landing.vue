<template>
  <section class="landing">
    <img src="../assets/images/landing.png" alt="Logo da BlueBenx branco, ao centro. No fundo um gradiente leve entre tons de azul.">
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "login" })
    }, 1000)
  }
}
</script>
