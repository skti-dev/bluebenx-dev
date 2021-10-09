<template>
  <div class="step">
    <p class="text--bold mb-10" v-text="`Seus dados foram validados com sucesso!`"></p>
    <p class="mb-30" v-text="`Agora é so dar um confere para ver se está tudo de acordo`"></p>
    <div class="step__form">
      <p v-text="`Dados Pessoais`"></p>
      <div class="v__field active disabled">
        <label for="name" v-text="`Nome`"></label>
        <input type="text" name="name" v-model="allInputs.name" :disabled="isDisabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="cpf" v-text="`CPF`"></label>
        <input type="text" name="cpf" v-model="allInputs.cpf" :disabled="isDisabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="birth-date" v-text="`Data de Nascimento`"></label>
        <input type="text" name="birth-date" v-model="allInputs.birthDate" :disabled="isDisabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="sex" v-text="`Sexo`"></label>
        <input type="text" name="sex" v-model="allInputs.sex" :disabled="isDisabled" autocomplete="off" />
      </div>
      <p class="text--bold my-15" v-text="`Agora dar um check nas filiações`"></p>
      <p v-text="`Filiação`"></p>
      <div class="v__field active disabled">
        <label for="mother" v-text="`Mãe`"></label>
        <input type="text" name="mother" v-model="allInputs.mother" :disabled="isDisabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="father" v-text="`Pai`"></label>
        <input type="text" name="father" v-model="allInputs.father" :disabled="isDisabled" autocomplete="off" />
      </div>
      <p class="text--bold my-15" v-text="`Seu endereço está correto?`"></p>
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="cep" v-text="`CEP`"></label>
        <input 
          type="text" 
          name="cep" 
          v-model="cep.value" 
          :disabled="isDisabled" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, cep.category)"
          :ref="cep.category"
          autocomplete="off"
        />
        <!-- <span class="message--invalid text--error" v-if="!cep.isValid" v-text="`CEP inválido`"></span> -->
      </div>
      <!-- <br> -->
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="address" v-text="`Logradouro`"></label>
        <input 
          type="text" 
          name="address"  
          v-model="address.value" 
          :disabled="isDisabled" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, address.category)"
          :ref="address.category"
          autocomplete="off"
        />
        <!-- <span class="message--invalid text--error" v-if="!address.isValid" v-text="`Endereço inválido`"></span> -->
      </div>
      <!-- <br> -->
      <div class="v__field active" :class="{'disabled' : isDisabled}">
        <label for="number" v-text="`Número`"></label>
        <input 
          type="text" 
          name="number" 
          v-model="number.value" 
          :disabled="isDisabled" 
          @focus="inputFocus" 
          @blur="inputBlur($event), validate($event, number.category)"
          :ref="number.category"
          autocomplete="off"
        />
        <!-- <span class="message--invalid text--error" v-if="!number.isValid" v-text="`Número inválido`"></span> -->
      </div>
      <!-- <br> -->
      <div class="related-fields">
        <div class="v__field active" :class="{'disabled' : isDisabled}">
          <label for="city" v-text="`Cidade`"></label>
          <input 
            type="text" 
            name="city" 
            v-model="city.value" 
            :disabled="isDisabled" 
            @focus="inputFocus" 
            @blur="inputBlur($event), validate($event, city.category)"
            :ref="city.category"
            autocomplete="off"
          />
          <!-- <span class="message--invalid text--error" v-if="!city.isValid" v-text="`Cidade inválida`"></span> -->
        </div>
        <div class="v__field active" :class="{'disabled' : isDisabled}">
          <label for="state" v-text="`Estado`"></label>
          <input 
            type="text" 
            name="state"  
            v-model="state.value" 
            :disabled="isDisabled" 
            @focus="inputFocus" 
            @blur="inputBlur($event), validate($event, state.category)"
            :ref="state.category"
            autocomplete="off"
          />
          <!-- <span class="message--invalid text--error" v-if="!state.isValid" v-text="`Estado inválido`"></span> -->
        </div>
      </div>
      <button class="btn white text--default-blue box-shadow my-30 w-100" v-text="`Editar`" @click="editInfos"></button>
    </div>

  </div>
</template>

<script>
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  data() {
    return{
      allInputs: {
        name: "{{ name }}",
        cpf: "{{ cpf }}",
        birthDate:  "{{ birthDate }}",
        sex:  "{{ sex }}",
        mother:  "{{ mother }}",
        father:  "{{ father }}"
      },
      cep:  {
        category: "cep",
        isValid: true,
        value: "05136360"
      },
      address:  {
        category: "address",
        isValid: true,
        value: "Rua Severino Chagas da Silva"
      },
      number:  {
        category: "number",
        isValid: true,
        value: "105 B"
      },
      city:  {
        category: "city",
        isValid: true,
        value: "São Paulo"
      },
      state:  {
        category: "state",
        isValid: true,
        value: "SP"
      },
      isDisabled: true
    }
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    editInfos() {
      this.isDisabled = !this.isDisabled
      if(!this.isDisabled) {
        this.$nextTick(() => this.$refs[`${this.cep.category}`].focus())
      }
    }
  }
}
</script>
