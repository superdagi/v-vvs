<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row items-center">
            <div class="col-12 text-center">
              <h1 class="hero-title">
                Ta kontakt med oss i dag!
              </h1>
              <p class="hero-description">
                Ring oss i dag for personlig oppfølging og lokal tilstedeværelse. Vi tilbyr rørleggertjenester til både private og næringskunder. Vesterålen VVS har 200 års erfaring og vi ønsker å være din foretrukne rørlegger.
              </p>
              <div class="hero-actions">
                <a
                  href="tel:+4790171850"
                  class="hero-btn primary"
                >
                  <i class="material-icons">phone</i>
                  Ring oss nå
                </a>
                <a
                  href="mailto:frank@larsenvvs.no"
                  class="hero-btn secondary"
                >
                  <i class="material-icons">email</i>
                  Send e-post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info-section">
      <div class="container">
 
        
        <div class="row justify-center">
          <div class="col-12 col-md-4">
            <div class="contact-card text-center">
              <i class="material-icons contact-icon">phone</i>
              <h3>Ring oss</h3>
              <p class="contact-detail phone-number">(+47) 99 99 00 50</p>
              <a 
                href="tel:+4799990050"
                class="contact-btn"
              >
                <i class="material-icons">phone</i>
                Ring nå
              </a>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="contact-card text-center">
              <i class="material-icons contact-icon">email</i>
              <h3>E-post</h3>
              <p class="contact-detail">post@v-vvs.no</p>
              <a 
                href="mailto:post@v-vvs.no"
                class="contact-btn"
              >
                <i class="material-icons">email</i>
                Send e-post
              </a>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="contact-card text-center">
              <i class="material-icons contact-icon">location_on</i>
              <h3>Her holder vi til</h3>
              <p class="contact-detail">Elterveien 175,8400 Sortland</p>
              <a 
                href="https://maps.google.com/?q=Elterveien+175+8400+Sortland"
                target="_blank"
                class="contact-btn"
              >
                <i class="material-icons">map</i>
                Se kart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title text-white">Klar for å komme i gang?</h2>
          <p class="section-subtitle text-white">Kontakt Vesterålen VVS for profesjonell rørleggerservice
          </p>
        </div>
        
     
      </div>
    </section>

    <!-- Mester Badge Section -->
    <section class="mester-section">
      <div class="container text-center">
        <div class="mester-badge">
          <img src="/assets/images/mester-logo.png" alt="VVS Mester Sertifisert" class="mester-logo">
        </div>
      </div>
    </section>
 
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

// SEO
useSeoMeta({
  title: 'Kontakt oss | Vesterålen VVS',
  ogTitle: 'Kontakt oss | Vesterålen VVS',
  description: 'Ta kontakt med Terje Vesterålen VVS AS for profesjonelle rørleggertjenester. Ring (+47) 90 17 18 50 eller send e-post til frank@larsenvvs.no.',
  ogDescription: 'Ta kontakt med Terje Vesterålen VVS AS for profesjonelle rørleggertjenester. Ring (+47) 90 17 18 50 eller send e-post til frank@larsenvvs.no.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const $q = useQuasar()

// Contact form
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const serviceOptions = [
  'Rørleggertjenester',
  'Varmesystemer',  
  'Ventilasjon',
  'Baderomsrenovering',
  'Akuttjenester',
  'Vedlikeholdskontrakt',
  'Annet'
]

const submitting = ref(false)

// Methods
const submitForm = async () => {
  submitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    $q.notify({
      color: 'positive',
      message: 'Takk! Din melding har blitt sendt. Vi tar kontakt med deg snart.',
      icon: 'check',
      position: 'top'
    })
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Beklager, det oppstod en feil ved sending av meldingen. Prøv igjen.',
      icon: 'error',
      position: 'top'
    })
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: var(--gradient-primary);
  color: var(--white);
  padding: 6rem 0;
}

/* Contact Info Section */
.contact-info-section {
  padding: 5rem 0;
  background: var(--light-bg);
}

.contact-card {
  background: var(--white);
  padding: 1.5rem 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: 100%;
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.contact-icon {
  margin-bottom: 1.5rem;
  font-size: 4rem;
  color: var(--primary-color);
}

.contact-card h3 {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
}

.contact-detail {
  font-size: 1.2rem;
  color: #666;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.phone-number {
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--primary-color);
}

/* Contact Buttons */
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;
}

.contact-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.contact-btn .material-icons {
  font-size: 1.2rem;
}

/* Hero Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.hero-btn {
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

.hero-btn.primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.hero-btn.primary:hover {
  background: transparent;
  color: white;
  border-color: white;
}

.hero-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.hero-btn.secondary:hover {
  background: white;
  color: var(--primary-color);
}

.hero-btn .material-icons {
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}

/* Contact Form Section */
.contact-form-section {
  padding: 5rem 0;
  background: var(--gradient-primary);
}

.contact-form-card {
  padding: 1rem;
}

/* Footer CTA */
.footer-cta {
  background: var(--white);
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-cta h3 {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  color: var(--text-color);
}

.footer-cta p {
  color: #666;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }
  
  .contact-info-section,
  .contact-form-section {
    padding: 3rem 0;
  }
  
  .contact-card {
    padding: 2rem 1rem;
    margin: 0.5rem 0;
  }
  
  .footer-cta {
    text-align: center;
  }
  
  .footer-cta h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .hero-actions .q-btn {
    width: 100%;
    margin: 0.5rem 0;
  }
  
  .footer-cta .q-btn {
    width: 100%;
    margin-top: 1rem;
  }
}

/* Mester Badge Section */
.mester-section {
  padding: 2rem 0;
  background: #f8f9fa;
}

.mester-badge {
  margin: 1rem 0;
}

.mester-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}
</style>