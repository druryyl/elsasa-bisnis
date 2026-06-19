declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

let initialized = false

function isAnalyticsEnabled(): boolean {
  return import.meta.env.PROD && Boolean(measurementId)
}

export function initAnalytics(): void {
  if (!isAnalyticsEnabled() || initialized) {
    return
  }

  initialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export function trackPageView(path: string): void {
  if (!isAnalyticsEnabled() || !initialized) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  })
}
