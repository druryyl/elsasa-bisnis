import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'
import { initAnalytics, trackPageView } from '@/lib/analytics'

import 'primeicons/primeicons.css'
import '@/assets/styles/main.css'

initAnalytics()

router.afterEach((to) => {
  trackPageView(to.fullPath)
})

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
