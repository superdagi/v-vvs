<template>
  <header class="nav-header">
    <div class="container">
      <nav class="nav-content">
        <div class="logo">
          <img src="/assets/images/v-vvs/v-vvs.png" alt="Vesterålen VVS" class="logo-img">
        </div>
        
        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
          <NuxtLink to="/" class="nav-link">Hjem</NuxtLink>
          <NuxtLink to="/business" class="nav-link">Tjenester</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Prosjekter</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Kontakt</NuxtLink>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="mobile-only">
          <q-btn
            flat
            dense
            :label="currentPageName"
            :icon-right="isMenuOpen ? 'close' : 'menu'"
            @click="toggleMenu"
          />
        </div>
      </nav>
    </div>
    
    <!-- Full Width Mobile Menu -->
    <div 
      v-if="isMenuOpen" 
      class="mobile-menu-backdrop"
      @click="closeMenu"
    >
      <div class="mobile-menu-content">
        <NuxtLink 
          to="/" 
          class="mobile-nav-link"
          @click="closeMenu"
        >
          Hjem
        </NuxtLink>
        <NuxtLink 
          to="/business" 
          class="mobile-nav-link"
          @click="closeMenu"
        >
          Tjenester
        </NuxtLink>
        <NuxtLink 
          to="/projects" 
          class="mobile-nav-link"
          @click="closeMenu"
        >
          Prosjekter
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="mobile-nav-link"
          @click="closeMenu"
        >
          Kontakt
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const isMenuOpen = ref(false)

const currentPageName = computed(() => {
  const routeMap = {
    '/': 'Hjem',
    '/business': 'Tjenester', 
    '/projects': 'Prosjekter',
    '/contact': 'Kontakt'
  }
  return routeMap[route.path] || 'Hjem'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Navigation Header */
.nav-header {
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.logo .logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 1rem;
  transition: var(--transition);
}

.nav-link:hover {
  color: #FF8F00;
}

.nav-link.router-link-active {
  background: #FF8F00;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
}

.nav-link.router-link-active[href="/"] {
  background: #FF8F00;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link-button {
  background: var(--primary-color);
  color: var(--white) !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
}

.nav-link-button:hover {
  background: #1565c0;
  transform: translateY(-1px);
}

.nav-link-button.router-link-active {
  background: #1565c0;
  color: var(--white) !important;
}

/* Mobile/Desktop Visibility */
.desktop-nav {
  display: flex;
}

.mobile-only {
  display: none;
}

.mobile-only .q-btn {
  color: rgba(255, 255, 255, 0.9);
}

.mobile-only .q-btn:hover {
  color: #FF8F00;
}

/* Mobile Menu Styles */
.mobile-menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.mobile-menu-content {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.mobile-nav-link {
  display: block;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  transition: var(--transition);
}

.mobile-nav-link:hover {
  background: rgba(255, 143, 0, 0.1);
  color: var(--primary-color);
}

.mobile-nav-link.router-link-active {
  background: #FF8F00;
  color: white !important;
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav-header {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    height: 50px;
  }
  
  .nav-content {
    padding: 0.4rem 0;
    height: 100%;
    min-height: 50px;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-only {
    display: block;
  }
  
  .logo .logo-img {
    height: 30px;
  }
  
  .nav-link {
    font-size: 0.95rem;
  }
}
</style>