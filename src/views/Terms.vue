<template>
  <section class="terms max-width" :class="{'is-loading' : pendingRequest}">
    <header class="step-back__header">
      <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click text--dark-blue" @click="$router.push({ name: 'register-welcome' })" />
      <span class="text--bold text--center" v-text="`Termos e condições`"></span>
    </header>
    <div class="terms__content mt-30">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum, urna eu ornare interdum, felis metus vulputate dui, eget accumsan nulla dolor nec purus. Cras posuere, purus et vestibulum consequat, leo purus malesuada mauris, vitae eleifend dolor nunc eget velit. Nullam massa neque, tristique nec nunc quis, mollis euismod magna. Etiam dapibus nec magna ut condimentum. Donec auctor lacus in tincidunt blandit. Nam ac nibh nulla. Suspendisse venenatis hendrerit iaculis. Mauris ultricies tristique pharetra. Praesent pretium enim lectus, eget consequat risus volutpat id. Suspendisse efficitur at elit at venenatis. Duis eu quam vel eros dignissim congue. Nullam a aliquet quam. Praesent sed risus et metus tincidunt aliquet in a massa.

        Integer ipsum est, cursus eu leo id, convallis fringilla nisi. Quisque vitae lacus maximus, vehicula est et, vestibulum ex. Mauris condimentum nisl quis magna ornare, sed eleifend mauris blandit. Donec vel neque cursus, placerat urna sollicitudin, tempor ligula. Aenean gravida ex nec posuere pretium. Proin porta, felis quis iaculis vulputate, nunc ante gravida nibh, id vulputate risus enim et felis. Phasellus eu erat in massa porttitor venenatis. Proin suscipit eros in fringilla ultrices.

        Suspendisse vitae mauris gravida, accumsan libero quis, suscipit diam. Fusce lorem est, pretium eget rhoncus ut, aliquet nec turpis. Etiam sagittis libero risus, ut efficitur dui gravida non. Quisque sagittis sem at lacinia luctus. Nullam turpis dui, luctus a porttitor sit amet, posuere vel tortor. Suspendisse eget venenatis urna, id gravida magna. Sed in quam eget turpis convallis accumsan ut id risus. Nullam auctor, purus eget molestie fringilla, risus justo lobortis lectus, a eleifend mauris sapien et dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate erat non fermentum luctus.

        Nam arcu massa, iaculis id accumsan a, sodales et metus. Fusce tincidunt odio metus, ac luctus nulla commodo quis. In ut porttitor ex, vitae finibus massa. Sed et dui et erat euismod fermentum. Maecenas sodales leo et vulputate commodo. Morbi commodo convallis sem, a iaculis risus hendrerit quis. Nulla at imperdiet nisl. Curabitur tincidunt auctor sem, vitae vestibulum purus venenatis non. Donec feugiat pellentesque congue. Sed vitae elit ac leo elementum commodo. Duis interdum rutrum arcu quis cursus. Aliquam ullamcorper tellus non purus hendrerit, vel lacinia magna dignissim. Maecenas rutrum rutrum lacus. Proin pellentesque ligula non condimentum euismod. In at tortor scelerisque, pulvinar mauris nec, auctor diam.

        Fusce at dictum neque. Donec aliquet ante et laoreet vehicula. Ut non suscipit libero. Sed faucibus scelerisque lacus, pharetra dapibus elit. Fusce gravida ex at mi ullamcorper, sed volutpat tortor interdum. Proin sodales tincidunt felis, in lobortis massa maximus at. Praesent a pulvinar magna, a facilisis velit. Sed in urna vel est pellentesque molestie. In blandit fringilla maximus. Duis justo lectus, interdum non augue sit amet, egestas lacinia tellus. Aenean mattis orci id nunc pellentesque condimentum.
      </p>
      <button class="btn default-blue w-100 my-30" v-text="`Aceitar`" @click="accept"></button>
    </div>
    <transition name="slide">
      <Loading v-if="pendingRequest" mode="out-in" />
    </transition>
  </section>
</template>

<script>
  import Loading from "@/components/loading/Loading"

  export default {
    components: { Loading },
    data() {
      return {
        pendingRequest: false
      }
    },
    methods: {
      async accept() {
        try {
          if(this.pendingRequest) return
          this.pendingRequest = true
          const currentDate = new Date().toJSON()
          const response = await this.$apiRequest.post(`/user`, { date: currentDate })
          const { data } = { ...response.data }
          const { uid } = data
          this.$store.commit("setUserID", uid)
          this.pendingRequest = false
          this.$router.push({ name: 'register' })
        }catch(e) {
          this.pendingRequest = false
          this.$router.push({ name: "error" })
          console.error("Erro ao aceitar os termos")
          console.error(e)
        }
      }
    }
  }
</script>

<style scoped>
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  .slide-enter-active {
    animation: slide-in 300ms ease;
  }
  .slide-leave-active {
    animation: slide-out 300ms ease;
  }
</style>
