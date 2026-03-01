<template>
  <div :class="[theme === 'dark' ? 'bg-gray-900' : 'bg-white', 'min-h-screen transition-colors duration-300']">
    <!-- Header -->
    <Header
      :name="cvData?.personalInfo?.name || ''"
      :theme="theme"
      :menuItems="menuItems"
      :activeSection="activeSection"
      :mobileMenuOpen="mobileMenuOpen"
      @toggle-theme="$emit('toggle-theme')"
      @scroll-to="scrollToSection"
      @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
      @mobile-item-click="handleMobileItemClick"
    />

    <!-- Router View -->
    <router-view
      :cvData="cvData"
      :theme="theme"
      :currentSlide="currentSlide"
      :slideRefs="slideRefs"
      :slideHeights="slideHeights"
      @next-slide="$emit('next-slide')"
      @prev-slide="$emit('prev-slide')"
      @update:currentSlide="(val) => $emit('update:currentSlide', val)"
      @update:slide-refs="(index, el) => $emit('update:slide-refs', index, el)"
      @update:slide-heights="(val) => $emit('update:slide-heights', val)"
    />

    <!-- Footer -->
    <Footer
      :name="cvData?.personalInfo?.name || ''"
      :theme="theme"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  props: {
    cvData: Object,
    theme: String,
    currentSlide: Number,
    slideRefs: Array,
    slideHeights: Array
  },
  emits: ['toggle-theme', 'update:currentSlide', 'update:slide-refs', 'update:slide-heights', 'next-slide', 'prev-slide'],
  setup(props, { emit }) {
    const mobileMenuOpen = ref(false)
    const activeSection = ref('home')
    
    const menuItems = [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'skills', label: 'Compétences' },
      { id: 'experience', label: 'Expériences' },
      { id: 'education', label: 'Formation' },
      { id: 'languages', label: 'Langues' },
      { id: 'hobbies', label: 'Loisirs' }
    ]

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        activeSection.value = sectionId
      }
      mobileMenuOpen.value = false
    }

    const handleMobileItemClick = (sectionId) => {
      scrollToSection(sectionId)
      mobileMenuOpen.value = false
    }

    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSection.value = menuItems[i].id
            break
          }
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      setTimeout(handleScroll, 100)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      mobileMenuOpen,
      activeSection,
      menuItems,
      scrollToSection,
      handleMobileItemClick
    }
  }
}
</script>