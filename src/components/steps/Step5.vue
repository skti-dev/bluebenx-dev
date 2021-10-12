<template>
  <div class="step">
    <p class="text--bold mb-10" v-text="`Seus dados foram validados com sucesso!`"></p>
    <p class="text--small text--upper mb-30" v-text="`Aqui estão os dados consultados com base nas informações que você inseriu. Alguns deles você pode editar caso estejam desatualizados.`"></p>
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--small text--upper" v-text="`Dados Pessoais`"></p>
      <div class="v__field active disabled">
        <label for="name" v-text="`Nome`"></label>
        <input type="text" name="name" v-model="allInputs.name" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="cpf" v-text="`CPF`"></label>
        <input type="text" name="cpf" v-model="allInputs.cpf" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="birth-date" v-text="`Data de Nascimento`"></label>
        <input type="text" name="birth-date" v-model="allInputs.birthDate" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="sex" v-text="`Sexo`"></label>
        <input type="text" name="sex" v-model="allInputs.sex" disabled="disabled" autocomplete="off" />
      </div>
      <p v-text="`Filiação`" class="text--small text--upper"></p>
      <div class="v__field active disabled">
        <label for="mother" v-text="`Mãe`"></label>
        <input type="text" name="mother" v-model="allInputs.mother" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled">
        <label for="father" v-text="`Pai`"></label>
        <input type="text" name="father" v-model="allInputs.father" disabled="disabled" autocomplete="off" />
      </div>
      <p class="text--small text--upper my-15" v-text="`Endereço`"></p>
      <InputField 
        :customClass="`${isDisabled ? 'disabled active' : 'active'}`"
        inputName="cep"
        inputType="text"
        :inputRef="cep.category"
        labelText="CEP"
        maskType="cep"
        :inputRequired="true"
        :showError="!cep.isValid"
        :inputDisabled="isDisabled"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, cep.category)" 
      />
      <InputField 
        :customClass="`${isDisabled ? 'disabled active' : 'active'}`"
        inputName="address"
        inputType="text"
        :inputRef="address.category"
        labelText="Logradouro"
        :inputRequired="true"
        :showError="!address.isValid"
        :inputDisabled="isDisabled"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, address.category)" 
      />
      <InputField 
        :customClass="`${isDisabled ? 'disabled active' : 'active'}`"
        inputName="number"
        inputType="text"
        :inputRef="number.category"
        labelText="Número"
        :inputRequired="false"
        :showError="!number.isValid"
        :inputDisabled="isDisabled"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, number.category)" 
      />
      <div class="related-fields">
        <InputField 
          :customClass="`${isDisabled ? 'disabled active' : 'active'}`"
          inputName="city"
          inputType="text"
          :inputRef="city.category"
          labelText="Cidade"
          :inputRequired="true"
          :showError="!city.isValid"
          :inputDisabled="isDisabled"
          @input-focus="inputFocus" 
          @input-blur="inputBlur($event), validate($event, city.category)" 
        />
        <InputField 
          :customClass="`${isDisabled ? 'disabled active' : 'active'}`"
          inputName="state"
          inputType="text"
          :inputRef="state.category"
          labelText="Estado"
          :inputRequired="true"
          :showError="!state.isValid"
          :inputDisabled="isDisabled"
          @input-focus="inputFocus" 
          @input-blur="inputBlur($event), validate($event, state.category)" 
        />
      </div>
      <button class="btn light-gray my-30 w-100" v-text="`Editar`" @click="editInfos"></button>
    </form>

  </div>
</template>

<script>
import InputField from "@/components/input/InputField"
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  components: { InputField },
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
      this.isDisabled = false
      if(!this.isDisabled) {
        this.$nextTick(() => this.$children[0].$refs[`${this.cep.category}`].focus())
      }
    }
  }
}
</script>
