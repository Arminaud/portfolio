<template>
  <section v-if="about" class="mb-12">
    <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">À PROPOS</h2>
    <p class="text-gray-700 leading-relaxed">{{ about }}</p>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    about: {
      type: String,
      default: ''
    }
  }
}
</script>