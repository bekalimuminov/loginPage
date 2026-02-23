import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import Toast from "vue-toastification";
import {createPinia} from "pinia";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
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
 create.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
create.use(Toast,options)
create.use(pinia)
create.use(router)
create.mount('#app')

