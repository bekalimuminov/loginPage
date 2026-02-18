<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">

      <div class="mb-10">
        <h2 class="text-2xl font-extrabold text-slate-800 tracking-tight">Xush kelibsiz</h2>
        <p class="text-slate-400 text-sm mt-1 font-medium">Davom etish uchun tizimga kiring</p>
      </div>

      <form class="space-y-5" @submit.prevent="handleLogin()">

        <div class="space-y-1">
          <label class="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Login</label>
          <input
              v-model="number"
              type="text"
              placeholder="Username yoki Email"
              class="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none text-slate-700 placeholder:text-slate-300"
          />
        </div>

        <div class="space-y-1">
          <div class="flex justify-between items-center px-1">
            <label class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Parol</label>
          </div>
          <input
              v-model="password"
              type="text"
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none text-slate-700 placeholder:text-slate-300"
          />
        </div>

        <button type="submit" class="w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-100 transition-all duration-300 active:scale-[0.97] mt-4">Kirish</button>

      </form>

      <div class="mt-8 text-center">
        <a href="#" class="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
          Parolni unutdingizmi?
        </a>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"

const password = ref("")
const number = ref("")
import { auth } from "../store/auth.js";
const userStore = auth()


function handleLogin() {
  userStore.login({
    phoneNumber: number.value,
    password: password.value,
  })
}
</script>