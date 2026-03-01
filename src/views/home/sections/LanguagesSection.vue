<template>
  <section id="languages" class="w-full py-16 transition-colors duration-300 scroll-mt-16"
    :class="theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            Communication
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            Langues
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div v-for="lang in cvData.langues" :key="lang.name"
          class="rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl"
          :class="theme === 'dark' ? 'bg-gray-900 text-gray-300 hover:shadow-gray-900' : 'bg-white text-gray-700'">
          <div class="text-4xl mb-3">{{ lang.flag }}</div>
          <h3 class="text-xl font-semibold mb-2" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">{{
            lang.name }}</h3>
          <p class="mb-3">{{ lang.niveau }}</p>
          <div class="w-full rounded-full h-2.5" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'">
            <div class="h-2.5 rounded-full transition-colors duration-300"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'" :style="{ width: lang.percentage + '%' }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LanguagesSection',
  props: {
    cvData: Object,
    theme: String
  }
}
</script>