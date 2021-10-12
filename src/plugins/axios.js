import Vue from "vue"
import axios from "axios"

const apiRequest = axios.create({
  baseURL: "https://sitev.com.br/api",
  timeout: 3000
})

Vue.prototype.$apiRequest = apiRequest
