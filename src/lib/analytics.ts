type EventLocation = 'hero' | 'contact'

type AnalyticsParams = Record<string, string | number | boolean>

function trackEvent(eventName: string, params?: AnalyticsParams): void {
  if (typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, params)
}

export function trackConsultationClick(location: EventLocation): void {
  trackEvent('consultation_click', {
    event_category: 'engagement',
    event_label: location,
    link_url: 'https://wa.me/6287822211676',
  })
}

export function trackWhatsappClick(location: EventLocation | 'footer'): void {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
    link_url: 'https://wa.me/6287822211676',
    outbound: true,
  })
}

export function trackCapabilityStatementDownload(location: EventLocation): void {
  trackEvent('capability_statement_download', {
    event_category: 'engagement',
    event_label: location,
    file_name: 'Elsasa-Capability-Statement.pdf',
    link_url: '/capability-statement.pdf',
  })
}
