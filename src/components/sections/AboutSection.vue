<script setup lang="ts"></script>

<template>
  <section id="tentang-kami" class="about" aria-labelledby="about-title">
    <div class="section-container about__inner">
      <h2 id="about-title" class="section-title">Tentang Kami</h2>

      <div class="about__content">
        <p>
          <strong>Elsasa Business Solutions</strong> adalah perusahaan konsultasi yang membantu
          bisnis memperbaiki dan membangun sistem operasional mereka. Kami percaya bahwa teknologi
          harus mengikuti proses bisnis — bukan sebaliknya.
        </p>
        <p>
          Fokus kami bukan sekadar membuat perangkat lunak, melainkan memahami tantangan operasional
          yang dihadapi perusahaan distributor, grosir, dan UKM, lalu merancang solusi yang
          membuat pekerjaan sehari-hari menjadi lebih efisien dan terkendali.
        </p>
        <p>
          Dengan pendekatan yang kolaboratif dan berorientasi pada kebutuhan bisnis, kami
          mendampingi klien dari tahap pemahaman proses hingga sistem yang siap digunakan dan
          mudah dipelihara.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: var(--section-padding-y) 0;
  background-color: var(--color-bg-subtle);
}

.about__inner {
  max-width: 48rem;
}

.about__content {
  margin-top: 0.5rem;
}

.about__content p {
  margin: 0 0 1.25rem;
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  text-align: center;
}

.about__content p:last-child {
  margin-bottom: 0;
}

.about__content strong {
  color: var(--color-navy);
  font-weight: 600;
}
</style>
