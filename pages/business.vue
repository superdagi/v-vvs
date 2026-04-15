<template>
  <div class="business-page">
    <!-- Hero Section -->
    <HeroSection
      title="Profesjonelle VVS-løsninger"
      subtitle="Med over 20 års erfaring tilbyr vi pålitelige og effektive VVS-løsninger for både bolig- og næringseiendommer."
      :background-image="`url('${heroImage}')`"
      height="40vh"
    />

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-3 q-mb-md">
            <div class="feature-card text-center">
              <div class="feature-content">
                <i class="material-icons feature-icon">schedule</i>
                <h3>24/7 akutt</h3>
                <p>Døgnkontinuerlig beredskap for akutte VVS-problemer</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 q-mb-md">
            <div class="feature-card text-center">
              <div class="feature-content">
                <i class="material-icons feature-icon">verified</i>
                <h3>Sertifiserte eksperter</h3>
                <p>Autoriserte og sertifiserte fagfolk med omfattende erfaring</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 q-mb-md">
            <div class="feature-card text-center">
              <div class="feature-content">
                <i class="material-icons feature-icon">verified_user</i>
                <h3>Kvalitetsgaranti</h3>
                <p>Alt arbeid kommer med omfattende garanti og kvalitetssikring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Våre tjenester</h2>
          <p class="section-subtitle">
            Omfattende VVS-løsninger for alle dine behov
          </p>
        </div>
        
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 q-mb-lg" v-for="service in services" :key="service.id">
            <div class="service-card  ">
              <img
                :src="service.image"
                :alt="service.title"
                class="service-image"
              />
              <div class="service-content">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6">
            <div class="about-content">
              <h2 class="section-title">Om Vesterålen VVS</h2>
              <p class="about-text">
                Etablert i 2026, har Vesterålen VVS som mål å betjene lokalsamfunnet med 
                profesjonelle rørleggertjenester. Vårt team 
                av sertifiserte eksperter er forpliktet til å levere løsninger av høy kvalitet 
                som oppfyller de høyeste industristandardene.
              </p>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Prosjekter fullført</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">20+</div>
                  <div class="stat-label">Års erfaring</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">98%</div>
                  <div class="stat-label">Kundetilfredshet</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="https://picsum.photos/500/400?random=7"
              alt="Vårt profesjonelle team"
              class="rounded-borders about-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section v-if="false" id="contact" class="contact-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title text-white">Kom i kontakt</h2>
          <p class="section-subtitle text-white">
            Klar til å starte ditt neste VVS-prosjekt? Kontakt oss i dag!
          </p>
        </div>
        
        <div  class="row">
          <div class="col-12 col-md-6">
            <div class="contact-info-card">
              <div class="card-content">
                <h3>Kontaktinformasjon</h3>
                <div class="contact-item">
                  <i class="material-icons contact-icon">phone</i>
                  <div>
                    <strong>Telefon:</strong><br>
                    +47 123 45 678
                  </div>
                </div>
                <div class="contact-item">
                  <i class="material-icons contact-icon">email</i>
                  <div>
                    <strong>E-post:</strong><br>
                    kontakt@v-vvs.no
                  </div>
                </div>
                <div class="contact-item">
                  <i class="material-icons contact-icon">location_on</i>
                  <div>
                    <strong>Adresse:</strong><br>
                    Eksempelveien 123<br>
                    0123 Oslo, Norway
                  </div>
                </div>
                <div class="contact-item">
                  <i class="material-icons contact-icon">access_time</i>
                  <div>
                    <strong>Åpningstider:</strong><br>
                    Man-Fre: 08:00 - 16:00<br>
                    Akutt: 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-6">
            <div class="contact-form-card">
              <div class="card-content">
                <h3>Send oss en melding</h3>
                <form @submit.prevent="submitForm" class="contact-form">
                  <div class="form-group">
                    <label for="name">Fullt navn</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      class="form-input"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">E-post</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="form-input"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Telefon</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="form-input"
                    />
                  </div>
                  <div class="form-group">
                    <label for="service">Tjeneste ønsket</label>
                    <select
                      id="service"
                      v-model="form.service"
                      class="form-select"
                    >
                      <option value="">Velg tjeneste...</option>
                      <option v-for="option in serviceOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="message">Melding</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      class="form-textarea"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="submit-btn"
                    :disabled="submitting"
                  >
                    {{ submitting ? 'Sender...' : 'Send melding' }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'
import { ref } from 'vue'
import heroImage from '~/assets/1367981681-2048x2048.jpg';

// SEO - useSeoMeta is auto-imported in Nuxt 3.7+
useSeoMeta({
  title: 'Profesjonelle VVS-tjenester | Vesterålen VVS',
  ogTitle: 'Profesjonelle VVS-tjenester | Vesterålen VVS',
  description: 'Ekspert rørlegger-, varme- og ventilasjonssystemer med over 20 års erfaring. 24/7 akuttberedskap tilgjengelig.',
  ogDescription: 'Ekspert rørlegger-, varme- og ventilasjonssystemer med over 20 års erfaring. 24/7 akuttberedskap tilgjengelig.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

// Services data
const services = ref([
  {
    id: 1,
    title: 'Rørleggertjenester',
    description: 'Komplette rørleggerløsninger inkludert installasjon, reparasjon og vedlikehold av vannsystemer.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 2,
    title: 'Varmesystemer',
    description: 'Installasjon og vedlikehold av varmesystemer, radiatorer og gulvvarme.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 3,
    title: 'Ventilasjon',
    description: 'Profesjonell ventilasjonssystemdesign, installasjon og luftkvalitetsløsninger.',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 4,
    title: 'Baderomsrenovering',
    description: 'Komplette baderomsrenoveringstjenester fra design til endelig installasjon.',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 5,
    title: 'Akuttjenester',
    description: '24/7 akutt rørlegger- og varmetjenester for øyeblikkelige problemer.',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: 6,
    title: 'Vedlikehold',
    description: 'Regelmessige vedlikeholdskontrakter for å holde dine VVS-systemer i effektiv drift.',
    image: 'https://picsum.photos/400/300?random=8'
  }
])

// Contact form
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const serviceOptions = [
  { label: 'Rørleggertjenester', value: 'rorlegger' },
  { label: 'Varmesystemer', value: 'varme' },
  { label: 'Ventilasjon', value: 'ventilasjon' },
  { label: 'Baderomsrenovering', value: 'baderom' },
  { label: 'Akuttjenester', value: 'akutt' },
  { label: 'Vedlikeholdskontrakt', value: 'vedlikehold' },
  { label: 'Annet', value: 'annet' }
]

const submitting = ref(false)

// Methods
const scrollToServices = () => {
  const element = document.getElementById('services')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const submitForm = async () => {
  submitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Takk! Din melding har blitt sendt. Vi tar kontakt med deg snart.')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  } catch (error) {
    alert('Beklager, det oppstod en feil ved sending av meldingen. Prøv igjen.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.business-page {
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

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: var(--light-bg);
}

.feature-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 1rem;
  height: 100%;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-content {
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Services Section */
.services-section {
  padding: 5rem 0;
}

.service-card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 1.5rem 1rem;
  transition: var(--transition);
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.service-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.service-content {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: -40px;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background: var(--light-bg);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
}

.about-image {
  width: 100%;
  height: auto;
  margin-top: 2rem;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  background: var(--gradient-primary);
}

.contact-info-card,
.contact-form-card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 1rem;
  height: 100%;
}

.card-content {
  padding: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--light-bg);
  border-radius: var(--border-radius);
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: #1565c0;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
  background: var(--light-bg);
}

.feature-card {
  height: 100%;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Services Section */
.services-section {
  padding: 5rem 0;
}

.service-card {
  height: 100%;
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-description {
  color: #666;
  line-height: 1.6;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background: var(--light-bg);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
}

.about-image {
  margin-top: 2rem;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  background: var(--gradient-primary);
}

.contact-info-card,
.contact-form-card {
  height: 100%;
}

/* Responsive Design */
@media (max-width: 767px) {
  .services-section .row {
    justify-content: center;
  }
  
  .services-section .col-12 {
    max-width: 400px;
    padding: 0 1rem;
  }
  
  .about-image {
    margin-top: 1rem;
  }
  
  .hero-section {
    padding: 4rem 0;
  }
  
  .features-section,
  .services-section,
  .about-section,
  .contact-section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .services-section .col-12 {
    max-width: 350px;
    padding: 0 1.5rem;
  }
}
</style>