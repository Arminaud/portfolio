<template>
  <section id="experience" class="w-full py-16 transition-colors duration-300 scroll-mt-16 overflow-hidden"
    :class="theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            Parcours
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            Expériences
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>

      <!-- Carrousel -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Indicateur de progression (barres) -->
        <div class="flex justify-center space-x-2 mb-8 flex-wrap gap-y-4">
          <button v-for="(exp, index) in cvData.experiences" :key="index" @click="$emit('update-slide', index)"
            class="group focus:outline-none">
            <div class="relative">
              <div class="w-16 md:w-20 h-1 rounded-full transition-all duration-300"
                :class="[
                  currentSlide === index 
                    ? theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                    : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                ]">
              </div>
              <span
                class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
                {{ exp.company }}
              </span>
            </div>
          </button>
        </div>

        <!-- Slides avec hauteur minimale et adaptation automatique -->
        <div class="relative overflow-hidden rounded-2xl">
          <div class="relative transition-all duration-700 ease-in-out"
               :style="'auto'">
            <div v-for="(exp, index) in cvData.experiences" :key="index"
              :ref="el => { if (el) $emit('update:slide-refs', index, el) }"
              class="absolute w-full transition-all duration-700 ease-in-out transform"
              :class="[
                currentSlide === index 
                  ? 'opacity-100 translate-x-0 scale-100 relative' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full scale-95 pointer-events-none' 
                    : 'opacity-0 translate-x-full scale-95 pointer-events-none'
              ]">

              <!-- Carte d'expérience améliorée -->
              <div
                class="rounded-2xl shadow-2xl p-8 transition-colors duration-300 relative overflow-hidden group"
                :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'">

                <!-- Éléments décoratifs -->
                <div class="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg class="w-full h-full" viewBox="0 0 100 100"
                    :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
                    <circle cx="80" cy="20" r="30" fill="none" stroke="currentColor" stroke-width="2" />
                    <circle cx="70" cy="30" r="50" fill="none" stroke="currentColor" stroke-width="1"
                      stroke-dasharray="5 5" />
                  </svg>
                </div>

                <!-- En-tête avec timeline -->
                <div class="flex flex-wrap justify-between items-start mb-6 relative z-10">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl">{{ exp.companyLogo || '🏢' }}</span>
                      <div>
                        <h3 class="text-2xl font-bold" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
                          {{ exp.title }}
                        </h3>
                        <p class="text-lg" :class="theme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
                          {{ exp.company }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Badge de période avec effet de glow -->
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50">
                    </div>
                    <span
                      class="relative px-6 py-2 rounded-full text-sm font-medium inline-block transition-colors duration-300"
                      :class="theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'">
                      {{ exp.period }}
                    </span>
                  </div>
                </div>

                <!-- Description avec animation au hover -->
                <p class="mb-6 text-lg leading-relaxed relative z-10 transform group-hover:translate-x-2 transition-transform duration-300">
                  {{ exp.description }}
                </p>

                <!-- Tâches avec icônes -->
                <div class="mb-6 relative z-10">
                  <h4 class="text-sm font-semibold uppercase tracking-wider mb-3"
                    :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
                    Missions principales
                  </h4>
                  <ul class="space-y-3">
                    <li v-for="(task, taskIndex) in exp.tasks" :key="taskIndex"
                      class="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                      <svg class="w-5 h-5 mt-0.5 flex-shrink-0"
                        :class="theme === 'dark' ? 'text-blue-400' : 'text-blue-600'" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{{ task }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Technologies avec design moderne -->
                <div class="mt-6 relative z-10">
                  <h4 class="text-sm font-semibold uppercase tracking-wider mb-3"
                    :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
                    Technologies utilisées
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in exp.technologies" :key="tech"
                      class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      :class="[
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-purple-900 to-blue-900 text-purple-200 shadow-lg shadow-purple-900/30' 
                          : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 shadow-md'
                      ]">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Numéro de slide décoratif INVERSÉ -->
                <div class="absolute bottom-4 right-4 text-6xl font-black opacity-5"
                  :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
                  {{ String(cvData.experiences.length - index).padStart(2, '0') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation arrows -->
        <button @click="$emit('prev-slide')"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none group"
          :class="theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'">
          <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button @click="$emit('next-slide')"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none group"
          :class="theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'">
          <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Indicateur de slide (points) -->
        <div class="flex justify-center space-x-3 mt-8">
          <button v-for="(exp, index) in cvData.experiences" :key="index" @click="$emit('update-slide', index)"
            class="group focus:outline-none">
            <div class="relative">
              <div class="w-3 h-3 rounded-full transition-all duration-300"
                :class="[
                  currentSlide === index 
                    ? theme === 'dark' ? 'bg-blue-400 scale-125' : 'bg-blue-600 scale-125'
                    : theme === 'dark' ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-300 group-hover:bg-gray-400'
                ]">
              </div>
              <!-- Tooltip au survol -->
              <span
                class="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :class="theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'">
                {{ exp.company }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  props: {
    cvData: Object,
    theme: String,
    currentSlide: Number,
    slideRefs: Array,
    slideHeights: Array
  },
  emits: ['next-slide', 'prev-slide', 'update-slide', 'update:slide-refs']
}
</script>