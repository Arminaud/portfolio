<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">FORMATION</h2>
    <div v-if="formation && formation.institution" class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-semibold">{{ formation.institution }}</h3>
      <p class="text-gray-600 mb-3">{{ formation.location || '' }} | {{ formation.period || '' }}</p>
      <div v-for="(diploma, index) in formation.diplomas || []" :key="index" class="mb-2">
        <p class="text-gray-800">
          <span class="font-semibold">{{ diploma.date || '' }} :</span> {{ diploma.title || '' }}
        </p>
      </div>
      <p v-if="formation.description" class="text-gray-600 mt-3 text-sm">{{ formation.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Formation',
  props: {
    formation: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>