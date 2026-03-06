<template>
    <section class="py-24 relative overflow-hidden">
        <UContainer>
            <div class="mb-16 text-center">
                <UIcon name="i-heroicons-briefcase" class="w-12 h-12 text-teal-400 mb-4 inline-block" />
                <h2 class="text-4xl md:text-5xl font-bold font-['Outfit'] text-white">My <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Experience</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
                <p class="text-lg text-slate-400 mt-6 max-w-2xl mx-auto font-light">A summary of my professional journey and roles.</p>
            </div>

            <div class="max-w-4xl mx-auto">
                <!-- Experience Item -->
                <div class="relative pl-8 md:pl-0">
                    <!-- Timeline Line (mobile only) -->
                    <div class="md:hidden absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-800"></div>

                    <div class="relative group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-teal-500/30 transition-all duration-300">
                        <div class="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div class="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                            <!-- Timeline Dot (mobile) -->
                            <div class="md:hidden absolute -left-[35px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
                                <div class="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                            </div>

                            <!-- Header Section -->
                            <div class="flex items-start gap-4 md:w-1/3">
                                <div class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 shadow-inner">
                                    <UIcon name="i-heroicons-building-office-2" class="w-8 h-8 text-teal-400" />
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold font-['Outfit'] text-white leading-tight">NIFLARE INFOTECH LIMITED</h3>
                                    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-semibold mt-3">
                                        <UIcon name="i-heroicons-calendar" class="w-3.5 h-3.5" />
                                        Jan 2024 - Present
                                    </div>
                                </div>
                            </div>

                            <!-- Details Section -->
                            <div class="md:w-2/3 md:pl-6 md:border-l border-slate-800">
                                <h4 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">Front-End Engineer</h4>
                                
                                <ul class="space-y-3 text-slate-300 font-light">
                                    <li class="flex items-start gap-3">
                                        <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                        <span>Worked on mobile applications using <strong class="text-teal-400 font-medium">Nuxt.js & Next.js</strong> frameworks.</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                        <span>Developed full-scale web applications incorporating JavaScript, Node.js, Vue.js, React, and Tailwind CSS.</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                        <span>Collaborated on end-to-end product development ensuring highly performant interfaces.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>