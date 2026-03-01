<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">LOISIRS</h2>
    <div v-if="loisirs && loisirs.length" class="flex flex-wrap gap-3">
      <span v-for="loisir in loisirs" :key="loisir" 
            class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">
        {{ loisir }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Loisirs',
  props: {
    loisirs: {
      type: Array,
      default: () => []
    }
  }
}
</script>