<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">COMPÉTENCES</h2>
    
    <div v-if="competences && competences.frameworks && competences.frameworks.length" class="mb-4">
      <h3 class="font-semibold text-lg mb-2">Frameworks & CMS</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in competences.frameworks" :key="skill" 
              class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {{ skill }}
        </span>
      </div>
    </div>

    <div v-if="competences && competences.frontend && competences.frontend.length">
      <h3 class="font-semibold text-lg mb-2">Frontend</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in competences.frontend" :key="skill" 
              class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Competences',
  props: {
    competences: {
      type: Object,
      default: () => ({ frameworks: [], frontend: [] })
    }
  }
}
</script>