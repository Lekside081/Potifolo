<template>
    <section id="Work" class="py-24 relative bg-slate-900/30 border-y border-slate-800/50">
        <UContainer>
            <div class="mb-16 text-center">
                <UIcon name="i-heroicons-computer-desktop" class="w-12 h-12 text-teal-400 mb-4 inline-block" />
                <h2 class="text-4xl md:text-5xl font-bold font-['Outfit'] text-white">Selected <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Works</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
                <p class="text-lg text-slate-400 mt-6 max-w-2xl mx-auto font-light">Some of the noteworthy projects I have built.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                    <div class="h-60 w-full bg-slate-800 relative overflow-hidden">
                        <img src="/imag/Donlekside.PNG" alt="Don-Lekside Project" class="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h3 class="text-2xl font-bold font-['Outfit'] text-white mb-3 group-hover:text-teal-400 transition-colors">Don-Lekside</h3>
                        <p class="text-slate-400 font-light mb-6 flex-1">A responsive platform for staking and increasing daily yield, featuring a seamless user experience and modern architecture.</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Vue.js</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Node.js</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Tailwind CSS</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Vercel</span>
                        </div>
                        
                        <div class="mt-auto">
                            <UButton to="https://donlekside-apkwa99m5-lawal-sodiq-olalekans-projects.vercel.app/" target="_blank" color="white" variant="ghost" class="group/btn hover:bg-teal-500/10 hover:text-teal-400 w-full justify-between font-semibold">
                                View Live Project
                                <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </UButton>
                        </div>
                    </div>
                </div>

                <!-- Project Card 2 -->
                <div class="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                    <div class="h-60 w-full bg-slate-800 relative overflow-hidden">
                        <img src="/imag/Niflare0.PNG" alt="Niflare Project" class="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h3 class="text-2xl font-bold font-['Outfit'] text-white mb-3 group-hover:text-teal-400 transition-colors">Niflare.com</h3>
                        <p class="text-slate-400 font-light mb-6 flex-1">An educational platform designed for teaching people how to transform ideas into reality through technology.</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Vue.js</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">JavaScript</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Tailwind</span>
                        </div>
                        
                        <div class="mt-auto">
                            <UButton to="https://niflare-rixdq3oxy-lawal-sodiq-olalekans-projects.vercel.app/" target="_blank" color="white" variant="ghost" class="group/btn hover:bg-teal-500/10 hover:text-teal-400 w-full justify-between font-semibold">
                                View Live Project
                                <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </UButton>
                        </div>
                    </div>
                </div>

                <!-- Project Card 3 -->
                <div class="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                    <div class="h-60 w-full bg-slate-800 relative overflow-hidden">
                        <img src="/imag/game-show.PNG" alt="Game Show Project" class="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h3 class="text-2xl font-bold font-['Outfit'] text-white mb-3 group-hover:text-teal-400 transition-colors">Color Guessing Game</h3>
                        <p class="text-slate-400 font-light mb-6 flex-1">An interactive web-based game for guessing colors, demonstrating state management and dynamic UI updates.</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8">
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">React</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">Styled Comps</span>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">JavaScript</span>
                        </div>
                        
                        <div class="mt-auto">
                            <UButton to="https://color-guessing-game-v6pr.vercel.app/" target="_blank" color="white" variant="ghost" class="group/btn hover:bg-teal-500/10 hover:text-teal-400 w-full justify-between font-semibold">
                                View Live Project
                                <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </UButton>
                        </div>
                    </div>
                </div>

            </div>
        </UContainer>
    </section>
</template>