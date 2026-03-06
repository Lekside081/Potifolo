<template>
    <section id="Contact" class="py-24 relative overflow-hidden">
        <UContainer>
            
            <!-- CTA Card -->
            <div class="relative max-w-4xl mx-auto group">
                <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div class="relative bg-slate-900 border border-slate-800 p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl overflow-hidden">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <UIcon name="i-heroicons-envelope-open" class="w-16 h-16 text-teal-400 mb-6 inline-block" />
                    
                    <h2 class="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-6">Let's build something <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">great together</span></h2>
                    
                    <p class="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-12">
                        Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <UButton to="mailto:Lawalholamilekan@gmail.com" size="xl" color="teal" variant="solid" class="rounded-full shadow-lg shadow-teal-500/25 px-8 font-semibold w-full sm:w-auto justify-center group/btn">
                            <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Email Me
                        </UButton>
                        
                        <div class="px-8 py-3.5 bg-slate-800/80 border border-slate-700 rounded-full flex items-center gap-3 w-full sm:w-auto justify-center cursor-pointer hover:border-teal-500/50 transition-colors">
                            <UIcon name="i-heroicons-phone" class="w-5 h-5 text-teal-400" />
                            <span class="text-slate-200 font-semibold tracking-wide">+2348168807853</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Section -->
            <footer class="mt-32 pt-10 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div class="flex items-center gap-2">
                    <span class="text-xl font-bold font-['Outfit'] bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">&lt; SS /&gt;</span>
                </div>

                <!-- Copyright -->
                <div class="text-slate-400 text-sm font-light text-center md:text-left">
                    &copy; {{ new Date().getFullYear() }} <span class="text-teal-400/80 font-medium">Don-Lekside-Codes</span>. All rights reserved. <br class="md:hidden" />
                    Designed & Built with ❤️ by Lawal Olalekan.
                </div>

                <!-- Socials -->
                <div class="flex items-center gap-4">
                    <NuxtLink to="https://github.com/Lekside081" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-all hover:scale-110">
                        <UIcon name="i-simple-icons-github" class="w-5 h-5" />
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/sodiq-lawal-936a762aa/" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-all hover:scale-110">
                        <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
                    </NuxtLink>
                    <NuxtLink to="https://x.com/Lekside08101" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-all hover:scale-110">
                        <UIcon name="i-simple-icons-x" class="w-4 h-4" />
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/don_lekside2020/" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-all hover:scale-110">
                        <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
                    </NuxtLink>
                </div>

            </footer>
        </UContainer>
    </section>
</template>