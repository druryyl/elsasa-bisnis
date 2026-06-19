<script setup lang="ts">
const problems = [
  {
    icon: 'pi pi-pencil',
    text: 'Proses masih banyak dilakukan secara manual',
  },
  {
    icon: 'pi pi-clock',
    text: 'Laporan membutuhkan waktu lama',
  },
  {
    icon: 'pi pi-sitemap',
    text: 'Informasi tersebar di banyak tempat',
  },
  {
    icon: 'pi pi-box',
    text: 'Stok sulit dipantau',
  },
  {
    icon: 'pi pi-wallet',
    text: 'Piutang sulit dikendalikan',
  },
  {
    icon: 'pi pi-times-circle',
    text: 'Software tidak sesuai dengan proses bisnis',
  },
]
</script>

<template>
  <section id="masalah" class="problems" aria-labelledby="problems-title">
    <div class="section-container">
      <h2 id="problems-title" class="section-title">
        Apakah Bisnis Anda Mengalami Tantangan Berikut?
      </h2>

      <div class="card-grid card-grid--2-md card-grid--3-lg problems__grid">
        <article v-for="problem in problems" :key="problem.text" class="problems__card">
          <div class="problems__icon" aria-hidden="true">
            <i :class="problem.icon" />
          </div>
          <p class="problems__text">{{ problem.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problems {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg-subtle);
}

.problems__grid {
  margin-top: 0.5rem;
}

.problems__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.75rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.problems__card:hover {
  border-color: var(--color-gold);
  box-shadow: 0 4px 12px rgba(11, 37, 64, 0.08);
}

.problems__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: rgba(11, 37, 64, 0.08);
  color: var(--color-navy);
  font-size: 1.25rem;
}

.problems__text {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
}
</style>
