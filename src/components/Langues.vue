<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">LANGUES</h2>
    <div v-if="langues && langues.length" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="lang in langues" :key="lang.name" class="bg-gray-50 p-4 rounded-lg text-center">
        <p class="font-semibold">{{ lang.name || '' }}</p>
        <p class="text-sm text-gray-600">{{ lang.niveau || '' }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Langues',
  props: {
    langues: {
      type: Array,
      default: () => []
    }
  }
}
</script>