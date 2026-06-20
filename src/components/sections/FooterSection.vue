<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from '@/lib/contact'
import { trackWhatsappClick } from '@/lib/analytics'

const { scrollToSection } = useScrollTo()

const navItems = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Layanan', id: 'layanan' },
  { label: 'Tentang Kami', id: 'tentang-kami' },
  { label: 'Kontak', id: 'kontak' },
]

const currentYear = new Date().getFullYear()

function onWhatsappClick(): void {
  trackWhatsappClick('footer')
}
</script>

<template>
  <footer class="footer">
    <div class="section-container footer__inner">
      <div class="footer__brand">
        <p class="footer__name">Elsasa Business Solutions</p>
        <ul class="footer__contact">
          <li>
            <a :href="`mailto:${CONTACT_EMAIL}`" class="footer__contact-link">
              {{ CONTACT_EMAIL }}
            </a>
          </li>
          <li>
            <a :href="`tel:${CONTACT_PHONE_TEL}`" class="footer__contact-link">
              {{ CONTACT_PHONE }}
            </a>
          </li>
          <li>
            <a
              :href="WHATSAPP_URL"
              class="footer__contact-link"
              target="_blank"
              rel="noopener noreferrer"
              @click="onWhatsappClick"
            >
              WhatsApp
            </a>
          </li>
        </ul>
        <p class="footer__copyright">
          &copy; {{ currentYear }} Elsasa Business Solutions. Hak cipta dilindungi.
        </p>
      </div>

      <nav class="footer__nav" aria-label="Navigasi footer">
        <ul class="footer__nav-list">
          <li v-for="item in navItems" :key="item.id">
            <button
              type="button"
              class="footer__nav-link"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2.5rem 0;
  background-color: var(--color-navy);
  color: rgba(255, 255, 255, 0.85);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__name {
  margin: 0 0 0.75rem;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #ffffff;
}

.footer__contact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  justify-content: center;
  list-style: none;
  margin: 0 0 0.75rem;
  padding: 0;
}

@media (min-width: 768px) {
  .footer__contact {
    justify-content: flex-start;
  }
}

.footer__contact-link {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s ease;
}

.footer__contact-link:hover {
  color: var(--color-gold);
}

.footer__copyright {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
}

.footer__nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.footer__nav-link {
  background: none;
  border: none;
  padding: 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s ease;
}

.footer__nav-link:hover {
  color: var(--color-gold);
}

.footer__nav-link:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
  border-radius: 2px;
}
</style>
