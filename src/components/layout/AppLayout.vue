<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-layout__main">
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-bg);
}

.app-layout__main {
  flex: 1;
  width: 100%;
}
</style>
