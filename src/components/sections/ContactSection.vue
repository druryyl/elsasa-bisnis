<script setup lang="ts">
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
  downloadCapabilityStatement,
} from '@/lib/contact'
import {
  trackCapabilityStatementDownload,
  trackConsultationClick,
  trackWhatsappClick,
} from '@/lib/analytics'

function onConsultationClick(): void {
  trackConsultationClick('contact')
  trackWhatsappClick('contact')
}

function onWhatsappClick(): void {
  trackWhatsappClick('contact')
}

function onDownloadCapability(): void {
  trackCapabilityStatementDownload('contact')
  downloadCapabilityStatement()
}
</script>

<template>
  <section id="kontak" class="contact" aria-labelledby="contact-title">
    <div class="section-container">
      <h2 id="contact-title" class="section-title">
        Mari Diskusikan Tantangan Operasional Perusahaan Anda
      </h2>
      <p class="section-subtitle">
        Ceritakan proses operasional yang ingin Anda perbaiki. Kami siap membantu mengevaluasi
        kebutuhan dan memberikan rekomendasi solusi yang sesuai.
      </p>

      <div class="contact__grid">
        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-whatsapp" />
          </div>
          <div>
            <h3 class="contact__label">WhatsApp</h3>
            <a
              :href="WHATSAPP_URL"
              class="contact__value contact__link"
              target="_blank"
              rel="noopener noreferrer"
              @click="onWhatsappClick"
            >
              {{ CONTACT_PHONE }}
            </a>
          </div>
        </div>

        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-phone" />
          </div>
          <div>
            <h3 class="contact__label">Telepon</h3>
            <a :href="`tel:${CONTACT_PHONE_TEL}`" class="contact__value contact__link">
              {{ CONTACT_PHONE }}
            </a>
          </div>
        </div>

        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-envelope" />
          </div>
          <div>
            <h3 class="contact__label">Email</h3>
            <a :href="`mailto:${CONTACT_EMAIL}`" class="contact__value contact__link">
              {{ CONTACT_EMAIL }}
            </a>
          </div>
        </div>

        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-download" />
          </div>
          <div>
            <h3 class="contact__label">Capability Statement</h3>
            <button type="button" class="contact__value contact__link contact__button" @click="onDownloadCapability">
              Download Capability Statement
            </button>
          </div>
        </div>
      </div>

      <div class="contact__cta">
        <a
          :href="WHATSAPP_URL"
          class="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
          @click="onConsultationClick"
        >
          <i class="pi pi-whatsapp" aria-hidden="true" />
          Jadwalkan Konsultasi
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg);
}

.contact__grid {
  display: grid;
  gap: 1.5rem;
  max-width: 52rem;
  margin: 0 auto 2.5rem;
}

@media (min-width: 640px) {
  .contact__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.contact__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1.5rem 1rem;
  background-color: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
}

.contact__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-navy);
  color: var(--color-gold);
  font-size: 1.25rem;
}

.contact__label {
  margin: 0 0 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.contact__value {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-navy);
}

.contact__link:hover {
  color: var(--color-gold);
  text-decoration: underline;
}

.contact__button {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-navy);
  cursor: pointer;
}

.contact__button:hover {
  color: var(--color-gold);
  text-decoration: underline;
}

.contact__cta {
  display: flex;
  justify-content: center;
}
</style>
