<template>
  <div class="min-h-screen bg-black text-gray-200 flex items-center justify-center p-6 relative overflow-hidden">

    <!-- Animated background blobs -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.05] rounded-full blur-[120px] -z-10 animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[100px] -z-10 animate-blob-reverse"></div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 -z-10 opacity-[0.03]">
      <svg class="w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>

    <div class="w-full max-w-md animate-fade-in-up">

      <!-- Logo/Brand -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-3 mb-6 group cursor-pointer">
          <div class="w-14 h-14 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-500">
            B
          </div>
          <span class="text-white font-bold tracking-tighter text-2xl">
            Bek<span class="text-cyan-500">Master</span>
          </span>
        </div>
        <h2 class="text-4xl font-black text-white tracking-tighter leading-none">Xush kelibsiz</h2>
        <p class="text-gray-400 text-sm mt-2 font-medium">Davom etish uchun tizimga kiring</p>
      </div>

      <!-- Login Card -->
      <div class="relative group">
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <!-- Main card -->
        <div class="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">

          <form class="space-y-6" @submit.prevent="handleLogin()">

            <!-- Login Input -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4 font-mono">Login</label>
              <div class="relative group/input">
                <div class="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500/50 transition-colors group-focus-within/input:text-cyan-400 pointer-events-none">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <input
                    v-model="number"
                    type="text"
                    placeholder="Username yoki Email"
                    class="w-full pl-14 pr-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none text-white placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-2">
              <div class="flex justify-between items-center px-4">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 font-mono">Parol</label>
                <a href="#" class="text-[10px] text-cyan-400 hover:text-cyan-300 transition-colors font-bold uppercase tracking-wider">Unutdingizmi?</a>
              </div>
              <div class="relative group/input">
                <div class="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500/50 transition-colors group-focus-within/input:text-cyan-400 pointer-events-none">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <input
                    v-model="password"
                    type="password"
                    placeholder="••••••••"
                    class="w-full pl-14 pr-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none text-white placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
                type="submit"
                class="group/btn relative w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-black py-4 rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 active:scale-[0.97] mt-8 overflow-hidden uppercase tracking-tight"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                Kirish
                <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
              <!-- Shimmer effect -->
              <div class="absolute inset-0 -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] bg-white/20 transition-transform duration-700"></div>
            </button>

          </form>

          <!-- Divider -->
          <div class="flex items-center my-8">
            <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          <!-- Footer text -->
          <p class="text-center text-xs text-gray-600 font-medium">
            Hisobingiz yo'qmi?
            <a href="#" class="text-cyan-400 hover:text-cyan-300 font-bold transition-colors ml-1">Ro'yxatdan o'ting</a>
          </p>

        </div>
      </div>

      <!-- Bottom note -->
      <p class="text-center mt-8 text-[10px] text-gray-700 uppercase tracking-[0.3em] font-mono">
        Secure Login Portal
      </p>

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

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes blobReverse {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(-40px, 30px) scale(0.9);
  }
  66% {
    transform: translate(20px, -30px) scale(1.1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-blob {
  animation: blob 12s infinite alternate;
}

.animate-blob-reverse {
  animation: blobReverse 15s infinite alternate;
  animation-delay: 2s;
}

/* Input autofill override */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.03) inset !important;
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>