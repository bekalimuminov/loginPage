<script setup>
import { auth } from "../store/auth.js";
import {onMounted, ref} from "vue";
import customApiKey from "../api/use_interseptor.js";
import Paginator from 'primevue/paginator';

const logout = auth()

const token = localStorage.getItem('token')
const data = ref([])
const loading = ref(false)
const limit = ref(1)
const offset = ref(0)
async function getData() {
  try{
    loading.value = true
    const res = await customApiKey.get(`${import.meta.env.VITE_BASE_URL}/Groups?Limit=${limit.value}&offset=${offset.value}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    data.value = res.data
    console.log(data)
  }catch(err){
    console.log(err)
  }finally{
    loading.value = false
  }
}

function currentPage(e){
  offset.value = e.first
  getData()
}

onMounted(() => {
  getData()
})

</script>

<template>
  <router-view/>
  <header class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-4 md:px-6 pt-4 md:pt-6">
    <div
        class="max-w-6xl mx-auto flex justify-between items-center transition-all duration-500 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl md:rounded-[2.5rem] bg-black/50 py-4 md:py-5 px-6 md:px-10"
    >
      <div class="flex items-center gap-3 group cursor-pointer relative z-[110]">
        <div class="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
          B
        </div>
        <span class="text-white font-bold tracking-tighter text-xl transition-colors">
          Bek<span class="text-cyan-500">Master</span>
        </span>
      </div>

      <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" class="hover:text-white transition-colors relative group">
          Asosiy
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
        </a>
        <a href="#" class="hover:text-white transition-colors relative group">
          Loyihalar
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
        </a>
        <a href="#" class="hover:text-white transition-colors relative group">
          Tajriba
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
        </a>
      </nav>

      <div class="flex items-center gap-4 relative z-[110]">
        <button @click="logout.lagout()" class="hidden sm:block bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all text-sm font-bold text-white">
          Lagout
        </button>

        <button class="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
          <span class="w-6 h-0.5 bg-white"></span>
          <span class="w-6 h-0.5 bg-white"></span>
          <span class="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </div>
  </header>
  <Paginator class="mt-[200px]" @page="currentPage"  :rows="limit" :first="offset" :totalRecords="120"></Paginator>
  <p v-if="loading">{{loading}}</p>
  <pre v-else>
    {{data}}
  </pre>
</template>






<style scoped>
/* ANIMATSIYALAR */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-fade-in { animation: fadeIn 1.2s ease-out forwards; }
.animate-blob { animation: blob 10s infinite alternate; }
.animate-gradient { background-size: 200% auto; animation: gradientText 4s linear infinite; }
.delay-300 { animation-delay: 300ms; }

html { scroll-behavior: smooth; }
</style>