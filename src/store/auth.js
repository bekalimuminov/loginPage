import { defineStore } from "pinia"
import {router} from "../router/index.js";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();


export const auth = defineStore('auth' , {
   state:() => {
       return {
           token: localStorage.getItem("token") || null
       }
   },
    getters: {
        isAuthenticated: state => !!state.token
    },
    actions: {
       async login (board) {
           const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/Accounts/login`, board);
           if (res.data.token) {
               this.token = res.data.token;
               localStorage.setItem("token", this.token);
               router.push("/")
               toast.success("salom dustim ,  mening sitemiga xush kelibsan");
           }else {
               router.push("/login")
           }
       },

       lagout(){
           this.token = null;
           localStorage.removeItem("token");
           router.push("/login");
           toast.error("yeramas ekansan  🫡🫡")
       }
    }
})