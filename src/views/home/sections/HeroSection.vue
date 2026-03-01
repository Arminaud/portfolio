<template>
  <section id="home" class="w-full min-h-screen flex items-center transition-colors duration-300 relative overflow-hidden"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
    
    <!-- Éléments décoratifs de fond -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-64 h-64 rounded-full" 
           :class="theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 rounded-full" 
           :class="theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Contenu texte -->
        <div class="order-2 md:order-1">
          <div class="mb-2 inline-block px-4 py-1 rounded-lg text-sm font-medium"
               :class="theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'">
            👋 Disponible pour des missions
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold mb-4 leading-tight"
              :class="theme === 'dark' ? 'text-white' : 'text-gray-900'">
            <span class="block">Arminaud</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Patrick
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl mb-8" 
             :class="theme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
            {{ cvData.personalInfo.title }}
          </p>
          
          <p class="text-lg mb-10 max-w-lg" 
             :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            {{ cvData.personalInfo.shortBio }}
          </p>

          <!-- Boutons avec border-radius normal -->
          <div class="flex flex-wrap gap-4">
            <a href="/public/data/cv-arminaud-T.pdf" target="_blank" 
               class="group relative px-8 py-4 rounded-lg font-medium overflow-hidden"
               :class="theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'">
              <span class="relative z-10 flex items-center gap-2">
                Télécharger CV
                <svg class="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </span>
            </a>
            
            <a href="#experience" 
               class="px-8 py-4 rounded-lg font-medium transition-all duration-300 border-2"
               :class="theme === 'dark' ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'">
              Voir mon parcours
            </a>
          </div>
        </div>

        <!-- Colonne droite - Photo avec animations 3D -->
        <div class="order-1 md:order-2 flex flex-col items-center perspective-container">
          <!-- Photo avec animations (importées de l'option 3) -->
          <div class="relative transform-style-3d animate-float">
            <!-- Cadre animé -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            
            <!-- Carte principale avec effet 3D -->
            <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-transparent transform transition-all duration-700 hover:rotate-y-12 group"
                 :class="theme === 'dark' ? 'bg-gray-800' : 'bg-white'"
                 style="background: linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;">
              
              <!-- Image de profil - SUPPRESSION DE L'OVERLAY GRADIENT -->
              <div class="absolute inset-0">
                <img :src="cvData.personalInfo.photo" :alt="cvData.personalInfo.name"
                     class="w-full h-full object-cover">
              </div>

              <!-- Badge d'expérience flottant -->
              <div class="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                {{ cvData.stats.yearsExperience }}+
              </div>
            </div>

            <!-- Cartes de statistiques flottantes -->
            <div class="absolute -left-8 top-12 backdrop-blur-lg rounded-xl p-3 shadow-xl transform transition-all duration-500 hover:scale-110 hover:z-20"
                 :class="theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'"
                 :style="{ transform: 'rotateY(10deg) rotateX(5deg) translateZ(20px)' }">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {{ cvData.stats.projectsCompleted }}
                </div>
                <div>
                  <div class="text-xs" :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">Projets</div>
                </div>
              </div>
            </div>

            <div class="absolute -right-8 bottom-12 backdrop-blur-lg rounded-xl p-3 shadow-xl transform transition-all duration-500 hover:scale-110 hover:z-20"
                 :class="theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'"
                 :style="{ transform: 'rotateY(-10deg) rotateX(5deg) translateZ(20px)' }">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                  {{ cvData.stats.happyClients }}
                </div>
                <div>
                  <div class="text-xs" :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">Clients</div>
                </div>
              </div>
            </div>

            <!-- Badge flottant "Disponible" -->
            <div class="absolute -bottom-4 -right-4 backdrop-blur-lg rounded-xl shadow-xl p-3 flex items-center gap-2"
                 :class="theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium" :class="theme === 'dark' ? 'text-gray-300' : 'text-gray-700'">Disponible</span>
            </div>
          </div>

          <!-- Icônes de contact en bas de la photo -->
          <div class="flex justify-center gap-4 mt-8">
            <!-- Email -->
            <a :href="`mailto:${cvData.personalInfo.email}`" 
               class="p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
               :class="theme === 'dark' ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-white text-blue-600 hover:bg-gray-100 shadow-md'"
               :title="cvData.personalInfo.email">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>

            <!-- WhatsApp -->
            <a :href="`https://wa.me/${cvData.personalInfo.phone.replace(/[^0-9]/g, '')}`" target="_blank"
               class="p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
               :class="theme === 'dark' ? 'bg-gray-800 text-green-400 hover:bg-gray-700' : 'bg-white text-green-600 hover:bg-gray-100 shadow-md'"
               :title="'WhatsApp: ' + cvData.personalInfo.phone">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.45-1.272.61-1.447c.159-.175.346-.219.462-.219l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.289.072.39-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a :href="cvData.socialLinks.linkedin" target="_blank"
               class="p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
               :class="theme === 'dark' ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-white text-blue-600 hover:bg-gray-100 shadow-md'"
               title="LinkedIn">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <!-- Ligne de contact alternative (téléphone) -->
          <div class="text-center mt-4">
            <a :href="`tel:${cvData.personalInfo.phone}`" 
               class="text-sm font-mono hover:underline"
               :class="theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'">
              {{ cvData.personalInfo.phone }}
            </a>
          </div>
        </div>
      </div>

      <!-- Stats en bas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        <div v-for="(stat, index) in stats" :key="index" 
             class="text-center group">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {{ stat.value }}
          </div>
          <div class="text-sm uppercase tracking-wider"
               :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    cvData: Object,
    theme: String
  },
  computed: {
    stats() {
      return [
        { value: this.cvData.stats.yearsExperience + '+', label: 'Ans d\'exp.' },
        { value: this.cvData.stats.projectsCompleted + '+', label: 'Projets' },
        { value: this.cvData.stats.happyClients + '+', label: 'Clients' },
        { value: this.cvData.stats.technologies + '+', label: 'Technos' }
      ]
    }
  }
}
</script>

<style scoped>
/* Styles pour les animations 3D */
.perspective-container {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

/* Animation de flottement */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-20px) rotateY(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Rotation 3D au hover - conserve uniquement la rotation sans overlay */
.hover\:rotate-y-12:hover {
  transform: rotateY(12deg) rotateX(5deg) scale(1.02);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.3);
}

/* Transition pour les éléments flottants */
.hover\:scale-110:hover {
  transform: scale(1.1) translateZ(30px);
}

/* Animation de pulse pour le loader et le badge */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Ajout d'une transition douce pour la carte photo */
.photo-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Assurer que les SVG sont bien affichés */
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>