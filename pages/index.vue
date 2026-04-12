<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="container">
          <div class="hero-content text-center">
            <h1 class="hero-title">
              Velkommen til Vesterålen VVS
            </h1>
            <p class="hero-subtitle">
              Din pålitelige partner for profesjonelle VVS-løsninger
            </p>
            <div class="hero-actions">
              <q-btn
                size="xl"
                color="primary"
                label="Utforsk våre tjenester"
                @click="goToBusiness"
                class="hero-btn"
                unelevated
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Info Section -->
    <section class="quick-info">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-4">
            <div class="info-card text-center">
              <q-icon name="build" size="3rem" color="primary" />
              <h3>Ekspert tjenester</h3>
              <p>Profesjonell rørlegger-, varme- og ventilasjonsløsninger</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="info-card text-center">
              <q-icon name="timeline" size="3rem" color="primary" />
              <h3>20+ år</h3>
              <p>Tiår med erfaring i å betjene lokalsamfunnet</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="info-card text-center">
              <q-icon name="support_agent" size="3rem" color="primary" />
              <h3>24/7 støtte</h3>
              <p>Døgnkontinuerlig beredskap for akutte problemer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2>Klar for å lære mer?</h2>
          <p>Oppdag våre omfattende tjenester og hvordan vi kan hjelpe deg</p>
          <q-btn
            size="lg"
            color="white"
            text-color="primary"
            label="Se våre tjenester"
            @click="goToBusiness"
            class="cta-btn"
            unelevated
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content text-center">
          <div class="footer-logo">
            <h3>Vesterålen VVS</h3>
          </div>
          <div class="footer-contact">
            <p>Telefon: +47 123 45 678 | E-post: kontakt@v-vvs.no</p>
            <p>Eksempelveien 123, 0123 Oslo, Norway</p>
          </div>
          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} Vesterålen VVS. Alle rettigheter forbeholdes.</p>
          </div>
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
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 45vh;
  color: var(--white);
}

.hero {
  background: var(--gradient-primary);
}

.hero-background {
  width: 100%;
  padding: 4rem 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

/* Quick Info Section */
.quick-info {
  padding: 4rem 0;
  background: var(--light-bg);
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: var(--primary-color);
  color: var(--white);
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

/* Footer */
.footer {
  background: #2c3e50;
  color: var(--white);
  padding: 3rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-logo h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.footer-contact p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.footer-copyright {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive Design Overrides */
@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-btn,
  .cta-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>