<script setup lang="ts">
const services = [
  {
    icon: 'pi pi-search',
    title: 'Business Process Assessment',
    description:
      'Kami mempelajari alur kerja dan tantangan operasional bisnis Anda untuk mengidentifikasi area yang perlu diperbaiki.',
  },
  {
    icon: 'pi pi-cog',
    title: 'Custom Business Application',
    description:
      'Aplikasi bisnis yang dirancang mengikuti proses operasional perusahaan, bukan sebaliknya.',
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Executive Dashboard',
    description:
      'Ringkasan informasi penting untuk manajemen agar keputusan bisnis dapat diambil dengan lebih cepat dan tepat.',
  },
  {
    icon: 'pi pi-refresh',
    title: 'Legacy System Modernization',
    description:
      'Membantu memperbarui sistem lama agar lebih mudah digunakan dan terintegrasi dengan kebutuhan bisnis saat ini.',
  },
  {
    icon: 'pi pi-bolt',
    title: 'Operational Digitalization',
    description:
      'Mendigitalisasi proses operasional secara bertahap untuk meningkatkan efisiensi tanpa mengganggu bisnis.',
  },
]
</script>

<template>
  <section id="layanan" class="services" aria-labelledby="services-title">
    <div class="section-container">
      <h2 id="services-title" class="section-title">Layanan Kami</h2>
      <p class="section-subtitle">
        Solusi yang kami tawarkan berfokus pada perbaikan proses operasional bisnis Anda.
      </p>

      <div class="card-grid card-grid--2-md card-grid--3-lg services__grid">
        <article v-for="service in services" :key="service.title" class="services__card">
          <div class="services__icon" aria-hidden="true">
            <i :class="service.icon" />
          </div>
          <h3 class="services__title">{{ service.title }}</h3>
          <p class="services__description">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg);
}

.services__grid {
  margin-top: 0;
}

.services__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1.75rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.services__card:hover {
  border-color: var(--color-navy);
  box-shadow: 0 4px 16px rgba(11, 37, 64, 0.1);
}

.services__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: var(--color-navy);
  color: var(--color-gold);
  font-size: 1.25rem;
}

.services__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-navy);
  line-height: 1.4;
}

.services__description {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}
</style>
