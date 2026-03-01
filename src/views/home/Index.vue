<template>
  <div>
    <HeroSection :cvData="cvData" :theme="theme" />
    <AboutSection :cvData="cvData" :theme="theme" />
    <SkillsSection :cvData="cvData" :theme="theme" />
    <ExperienceSection 
      :cvData="cvData" 
      :theme="theme" 
      :currentSlide="currentSlide"
      :slideRefs="slideRefs"
      :slideHeights="slideHeights"
      @next-slide="$emit('next-slide')"
      @prev-slide="$emit('prev-slide')"
      @update-slide="(index) => $emit('update:currentSlide', index)"
      @update:slide-refs="(index, el) => $emit('update:slide-refs', index, el)"
    />
    <EducationSection :cvData="cvData" :theme="theme" />
    <LanguagesSection :cvData="cvData" :theme="theme" />
    <HobbiesSection :cvData="cvData" :theme="theme" />
  </div>
</template>

<script>
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import EducationSection from './sections/EducationSection.vue'
import LanguagesSection from './sections/LanguagesSection.vue'
import HobbiesSection from './sections/HobbiesSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    LanguagesSection,
    HobbiesSection
  },
  props: {
    cvData: Object,
    theme: String,
    currentSlide: Number,
    slideRefs: Array,
    slideHeights: Array
  },
  emits: ['next-slide', 'prev-slide', 'update:currentSlide', 'update:slide-refs', 'update:slide-heights'],
  // Pas de setup nécessaire car on passe directement les événements
}
</script>