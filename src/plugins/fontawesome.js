import Vue from "vue"
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faArrowRight, faArrowLeft, faCheck, faEye, faEyeSlash, faBell, faQrcode, faWallet, faFileAlt, faHome, faDollarSign, faInfoCircle, faUser, faComments, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronLeft, faArrowRight, faArrowLeft, faCheck, faEye, faEyeSlash, faBell, faQrcode, faWallet, faFileAlt, faHome, faDollarSign, faInfoCircle, faUser, faComments, faEnvelope, faQuestionCircle)

dom.watch()

Vue.component("fa-icon", FontAwesomeIcon)
