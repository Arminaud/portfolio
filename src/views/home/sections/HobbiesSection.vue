<template>
  <section id="hobbies" class="w-full py-16 transition-colors duration-300 scroll-mt-16"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-2">
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
          <span class="text-sm font-medium uppercase tracking-[0.3em]"
            :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
            Passions
          </span>
          <div class="w-12 h-px" :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'"></div>
        </div>
        <h2 class="text-5xl font-bold tracking-wide relative" :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
          <span class="relative">
            Loisirs
            <span class="absolute -top-2 -right-4 w-2 h-2 rounded-full"
              :class="theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'"></span>
          </span>
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        <div v-for="loisir in cvData.loisirs" :key="loisir.name"
          class="rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl group"
          :class="theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:shadow-gray-900' : 'bg-white text-gray-700'">
          <div class="text-4xl mb-3 group-hover:scale-110 transition duration-300">{{ loisir.icon }}</div>
          <p class="font-medium">{{ loisir.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HobbiesSection',
  props: {
    cvData: Object,
    theme: String
  }
}
</script>