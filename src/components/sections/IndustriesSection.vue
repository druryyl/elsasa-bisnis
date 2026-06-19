<script setup lang="ts">
const industries = [
  { icon: 'pi pi-truck', name: 'Distributor' },
  { icon: 'pi pi-shopping-cart', name: 'Wholesale' },
  { icon: 'pi pi-building', name: 'Warehouse' },
  { icon: 'pi pi-heart', name: 'Rumah Sakit' },
  { icon: 'pi pi-shop', name: 'Retail' },
]
</script>

<template>
  <section id="industri" class="industries" aria-labelledby="industries-title">
    <div class="section-container">
      <h2 id="industries-title" class="section-title">Bidang Industri</h2>
      <p class="section-subtitle">
        Kami berpengalaman membantu berbagai jenis bisnis yang membutuhkan sistem operasional yang
        andal.
      </p>

      <div class="industries__grid">
        <article v-for="industry in industries" :key="industry.name" class="industries__card">
          <div class="industries__icon" aria-hidden="true">
            <i :class="industry.icon" />
          </div>
          <h3 class="industries__name">{{ industry.name }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industries {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg);
}

.industries__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .industries__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .industries__grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.industries__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  text-align: center;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.industries__card:hover {
  border-color: var(--color-gold);
  background-color: var(--color-bg);
}

.industries__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--color-navy);
  color: var(--color-gold);
  font-size: 1.375rem;
}

.industries__name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-navy);
}
</style>
