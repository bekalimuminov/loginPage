import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import Toast from "vue-toastification";
import {createPinia} from "pinia";
const pinia = createPinia()
import "vue-toastification/dist/index.css";

const create = createApp(App)
const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}
create.use(Toast,options)
create.use(pinia)
create.use(router)
create.mount('#app')

