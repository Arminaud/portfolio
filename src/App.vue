<template>
  <div id="app"
    :class="[theme === 'dark' ? 'bg-gray-900' : 'bg-white', 'min-h-screen transition-colors duration-300']">
    <!-- Loader -->
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-50"
      :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
      <div class="text-center">
        <div class="loader ease-linear rounded-full border-8 border-t-8 h-32 w-32 mb-4"
          :class="theme === 'dark' ? 'border-gray-700 border-t-blue-500' : 'border-gray-200 border-t-blue-600'"></div>
        <p :class="theme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Chargement du portfolio...</p>
        <p class="text-sm mt-2" :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">Statut: {{ debugStatus }}</p>
      </div>
    </div>

    <template v-else-if="cvData && cvData.personalInfo">
      <Layout
        :cvData="cvData"
        :theme="theme"
        :currentSlide="currentSlide"
        :slideRefs="slideRefs"
        :slideHeights="slideHeights"
        @toggle-theme="toggleTheme"
        @update:currentSlide="(val) => currentSlide = val"
        @update:slide-refs="updateSlideRef"
        @update:slide-heights="(val) => slideHeights = val"
        @next-slide="nextSlide"
        @prev-slide="prevSlide"
      />
    </template>

    <!-- Message d'erreur -->
    <div v-else-if="error" class="flex justify-center items-center h-screen"
      :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
      <div class="text-center" :class="theme === 'dark' ? 'text-red-400' : 'text-red-600'">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-xl">Erreur de chargement des données</p>
        <p class="mt-2">{{ error }}</p>
        <button @click="fetchData" class="mt-4 px-6 py-2 rounded-lg transition duration-300"
          :class="theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'">
          Réessayer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Layout from './views/layout/Index.vue'

export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {
    const cvData = ref(null)
    const loading = ref(true)
    const error = ref(null)
    const theme = ref('light')
    const currentSlide = ref(0)
    const slideRefs = ref([])
    const slideHeights = ref([])
    const debugStatus = ref('initialisation')

    // Fonctions de navigation du carrousel
    const nextSlide = () => {
      console.log('App: nextSlide appelé')
      if (cvData.value?.experiences) {
        const newValue = (currentSlide.value + 1) % cvData.value.experiences.length
        console.log('App: changement de slide de', currentSlide.value, 'à', newValue)
        currentSlide.value = newValue
      }
    }

    const prevSlide = () => {
      console.log('App: prevSlide appelé')
      if (cvData.value?.experiences) {
        const newValue = (currentSlide.value - 1 + cvData.value.experiences.length) % cvData.value.experiences.length
        console.log('App: changement de slide de', currentSlide.value, 'à', newValue)
        currentSlide.value = newValue
      }
    }

    const updateSlideRef = (index, el) => {
      if (el) {
        slideRefs.value[index] = el
        // Ne pas recalculer les hauteurs ici pour éviter les boucles
      }
    }

    // Fonction pour calculer les hauteurs (appelée manuellement)
    const updateHeights = () => {
      if (slideRefs.value.length > 0) {
        const heights = slideRefs.value.map(ref => ref ? ref.offsetHeight : 500)
        slideHeights.value = heights
        console.log('App: hauteurs mises à jour', heights)
      }
    }

    // Fonction pour détecter le thème du navigateur
    const getBrowserTheme = () => {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Fonction pour charger le thème depuis le localStorage
    const loadTheme = () => {
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (savedTheme) {
        theme.value = savedTheme
      } else {
        theme.value = getBrowserTheme()
      }
      if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    // Fonction pour sauvegarder le thème
    const saveTheme = (newTheme) => {
      localStorage.setItem('portfolio-theme', newTheme)
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    // Fonction pour basculer le thème
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      saveTheme(theme.value)
    }

    // Observer les changements de thème du système
    const setupThemeListener = () => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (e) => {
        if (!localStorage.getItem('portfolio-theme')) {
          theme.value = e.matches ? 'dark' : 'light'
          saveTheme(theme.value)
        }
      }
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }

    const fetchData = async () => {
      debugStatus.value = 'tentative de chargement...'
      loading.value = true
      error.value = null

      try {
        console.log('App: fetchData - tentative de chargement')
        const response = await fetch('/data/cv-data.json')
        console.log('App: fetchData - réponse reçue', response.status)
        debugStatus.value = `réponse ${response.status}`
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log('App: fetchData - données chargées', data)
        debugStatus.value = 'données chargées'
        cvData.value = data
        
        // Calculer les hauteurs après le chargement
        nextTick(() => {
          setTimeout(() => {
            updateHeights()
          }, 300)
        })
      } catch (err) {
        console.error('App: fetchData - erreur', err)
        error.value = err.message
        debugStatus.value = `erreur: ${err.message}`
      } finally {
        console.log('App: fetchData - terminé, loading = false')
        loading.value = false
      }
    }

    onMounted(() => {
      console.log('App: onMounted')
      loadTheme()
      const cleanup = setupThemeListener()
      fetchData()

      return () => {
        cleanup()
      }
    })

    return {
      cvData,
      loading,
      error,
      theme,
      currentSlide,
      slideRefs,
      slideHeights,
      debugStatus,
      toggleTheme,
      fetchData,
      nextSlide,
      prevSlide,
      updateSlideRef
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.loader {
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>