<script setup lang="ts"></script>

<template>
  <section id="kontak" class="contact" aria-labelledby="contact-title">
    <div class="section-container">
      <h2 id="contact-title" class="section-title">Hubungi Kami</h2>
      <p class="section-subtitle">
        Hubungi kami untuk mendiskusikan kebutuhan sistem operasional bisnis Anda.
      </p>

      <div class="contact__grid">
        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-envelope" />
          </div>
          <div>
            <h3 class="contact__label">Email</h3>
            <a href="mailto:info@elsasa.id" class="contact__value contact__link">
              info@elsasa.id
            </a>
          </div>
        </div>

        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-phone" />
          </div>
          <div>
            <h3 class="contact__label">Telepon</h3>
            <p class="contact__value">Coming Soon</p>
          </div>
        </div>

        <div class="contact__item">
          <div class="contact__icon" aria-hidden="true">
            <i class="pi pi-map-marker" />
          </div>
          <div>
            <h3 class="contact__label">Alamat</h3>
            <p class="contact__value">Yogyakarta</p>
          </div>
        </div>
      </div>

      <div class="contact__social">
        <h3 class="contact__social-title">Media Sosial</h3>
        <ul class="contact__social-list">
          <li>
            <span class="contact__social-link contact__social-link--placeholder">
              <i class="pi pi-instagram" aria-hidden="true" />
              Instagram
            </span>
          </li>
          <li>
            <span class="contact__social-link contact__social-link--placeholder">
              <i class="pi pi-linkedin" aria-hidden="true" />
              LinkedIn
            </span>
          </li>
          <li>
            <span class="contact__social-link contact__social-link--placeholder">
              <i class="pi pi-whatsapp" aria-hidden="true" />
              WhatsApp
            </span>
          </li>
        </ul>
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
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto 3rem;
}

@media (min-width: 640px) {
  .contact__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
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

.contact__social {
  text-align: center;
}

.contact__social-title {
  margin: 0 0 1.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact__social-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact__social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-navy);
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.contact__social-link--placeholder {
  cursor: default;
  color: var(--color-text-muted);
}

.contact__social-link--placeholder:hover {
  border-color: var(--color-border);
  background-color: transparent;
}
</style>
