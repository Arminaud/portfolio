<template>
  <footer class="py-8 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-900 text-white'">
    <div class="container mx-auto px-4 text-center">
      <p class="mb-4">© {{ new Date().getFullYear() }} {{ name }}. Tous droits réservés.</p>
      <p class="text-sm opacity-75">Développé avec Vue.js et Tailwind CSS</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    name: String,
    theme: String
  }
}
</script>