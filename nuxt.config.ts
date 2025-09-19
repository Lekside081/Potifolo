// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          
          name: 'description',
          content:
            'Frontend Engineer Portfolio – Showcasing skills in Nuxt.js, Vue.js, Tailwind CSS, and modern web development.',
        },
        {
          name: 'keywords',
          content:
            'Frontend Engineer, Portfolio, Web Developer, Nuxt.js, Vue.js, Tailwind CSS, JavaScript',
        },
        { name: 'author', content: 'Your Name' },
        { property: 'og:title', content: 'Frontend Engineer Portfolio' },
        {
          property: 'og:description',
          content:
            'A showcase of projects and skills in web development, specializing in Nuxt.js and modern frontend engineering.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/portfolio-preview.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Frontend Engineer Portfolio' },
        {
          name: 'twitter:description',
          content:
            'Explore my projects and skills as a frontend engineer specializing in Nuxt.js and modern web development.',
        },
        { name: 'twitter:image', content: '/portfolio-preview.png' },
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { 
    plugins: [ 
      tailwindcss(), 
    ], 
  }, 
})
