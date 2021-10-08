<template>
  <div class="step">
    <p class="text--bold mb-10" v-text="`Seus dados foram validados com sucesso!`"></p>
    <p class="mb-30" v-text="`Agora é so dar um confere para ver se está tudo de acordo`"></p>
    <div class="step__form">
      <p v-text="`Dados Pessoais`"></p>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="name" v-text="`Nome`"></label>
        <input type="text" name="name" v-model="allInputs.name" :disabled="isDisabled" ref="first-input" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="cpf" v-text="`CPF`"></label>
        <input type="text" name="cpf" v-model="allInputs.cpf" :disabled="isDisabled" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="birth-date" v-text="`Data de Nascimento`"></label>
        <input :type="isDisabled ? 'text' : 'date'" name="birth-date" v-model="allInputs.birthDate" :disabled="isDisabled" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="sex" v-text="`Sexo`"></label>
        <input type="text" name="sex" v-model="allInputs.sex" :disabled="isDisabled" />
      </div>
      <p class="text--bold my-15" v-text="`Agora dar um check nas filiações`"></p>
      <p v-text="`Filiação`"></p>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="mother" v-text="`Mãe`"></label>
        <input type="text" name="mother" v-model="allInputs.mother" :disabled="isDisabled" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="father" v-text="`Pai`"></label>
        <input type="text" name="father" v-model="allInputs.father" :disabled="isDisabled" />
      </div>
      <p class="text--bold my-15" v-text="`Seu endereço está correto?`"></p>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="cep" v-text="`CEP`"></label>
        <input type="text" name="cep" v-model="allInputs.cep" :disabled="isDisabled" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="address" v-text="`Logradouro`"></label>
        <input type="text" name="address" v-model="allInputs.address" :disabled="isDisabled" />
      </div>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="number" v-text="`Número`"></label>
        <input type="text" name="number" v-model="allInputs.number" :disabled="isDisabled" />
      </div>
      <div class="related-fields">
        <div class="v__field active" :class="{'disabled' : isDisabled}">
          <label for="city" v-text="`Cidade`"></label>
          <input type="text" name="city" v-model="allInputs.city" :disabled="isDisabled" />
        </div>
        <div class="v__field active" :class="{'disabled' : isDisabled}">
          <label for="state" v-text="`Estado`"></label>
          <input type="text" name="state" v-model="allInputs.state" :disabled="isDisabled" />
        </div>
      </div>
      <button class="btn white text--default-blue box-shadow my-30 w-100" v-text="`Editar`" @click="editInfos"></button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      allInputs: {
        name: "{{ name }}",
        cpf: "{{ cpf }}",
        birthDate:  "{{ birthDate }}",
        sex:  "{{ sex }}",
        mother:  "{{ mother }}",
        father:  "{{ father }}",
        cep:  "{{ cep }}",
        address:  "{{ address }}",
        number:  "{{ number }}",
        city:  "{{ city }}",
        state:  "{{ state }}"
      },
      isDisabled: true
    }
  },
  methods: {
    editInfos() {
      this.isDisabled = !this.isDisabled
      if(!this.isDisabled) {
        window.scrollTo({ top: 0, behavior: "smooth" })
        this.$nextTick(() => this.$refs["first-input"].focus())
      }
    }
  }
}
</script>
