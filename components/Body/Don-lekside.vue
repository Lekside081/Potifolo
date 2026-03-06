<template>
    <section class="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>

        <UContainer class="relative z-10">
            <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                
                <!-- Text Content -->
                <div class="flex-1 text-center md:text-left">
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold font-['Outfit'] tracking-tight mb-6">
                        Hi, I'm <br class="md:hidden" />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Don-Lekside</span> 👋
                    </h1>
                    
                    <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed font-light">
                        Front-end developer passionate about creating beautiful, responsive, and user-friendly web experiences.
                    </p>

                    <!-- Status Pills -->
                    <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
                        <div class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-sm">
                            <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-teal-400" />
                            <span class="text-sm font-medium text-slate-200">Osun, Nigeria</span>
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-sm">
                            <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span class="text-sm font-medium text-slate-200">Available for new projects</span>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="flex items-center justify-center md:justify-start gap-5">
                        <NuxtLink to="https://m.facebook.com/lawal.olamilekan.921/" target="_blank" class="p-3 rounded-full bg-slate-900/80 border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20 text-slate-300 transition-all">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://www.instagram.com/don_lekside2020/" target="_blank" class="p-3 rounded-full bg-slate-900/80 border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20 text-slate-300 transition-all">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://www.linkedin.com/in/sodiq-lawal-936a762aa/" target="_blank" class="p-3 rounded-full bg-slate-900/80 border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20 text-slate-300 transition-all">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://x.com/Lekside08101" target="_blank" class="p-3 rounded-full bg-slate-900/80 border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20 text-slate-300 transition-all">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Image Avatar -->
                <div class="relative shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] group">
                    <div class="absolute inset-0 bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
                    <div class="relative w-full h-full rounded-[2rem] p-3 bg-slate-900/80 border border-slate-700 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
                        <img src="/imag/lekside.jpg" alt="Don-Lekside" class="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>

            </div>
        </UContainer>
    </section>
</template>