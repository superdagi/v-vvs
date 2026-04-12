<template>
  <header class="nav-header">
    <div class="container">
      <nav class="nav-content">
        <div class="logo">
          <h1>Vesterålen VVS</h1>
        </div>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">Hjem</NuxtLink>
          <NuxtLink to="/business" class="nav-link">Tjenester</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Prosjekter</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Kontakt</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No JavaScript needed for simple navigation
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
  padding: 0.5rem 0;
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
  color: var(--primary-color);
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
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
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

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
}
</style>