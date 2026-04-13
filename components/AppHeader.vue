<template>
  <header class="nav-header">
    <div class="container">
      <nav class="nav-content">
        <div class="logo">
          <h1>Vesterålen VVS</h1>
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
            icon-right="menu"
          >
            <q-menu>
              <q-list style="min-width: 200px">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <NuxtLink to="/" class="mobile-nav-link">Hjem</NuxtLink>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <NuxtLink to="/business" class="mobile-nav-link">Tjenester</NuxtLink>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <NuxtLink to="/projects" class="mobile-nav-link">Prosjekter</NuxtLink>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <NuxtLink to="/contact" class="mobile-nav-link">Kontakt</NuxtLink>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const currentPageName = computed(() => {
  const routeMap = {
    '/': 'Hjem',
    '/business': 'Tjenester', 
    '/projects': 'Prosjekter',
    '/contact': 'Kontakt'
  }
  return routeMap[route.path] || 'Hjem'
})
</script>

<style scoped>
/* Navigation Header */
.nav-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
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

/* Mobile navigation links inside menu */
.mobile-nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  display: block;
  width: 100%;
}

.mobile-nav-link:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-header {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-only {
    display: block;
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .nav-link {
    font-size: 0.95rem;
  }
}
</style>