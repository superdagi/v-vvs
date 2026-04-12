<template>
  <div class="business-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row items-center">
            <div class="col-12 col-md-6">
              <h1 class="hero-title">
                Professional VVS Solutions
              </h1>
              <h2 class="hero-subtitle">
                Expert plumbing, heating, and ventilation services
              </h2>
              <p class="hero-description">
                With over 20 years of experience, we provide reliable and efficient 
                VVS solutions for both residential and commercial properties.
              </p>
              <div class="hero-actions">
                <q-btn
                  unelevated
                  size="lg"
                  color="primary"
                  label="Get Quote"
                  class="q-mr-md"
                  @click="scrollToContact"
                />
                <q-btn
                  outline
                  size="lg"
                  color="primary"
                  label="Our Services"
                  @click="scrollToServices"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="hero-image">
                <q-img
                  src="/api/placeholder/600/400"
                  alt="VVS Professional at work"
                  class="rounded-borders"
                  ratio="3/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="row q-gutter-lg justify-center">
          <div class="col-12 col-md-3">
            <q-card class="feature-card text-center">
              <q-card-section>
                <q-icon name="schedule" size="3rem" color="primary" />
                <h3>24/7 Emergency</h3>
                <p>Round-the-clock emergency services for urgent VVS issues</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-3">
            <q-card class="feature-card text-center">
              <q-card-section>
                <q-icon name="verified" size="3rem" color="primary" />
                <h3>Certified Experts</h3>
                <p>Licensed and certified professionals with extensive experience</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-3">
            <q-card class="feature-card text-center">
              <q-card-section>
                <q-icon name="guarantee" size="3rem" color="primary" />
                <h3>Quality Guarantee</h3>
                <p>All work comes with comprehensive warranty and quality assurance</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">
            Comprehensive VVS solutions for all your needs
          </p>
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6 col-lg-4" v-for="service in services" :key="service.id">
            <q-card class="service-card full-height">
              <q-img
                :src="service.image"
                :alt="service.title"
                height="200px"
                class="service-image"
              />
              <q-card-section>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Learn More" />
              </q-card-actions>
            </q-card>
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
              <h2 class="section-title">About V-VVS</h2>
              <p class="about-text">
                Established in 2004, V-VVS has been serving the community with 
                professional plumbing, heating, and ventilation services. Our team 
                of certified experts is committed to delivering high-quality solutions 
                that meet the highest industry standards.
              </p>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">20+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">98%</div>
                  <div class="stat-label">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <q-img
              src="/api/placeholder/500/400"
              alt="Our professional team"
              class="rounded-borders about-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title text-white">Get In Touch</h2>
          <p class="section-subtitle text-white">
            Ready to start your next VVS project? Contact us today!
          </p>
        </div>
        
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="contact-info-card">
              <q-card-section>
                <h3>Contact Information</h3>
                <div class="contact-item">
                  <q-icon name="phone" color="primary" size="1.5rem" />
                  <div>
                    <strong>Phone:</strong><br>
                    +47 123 45 678
                  </div>
                </div>
                <div class="contact-item">
                  <q-icon name="email" color="primary" size="1.5rem" />
                  <div>
                    <strong>Email:</strong><br>
                    kontakt@v-vvs.no
                  </div>
                </div>
                <div class="contact-item">
                  <q-icon name="location_on" color="primary" size="1.5rem" />
                  <div>
                    <strong>Address:</strong><br>
                    Eksempelveien 123<br>
                    0123 Oslo, Norway
                  </div>
                </div>
                <div class="contact-item">
                  <q-icon name="access_time" color="primary" size="1.5rem" />
                  <div>
                    <strong>Business Hours:</strong><br>
                    Mon-Fri: 08:00 - 16:00<br>
                    Emergency: 24/7
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-12 col-md-6">
            <q-card class="contact-form-card">
              <q-card-section>
                <h3>Send us a message</h3>
                <q-form @submit="submitForm" class="contact-form">
                  <q-input
                    v-model="form.name"
                    label="Full Name"
                    outlined
                    class="q-mb-md"
                    :rules="[val => !!val || 'Name is required']"
                  />
                  <q-input
                    v-model="form.email"
                    label="Email"
                    type="email"
                    outlined
                    class="q-mb-md"
                    :rules="[val => !!val || 'Email is required']"
                  />
                  <q-input
                    v-model="form.phone"
                    label="Phone"
                    outlined
                    class="q-mb-md"
                  />
                  <q-select
                    v-model="form.service"
                    :options="serviceOptions"
                    label="Service Needed"
                    outlined
                    class="q-mb-md"
                  />
                  <q-input
                    v-model="form.message"
                    label="Message"
                    type="textarea"
                    outlined
                    rows="3"
                    class="q-mb-md"
                    :rules="[val => !!val || 'Message is required']"
                  />
                  <q-btn
                    type="submit"
                    color="primary"
                    label="Send Message"
                    size="lg"
                    class="full-width"
                    :loading="submitting"
                  />
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

// SEO - useSeoMeta is auto-imported in Nuxt 3.7+
useSeoMeta({
  title: 'Professional VVS Services | V-VVS',
  ogTitle: 'Professional VVS Services | V-VVS',
  description: 'Expert plumbing, heating, and ventilation services with over 20 years of experience. 24/7 emergency services available.',
  ogDescription: 'Expert plumbing, heating, and ventilation services with over 20 years of experience. 24/7 emergency services available.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const $q = useQuasar()

// Services data
const services = ref([
  {
    id: 1,
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions including installation, repair, and maintenance of water systems.',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Heating Systems',
    description: 'Installation and maintenance of heating systems, radiators, and underfloor heating.',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Ventilation',
    description: 'Professional ventilation system design, installation, and air quality solutions.',
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Bathroom Renovation',
    description: 'Complete bathroom renovation services from design to final installation.',
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Emergency Services',
    description: '24/7 emergency plumbing and heating services for urgent issues.',
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    title: 'Maintenance',
    description: 'Regular maintenance contracts to keep your VVS systems running efficiently.',
    image: '/api/placeholder/400/300'
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
  'Plumbing Services',
  'Heating Systems',  
  'Ventilation',
  'Bathroom Renovation',
  'Emergency Services',
  'Maintenance Contract',
  'Other'
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
    
    $q.notify({
      color: 'positive',
      message: 'Thank you! Your message has been sent successfully.',
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
      message: 'Sorry, there was an error sending your message. Please try again.',
      icon: 'error',
      position: 'top'
    })
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
}

.hero-content .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  margin-bottom: 2rem;
}

.hero-image {
  text-align: center;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.features-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.feature-card {
  padding: 2rem 1rem;
  height: 100%;
  transition: transform 0.3s ease;
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

.services-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
  background: #f8f9fa;
}

.about-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1976d2;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.about-image {
  margin-top: 2rem;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-info-card,
.contact-form-card {
  height: 100%;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-form .q-field {
  margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-actions .q-btn {
    width: 100%;
    margin: 0.5rem 0;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>