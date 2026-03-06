<template>
    <section id="About me" class="py-24 relative overflow-hidden">
        <UContainer>
            <div class="mb-16 text-center">
                <UIcon name="i-heroicons-user" class="w-12 h-12 text-teal-400 mb-4 inline-block" />
                <h2 class="text-4xl md:text-5xl font-bold font-['Outfit'] text-white">About <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Me</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
            </div>

            <!-- Text content centered -->
            <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h3 class="text-3xl font-bold text-white mb-6 font-['Outfit']">Curious about me? Here you have it:</h3>
                
                <div class="space-y-4 text-lg text-slate-300 font-light leading-relaxed">
                    <p>
                        I'm a passionate, <span class="text-teal-400 font-medium">self-proclaimed front-end engineer</span> who specializes in full-stack development (Vue.js & JavaScript). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.
                    </p>
                    <p>
                        I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, 2 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as <span class="text-teal-400 font-medium">Nuxt.js, Vue.js, React, Tailwind CSS</span>, and much more.
                    </p>
                    <p>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development. You can follow my work on <NuxtLink to="https://github.com/Lekside081" target="_blank" class="text-teal-400 hover:text-cyan-400 underline underline-offset-4 font-medium transition-colors">GitHub</NuxtLink>.
                    </p>
                </div>

                <div class="mt-12 w-full">
                    <h4 class="text-xl font-semibold text-white mb-6 font-['Outfit'] flex items-center justify-center gap-2">
                        <UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-yellow-400" />
                        Quick bits about me
                    </h4>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div class="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                            <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-teal-400 shrink-0" />
                            <span class="text-slate-200 font-medium">H.N.D in Computer Science</span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                            <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-teal-400 shrink-0" />
                            <span class="text-slate-200 font-medium">Avid learner</span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                            <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-teal-400 shrink-0" />
                            <span class="text-slate-200 font-medium">Full time freelancer</span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                            <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 text-teal-400 shrink-0" />
                            <span class="text-slate-200 font-medium">Aspiring indie hacker</span>
                        </div>
                    </div>
                </div>

                <div class="mt-12 w-full p-6 bg-teal-500/10 border border-teal-500/20 rounded-2xl relative overflow-hidden group max-w-3xl mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p class="text-teal-100 italic text-center relative z-10 leading-relaxed">
                        "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉"
                    </p>
                </div>
            </div>
        </UContainer>
    </section>
</template>