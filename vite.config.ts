import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

function googleTagSnippet(measurementId: string): string {
  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());

gtag('config', '${measurementId}');
</script>`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const measurementId = env.VITE_GA_MEASUREMENT_ID

  return {
    plugins: [
      vue(),
      {
        name: 'inject-google-tag',
        transformIndexHtml(html) {
          if (mode !== 'production' || !measurementId) {
            return html
          }

          return html.replace(
            '<title>Elsasa Business Solutions</title>',
            `<title>Elsasa Business Solutions</title>${googleTagSnippet(measurementId)}`,
          )
        },
      },
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
