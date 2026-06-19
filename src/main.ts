import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import '@/assets/styles/main.css'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

if (import.meta.env.PROD && measurementId) {
  router.afterEach((to) => {
    window.gtag('config', measurementId, {
      page_path: to.fullPath,
    })
  })
}

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
})

app.mount('#app')
