<template>
  <div class="step">
    <p class="text--bold mb-10" v-text="`Seus dados foram validados com sucesso!`"></p>
    <p class="mb-30" v-text="`Agora é so dar um confere para ver se está tudo de acordo`"></p>
    <div class="step__form">
      <p v-text="`Dados Pessoais`"></p>
      <div class="v__field active">
        <label for="name" v-text="`Nome`"></label>
        <input type="text" name="name" :value="`{{ name }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="cpf" v-text="`CPF`"></label>
        <input type="text" name="cpf" :value="`{{ cpf }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="birth-date" v-text="`Data de Nascimento`"></label>
        <input type="text" name="birth-date" :value="`{{ birthDate }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="sex" v-text="`Sexo`"></label>
        <input type="text" name="sex" :value="`{{ sex }}`" disabled />
      </div>
      <p class="text--bold my-15" v-text="`Agora dar um check nas filiações`"></p>
      <p v-text="`Filiação`"></p>
      <div class="v__field active">
        <label for="mother" v-text="`Mãe`"></label>
        <input type="text" name="mother" :value="`{{ mother }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="father" v-text="`Pai`"></label>
        <input type="text" name="father" :value="`{{ father }}`" disabled />
      </div>
      <p class="text--bold my-15" v-text="`Seu endereço está correto?`"></p>
      <div class="v__field active">
        <label for="cep" v-text="`CEP`"></label>
        <input type="text" name="cep" :value="`{{ cep }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="address" v-text="`Logradouro`"></label>
        <input type="text" name="address" :value="`{{ address }}`" disabled />
      </div>
      <div class="v__field active">
        <label for="number" v-text="`Número`"></label>
        <input type="text" name="number" :value="`{{ number }}`" disabled />
      </div>
      <div class="related-fields">
        <div class="v__field active">
          <label for="city" v-text="`Cidade`"></label>
          <input type="text" name="city" :value="`{{ city }}`" disabled />
        </div>
        <div class="v__field active">
          <label for="state" v-text="`Estado`"></label>
          <input type="text" name="state" :value="`{{ state }}`" disabled />
        </div>
      </div>
      <button class="btn white text--default-blue box-shadow my-30 w-100" v-text="`Editar`"></button>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
