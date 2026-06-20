export const CONTACT_EMAIL = 'elsasabisnis@gmail.com'
export const CONTACT_PHONE = '+62 878 2221 1676'
export const CONTACT_PHONE_TEL = '+6287822211676'
export const WHATSAPP_NUMBER = '6287822211676'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const WHATSAPP_MESSAGE = `Halo Elsasa Business Solutions.

Saya tertarik mengetahui layanan yang Anda tawarkan dan ingin berkonsultasi mengenai digitalisasi operasional perusahaan kami.

Terima kasih.`

export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const CAPABILITY_STATEMENT_PATH = '/capability-statement.pdf'
export const CAPABILITY_STATEMENT_FILENAME = 'Elsasa-Capability-Statement.pdf'

export function downloadCapabilityStatement(): void {
  const link = document.createElement('a')
  link.href = CAPABILITY_STATEMENT_PATH
  link.download = CAPABILITY_STATEMENT_FILENAME
  link.rel = 'noopener'
  link.click()
}
