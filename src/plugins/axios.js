import Vue from "vue"
import axios from "axios"

const apiRequest = axios.create({
  baseURL: "https://sitev.com.br/api",
  timeout: 15000
})

Vue.prototype.$apiRequest = apiRequest
