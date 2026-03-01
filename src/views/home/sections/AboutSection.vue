<template>
  <section id="about" class="w-full py-16 transition-colors duration-300 scroll-mt-16"
    :class="theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            Présentation
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            À Propos
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>
      <div class="rounded-xl shadow-lg p-8 transition-colors duration-300 max-w-4xl mx-auto"
        :class="theme === 'dark' ? 'bg-gray-900 text-gray-300 shadow-gray-900' : 'bg-white text-gray-700'">
        <p class="text-lg leading-relaxed">{{ cvData.personalInfo.about }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    cvData: Object,
    theme: String
  }
}
</script>