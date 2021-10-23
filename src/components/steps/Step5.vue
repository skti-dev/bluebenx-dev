<template>
  <div class="step">
    <p class="text--bold mb-10" v-text="`Seus dados foram validados com sucesso!`"></p>
    <p class="text--small text--upper mb-30" v-text="`Aqui estão os dados consultados com base nas informações que você inseriu. Alguns deles você pode editar caso estejam desatualizados.`"></p>
    <form class="step__form" action="#" method="POST" @submit.prevent>
      <p class="text--small text--upper" v-text="`Dados Pessoais`"></p>
      <div class="v__field active disabled" v-if="userInfos.name">
        <label for="name" v-text="`Nome`"></label>
        <input type="text" name="name" v-model="userInfos.name" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled" v-if="userInfos.doc_number">
        <label for="cpf" v-text="`CPF`"></label>
        <input type="text" name="cpf" v-model="userInfos.doc_number" v-mask="userInfos.doc_number.length > 14 ? '##.###.###/####-##' : '###.###.###-##'" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled" v-if="userInfos.birth_date">
        <label for="birth-date" v-text="`Data de Nascimento`"></label>
        <input type="text" name="birth-date" v-model="userInfos.birth_date" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled" v-if="userInfos.sex">
        <label for="sex" v-text="`Sexo`"></label>
        <input type="text" name="sex" v-model="userInfos.sex" disabled="disabled" autocomplete="off" />
      </div>
      <p v-text="`Filiação`" class="text--small text--upper"></p>
      <div class="v__field active disabled" v-if="userInfos.mother_name">
        <label for="mother" v-text="`Mãe`"></label>
        <input type="text" name="mother" v-model="userInfos.mother_name" disabled="disabled" autocomplete="off" />
      </div>
      <div class="v__field active disabled" v-if="userInfos.father_name">
        <label for="father" v-text="`Pai`"></label>
        <input type="text" name="father" v-model="userInfos.father_name" disabled="disabled" autocomplete="off" />
      </div>
      <p class="text--small text--upper my-15" v-text="`Endereço`"></p>
      <InputField
        :customClass="`${isDisabled ? `disabled ${cep.value ? 'active' : ''}` : `${cep.value ? 'active' : ''}`}`"
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
        :customClass="`${isDisabled ? `disabled ${address.value ? 'active' : ''}` : `${address.value ? 'active' : ''}`}`"
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
        :customClass="`${isDisabled ? `disabled ${district.value ? 'active' : ''}` : `${district.value ? 'active' : ''}`}`"
        inputName="district"
        inputType="text"
        :inputRef="district.category"
        labelText="Bairro"
        :inputRequired="true"
        :showError="!district.isValid"
        :inputDisabled="isDisabled"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, district.category)" 
      />
      <InputField
        :customClass="`${isDisabled ? `disabled ${complement.value ? 'active' : ''}` : `${complement.value ? 'active' : ''}`}`"
        inputName="complement"
        inputType="text"
        :inputRef="complement.category"
        labelText="Complemento"
        :inputRequired="false"
        :showError="!complement.isValid"
        :inputDisabled="isDisabled"
        @input-focus="inputFocus" 
        @input-blur="inputBlur($event), validate($event, complement.category)" 
      />
      <InputField 
        :customClass="`${isDisabled ? `disabled ${number.value ? 'active' : ''}` : `${number.value ? 'active' : ''}`}`"
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
      <InputField 
        :customClass="`${isDisabled ? `disabled ${city.value ? 'active' : ''}` : `${city.value ? 'active' : ''}`}`"
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
        :customClass="`${isDisabled ? `disabled ${state.value ? 'active' : ''}` : `${state.value ? 'active' : ''}`}`"
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
      <button class="btn light-gray my-30 w-100" v-text="`Editar`" @click="editInfos"></button>
    </form>

  </div>
</template>

<script>
import { mapGetters } from "vuex"
import InputField from "@/components/input/InputField"
import { inputFieldHandler } from "@/mixins/inputFieldHandler"
import { stepValidationHandler } from "@/mixins/stepValidationHandler"

export default {
  components: { InputField },
  data() {
    return{
      cep:  {
        category: "cep",
        isValid: true,
        value: ""
      },
      address:  {
        category: "address",
        isValid: true,
        value: ""
      },
      number:  {
        category: "number",
        isValid: true,
        value: ""
      },
      city:  {
        category: "city",
        isValid: true,
        value: ""
      },
      state:  {
        category: "state",
        isValid: true,
        value: ""
      },
      district:  {
        category: "district",
        isValid: true,
        value: ""
      },
      complement:  {
        category: "complement",
        isValid: true,
        value: ""
      },
      isDisabled: true
    }
  },
  mounted() {
    this.setAddressValues()
  },
  computed: {
    ...mapGetters({
      userInfos: "getUserInfos"
    })
  },
  mixins: [inputFieldHandler, stepValidationHandler],
  methods: {
    editInfos() {
      this.isDisabled = false
      if(!this.isDisabled) {
        this.$nextTick(() => this.$children[0].$refs[`${this.cep.category}`].focus())
      }
    },
    setAddressValues() {
      try {
        this.cep.value = this.userInfos.zipCode
        this.address.value = this.userInfos.publicPlace
        this.number.value = this.userInfos.number
        this.district.value = this.userInfos.district
        this.complement.value = this.userInfos.complement
        this.city.value = this.userInfos.city
        this.state.value = this.userInfos.state
      }catch(e) {
        console.error("Erro ao definir os valores do endereço do usuário")
        console.error(e)
      }
    }
  }
}
</script>
