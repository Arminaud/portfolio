<template>
  <section id="skills" class="w-full py-16 transition-colors duration-300 scroll-mt-16"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
            Expertise
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            Compétences
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Backend & CMS -->
        <div class="rounded-xl shadow-lg p-6 transition-colors duration-300"
          :class="theme === 'dark' ? 'bg-gray-800 shadow-gray-900' : 'bg-white'">
          <h3 class="text-xl font-semibold mb-4 flex items-center" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">
            <svg class="w-6 h-6 mr-2" :class="theme === 'dark' ? 'text-blue-400' : 'text-blue-600'" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
              </path>
            </svg>
            Backend & CMS
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cvData.competences.backend" :key="skill"
              class="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              :class="theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Frontend -->
        <div class="rounded-xl shadow-lg p-6 transition-colors duration-300"
          :class="theme === 'dark' ? 'bg-gray-800 shadow-gray-900' : 'bg-white'">
          <h3 class="text-xl font-semibold mb-4 flex items-center" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">
            <svg class="w-6 h-6 mr-2" :class="theme === 'dark' ? 'text-green-400' : 'text-green-600'" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              </path>
            </svg>
            Frontend
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cvData.competences.frontend" :key="skill"
              class="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              :class="theme === 'dark' ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Mobile -->
        <div class="rounded-xl shadow-lg p-6 transition-colors duration-300"
          :class="theme === 'dark' ? 'bg-gray-800 shadow-gray-900' : 'bg-white'">
          <h3 class="text-xl font-semibold mb-4 flex items-center" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">
            <svg class="w-6 h-6 mr-2" :class="theme === 'dark' ? 'text-purple-400' : 'text-purple-600'" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            Mobile
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cvData.competences.mobile" :key="skill"
              class="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              :class="theme === 'dark' ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
    cvData: Object,
    theme: String
  }
}
</script>