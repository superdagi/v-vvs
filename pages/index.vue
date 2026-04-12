<template>
  <div class="landing-page">
    <!-- Navigation Header -->
    <header class="nav-header">
      <div class="container">
        <nav class="nav-content">
          <div class="logo">
            <h1>V-VVS</h1>
          </div>
          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/business" class="nav-link">Business</NuxtLink>
            <q-btn
              color="primary"
              label="Contact"
              @click="goToBusiness"
              unelevated
            />
          </div>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="container">
          <div class="hero-content text-center">
            <h1 class="hero-title">
              Welcome to V-VVS
            </h1>
            <p class="hero-subtitle">
              Your trusted partner for professional VVS solutions
            </p>
            <div class="hero-actions">
              <q-btn
                size="xl"
                color="primary"
                label="Explore Our Business"
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
              <h3>Expert Services</h3>
              <p>Professional plumbing, heating, and ventilation solutions</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="info-card text-center">
              <q-icon name="timeline" size="3rem" color="primary" />
              <h3>20+ Years</h3>
              <p>Decades of experience serving the community</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="info-card text-center">
              <q-icon name="support_agent" size="3rem" color="primary" />
              <h3>24/7 Support</h3>
              <p>Emergency services available around the clock</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2>Ready to Learn More?</h2>
          <p>Discover our comprehensive business services and how we can help you</p>
          <q-btn
            size="lg"
            color="white"
            text-color="primary"
            label="View Business Page"
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
            <h3>V-VVS</h3>
          </div>
          <div class="footer-contact">
            <p>Phone: +47 123 45 678 | Email: kontakt@v-vvs.no</p>
            <p>Eksempelveien 123, 0123 Oslo, Norway</p>
          </div>
          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} V-VVS. All rights reserved.</p>
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
  title: 'V-VVS | Professional VVS Solutions',
  ogTitle: 'V-VVS | Professional VVS Solutions',
  description: 'Welcome to V-VVS - your trusted partner for professional plumbing, heating, and ventilation services. 24/7 emergency support available.',
  ogDescription: 'Welcome to V-VVS - your trusted partner for professional plumbing, heating, and ventilation services. 24/7 emergency support available.',
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

/* Navigation */
.nav-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo h1 {
  color: #1976d2;
  font-weight: 700;
  font-size: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1976d2;
}

.nav-link.router-link-active {
  color: #1976d2;
  font-weight: 600;
}

/* Hero Section */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 70vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-background {
  width: 100%;
  padding: 4rem 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.4;
}

.hero-actions {
  margin-top: 2rem;
}

.hero-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

/* Quick Info Section */
.quick-info {
  padding: 4rem 0;
  background: #f8f9fa;
}

.info-card {
  padding: 2rem 1rem;
  background: white;
  border-radius: 12px;
  margin: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card h3 {
  margin: 1rem 0;
  font-size: 1.3rem;
  color: #333;
}

.info-card p {
  color: #666;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: #1976d2;
  color: white;
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
  color: white;
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
  color: #1976d2;
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

.footer-copyright p {
  opacity: 0.7;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .info-card {
    margin: 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-btn,
  .cta-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>