<template>
  <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/50 shadow-sm shadow-slate-900/20 py-4">
    <UContainer class="flex items-center justify-between">
      
      <!-- Logo -->
      <NuxtLink to="/" class="text-3xl font-bold font-['Outfit'] bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
        &lt; SS /&gt;
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-10">
        <NuxtLink to="#About me" class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">About</NuxtLink>
        <NuxtLink to="#Work" class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Work</NuxtLink>
        <NuxtLink to="#Testimonials" class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Testimonials</NuxtLink>
        <NuxtLink to="#Contact" class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Contact</NuxtLink>
        
        <UButton to="/Resume" color="teal" variant="solid" class="font-semibold rounded-full px-7 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all">
          CV
        </UButton>
      </nav>

      <!-- Mobile Nav Buttons (CV Only) -->
      <div class="md:hidden flex items-center">
        <UButton to="/Resume" color="teal" variant="solid" size="sm" class="font-semibold rounded-full px-5">
          CV
        </UButton>
      </div>

    </UContainer>
  </header>
</template>

<script setup>
// Navigation state logic removed as per user request
</script>