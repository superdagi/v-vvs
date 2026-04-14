<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section flex flex-center column" style="flex: 1; min-height: 60vh; color: var(--white); position: relative;">
      <div class="hero-overlay"></div>
      <div class="full-width q-py-xl" style="position: relative; z-index: 2;">
        <div class="container">
          <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="hero-title q-mb-md">
              Velkommen til Vesterålen VVS
            </h1>
            <p class="hero-subtitle q-mb-lg">
              Din pålitelige partner for profesjonelle VVS-løsninger
            </p>
            <div>
              <q-btn
                size="lg"
                color="primary"
                label="Se våre tjenester"
                @click="goToBusiness"
                class="q-px-xl q-py-md"
                style="font-size: 1.1rem; font-weight: 600;"
                unelevated
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Info Section -->
    <section class="extra-padding" style="background: var(--light-bg);">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-4">
            <div class="text-center q-pa-md">
              <q-icon name="build" size="3rem" color="primary" />
              <h3 class="q-mt-md q-mb-sm">Ekspert tjenester</h3>
              <p>Profesjonell rørlegger-, varme- og ventilasjonsløsninger</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center q-pa-md">
              <q-icon name="timeline" size="3rem" color="primary" />
              <h3 class="q-mt-md q-mb-sm">20+ år</h3>
              <p>Tiår med erfaring i å betjene lokalsamfunnet</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center q-pa-md">
              <q-icon name="support_agent" size="3rem" color="primary" />
              <h3 class="q-mt-md q-mb-sm">24/7 støtte</h3>
              <p>Døgnkontinuerlig beredskap for akutte problemer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="extra-padding" style="background: #4A5568; color: var(--white);">
      <div class="container">
        <div class="text-center relative">
          <h2 class="section-title q-mb-md">Se våre fantastiske prosjekter!</h2>
          <p class="hero-description q-mb-lg" style="opacity: 0.9;">Utforsk løsningene vi har realiseret og la deg inspirere av vårt håndverk</p>
          <q-btn
            size="lg"
            color="primary"
            label="Se våre prosjekter"
            @click="goToProjects"
            class="q-pa-md"
            style="font-size: 1.1rem; font-weight: 600; min-height: 48px;"
            unelevated
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer extra-padding">
      <div class="container">
        <div class="row justify-between items-center q-mb-md">
          <div class="col-4">
            <div class="footer-text-alignment">
              <div class="footer-logo">
                <h3>Vesterålen VVS</h3>
              </div>
              <div class="footer-contact">
                <p>Telefon: (+47) 99 99 00 50</p>
                <p>E-post: post@v-vvs.no</p>
                <p>Elterveien 175, 8400 Sortland</p>
              </div>
            </div>
          </div>
          <div class="col-4 text-center q-pt-md">
            <img src="/assets/images/v-vvs/v-vvs-mester.png" alt="VVS Mester Sertifisert" class="vvs-mester-logo">
          </div>
          <div class="col-4 mester-logo-alignment">
            <img src="/assets/images/mester-logo.png" alt="Mester Sertifisert" class="mester-logo-center">
          </div>
        </div>
        <div class="text-center q-pt-md">
          <p>&copy; {{ currentYear }} Vesterålen VVS. Alle rettigheter forbeholdes.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { navigateTo, useHead, useSeoMeta } from 'nuxt/app';

// SEO - useSeoMeta is auto-imported in Nuxt 3.7+
useSeoMeta({
  title: 'Vesterålen VVS | Profesjonelle VVS-løsninger',
  ogTitle: 'Vesterålen VVS | Profesjonelle VVS-løsninger',
  description: 'Velkommen til Vesterålen VVS - din pålitelige partner for profesjonelle rørlegger-, varme- og ventilasjonssystemer. 24/7 akuttberedskap tilgjengelig.',
  ogDescription: 'Velkommen til Vesterålen VVS - din pålitelige partner for profesjonelle rørlegger-, varme- og ventilasjonssystemer. 24/7 akuttberedskap tilgjengelig.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const currentYear = new Date().getFullYear()

// Methods
const goToBusiness = () => {
  navigateTo('/business')
}

const goToProjects = () => {
  navigateTo('/projects')
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section with Background Image */
.hero-section {
  background-image: url('~/assets/fix-wc.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 32, 44, 0.425) 0%, rgba(45, 55, 72, 0.7) 100%);
  z-index: 1;
}

/* Restore original font styling - using global.css classes */
.landing-page .hero-title {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
}

.landing-page .hero-subtitle {
  font-size: 1.5rem !important;
  font-weight: 300 !important;
  opacity: 0.9 !important;
}

.landing-page .section-title {
  font-size: 2.5rem !important;
  font-weight: 600 !important;
}

.landing-page .hero-description {
  font-size: 1.1rem !important;
  line-height: 1.6 !important;
}

/* Extra padding for sections */
.extra-padding {
  padding: 6rem 0 !important;
}

/* Mester logo alignment */
.mester-logo-alignment {
  text-align: center;
}

@media (min-width: 768px) {
  .mester-logo-alignment {
    text-align: right;
  }
}

/* Footer text alignment */
.footer-text-alignment {
  text-align: center;
}

@media (min-width: 768px) {
  .footer-text-alignment {
    text-align: left;
  }
}

/* Footer */
.footer {
  background: #2c3e50;
  color: var(--white);
  margin-top: auto;
}

.footer-logo h3 {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  white-space: nowrap;
}

.footer-contact p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
  white-space: nowrap;
}

.mester-logo-center {
  height: 420px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.vvs-mester-logo {
  height: 160px;
  width: auto;
  object-fit: contain;
}

/* Responsive Design Overrides */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem !important;
  }
  
  .row {
    flex-direction: column !important;
    text-align: center;
  }
  
  .col-4 {
    width: 100% !important;
    margin-bottom: 1rem;
  }
  
  .footer-logo h3 {
    font-size: 1.5rem;
  }
  
  .footer-contact p {
    font-size: 0.95rem;
  }
  
  .mester-logo-center,
  .vvs-mester-logo {
    height: 280px;
  }
  
  /* Make VVS mester logo smaller on mobile */
  .vvs-mester-logo {
    height: 120px;
  }
}

@media (max-width: 480px) {
  .q-btn {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-logo h3 {
    font-size: 1.3rem;
  }
  
  .footer-contact p {
    font-size: 0.9rem;
  }
  
  .mester-logo-center,
  .vvs-mester-logo {
    height: 100px;
  }
}
</style>