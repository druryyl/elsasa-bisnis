<script setup lang="ts">
const principles = [
  {
    icon: 'pi pi-compass',
    title: 'Memahami proses bisnis sebelum menulis kode',
    description:
      'Kami mendalami cara kerja operasional Anda terlebih dahulu agar solusi yang dibangun benar-benar relevan.',
  },
  {
    icon: 'pi pi-sliders-h',
    title: 'Solusi disesuaikan dengan operasional perusahaan',
    description:
      'Setiap sistem dirancang mengikuti alur kerja yang sudah berjalan, bukan memaksakan cara kerja baru.',
  },
  {
    icon: 'pi pi-wrench',
    title: 'Fokus pada sistem yang mudah dipelihara',
    description:
      'Kami membangun sistem yang dapat dikembangkan dan dirawat dalam jangka panjang oleh tim Anda.',
  },
  {
    icon: 'pi pi-users',
    title: 'Pendekatan kolaboratif bersama pelanggan',
    description:
      'Kami bekerja sama dengan tim internal Anda sepanjang proses agar hasil akhir sesuai kebutuhan bisnis.',
  },
]
</script>

<template>
  <section id="mengapa-kami" class="why-us" aria-labelledby="why-us-title">
    <div class="section-container">
      <h2 id="why-us-title" class="section-title">Mengapa Memilih Elsasa?</h2>

      <div class="why-us__grid">
        <article v-for="principle in principles" :key="principle.title" class="why-us__item">
          <div class="why-us__icon" aria-hidden="true">
            <i :class="principle.icon" />
          </div>
          <div class="why-us__content">
            <h3 class="why-us__title">{{ principle.title }}</h3>
            <p class="why-us__description">{{ principle.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg-subtle);
}

.why-us__grid {
  display: grid;
  gap: 2rem;
  max-width: 56rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .why-us__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 3rem;
  }
}

.why-us__item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.why-us__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--color-gold);
  color: var(--color-navy);
  font-size: 1.125rem;
}

.why-us__title {
  margin: 0 0 0.5rem;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-navy);
  line-height: 1.4;
}

.why-us__description {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}
</style>
