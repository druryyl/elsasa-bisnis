<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ProblemsSection from '@/components/sections/ProblemsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import WhyUsSection from '@/components/sections/WhyUsSection.vue'
import IndustriesSection from '@/components/sections/IndustriesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="landing">
    <HeroSection />
    <ProblemsSection />
    <ServicesSection />
    <WhyUsSection />
    <IndustriesSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.landing {
  width: 100%;
}
</style>
