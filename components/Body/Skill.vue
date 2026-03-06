<template>
    <section class="py-24 relative bg-slate-900/30 border-y border-slate-800/50">
        <UContainer>
            <div class="mb-16 text-center">
                <UIcon name="i-heroicons-cpu-chip" class="w-12 h-12 text-teal-400 mb-4 inline-block" />
                <h2 class="text-4xl md:text-5xl font-bold font-['Outfit'] text-white">My <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Skills</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
                <p class="text-lg text-slate-400 mt-6 max-w-2xl mx-auto font-light">The languages, frameworks, and tools I use to build modern applications.</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                <!-- Skill Card Template -->
                <div v-for="skill in skills" :key="skill.name" class="group relative flex flex-col items-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-b from-teal-500/0 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div class="w-20 h-20 mb-5 flex items-center justify-center p-3 rounded-xl bg-slate-800/50 border border-slate-800 group-hover:scale-110 group-hover:bg-slate-800 group-hover:border-teal-500/30 transition-all duration-300">
                        <img :src="skill.icon" :alt="skill.name" class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all" />
                    </div>
                    
                    <span class="text-sm md:text-base font-semibold font-['Outfit'] text-slate-300 group-hover:text-teal-400 transition-colors uppercase tracking-wider text-center">{{ skill.name }}</span>
                </div>
            </div>
        </UContainer>
    </section>
</template>

<script setup>
const skills = [
    { name: 'JavaScript', icon: '/imag/Java script.png' },
    { name: 'Vue.js', icon: '/imag/Vuejs-icon.png' },
    { name: 'Nuxt.js', icon: '/imag/Nuxt js.png' },
    { name: 'Node.js', icon: '/imag/node.png' },
    { name: 'Tailwind CSS', icon: '/imag/tailwincss.jfif' },
    { name: 'React', icon: '/imag/ract.png' },
    { name: 'Next.js', icon: '/imag/next.jfif' },
    { name: 'Bootstrap', icon: '/imag/bootstrap.jfif' },
    { name: 'Git', icon: '/imag/gIT.webp' },
]
</script>