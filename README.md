# Portfolio CV - Arminaud Patrick Rakotonirina

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Description

Portfolio professionnel interactif développé avec Vue.js 3, présentant le parcours et les compétences d'Arminaud Patrick Rakotonirina, développeur fullstack avec plus de 7 ans d'expérience. Le site est conçu comme une single-page application (SPA) avec un design moderne, responsive et adaptatif (thème clair/sombre).

### ✨ Fonctionnalités principales

- **Design moderne et épuré** : Interface utilisateur intuitive avec animations fluides
- **Mode sombre/clair** : Bascule automatique selon les préférences système ou manuelle avec persistance
- **Responsive design** : Adaptation parfaite sur mobile, tablette et desktop
- **Navigation fluide** : Scroll smooth avec mise en évidence de la section active
- **Données centralisées** : Toutes les informations dans un fichier JSON facilement modifiable
- **Performance optimisée** : Chargement rapide et transitions CSS optimisées

## 🚀 Technologies utilisées

| Technologie | Version | Utilisation |
|------------|---------|-------------|
| Vue.js | 3.x | Framework JavaScript principal |
| Tailwind CSS | 3.x | Framework CSS utilitaire |
| Vite | 4.x | Bundler et serveur de développement |
| LocalStorage | - | Persistance des préférences utilisateur |

## 📁 Structure du projet

cv-portfolio/
├── public/
│ └── data/
│ └── cv-data.json # Données du CV (modifiable)
├── src/
│ ├── assets/
│ │ └── main.css # Styles principaux Tailwind
│ ├── components/ # Composants Vue (optionnels)
  |── views/
│   ├── layout/
│   │   ├── Index.vue              # Layout principal
│   │   └── partials/
│   │       ├── Header.vue          # Navigation
│   │       └── Footer.vue          # Pied de page
│   └── home/
│       ├── Index.vue               # Page d'accueil
│       └── sections/
│           ├── HeroSection.vue
│           ├── AboutSection.vue
│           ├── SkillsSection.vue
│           ├── ExperienceSection.vue
│           ├── EducationSection.vue
│           ├── LanguagesSection.vue
│           └── HobbiesSection.vue
    ├── router/
│   └── index.js
│ ├── App.vue # Composant principal
│ └── main.js # Point d'entrée
├── index.html # Page HTML principale
├── package.json # Dépendances et scripts
├── tailwind.config.js # Configuration Tailwind
├── postcss.config.js # Configuration PostCSS
├── vite.config.js # Configuration Vite
└── README.md # Documentation


## 🎨 Design et fonctionnalités détaillées

### 🏠 Header / Navigation
- Menu sticky avec effet de shadow
- Détection automatique de la section active pendant le scroll
- Indicateur visuel (ligne bleue) sous l'item actif
- Version mobile avec menu hamburger
- Bouton de bascule de thème (soleil/lune)

### 👤 Hero Section (Bannière)
- Photo de profil avec effet de bordure
- Titre et description courte
- Statistiques clés (années d'expérience, projets, clients, technologies)
- Boutons de contact (téléphone, email, LinkedIn, GitHub)
- Badge de disponibilité

### 📊 Sections principales
1. **À propos** : Description détaillée du profil professionnel
2. **Compétences** : 
   - Frameworks & CMS (étiquettes bleues)
   - Frontend (étiquettes vertes)
3. **Expériences** : 
   - Cartes détaillées avec titre, entreprise, période
   - Liste des tâches principales
   - Technologies utilisées (étiquettes violettes)
4. **Formation** : Diplômes et certifications
5. **Langues** : 
   - Drapeaux et niveaux
   - Barres de progression visuelles
6. **Loisirs** : Icônes animées au survol

### 🌓 Système de thème (Clair/Sombre)

Le portfolio supporte deux modes d'affichage :

**Mode Clair** (`light`)
- Fond gris clair (`bg-gray-50`)
- Cartes blanches avec ombres
- Texte gris foncé
- Accents bleus vifs

**Mode Sombre** (`dark`)
- Fond gris très foncé (`bg-gray-900`)
- Cartes gris foncé (`bg-gray-800`)
- Texte gris clair
- Accents bleus adoucis

**Fonctionnalités du thème** :
- Détection automatique des préférences système (`prefers-color-scheme`)
- Persistance du choix dans `localStorage`
- Bouton de bascule manuelle
- Transition fluide entre les thèmes
- Synchronisation avec les changements de thème système

### 📱 Responsive Design

| Point de rupture | Comportement |
|-----------------|--------------|
| < 768px (mobile) | Menu hamburger, colonnes simples, texte centré |
| 768px - 1024px | Mise en page adaptative, grilles 2 colonnes |
| > 1024px (desktop) | Layout complet, grilles 3-5 colonnes |

## 🔧 Installation et configuration

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn

### Installation

1. **Cloner le projet**
```bash
git clone [url-du-projet]
cd cv-portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

