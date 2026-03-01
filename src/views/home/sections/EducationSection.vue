<template>
  <section id="education" class="w-full py-16 transition-colors duration-300 scroll-mt-16"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
            Diplômes
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            Formation
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>
      <div class="rounded-xl shadow-lg p-8 transition-colors duration-300 max-w-4xl mx-auto"
        :class="theme === 'dark' ? 'bg-gray-800 text-gray-300 shadow-gray-900' : 'bg-white text-gray-700'">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">{{ cvData.formation.logo }}</span>
          <div>
            <h3 class="text-xl font-semibold" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">{{
              cvData.formation.institution }}</h3>
            <p :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">{{ cvData.formation.location }} | {{
              cvData.formation.period }}</p>
          </div>
        </div>
        <div class="space-y-4">
          <div v-for="(diploma, index) in cvData.formation.diplomas" :key="index"
            class="border-l-4 pl-4 transition-colors duration-300"
            :class="theme === 'dark' ? 'border-blue-400' : 'border-blue-600'">
            <p class="font-medium">{{ diploma.title }}</p>
            <p class="text-sm" :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">{{ diploma.date }}</p>
          </div>
        </div>
        <p class="mt-6 text-sm" :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">{{
          cvData.formation.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  props: {
    cvData: Object,
    theme: String
  }
}
</script>