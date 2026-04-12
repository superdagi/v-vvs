<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row items-center">
            <div class="col-12 col-md-6">
              <h1 class="hero-title">
                Våre prosjekter
              </h1>
              <h2 class="hero-subtitle">
                Se eksempler på vårt arbeid og kvalitet
              </h2>
              <p class="hero-description">
                Fra små reparasjoner til store installasjoner - se hvordan vi har hjulpet våre kunder 
                med profesjonelle VVS-løsninger gjennom årene.
              </p>
            </div>
            <div class="col-12 col-md-6">
              <div class="hero-image">
                <img
                  src="https://picsum.photos/600/400?random=9"
                  alt="VVS-prosjekt i utførelse"
                  class="rounded-borders hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="['filter-btn', { active: selectedCategory === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-section">
      <div class="container">
        <div class="row">
          <div 
            class="col-12 col-md-6 col-lg-4" 
            v-for="project in filteredProjects" 
            :key="project.id"
          >
            <div class="project-card">
              <img
                :src="project.image"
                :alt="project.title"
                class="project-image"
              />
              <div class="project-content">
                <div class="project-category">{{ project.category }}</div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-details">
                  <div class="detail-item">
                    <i class="material-icons">location_on</i>
                    <span>{{ project.location }}</span>
                  </div>
                  <div class="detail-item">
                    <i class="material-icons">schedule</i>
                    <span>{{ project.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="section-title text-white">Imponert av vårt arbeid?</h2>
          <p class="section-subtitle text-white">
            Kontakt oss i dag for å diskutere ditt neste VVS-prosjekt
          </p>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="cta-btn primary">
              <i class="material-icons">phone</i>
              Kontakt oss
            </NuxtLink>
            <NuxtLink to="/business" class="cta-btn secondary">
              <i class="material-icons">build</i>
              Se våre tjenester
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'
import { ref, computed } from 'vue'

// SEO
useSeoMeta({
  title: 'Våre prosjekter | Vesterålen VVS',
  ogTitle: 'Våre prosjekter | Vesterålen VVS',
  description: 'Se eksempler på våre gjennomførte VVS-prosjekter. Fra rørleggerarbeider til baderomsrenoveringer - kvalitet i hver detalj.',
  ogDescription: 'Se eksempler på våre gjennomførte VVS-prosjekter. Fra rørleggerarbeider til baderomsrenoveringer - kvalitet i hver detalj.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

// Categories for filtering
const categories = ref([
  { id: 'alle', name: 'Alle prosjekter' },
  { id: 'rorlegger', name: 'Rørleggerarbeider' },
  { id: 'baderom', name: 'Baderomsrenovering' },
  { id: 'varme', name: 'Varmesystemer' },
  { id: 'ventilasjon', name: 'Ventilasjon' },
  { id: 'nybygg', name: 'Nybygg' }
])

const selectedCategory = ref('alle')

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'Komplett baderomsrenovering',
    description: 'Total renovering av master bedroom med moderne design og høykvalitets VVS-installasjoner.',
    category: 'Baderomsrenovering',
    categoryId: 'baderom',
    location: 'Oslo',
    duration: '3 uker',
    image: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: 2,
    title: 'Vannrør rehabilitering',
    description: 'Utskifting av gamle vannrør i borettslag med moderne PEX-rør system.',
    category: 'Rørleggerarbeider',
    categoryId: 'rorlegger',
    location: 'Sortland',
    duration: '2 uker',
    image: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: 3,
    title: 'Prosjektring Norlaks',
    description: 'Komplett VVS-prosjektering for Norlaks sitt nye produksjonsanlegg med spesialiserte løsninger for fiskeindustrien.',
    category: 'Nybygg',
    categoryId: 'nybygg',
    location: 'Sortland',
    duration: '12 uker',
    image: 'https://picsum.photos/400/300?random=16'
  },
  {
    id: 4,
    title: 'Ventilasjonssystem kontor',
    description: 'Komplett ventilasjonssystem for moderne kontorbygg med energieffektiv løsning.',
    category: 'Ventilasjon',
    categoryId: 'ventilasjon',
    location: 'Svolvær',
    duration: '4 uker',
    image: 'https://picsum.photos/400/300?random=13'
  },
  {
    id: 5,
    title: 'VVS nybygg leiligheter',
    description: 'Komplette VVS-installasjoner i nytt leilighetskompleks med 24 enheter.',
    category: 'Nybygg',
    categoryId: 'nybygg',
    location: 'Leknes',
    duration: '8 uker',
    image: 'https://picsum.photos/400/300?random=14'
  },
  {
    id: 6,
    title: 'Akutt vannskade reparasjon',
    description: 'Rask reparasjon av vannlekkasje og gjenopprettelse av VVS-systemer.',
    category: 'Rørleggerarbeider',
    categoryId: 'rorlegger',
    location: 'Stokmarknes',
    duration: '3 dager',
    image: 'https://picsum.photos/400/300?random=15'
  }
])

// Computed property for filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'alle') {
    return projects.value
  }
  return projects.value.filter(project => project.categoryId === selectedCategory.value)
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: var(--gradient-primary);
  color: var(--white);
  padding: 6rem 0;
}

.hero-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3/2;
  object-fit: cover;
}

/* Filter Section */
.filter-section {
  padding: 3rem 0;
  background: var(--light-bg);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary-color);
  color: white;
}

/* Projects Section */
.projects-section {
  padding: 5rem 0;
}

.project-card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 1.5rem 1rem;
  transition: var(--transition);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.project-category {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-details {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.detail-item .material-icons {
  font-size: 1.2rem;
  color: var(--primary-color);
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: var(--gradient-primary);
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
}

.cta-btn.primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.cta-btn.primary:hover {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn.secondary:hover {
  background: white;
  color: var(--primary-color);
}

.cta-btn .material-icons {
  font-size: 1.3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }
  
  .filter-tabs {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .project-details {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .projects-section {
    padding: 3rem 0;
  }
  
  .project-card {
    margin: 1rem 0.5rem;
  }
}
</style>