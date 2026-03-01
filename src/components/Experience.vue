<template>
  <section v-if="experiences && experiences.length" class="mb-12">
    <h2 class="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2">EXPÉRIENCE</h2>
    <div v-for="(exp, index) in experiences" :key="index" class="mb-8">
      <div class="flex flex-wrap justify-between items-start mb-2">
        <h3 class="text-xl font-semibold">{{ exp.title || 'Titre non spécifié' }}</h3>
        <span class="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">{{ exp.period || 'Période non spécifiée' }}</span>
      </div>
      <p class="text-lg text-blue-600 mb-3">{{ exp.company || 'Entreprise non spécifiée' }}</p>
      <p v-if="exp.description" class="text-gray-700 mb-3">{{ exp.description }}</p>
      <ul v-if="exp.tasks && exp.tasks.length" class="list-disc list-inside text-gray-700 space-y-1">
        <li v-for="(task, taskIndex) in exp.tasks" :key="taskIndex">{{ task }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    experiences: {
      type: Array,
      default: () => []
    }
  }
}
</script>