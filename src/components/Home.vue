<script setup>
import { auth } from "../store/auth.js";
const logout = auth()

// --- DATA ---
const stats = [
  { value: "14", label: "yosh" },
  { value: "5+", label: "loyihalar" },
  { value: "8 oy+", label: "tajriba" },
  { value: "24/7", label: "aloqa" },
]

const technologies = [
  { name: 'Vue.js', icon: '⚡', color: 'text-emerald-400', glow: 'group-hover:shadow-[0_0_30px_-5px_#34d399]' },
  { name: 'Tailwind', icon: '🎨', color: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_30px_-5px_#22d3ee]' },
  { name: 'JavaScript', icon: '🚀', color: 'text-yellow-400', glow: 'group-hover:shadow-[0_0_30px_-5px_#fbbf24]' },
  { name: 'Vite', icon: '⚡', color: 'text-purple-400', glow: 'group-hover:shadow-[0_0_30px_-5px_#a855f7]' }
]

const experiences = [
  { year: '2024 - Hozir', role: 'Senior Developer', company: 'BekMaster Studio' },
  { year: '2023 - 2024', role: 'Freelancer', company: 'Global Projects' },
  { year: '2022 - 2023', role: 'Junior Dev', company: 'StartUp Inc' }
]

</script>

<template>
  <router-view/>
  <header
      class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-4 md:px-6 pt-4 md:pt-6"
  >
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
  <div class="min-h-screen bg-black text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">

    <main class="relative pt-32 md:pt-48 pb-20 px-6">
      <div class="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/[0.05] rounded-full blur-[100px] md:blur-[120px] -z-10 animate-blob"></div>

      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div class="space-y-6 md:space-y-8 text-center lg:text-left animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span class="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase font-mono">Available for work</span>
          </div>

          <h1 class="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
            Men <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-gradient">Bekali</span>
          </h1>

          <p class="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed italic">
            "Liquid Glass" uslubidagi zamonaviy raqamli dunyoni birgalikda quramiz.
          </p>

          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <RouterLink to="/start" class="group relative w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black rounded-2xl transition-all active:scale-95 overflow-hidden text-center">
              <span class="relative z-10 uppercase">Start Project</span>
              <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </RouterLink>

            <RouterLink to="/myStack" class="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-white active:scale-95 text-center">
              My Stack
            </RouterLink>
          </div>
        </div>

        <div class="relative group justify-self-center lg:justify-self-end mt-10 lg:mt-0 animate-fade-in">
          <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-700"></div>
          <div class="relative w-64 h-64 md:w-96 md:h-96 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-2">
            <div class="w-full h-full bg-[#050505] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5">
              <img
                  src="../assets/img.png"
                  alt="Bekali"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="max-w-6xl mx-auto px-6 -mt-10 mb-20 md:mb-32 relative z-20 animate-fade-in-up delay-300">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-10 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-3xl">
        <div v-for="s in stats" :key="s.label" class="text-center py-2 group cursor-default">
          <div class="text-3xl md:text-5xl font-black text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">{{ s.value }}</div>
          <div class="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold mt-2 font-mono">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 mb-20 md:mb-32">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-4 text-white">
        <span class="h-px w-8 md:w-12 bg-cyan-500"></span> Mening Qurollarim
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="(t, i) in technologies" :key="t.name"
             :class="['p-6 md:p-8 bg-white/[0.01] border border-white/5 rounded-3xl transition-all duration-500 group cursor-pointer hover:border-white/20', t.glow]">
          <div class="text-3xl md:text-4xl mb-4 group-hover:rotate-12 group-hover:scale-125 transition-transform">{{ t.icon }}</div>
          <div class="text-base md:text-lg font-bold text-white">{{ t.name }}</div>
          <div :class="['text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1', t.color]">Advanced</div>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-20 md:pb-32">
      <h2 class="text-2xl md:text-3xl font-bold mb-12 md:mb-16 text-center text-white italic underline decoration-cyan-500/50 underline-offset-8">Ish tajribasi</h2>
      <div class="space-y-8 relative">
        <div class="absolute left-2 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent opacity-30 md:-translate-x-1/2"></div>

        <div v-for="(exp, i) in experiences" :key="i"
             class="relative flex flex-col md:flex-row gap-8 group"
             :class="[i % 2 === 0 ? 'md:flex-row-reverse' : '']">

          <div class="absolute left-[6.5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-black border-2 border-cyan-400 rounded-full z-10 top-10 md:top-1/2 md:-translate-y-1/2 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300"></div>

          <div class="pl-8 md:pl-0 md:w-1/2 md:px-10">
            <div class="p-6 md:p-8 bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-[2rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
              <span class="text-cyan-400 font-mono text-[10px] md:text-xs uppercase">{{ exp.year }}</span>
              <h3 class="text-lg md:text-xl font-bold text-white mt-2">{{ exp.role }}</h3>
              <p class="text-sm md:text-base text-gray-400 mt-1 font-medium">{{ exp.company }}</p>
            </div>
          </div>
          <div class="hidden md:block md:w-1/2"></div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-32 relative">
      <div class="absolute -bottom-20 right-0 w-64 h-64 bg-pink-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div class="grid lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-2 space-y-8 animate-fade-in">
          <h2 class="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter italic">
            MEN BILAN <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">BOG'LANING</span>
          </h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Loyihangiz bo'yicha savollaringiz bormi? Instagram orqali yozishingiz yoki quyidagi formani to'ldirishingiz mumkin.
          </p>

          <div class="space-y-4">
            <a href="https://instagram.com/_b_e_k_0_2_1_2_" target="_blank" class="flex items-center gap-4 group cursor-pointer">
              <div class="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-500 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-pink-500 transition-transform group-hover:rotate-12 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <p class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Instagram</p>
                <p class="text-white font-bold text-lg group-hover:text-pink-400 transition-colors">@_b_e_k_0_2_1_2_</p>
              </div>
            </a>

            <div class="flex items-center gap-4 group opacity-70">
              <div class="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <span class="text-emerald-400 text-xl">📍</span>
              </div>
              <div>
                <p class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Manzil</p>
                <p class="text-white font-medium">Uzbekistan</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="p-8 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <form @submit.prevent class="space-y-6 relative z-10">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-4">Ismingiz</label>
                  <input type="text" placeholder="Bekali" class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-800" />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-4">Mavzu</label>
                  <input type="text" placeholder="Loyiha haqida" class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-800" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-4">Xabar</label>
                <textarea rows="4" placeholder="Xabaringizni yozing..." class="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-6 py-4 outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all text-white resize-none placeholder:text-gray-800"></textarea>
              </div>
              <button class="w-full group/btn relative py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all active:scale-95 shadow-xl">
                <span class="relative z-10 flex items-center justify-center gap-2 uppercase tracking-tighter">
                  Xabarni Yuborish 🚀
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
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