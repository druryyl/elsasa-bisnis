<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollTo } from '@/composables/useScrollTo'
import logoUrl from '@/assets/images/elsasa-logo.png'

const { scrollToSection } = useScrollTo()

const navItems = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Layanan', id: 'layanan' },
  { label: 'Tentang Kami', id: 'tentang-kami' },
  { label: 'Kontak', id: 'kontak' },
]

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleNavClick(sectionId: string) {
  scrollToSection(sectionId)
  closeMenu()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header">
    <div class="section-container site-header__inner">
      <button
        type="button"
        class="site-header__brand"
        aria-label="Kembali ke beranda"
        @click="handleNavClick('beranda')"
      >
        <img
          :src="logoUrl"
          alt="Elsasa Business Solutions"
          class="site-header__logo"
          width="40"
          height="40"
        />
        <span class="site-header__name">Elsasa Business Solutions</span>
      </button>

      <button
        type="button"
        class="site-header__toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav"
        aria-label="Buka menu navigasi"
        @click="toggleMenu"
      >
        <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'" aria-hidden="true" />
      </button>

      <nav
        id="site-nav"
        class="site-header__nav"
        :class="{ 'site-header__nav--open': isMenuOpen }"
        aria-label="Navigasi utama"
      >
        <ul class="site-header__nav-list">
          <li v-for="item in navItems" :key="item.id">
            <button
              type="button"
              class="site-header__nav-link"
              @click="handleNavClick(item.id)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div
      v-if="isMenuOpen"
      class="site-header__overlay"
      aria-hidden="true"
      @click="closeMenu"
    />
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background-color: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
}

.site-header__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  flex-shrink: 0;
}

.site-header__brand:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

.site-header__logo {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}

.site-header__name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-navy);
  line-height: 1.3;
  max-width: 10rem;
}

.site-header__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  color: var(--color-navy);
  font-size: 1.125rem;
}

.site-header__toggle:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.site-header__nav {
  display: none;
}

.site-header__nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem 2rem;
}

.site-header__nav-link {
  background: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.site-header__nav-link:hover {
  color: var(--color-navy);
}

.site-header__nav-link:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
  border-radius: 2px;
}

.site-header__overlay {
  position: fixed;
  inset: var(--header-height) 0 0;
  background-color: rgba(11, 37, 64, 0.3);
}

@media (max-width: 767px) {
  .site-header__nav--open {
    display: block;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(11, 37, 64, 0.1);
  }

  .site-header__nav--open .site-header__nav-list {
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    gap: 0;
  }

  .site-header__nav--open .site-header__nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.875rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .site-header__nav--open .site-header__nav-list li:last-child .site-header__nav-link {
    border-bottom: none;
  }
}

@media (max-width: 479px) {
  .site-header__name {
    display: none;
  }
}

@media (min-width: 768px) {
  .site-header__toggle {
    display: none;
  }

  .site-header__overlay {
    display: none;
  }

  .site-header__nav {
    display: block;
  }

  .site-header__name {
    max-width: none;
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .site-header__name {
    font-size: 1.0625rem;
  }
}
</style>
