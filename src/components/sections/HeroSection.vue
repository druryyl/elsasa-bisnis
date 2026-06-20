<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'
import logoUrl from '@/assets/images/elsasa-logo.png'

const { scrollToSection } = useScrollTo()

function onDownloadCapability() {
  const link = document.createElement('a')
  link.href = '/capability-statement.pdf'
  link.download = 'Elsasa-Capability-Statement.pdf'
  link.rel = 'noopener'
  link.click()
}
</script>

<template>
  <section id="beranda" class="hero" aria-labelledby="hero-title">
    <div class="section-container hero__inner fade-in">
      <img
        :src="logoUrl"
        alt="Elsasa Business Solutions"
        class="hero__logo"
        width="180"
        height="180"
      />

      <h1 id="hero-title" class="hero__title">
        Sistem Bisnis yang Mengikuti Proses Operasional Anda
      </h1>

      <p class="hero__subtitle">
        Kami membantu perusahaan distributor dan UKM membangun sistem bisnis yang sesuai dengan
        proses operasional mereka, sehingga pekerjaan menjadi lebih efisien dan manajemen
        memperoleh informasi yang dibutuhkan untuk mengambil keputusan.
      </p>

      <div class="hero__actions">
        <button type="button" class="btn btn--primary" @click="onDownloadCapability">
          <i class="pi pi-download" aria-hidden="true" />
          Download Capability Statement
        </button>
        <button type="button" class="btn btn--secondary" @click="scrollToSection('kontak')">
          Hubungi Kami
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: calc(var(--section-padding-y) + 1rem) 0 var(--section-padding-y);
  background-color: var(--color-bg);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 52rem;
}

.hero__logo {
  width: 140px;
  height: auto;
  margin-bottom: 2.5rem;
}

.hero__title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.875rem, 5vw, 2.75rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-navy);
}

.hero__subtitle {
  margin: 0 0 2.5rem;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: 1.75;
  color: var(--color-text-muted);
  max-width: 44rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .hero__logo {
    width: 180px;
  }
}
</style>
