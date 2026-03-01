<template>
  <nav class="sticky top-0 z-40 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-lg'">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="text-xl font-bold" :class="theme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
          {{ name.split(' ')[0] }}
        </div>

        <!-- Menu Desktop et Theme Toggle -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Menu Items -->
          <div class="flex space-x-6">
            <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`" :class="[
              'relative px-3 py-2 transition duration-300 font-medium group',
              activeSection === item.id
                ? theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                : theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
            ]" @click.prevent="scrollToSection(item.id)">
              {{ item.label }}
              <span :class="[
                'absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-300',
                activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
              ]">
              </span>
            </a>
          </div>

          <!-- Theme Toggle Button -->
          <button @click="toggleTheme" class="p-2 rounded-full transition-colors duration-300"
            :class="theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
            <svg v-if="theme === 'dark'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill-rule="evenodd"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <!-- Menu Mobile Button -->
        <div class="flex items-center space-x-3 md:hidden">
          <!-- Theme Toggle Mobile -->
          <button @click="toggleTheme" class="p-2 rounded-full transition-colors duration-300"
            :class="theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'">
            <svg v-if="theme === 'dark'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill-rule="evenodd"
                clip-rule="evenodd"></path>
            </svg>
          </button>

          <!-- Menu Hamburger -->
          <button @click="$emit('toggle-mobile-menu')" class="p-2"
            :class="theme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t"
        :class="theme === 'dark' ? 'border-gray-700' : 'border-gray-200'">
        <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`" :class="[
          'block py-3 px-4 rounded-lg transition duration-300 mb-1',
          activeSection === item.id
            ? theme === 'dark'
              ? 'bg-gray-700 text-blue-400 font-semibold border-l-4 border-blue-400'
              : 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
            : theme === 'dark'
              ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'
              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
        ]" @click.prevent="handleMobileItemClick(item.id)">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String,
    theme: String,
    menuItems: Array,
    activeSection: String,
    mobileMenuOpen: Boolean
  },
  emits: ['toggle-theme', 'scroll-to', 'toggle-mobile-menu', 'mobile-item-click'],
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    },
    scrollToSection(sectionId) {
      this.$emit('scroll-to', sectionId)
    },
    handleMobileItemClick(sectionId) {
      this.$emit('mobile-item-click', sectionId)
    }
  }
}
</script>